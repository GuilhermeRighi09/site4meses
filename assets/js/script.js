// --- LUZES DE PAZ E CORAÇÕES FLUTUANTES ---
function createPeaceParticle() {
    const particle = document.createElement('div');
    particle.style.position = 'absolute';
    particle.style.zIndex = '0';
    particle.style.pointerEvents = 'none';
    
    // Mistura muito suave para induzir calma
    const elements = ['🤍', '✨', '•'];
    const chosen = elements[Math.floor(Math.random() * elements.length)];
    particle.innerHTML = chosen;
    
    if(chosen === '•') {
        particle.style.color = '#ffffff';
        particle.style.textShadow = '0 0 10px rgba(255,255,255,0.8)';
        particle.style.fontSize = Math.random() * 20 + 20 + 'px';
    } else {
        particle.style.fontSize = Math.random() * 12 + 10 + 'px';
    }
    
    // Nascem embaixo e sobem muito lentamente
    particle.style.left = Math.random() * 100 + 'vw';
    particle.style.bottom = '-50px';
    particle.style.opacity = Math.random() * 0.4 + 0.2; // Opacidade bem leve
    
    const duration = Math.random() * 9000 + 7000; 
    const sway = Math.random() * 60 - 30; 
    
    particle.animate([
        { transform: 'translateY(0) translateX(0)', opacity: 0 },
        { transform: 'translateY(-20vh) translateX(0)', opacity: particle.style.opacity, offset: 0.2 },
        { transform: `translateY(-120vh) translateX(${sway}px)`, opacity: 0 }
    ], {
        duration: duration,
        easing: 'ease-in-out',
        iterations: 1
    }).onfinish = () => particle.remove();

    document.getElementById('peace-particles-container').appendChild(particle);
}

// Criação lenta para criar um ambiente visual de repouso
setInterval(createPeaceParticle, 800);

// --- CONFIGURAÇÃO DO CARROSSEL ---
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 20,
    centeredSlides: true,
    loop: true,
    effect: "fade", // Transição super romântica e relaxante
    fadeEffect: { crossFade: true },
    autoplay: {
        delay: 4500, // Tempo de espera maior para ela admirar cada foto
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }
});