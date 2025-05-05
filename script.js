function emojiClicked(emoji) {
    const messageDiv = document.getElementById("message");

    // Show a message after emoji clicked
    if (emoji === '😊') {
        messageDiv.textContent = "Aww, I miss you too! 😭";
        messageDiv.style.display = "block";
    } else if (emoji === '😢') {
        messageDiv.textContent = "You're making me emotional! 😭";
        messageDiv.style.display = "block";
    } else if (emoji === '❤️') {
        messageDiv.textContent = "❤️ I miss you soooo much!! ❤️";
        messageDiv.style.display = "block";
    }
}
