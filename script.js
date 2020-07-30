//select all the todos
const checkboxes = document.querySelectorAll('.todo input[type="checkbox"]')

let previousCheckedInput
let flagThatChecksTodo = false
const toMarkDone = function (e) {
    //if the shift is clicked and the checkbox is checked
    //then we are going to do our business
    if (e.shiftKey) {
        if (this.checked && previousCheckedInput.checked)
            //we iterate over each task
            //to find our FIRST checked input
            //we then raise a flag
            //this flag will cause each input to be checked
            //until it finds the SECOND checked input
            checkboxes.forEach(checkbox => {
                if (checkbox === previousCheckedInput || checkbox === this) { //to work with both way checking
                    flagThatChecksTodo = !flagThatChecksTodo
                }

                if (flagThatChecksTodo) {
                    checkbox.checked = true
                }
            })
    }
    //store the first checked input
    previousCheckedInput = this
}


//we listen to each of them for any click
checkboxes.forEach(checkbox => checkbox.addEventListener('click', toMarkDone))