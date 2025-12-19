const container = document.querySelector('.container');
const lateral = document.getElementById('container-lateral');

lateral.addEventListener('mouseenter', () => {
    container.classList.toggle('active');
});
