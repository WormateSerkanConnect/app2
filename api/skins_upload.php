<!DOCTYPE html>
<html>
<head>
    <title>Skin Upload</title>
    <style>
        @import url("https://haylamday.com/css/font.css");
   body{ font-family: vuonghiep;
    font-size: 16px;
}
#imagePreview{width: 50%;display:none;}

#fileInput {
    height: 35px;
    margin-left: 2px;
    width: 225px;
    padding: 2px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f9f9f9;
    box-sizing: border-box;
    outline: none;
    font-size: 16px;
    margin-right: 10px;
    font-family: vuonghiep;
}

#fileInput:hover {
    border-color: #aaa; 
}

#fileInput:focus {
    border-color: dodgerblue; 
}

input[type="submit" i] {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-weight: 600;
}
.skins{font-weight: bold;line-height: 2;}


#uploadSuccessMessage {
            display: none;
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
 #cliente_ID {height: 30px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-family: vuonghiep;
    width: 195px;
    margin-left: 8px;
 }

 
 #upload {
    font-family: vuonghiep;
    padding: 6px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-weight: 600;
    float: right;
    margin-right: -62px;
    transition: background-color 0.3s, color 0.3s, transform 0.3s;
}

#upload:hover {
    background-color: #4CAF50;
    color: white;
    cursor: pointer;
    transform: scale(1.05);
}
 
 
 
 #uploadSuccessMessage{display: none; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background-color: #4CAF50; color: white; padding: 15px; border-radius: 10px; z-index: 9999;}
 
 
 
 
    </style>

</head>
<body>
 <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />  
 
 <div id="skinInfo">
            <img id="imagePreview"/>
           
 <div class="vietnam" style="display: grid !important; grid-template-columns: 1fr 1fr 1fr 1fr;">
        <div class="skins"><i class="fa fa-cloud-upload" style="color: #0056b3;font-size:19px"></i> Skin :</div>
        
        <input type="file" id="fileInput" accept=".json">

 
         <form action="/api/skins_upload.php" method="post">
        <input type="text" id="cliente_ID" name="cliente_ID" placeholder="
Enter ID" required>

        <input style="display: none;" type="text" id="texture" name="texture" required>
        <input style="display:none" type="text" id="name" name="name" required>
        <textarea style="display: none;" id="glow" name="glow" rows="4" cols="50" required></textarea>
        <div style="display: none" id="fileNameDisplay"></div>
        <input id="upload" type="submit" value="Upload">
    </form>
    </div>
    

<script>
// Gắn sự kiện change vào input type file
document.getElementById('fileInput').addEventListener('change', handleFileUpload);

// Lấy dữ liệu lưu trữ từ localStorage
function getSavedFileData() {
    const fileData = localStorage.getItem('fileData');
    return fileData ? JSON.parse(fileData) : {};
}

// Lưu tên tệp và thời gian tải lên vào localStorage
function saveFileData(fileName) {
    const fileData = getSavedFileData();
    fileData[fileName] = Date.now(); // Lưu thời gian hiện tại (millisecond)
    localStorage.setItem('fileData', JSON.stringify(fileData));
}

// Kiểm tra nếu tệp đã được tải lên trong vòng 5 phút
function isFileAllowedToUpload(fileName) {
    const fileData = getSavedFileData();
    const lastUploadTime = fileData[fileName];
    const currentTime = Date.now();
    const fiveMinutes = 5 * 60 * 1000; // 5 phút = 5 * 60 * 1000 milliseconds

    if (lastUploadTime) {
        // Nếu tệp đã được tải lên và thời gian trôi qua chưa đủ 5 phút
        return (currentTime - lastUploadTime) >= fiveMinutes;
    }
    return true; // Nếu tệp chưa được tải lên, cho phép tải lên
}

