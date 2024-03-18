function sendChatRequest() {
    const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
    const userInput = document.getElementById('user_input').value;
    fetch('/chatbot/', {  // Replace with your actual URL pattern
        method: 'POST',
        body: JSON.stringify({ user_input: userInput }),
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrftoken
        }
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('chatbot_response').innerText = data.response;
    })
    .catch(error => console.error(error));
}
