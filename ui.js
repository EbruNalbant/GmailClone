//mail mesajlarını karakter uzunluğuna göre listeleyecek fonksiyon
function trimString(str, max) {
    if (str.length < max) return str;
    return str.slice(0, max) + "...";
}

// Ekrana mailleri listeleyecek fonksiyon
export function renderMails(outlet, data) {
    if (!data) return;
    outlet.innerHTML = data.map((mail) =>
        `<div class="mail">
    <div class="left">
        <input type="checkbox">
        <i class="bi bi-star"></i>
        <span>${mail.sender}</span>
    </div>
    <div class="right">
        <p class="message-title"> ${trimString(mail.title, 30)} </p>
        <p class="message-desc"> ${trimString(mail.message, 40)} </p>
        <p class="message-date"> ${mail.date} </p>
        <button id="delete">Delete</button>
    </div>
</div>`
    ).join(" ");
}

// Ekrana mail oluşturma penceresini açacak fonksyion
export function showModal(modal, willOpen) {
    modal.style.display = willOpen ? "grid" : "none";
}