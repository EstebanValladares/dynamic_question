const optionNone = document.querySelector('.option-2');
const optionYes = document.querySelector('.option-1');
const question = document.querySelector('.question-out');
const questionTwo = document.querySelector('.question-more');

optionNone.addEventListener('click', morePixel);
optionYes.addEventListener('click', newDocument);

font = 1.3;
dates = 20;

function morePixel() {
    allFont = font += .5;
    allDatesa = dates += 20
    optionYes.style.padding = allDatesa + 'px';
    optionYes.style.fontSize = allFont + 'rem';

}
function newDocument() {
    question.style.display = 'none';
    questionTwo.style.display = 'block';
}