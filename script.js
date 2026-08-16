function disparar() {
    const kurumi = document.getElementById('kurumi');
    kurumi.classList.add('animar');

    setTimeout(() => {
        document.getElementById('mensaje').style.display = 'block';
    }, 1000); // 1000 milisegundos = 1 segundo
}