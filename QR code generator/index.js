import sanitizeInput from './sanitize.js';

// DOM elements
const inputEl = document.querySelector('.linkInput');
const qrEl = document.querySelector('.qr');
const imageBoxEl = document.querySelector('.imageBox');
const generateEl = document.getElementById('generate');

// Function to generate QR Code
const generateQRCode = () => {
    // Sanitize user input
    const link = sanitizeInput(inputEl.value.trim());
    if (!link) {
        inputEl.classList.add('shake')
        setTimeout(()=>{
            inputEl.classList.remove('shake')
        },1000)
        console.error("Input cannot be empty or invalid!");
        return
    }

    // Generate the QR code URL
    const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(link)}`;

    // Set the QR image source
    qrEl.src = qrApiUrl;
    imageBoxEl.classList.add('showCode')
    console.log(`QR Code generated for: ${link}`);
};

// Add event listener for the "Generate" button
generateEl.addEventListener('click', generateQRCode);
