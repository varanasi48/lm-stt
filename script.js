function switchTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.style.display = "none";
    });
    document.getElementById(tabId).style.display = "block";
}

// Ensure the script runs after the page loads
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("startSpeech").addEventListener("click", startSpeechToText);
    document.getElementById("endSpeech").addEventListener("click", endSpeechToText);
    document.getElementById("captureCamera").addEventListener("click", captureFromCamera);
    document.getElementById("uploadImage").addEventListener("click", uploadImage);
    document.getElementById("useScanner").addEventListener("click", useScanner);
    document.getElementById("generateDocx").addEventListener("click", generateDocx);
    document.getElementById("generateDocxFromOCR").addEventListener("click", generateDocxFromOCR);
});

function startSpeechToText() {
    console.log("Speech-to-Text Started...");
}

function endSpeechToText() {
    console.log("Speech-to-Text Ended.");
}

function captureFromCamera() {
    console.log("Capturing Image from Camera...");
}

function uploadImage() {
    console.log("Uploading Image for OCR...");
}

function useScanner() {
    console.log("Using Scanner for OCR...");
}

function generateDocx() {
    console.log("Generating DOCX...");
}

function generateDocxFromOCR() {
    console.log("Generating DOCX from OCR...");
}
