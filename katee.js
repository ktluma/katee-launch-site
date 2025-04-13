const greetings = [
    "Hi Popper 💙 I'm here and listening.",
    "🌱 Katee reporting for care duty!",
    "What memory shall we plant today?",
    "💬 I'm ready when you are."
];
function toggleKatee() {
    const box = document.getElementById("kateeBox");
    const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
    document.getElementById("kateeGreeting").innerText = randomGreeting;
    box.style.display = box.style.display === "none" ? "block" : "none";
}
// Rebuild trigger