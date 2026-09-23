document.addEventListener('DOMContentLoaded', () => {
    // Menu Mobile - Faz o botão de sanduíche abrir e fechar as opções
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Fecha o menu automaticamente quando clica em algum link (útil no celular)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    // Pega o ano atual para manter os direitos autorais no rodapé sempre atualizados
    const yearSpan = document.getElementById('year');
    if(yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});
