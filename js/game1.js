
(function() {
    'use strict';

    // Kişisel skin uygulama
    function applyCustomSkin(skinUrl) {
        const wormElement = document.querySelector('.worm');
        if (wormElement) {
            wormElement.style.backgroundImage = `url(${skinUrl})`;
        }
    }

    // Zoom fonksiyonu
    function enableZoom(zoomLevel) {
        document.body.style.zoom = zoomLevel;
    }

    // Şeker boyutunu değiştirme
    function adjustCandySize(size) {
        const candies = document.querySelectorAll('.candy');
        candies.forEach(candy => {
            candy.style.width = `${size}px`;
            candy.style.height = `${size}px`;
        });
    }

    // Yere özel fotoğraf ekleme
    function addCustomImage(imageUrl) {
        const gameArea = document.querySelector('.game-area');
        if (gameArea) {
            const img = document.createElement('img');
            img.src = imageUrl;
            img.style.position = 'absolute';
            img.style.top = '50%';
            img.style.left = '50%';
            img.style.transform = 'translate(-50%, -50%)';
            img.style.zInd
