// Yukarı Çık Butonunu al
var scrollTopBtn = document.getElementById("scrollTopBtn");

// Kullanıcı kaydırma yapınca butonun görünürlüğünü kontrol et
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
}

// Butona tıklanınca sayfanın en üstüne çık
scrollTopBtn.onclick = function() {
    document.body.scrollTop = 0; // Safari için
    document.documentElement.scrollTop = 0; // Chrome, Firefox, IE ve Opera için
}

// Yüklenme ekranını gizlemek için
window.addEventListener('load', function() {
    var loadingScreen = document.getElementById('loadingScreen');
    loadingScreen.style.display = 'none';
});
