/*
function addElement(classCard, classText, classImg, title, textContent, moreText) {
    const newDiv = document.createElement("div");
    newDiv.classList.add(classCard);

    const newDivText = document.createElement('div');
    newDivText.classList.add(classText);
    
    newDiv.appendChild(newDivText);

    const newDivImg = document.createElement('div');
    newDivImg.classList.add(classImg);


}*/


function addElmentByText(classCard, classText, classImg, title, textContent, moreText, moreUrl, htmlElement, imgUrl, number) {
    htmlElement.innerHTML += `
    <div class="${classCard}">
    <div class="${classText}">
        <h1>${title}</h1>
        <p>${textContent}</p>
        <span><a href="${moreUrl}">${moreText}</a></span>
    </div>
    <div class="${classImg} imgNum${number}"></div>
    <svg width="90" height="77" viewBox="0 0 90 77" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M40.6985 73.7413L1.47349 7.54901C-0.501628 4.216 1.90067 0 5.77495 0H84.2251C88.0993 0 90.5016 4.21601 88.5265 7.54902L49.3015 73.7413C47.3649 77.0093 42.6351 77.0093 40.6985 73.7413Z" fill="#e5c9fa"/>
    </svg>
</div>
    `;

    let imgClass = `.imgNum${number}`;

    let img = document.querySelector(imgClass);
    img.style.backgroundImage = `url(${imgUrl})`;
}

const main = document.querySelector('main');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');
const btn4 = document.querySelector('#btn4');
const btn5 = document.querySelector('#btn5');
const btn6 = document.querySelector('#btn6');
let numberBtn2 = 0;
let numberBtn3 = 0;

btn2.addEventListener('click', () => {
    
    if (numberBtn2 == 0) {
        btn2.textContent = "Hover me";
        addElmentByText("hoverMeOne", "text", "img", "Mad fish", "texte texte texte test", "Plus +", "#", btn2, "./medias/img/4.jpg", 2);
    }
    numberBtn2++;
    
});
btn3.addEventListener('click', () => {
    if (numberBtn3 == 0) {
        btn3.textContent = "Hover me";
        addElmentByText("hoverMeOne", "text", "img", "Mad skelton", "texte texte texte test", "Plus +", "#", btn3, "./medias/img/7.jpg", 3);
    }
    numberBtn3++;
});

addElmentByText("hoverMeOne", "text", "img", "Jean", "texte texte texte test", "Plus +", "#", btn4, "./medias/img/10a.jpg", 4);

addElmentByText("hoverMeOne", "text", "img", "Crazy", "texte texte texte test", "Plus +", "#", btn5, "./medias/img/36.jpg", 5);

addElmentByText("hoverMeOne", "text", "img", "Megamind", "texte texte texte test", "Plus +", "#", btn6, "./medias/img/837028b92264d54e1e177999791b60c0.jpg", 6);


const testText = document.querySelector('#testText');
addElmentByText("hoverMeOne", "text", "img", "It is working", "hell yeah!", "Plus +", "#", testText, "./medias/img/837028b92264d54e1e177999791b60c0.jpg", 7);

const testImg = document.querySelector('.testImg');
addElmentByText("hoverMeOne", "text", "img", "It is working", "hell yeah!", "Plus +", "#", testImg, "./medias/img/837028b92264d54e1e177999791b60c0.jpg", 8);

