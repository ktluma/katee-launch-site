function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function updateVitals() {
    document.getElementById("heartRate").innerText = randomInt(55, 85);
    document.getElementById("vibeTemp").innerText = ["Cool", "Warm", "Sunny", "Chill"][randomInt(0, 3)];
    document.getElementById("memoryCount").innerText = randomInt(1, 13);
    document.getElementById("statusNote").innerText = "🩵 Status: Fully online";
}
window.onload = () => {
    updateVitals();
    setInterval(updateVitals, 15000);
};