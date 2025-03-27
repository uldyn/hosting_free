const messages = [
    "Jesteś pewna?",
    "Na pewno??",
    "Serio?",
    "Proszę...",
    "Pomyśl o tym!",
    "Jeżeli powiesz nie, to będę smutny...",
    "Bardzo smutny...",
    "Strasznie bardzo smutny...",
    "Oke, już nie pytam...",
    "Żartowałem, powiedz tak proszę! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}