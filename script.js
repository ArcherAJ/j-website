function emojiClicked(emoji) {
    const messageDiv = document.getElementById("message");

    // Show a message after emoji clicked
    if (emoji === '😊') {
        messageDiv.textContent = "MISS YOU MACHANNN!!! 😭";
        messageDiv.style.display = "block";
    } else if (emoji === '😢') {
        messageDiv.textContent = "IT WORKED!😭";
        messageDiv.style.display = "block";
    } else if (emoji === '❤️') {
        messageDiv.textContent = "❤️ I love you soooo much!! ❤️";
        messageDiv.style.display = "block";
    }
}
