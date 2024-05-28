function showInfo(event, message) {
    event.preventDefault();
    const infoBox = document.getElementById('info-box');
    infoBox.innerHTML = message;
    infoBox.style.display = 'block';
}