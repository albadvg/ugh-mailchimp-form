let pswdInput = document.getElementById('password');
let showPswdBtn = document.getElementById('show');
let eyeIcon = document.getElementById('eye-icon')

showPswdBtn.addEventListener('click', showHidePswd);


function showHidePswd() {
    if(pswdInput.getAttribute('type') === 'password') {
        pswdInput.setAttribute('type', 'text');
        showPswdBtn.innerHTML = 'Hide';
        eyeIcon.setAttribute('src', './img/hide.png')
    } else {
        pswdInput.setAttribute('type', 'password');
        showPswdBtn.innerHTML = 'Show';
        eyeIcon.setAttribute('src', './img/show.png')
    }
}