function handleFileUpload() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];
    if (file) {
        const fileName = file.name; // Lấy tên tệp
        // Kiểm tra xem tệp đã được tải lên chưa
        if (!isFileAllowedToUpload(fileName)) {
            alert('Tệp tin đã tồn tại. Vui lòng tải lên lại sau 5 phút!');
            return;
        }

        const reader = new FileReader();
        reader.onload = function(e) {
            try {
                const data = JSON.parse(e.target.result);

                let imageDataURI, glowInfo;

                // Lấy thông tin từ JSON
                if (data && data.skins && Array.isArray(data.skins) && data.skins.length > 0) {
                    const skinData = data.skins[0];
                    imageDataURI = skinData.file;
                    glowInfo = skinData.glow;
                }

                // Lưu tệp tin và thời gian tải lên vào localStorage
                saveFileData(fileName);

                // Tiến hành các bước tiếp theo, chẳng hạn tải hình ảnh lên Imgur
                const base64Data = imageDataURI.split(',')[1];

                // Tải hình ảnh lên Imgur
                uploadImageToImgur(base64Data);

                // Hiển thị 'glow' thông tin
                document.getElementById('glow').value = `"${glowInfo.join('","')}"`;

                // Tạo và thêm phần tử chứa tên tệp
                const fileNameDisplay = document.getElementById('fileNameDisplay');
                fileNameDisplay.textContent = `File Name: ${fileName}`;

                // Hiển thị hình ảnh preview từ data URI
                const imagePreview = document.getElementById('imagePreview');
                imagePreview.src = imageDataURI;
                imagePreview.style.display = 'none'; // Hiển thị ảnh xem trước

                // Hiển thị nút để tải xuống hình ảnh
                document.getElementById('downloadImageBtn').style.display = 'inline-block';

                // Hiển thị nút sao chép Glow và nút tải xuống hình ảnh
                document.getElementById('copyGlowBtn').style.display = 'inline-block';
                document.getElementById('downloadImageBtn').style.display = 'inline-block';
            } catch (error) {
                console.error('Lỗi khi parse JSON:', error);
            }
        };
        reader.readAsText(file);
    }
}

// Function to upload image to Imgur
function uploadImageToImgur(base64Image) {
    const clientId = '00c34b85d180b51'; // Thay YOUR_IMGUR_CLIENT_ID bằng clientId của bạn từ Imgur
    fetch('https://api.imgur.com/3/image', {
        method: 'POST',
        headers: {
            'Authorization': `Client-ID ${clientId}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            image: base64Image,
            type: 'base64'
        })
    }).then(response => response.json()).then(data => {
        const imageUrl = data.data.link;
        // Đặt link ảnh từ Imgur vào input texture
        document.getElementById('texture').value = imageUrl;
        // Hiển thị hình ảnh preview từ Imgur
        const imagePreview = document.getElementById('imagePreview');
        imagePreview.src = imageUrl;
        // Hiển thị nút để tải xuống hình ảnh
        document.getElementById('downloadImageBtn').style.display = 'inline-block';
    }).catch(error => {
        console.error('Lỗi khi tải lên hình ảnh lên Imgur:', error);
    });
}

// Hàm để lưu và lấy mã ID từ localStorage
document.addEventListener('DOMContentLoaded', function() {
    const clienteIDInput = document.getElementById('cliente_ID');
    const savedClienteID = localStorage.getItem('savedClienteID');
    if (savedClienteID) {
        clienteIDInput.value = savedClienteID;
    }

    // Lắng nghe sự kiện input để lưu mã ID vào localStorage khi người dùng thay đổi
    clienteIDInput.addEventListener('input', function() {
        localStorage.setItem('savedClienteID', clienteIDInput.value);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const nameInput = document.getElementById('name');
    if (nameInput) {
        nameInput.value = generateRandomSkinName();
    }
});

function generateRandomSkinName() {
    const randomWords = ['dragon', 'fire', 'ice', 'thunder', 'shadow', 'phoenix', 'spirit', 'storm', 'slaze', 'frost', 'star', 'moon', 'sun', 'galaxy', 'nebula'];
    const adjective = randomWords[Math.floor(Math.random() * randomWords.length)];
    const number = Math.floor(Math.random() * 1000); // Số ngẫu nhiên từ 0 đến 999
    const name = `${adjective.replace(/\s+/g, '')}_${number}`; // Xóa khoảng trắng và thêm dấu _ sau tên ngẫu nhiên
    return name;
}

</script>

        




</body>
</html>
