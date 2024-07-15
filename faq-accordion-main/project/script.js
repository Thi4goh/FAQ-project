var answer = document.querySelectorAll('p');
var buttons = document.querySelectorAll('.btn');

buttons.forEach((btn, i) => {
    btn.addEventListener('click', function clicar() {
        if (answer[i].style.display === 'none' || !answer[i].style.display) {
            btn.setAttribute('src', 'assets/images/icon-minus.svg');
            answer[i].style.display = 'block';
        } else {
            btn.setAttribute('src', 'assets/images/icon-plus.svg');
            answer[i].style.display = 'none';
        }
    });
});



