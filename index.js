const inputSquareNode = document.querySelector('.js-square');
const inputHeightNode = document.querySelector('.js-height');
const resultNode = document.querySelector('.js-result');
const outputNode = document.querySelector('.js-output');

resultNode.addEventListener('click', function() {
    const s = Number(inputSquareNode.value);
    const h = Number(inputHeightNode.value);
    const r =  powerCalc(s, h);

    outputNode.innerHTML = r;

});