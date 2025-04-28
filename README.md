**Hand Gesture Recognition**

This project is a real-time hand gesture recognition web app.  
It uses **Flask** to create a lightweight server and display a live webcam feed in the browser. The hand detection and tracking are done using **MediaPipe**, while an **SVM (Support Vector Machine)** model, trained earlier, is used to recognize the gestures based on the hand landmarks.  
The video stream is processed frame by frame, landmarks are extracted and normalized, and predictions are displayed live directly on the video.

The goal of this project was to combine computer vision with machine learning into a simple, functional application.

**Technologies used** 
Python, Flask, OpenCV, MediaPipe, scikit-learn.
