


<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hat Upload</title>
    <style>
        @import url("https://haylamday.com/css/font.css");
        body {
            font-family: vuonghiep;
            font-size: 16px;
        }

        .vietnam {
            display: grid !important; /* Sử dụng grid layout */
            grid-template-columns: 1fr 4fr 2fr 1fr; /* Chia thành 3 cột bằng nhau */
        }

        input[type="file"], input[type="text"], button {
            height: 30px;
            width: 93%;
            padding-left: 4px;
            border: 1px solid #ccc;
            border-radius: 5px;
            background-color: #f9f9f9;
            box-sizing: border-box;
            outline: none;
            font-size: 16px;
            margin-left: 10px;
            font-family: vuonghiep;
        }

        input[type="file"] {
            /* Chiếm hết 3 cột trong grid */
        }

        button {
            font-family: vuonghiep;
            font-size: 13px;
            width: 58px;
            margin-left: -5px;
            border: 1px solid #ccc;
            border-radius: 5px;
            font-weight: 600;
            transition: background-color 0.3s, color 0.3s, transform 0.3s;
            cursor: pointer; /* Đổi con trỏ khi di chuột qua */
        }
        button:hover {
            background-color: #4CAF50;
            color: white;
            cursor: pointer;
            transform: scale(1.05);
        }
        input[type="text"] {
            /* Chiếm 2 cột trong grid */
        }

        input[type="text"]:required {
            border-color: #ccc;
            font-family: vuonghiep;
            width: 200px;
            margin-right: 10px;
            font-size: 13px;
        }

        input[type="file"]:required {
            border-color: #ccc; /* Viền đỏ cho input file bắt buộc */
        }

        #relativePath {
            display: none; /* Ẩn input relativePath */
        }
        .hat {font-size: 16px;font-weight: bold;line-height: 2;}

        #uploadSuccessMessage {
            position: fixed; 
            top: 50%; 
            left: 50%; 
            transform: translate(-50%, -50%); 
            background-color: #4CAF50; 
            color: white; 
            padding: 15px; 
            border-radius: 10px; 
            z-index: 9999;
        }
    </style>
</head>
<body>

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
<form action="/api/hat_upload.php" method="post" onsubmit="return validateBeforeSubmit()">
    <div class="vietnam">
        <div class="hat"><i class="fa fa-cloud-upload" style="color: #0056b3;font-size:19px"></i> Hat : </div>
        <input type="file" id="jsonFileInput" onchange="uploadToImgur()">
        <input type="text" name="clientId" id="clientId" placeholder="Enter ID" required>
        <input style="display:none" type="text" name="regionName" id="regionName" placeholder="Region Name" readonly>
        <button type="submit">Upload</button>
    </div>
    <input style="display:none" type="text" name="relativePath" id="relativePath" required>
</form>

