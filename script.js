//! importlar (diğer js dosyasından gelen değişkenler ve fonksiyonlar)
import { months } from "./constants.js";
import { renderMails, showModal } from "./ui.js";

// localstorage'dan veri alma
const strMailData = localStorage.getItem("data");

const mailData = JSON.parse(strMailData);

//! HTML'den gelenler
const hamburgerMenu = document.querySelector(".menu");
const navigation = document.querySelector("nav");
const mailsArea = document.querySelector(".mails-area");
const createMailBtn = document.querySelector(".create-mail");
const closeMailBtn = document.querySelector("#close-btn");
const modal = document.querySelector(".modal-wrapper");
const form = document.querySelector("#create-mail-form");
//! Olay izleyicileri
//ekran yüklendiğinde, anında çalışır
document.addEventListener("DOMContentLoaded", () =>
    renderMails(mailsArea, mailData)
);

hamburgerMenu.addEventListener("click", handleMenu);
//modal işlemleri
createMailBtn.addEventListener("click", () => showModal(modal, true));
closeMailBtn.addEventListener("click", () => showModal(modal, false));
form.addEventListener("submit", sendMail);

//!Fonksiyonlar
// Navigasyonu açma/kapamaya yarayan fonksiyon
// Hamburger menüsüne tıklanınca çalışır
function handleMenu() {

    // classlist.toggle() parametre olarak verilen class yoksa ekler, varsa çıkarır. 
    navigation.classList.toggle("hide");
}

//maillerin tarihini alma
function getDate() {
    const dateArr = new Date().toLocaleDateString().split('.');
    const day = dateArr[0];
    const monthNumber = dateArr[1];
    const month = months[monthNumber - 1];
    return [month, day].join(" ");
}

function sendMail(e) {
    e.preventDefault();

    // formun içerisinde yer alan inputların değerlerine erişme
    const receiver = e.target[0].value;
    const title = e.target[1].value;
    const message = e.target[2].value;

    //yeni mail objesi
    const newMail = {
        id: new Date().getTime(),
        sender: "Ebru",
        receiver,
        title,
        message,
        date: getDate(),
    }

    //yeni maillerin dizinin başına eklenmesi
    mailData.unshift(newMail);

    //veritabanını (localstorage) güncelleme
    const strData = JSON.stringify(mailData);
    localStorage.setItem("data", strData);

    //ekranın güncellenmesi
    renderMails(mailsArea, mailData);

    //modalın kapatılması
    showModal(modal, false);

    //modali temizleme
    e.target[0].value = " ";
    e.target[1].value = " ";
    e.target[2].value = " ";
}