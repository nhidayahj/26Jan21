//1. select first the elemet
let btn = document.querySelector("#booking-btn")
//2. then modify
btn.addEventListener('click', function(){
    // 3. retirieve the values
    let fullName = document.querySelector("#fullname").value;

    // 1. we get all the radio btns by their class 
    let seatingRadios = document.querySelectorAll(".seating");
    let selectedSeating;
    
    // 2. go thru each radio btn witj a for loop
    for (let rb of seatingRadios) {
       
        // 3. for the current radio btn we are looking at, see if it is checked attribute is true 
        if (rb.checked) {
            
            // 4. if true, remember its values as selected ones
            selectedSeating = rb.value;
            
            // 5. stop the search
            break;
        } // end if 
       
    } //end for 
     selectedSeating
    
    

});

 
