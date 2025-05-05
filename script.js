function emojiClicked(emoji) {
    const messageDiv = document.getElementById("message");

    // Show a message after emoji clicked
    if (emoji === '😊') {
        messageDiv.textContent = "MISS YOU MACHAN!!! 😭";
        messageDiv.style.display = "block";
    } else if (emoji === '😢') {
        messageDiv.textContent = "IT WORKED! 😭";
        messageDiv.style.display = "block";
    } else if (emoji === '❤️') {
        messageDiv.textContent = "❤️ I like you soooo much SHEJITHEYYY!! ❤️";
        messageDiv.style.display = "block";
    }
}
