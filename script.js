document.querySelector('.copy').addEventListener('click', () => {
    const address = "EQCIdIG9jBh...PtXchqv";
    navigator.clipboard.writeText(address).then(() => {
        alert('Address copied to clipboard!');
    });
});

document.querySelector('.set-amount').addEventListener('click', () => {
    const amount = prompt('Enter the amount:');
    if (amount) {
        alert(`Amount set to ${amount} TON`);
    }
});

document.querySelector('.share').addEventListener('click', () => {
    alert('Share functionality not implemented yet.');
});
