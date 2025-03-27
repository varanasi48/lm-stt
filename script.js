document.addEventListener("DOMContentLoaded", () => {
    const textArea = document.getElementById("textArea");
    const startSTTButton = document.getElementById("startSTT");
    const stopSTTButton = document.getElementById("stopSTT");
    const generateDocButton = document.getElementById("generateDoc");
    const cameraInput = document.getElementById("cameraInput");
    const imageInput = document.getElementById("imageInput");
    const scannerInput = document.getElementById("scannerInput");

    let recognition;
    if ('webkitSpeechRecognition' in window) {
        recognition = new webkitSpeechRecognition();
        recognition.continuous = true;
        recognition.interimResults = false;

        recognition.onresult = (event) => {
            for (let i = event.resultIndex; i < event.results.length; i++) {
                if (event.results[i].isFinal) {
                    textArea.value += "\n- " + event.results[i][0].transcript;
                }
            }
        };
    }

    startSTTButton.addEventListener("click", () => {
        if (recognition) {
            recognition.start();
        }
    });

    stopSTTButton.addEventListener("click", () => {
        if (recognition) {
            recognition.stop();
        }
    });

    function performOCR(file) {
        if (file) {
            const reader = new FileReader();
            reader.onload = function () {
                Tesseract.recognize(reader.result, 'eng')
                    .then(({ data: { text } }) => {
                        textArea.value += "\n- " + text;
                    });
            };
            reader.readAsDataURL(file);
        }
    }

    cameraInput.addEventListener("change", (event) => {
        performOCR(event.target.files[0]);
    });

    imageInput.addEventListener("change", (event) => {
        performOCR(event.target.files[0]);
    });

    scannerInput.addEventListener("change", (event) => {
        performOCR(event.target.files[0]);
    });

    generateDocButton.addEventListener("click", () => {
        const doc = new docx.Document({
            sections: [{
                properties: {},
                children: [
                    new docx.Paragraph({
                        text: textArea.value,
                        bullet: { level: 0 },
                    })
                ],
            }],
        });
        docx.Packer.toBlob(doc).then((blob) => {
            const link = document.createElement("a");
            link.href = URL.createObjectURL(blob);
            link.download = "extracted_text.docx";
            link.click();
        });
    });
});
