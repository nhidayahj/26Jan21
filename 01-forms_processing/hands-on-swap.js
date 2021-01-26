let swapBtn = document.querySelector('#swap-btn');

swapBtn.addEventListener('click', function(){
    //put the left value in a temp storage
    let temp = document.querySelector("#left").value;
    //replace the left value from the right value
    document.querySelector("#left")
    // replace the right value from the left value

    
    let leftText = document.querySelector('#left').value
    let rightText = document.querySelector('#right').value
    let holdValue;
    holdValue = leftText;
    leftText = rightText;
    rightText = holdValue;
});

