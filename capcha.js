const lvl1Images = ['dog1.png', 'dog2.png', '3.png', 'dog4.png', 'dog5.png', 'dog6.png', '7.png', '8.png', '9.png', 'dog10.png', 'dog11.png', '12.png', 'dog13.png', 'dog14.png', '15.png', 'dog16.png', '17.png', '18.png', 'dog19.png'];


const startCheckBox = document.getElementById('checkBox');

startCheckBox.addEventListener("click", startGame);

function pickRandomFromArray(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

function startGame() {
    lvl1();
}

function lvl1() {
    const level = document.getElementById('lvl1');
    level.style.display = 'flex';

    let usedImg = [];

    function newImg() {
      let img;
      do {
        img = pickRandomFromArray(lvl1Images);
      } while (usedImg.includes(img));
    
      usedImg.push(img);
      return img;
    }

    function isDog(img) {
        imgName = String(img.src)
        return imgName.includes('dog');
    }
    
    const imgBox = document.getElementById('lvl1__picBody');

    for(let i = 0; i < imgBox.children.length; i++) {
        const img = document.createElement('img');
        // fix img path when added to website
        img.src = `pleaseconfirmyournotarobot/lvl1/${newImg()}`;
        isDog(img) ? img.setAttribute('isdog', 'dog'): img.setAttribute('isdog', 'notdog');
        img.classList.add('picBox__img');
        imgBox.children[i].appendChild(img);
    }

    const imgs = document.querySelectorAll('.img-wrapper');
    imgs.forEach(img => {
        img.addEventListener("click", () => {
            if(img.classList.contains('picBox__img-selected')) {
                img.classList.remove('picBox__img-selected')
            } else img.classList.add('picBox__img-selected');
        })
    })

    const verifyBtn = document.getElementById('lvl1-verify');
    verifyBtn.addEventListener("click", () => {
        if(checkAnswer()) {
            endLvl1();
            lvl2();
        } else {
            endLvl1();
            lvl1();
        }
    })

    function checkAnswer() {
        let output = true;
        imgs.forEach(img => {
            if(img.children[1].getAttribute('isdog') === 'dog' && !img.classList.contains('picBox__img-selected')) {
                output = false;
            } else if(img.children[1].getAttribute('isdog') === 'notdog' && img.classList.contains('picBox__img-selected')) {
                output = false;
            }
        })
        return output;
    }

    function endLvl1() {
        level.style.display = 'none';
        imgs.forEach(img => {
            img.removeChild(img.children[1]);
        })
    }
}

lvl1();