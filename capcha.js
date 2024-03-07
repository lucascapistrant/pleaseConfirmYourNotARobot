const startCheckBox = document.getElementById('checkBox');

startCheckBox.addEventListener("click", startGame);

function startGame() {
    lvl1();
}

function lvl1() {
    const imgs = document.querySelectorAll('.img-wrapper');
    imgs.forEach(img => {
        img.addEventListener("click", () => {
            if(img.classList.contains('picBox__img-selected')) {
                img.classList.remove('picBox__img-selected')
            } else img.classList.add('picBox__img-selected');
        })
    })
}

lvl1();