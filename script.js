function mostrarMensaje() {
    const globo = document.getElementById('globo');
    
    // Muestra u oculta el mensaje al hacer clic sobre la chica
    globo.classList.toggle('oculto');
    globo.classList.toggle('visible');
}