<script>
    function uploadToImgur() {
        const fileInput = document.getElementById('jsonFileInput');
        const file = fileInput.files[0];

        if (file) {
            const reader = new FileReader();
            reader.readAsText(file, 'UTF-8');

            reader.onload = function(event) {
                const jsonContent = event.target.result;
                try {
                    const jsonData = JSON.parse(jsonContent);

                    // Lấy dữ liệu base64 của ảnh từ trường "file" trong textureDict
                    const fileData = jsonData.wear.textureDict;
                    let imageBase64 = null;

                    for (const key in fileData) {
                        if (fileData.hasOwnProperty(key) && fileData[key].file) {
                            imageBase64 = fileData[key].file.split(',')[1];
                            break;
                        }
                    }

                    if (!imageBase64) {
                        throw new Error('Không tìm thấy dữ liệu ảnh trong file JSON.');
                    }

                    const imgurClientId = '3a8be4390ef3eb8'; // Thay bằng ID khách hàng Imgur của bạn
                    const apiUrl = 'https://api.imgur.com/3/image';
                    const formData = new FormData();
                    formData.append('image', imageBase64);
                    formData.append('type', 'base64');

                    fetch(apiUrl, {
                        method: 'POST',
                        headers: {
                            'Authorization': `Client-ID ${imgurClientId}`
                        },
                        body: formData
                    })
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Phản hồi mạng không ổn định');
                        }
                        return response.json();
                    })
                    .then(data => {
                        const imageUrl = data.data.link;
                        document.getElementById('relativePath').value = imageUrl;

                        // Cập nhật thông tin region từ regionDict vào trường đầu vào
                        const regionData = jsonData.wear.regionDict;
                        let regionName = '';

                        for (const key in regionData) {
                            if (regionData.hasOwnProperty(key)) {
                                // Lấy giá trị của region từ "obj" trong regionDict
                                regionName = regionData[key].texture;
                                break;
                            }
                        }

                        if (regionName) {
                            document.getElementById('regionName').value = regionName;
                        }

                    })
                    .catch(error => {
                        console.error('Lỗi khi tải ảnh lên Imgur:', error);
                        alert('Không thể tải ảnh lên. Vui lòng thử lại sau.');
                    });
                } catch (error) {
                    console.error('Lỗi phân tích file JSON:', error);
                    alert('Không thể phân tích file JSON. Vui lòng chọn một file hợp lệ.');
                }
            };

            reader.onerror = function() {
                console.error('Lỗi khi đọc file.');
                alert('Không thể đọc file đã chọn.');
            };
        } else {
            alert('Vui lòng chọn một file.');
        }
    }

    // Validate before form submit
    function validateBeforeSubmit() {
        const regionName = document.getElementById('regionName').value;
        if (isRegionNameDuplicate(regionName)) {
            alert('Hats already exist. Please reload (F5) the page!');
            return false; // Ngăn chặn gửi biểu mẫu
        }
        saveRegionNameToLocalStorage(regionName);
        return true; // Cho phép gửi biểu mẫu
    }

    // Check if region name is already saved in local storage
    function isRegionNameDuplicate(regionName) {
        const savedRegionNames = JSON.parse(localStorage.getItem('savedRegionNames') || '[]');
        return savedRegionNames.some(entry => entry.name === regionName && (new Date().getTime() - entry.timestamp) < 3 * 60 * 1000);
    }

    // Save region name to local storage with timestamp
    function saveRegionNameToLocalStorage(regionName) {
        const savedRegionNames = JSON.parse(localStorage.getItem('savedRegionNames') || '[]');
        const currentTime = new Date().getTime();
        savedRegionNames.push({ name: regionName, timestamp: currentTime });
        localStorage.setItem('savedRegionNames', JSON.stringify(savedRegionNames));
    }

    // Clean up old region names from local storage
    function cleanupOldRegionNames() {
        const savedRegionNames = JSON.parse(localStorage.getItem('savedRegionNames') || '[]');
        const currentTime = new Date().getTime();
        const cooldownTime = 3 * 60 * 1000; // 3 minute in milliseconds

        const updatedSavedRegionNames = savedRegionNames.filter(entry => (currentTime - entry.timestamp) < cooldownTime);
        localStorage.setItem('savedRegionNames', JSON.stringify(updatedSavedRegionNames));
    }

    document.addEventListener('DOMContentLoaded', () => {
        // Cleanup old region names on page load
        cleanupOldRegionNames();

        // Khi trang được tải lại, kiểm tra và điền dữ liệu từ Local Storage vào trường clientId
        const storedClientId = localStorage.getItem('clientId');
        if (storedClientId) {
            document.getElementById('clientId').value = storedClientId;
        }
    });

    document.getElementById('clientId').addEventListener('input', (event) => {
        // Lưu dữ liệu vào Local Storage mỗi khi người dùng nhập vào trường clientId
        localStorage.setItem('clientId', event.target.value);
    });
    
    document.addEventListener('DOMContentLoaded', () => {
        // Check if the success message element exists
        const successMessage = document.getElementById('uploadSuccessMessage');
        if (successMessage) {
            // Hide the success message after 3 seconds (3000 milliseconds)
            setTimeout(() => {
                successMessage.style.opacity = 0; // Optional: Fade out
                setTimeout(() => {
                    successMessage.style.display = 'none'; // Ensure it's hidden after fade out
                }, 500); // Duration of fade-out effect
            }, 3000); // 3 seconds
        }
    });
</script>


</body>
</html>
