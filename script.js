const qrCodeElement = document.getElementById('qr-code');
const amountDisplay = document.getElementById('amount-display');
const amountInput = document.getElementById('amount');

const setAmount = () => {
    const amount = amountInput.value;
    if (amount) {
        const dollarPrice = 7.3199; // Example rate of 1 TON to USD
        const total = amount * dollarPrice;
        amountDisplay.innerHTML = `${amount} TON ≈ $${total.toFixed(2)} <button onclick="removeAmount()">❌</button>`;
        updateQRCode(amount);
    }
};

const removeAmount = () => {
    amountDisplay.innerHTML = '';
    amountInput.value = '';
    updateQRCode();
};

const updateQRCode = (amount) => {
    const baseUrl = "EQCIdIG9jBhpwvT_nSALbsn3bKUoLKWVnFRZqMWvlPtxchqv"; // Replace with your base QR code URL
    let url = baseUrl;
    if (amount) {
        url += `?amount=${amount}`;
    }
    qrCodeElement.innerHTML = '';
    new QRCode(qrCodeElement, {
        text: url,
        width: 200,
        height: 200
    });
};

const copyToClipboard = () => {
    const text = qrCodeElement.innerHTML;
    navigator.clipboard.writeText(text).then(() => {
        alert("Copied to clipboard!");
    });
};

const share = () => {
    if (navigator.share) {
        navigator.share({
            title: 'Receive TON',
            text: 'Send TON to this address:',
            url: window.location.href
        }).then(() => {
            console.log('Successful share');
        }).catch((error) => {
            console.log('Error sharing', error);
        });
    } else {
        alert("Share not supported on this browser");
    }
};

updateQRCode();
