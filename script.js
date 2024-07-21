function generateQRCode() {
    const data = document.getElementById('dataInput').value;
    const canvas = document.getElementById('qrCodeCanvas');
    const qr = new QRious({
        element: canvas,
        value: data,
        size: 200,
        background: 'white',
        foreground: getRandomColor()
    });
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
