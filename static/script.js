document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.getElementById('start-btn');
    const predictionText = document.getElementById('prediction-text');
    let modelRunning = false;

    startBtn.addEventListener('click', () => {
        if (!modelRunning) {
            modelRunning = true;

            // Change button state
            startBtn.disabled = true;
            startBtn.textContent = "🧠 Model Running...";
            startBtn.classList.add('disabled');

            // Update prediction text
            predictionText.textContent = "Analyzing... Please show your hand ✋";

            // Optional: if you have a backend call to activate something (e.g., /start_model), you could add:
            // fetch('/start_model')
            //     .then(response => response.json())
            //     .then(data => {
            //         predictionText.textContent = data.prediction || "Waiting for result...";
            //     })
            //     .catch(error => {
            //         predictionText.textContent = "Error starting model.";
            //         console.error('Error:', error);
            //     });
        }
    });

    // Optional: Simulate prediction update every few seconds (for testing UI)
    // setInterval(() => {
    //     if (modelRunning) {
    //         const gestures = ['Peace ✌️', 'Thumbs Up 👍', 'Fist ✊', 'Palm 🖐️'];
    //         const randomGesture = gestures[Math.floor(Math.random() * gestures.length)];
    //         predictionText.textContent = `Detected: ${randomGesture}`;
    //     }
    // }, 3000);
});
