let toggleBtn = document.querySelector('.header__toggle-btn');

toggleBtn.addEventListener('click', function(e) {
    e.target.parentElement.classList.toggle('switch');
    document.querySelector('body').classList.toggle('light-theme');
})