let can, cont;
window.onload = function() {
    can = document.querySelector("canvas");
    cont = can.getContext("2d");
}

function rysujTlo() {
    cont.clearRect(0, 0, can.width, can.height);
    // Rysowanie nieba
    cont.fillStyle = "#87CEEB";
    cont.fillRect(0, 0, can.width, can.height / 2);
    // Rysowanie trawy
    cont.fillStyle = "#32CD32";
    cont.fillRect(0, can.height / 2, can.width, can.height / 2);
}

function rysujHotel() {
    // Rysowanie budynku hotelu
    cont.fillStyle = "#8B4513";
    cont.fillRect(can.width / 2 - 50, can.height / 2 - 50, 100, 100);
    // Rysowanie drzwi
    cont.fillStyle = "#654321";
    cont.fillRect(can.width / 2 - 15, can.height / 2 + 10, 30, 40);
    // Rysowanie okien
    cont.fillStyle = "#FFFFE0";
    cont.fillRect(can.width / 2 - 40, can.height / 2 - 30, 20, 20);
    cont.fillRect(can.width / 2 + 20, can.height / 2 - 30, 20, 20);
}

function rysujGwiazdy() {
    // Rysowanie gwiazd nad hotelem
    const starX = [can.width / 2 - 30, can.width / 2, can.width / 2 + 30];
    const starY = can.height / 2 - 70;

    cont.fillStyle = "#FFD700";
    starX.forEach(x => {
        cont.beginPath();
        cont.moveTo(x, starY);
        cont.lineTo(x + 5, starY + 15);
        cont.lineTo(x - 10, starY + 6);
        cont.lineTo(x + 10, starY + 6);
        cont.lineTo(x - 5, starY + 15);
        cont.closePath();
        cont.fill();
    });
}

function rysujNapis() {
    // Rysowanie napisu "Hotel RESET" na trawie
    cont.fillStyle = "black";
    cont.font = "30px Arial";
    cont.textAlign = "center";
    cont.fillText("Hotel RESET", can.width / 2, can.height - 30);
}

function czysc() {
    cont.clearRect(0, 0, can.width, can.height);
}