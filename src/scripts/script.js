const btnOpen = document.querySelector('#btn-open');
const btnClose = document.querySelector('#btn-close');
const panel = document.querySelector('#panel');
const overlay = document.querySelector('#overlay');

btnOpen.addEventListener('click', () => {
    if (btnOpen) {
        panel.classList.remove('hidden');
        overlay.classList.remove('hidden');
        btnOpen.classList.add('hidden');
        btnClose.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
})
btnClose.addEventListener('click', () => {
    if (btnClose) {
        panel.classList.add('hidden');
        overlay.classList.add('hidden');
        btnOpen.classList.remove('hidden');
        btnClose.classList.add('hidden');
        document.body.style.overflow = '';
    }
})