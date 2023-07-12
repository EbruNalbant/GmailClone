//HTML'den gelenler
const hamburgerMenu = document.querySelector(".menu");
const navigation = document.querySelector("nav");

//Olay izleyicileri
hamburgerMenu.addEventListener("click", handleMenu);

//Navigasyonu açma/kapamaya yarayan fonksiyon
//Hamburger menüsüne tıklanınca çalışır
function handleMenu() {

    //classlist.toggle() parametre olarak verilen class yoksa ekler, varsa çıkarır. 
    navigation.classList.toggle("hide");
}