let swapBtn = document.querySelector('#swap-btn');

swapBtn.addEventListener('click', function(){
    let leftText = document.querySelector('#left').value
    let rightText = document.querySelector('#right').value
    let holdValue;
    holdValue = leftText;
    leftText = rightText;
    rightText = holdValue;
});

