const contact = document.querySelector('#button');
const inputArea = document.querySelector('#inputArea');
const rightPartText = document.querySelector('.rightPart h1');
const rightPartPhoto = document.querySelector('.rightPart img');
const blackBackground = document.querySelector('.blackBackground');
const main = document.querySelector('main');
const nav = document.querySelector('header');
const link = document.querySelector('.links a');
const logo = document.querySelector('.logo svg ');
let num=0;
contact.onclick = () => {
    num++;
    if (num % 2 === 1||num===0) {
        inputArea.style.display = 'flex';
        nav.style.animation = "MoveDownUP 3.5s reverse forwards";
        rightPartText.style.animation = 'MoveUpDown 0.75s ease-out reverse forwards';
        rightPartPhoto.style.animation = 'MoveUpDown 0.75s ease-out reverse forwards';
        blackBackground.style.display = 'block';
        blackBackground.style.animation = 'leftToRight 5s forwards';
        blackBackground.style.zIndex = '3';
        setTimeout(() => {
            contact.innerHTML="Home";
            rightPartText.style.animation = 'transparent 1.5s ease-out forwards';
            rightPartPhoto.style.animation = 'transparent 1.5s ease-out forwards';
            nav.style.animation = "transparent 1.75s forwards";
            main.style.flexDirection = 'row-reverse';
            inputArea.style.display = 'flex';

            link.style.color = 'white';
            if (window.screen.width<640){
                link.style.color = 'black';
            }
            contact.style.color = 'black';
            logo.style.fill = 'white';

        }, 2500);
    } else {

        nav.style.animation = "MoveDownUP 3.5s reverse forwards";
        rightPartText.style.animation = 'MoveUpDown 0.75s ease-out reverse forwards';
        rightPartPhoto.style.animation = 'MoveUpDown 0.75s ease-out reverse forwards';

        blackBackground.style.animation = 'leftToRight1 5s forwards ease-out';

        blackBackground.style.zIndex = '3';

        setTimeout(() => {
            contact.innerHTML="Contact";
            rightPartText.style.animation = 'transparent 1.5s ease-out forwards';
            rightPartPhoto.style.animation = 'transparent 1.5s ease-out forwards';
            nav.style.animation = "transparent 1.75s forwards";
            main.style.flexDirection = 'row';
            inputArea.style.display = 'none';

            link.style.color = 'black';
            if (window.screen.width<640){
                link.style.color = 'white';
            }
            contact.style.color = 'white';
            logo.style.fill = 'black';
            inputArea.style.display = 'none';

        }, 2500);
    }
}

