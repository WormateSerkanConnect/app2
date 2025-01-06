(function() {
    let zoomLevel = 1; // Başlangıç zoom seviyesi
    const zoomMin = 0.5, zoomMax = 2; // Zoom sınırları

    document.addEventListener("wheel", function(event) {
        event.preventDefault(); // Sayfanın kaymasını engelle
        
        let zoomFactor = event.deltaY > 0 ? 0.9 : 1.1; // Tekerlek yukarı: büyüt, aşağı: küçült
        zoomLevel = Math.min(Math.max(zoomLevel * zoomFactor, zoomMin), zoomMax); // Sınırları aşma

        let canvas = document.querySelector("canvas");
        if (canvas) {
            canvas.style.transform = `scale(${zoomLevel})`;
            canvas.style.transformOrigin = "center center"; // Ortadan büyüt/küçült
        }
    });
})();
