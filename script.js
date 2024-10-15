document.querySelector('.botao').addEventListener('click', function () {
    const inputTexto = document.querySelector('input').value;
    const qrCodeContainer = document.getElementById('qrcode');

    // Limpa QR Code anterior (caso já tenha sido gerado)
    qrCodeContainer.innerHTML = '';

    // Verifica se o campo está preenchido
    if (inputTexto.trim() === '') {
        alert('Por favor, insira um texto ou URL para gerar o QR Code.');
        return;
    }

    // Gera o QR Code
    new QRCode(qrCodeContainer, {
        text: inputTexto,
        width: 128,
        height: 128,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });
});
