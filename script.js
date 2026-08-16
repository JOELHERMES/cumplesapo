function disparar() {
    const kurumi = document.getElementById('kurumi');
    const globo = document.getElementById('globo');
    const btn = document.getElementById('btn');

    // Inicia animación del sprite
    kurumi.classList.add('animar');

    // Oculta el botón
    btn.style.display = 'none';

    // Al terminar la animación, muestra el bocadillo de cómic
    setTimeout(() => {
        globo.classList.remove('oculto');
        globo.classList.add('visible');
    }, 800);
}