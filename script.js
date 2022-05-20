class validationObj {

    constructor(str) {

        this.str = str;

    }

    inputFormatCheck(event) {

        event.preventDefault()

        //Email check

        let emailString = email.value.toString();
        let emailArr = emailString.split('');

        if(emailArr.includes('@')) {emailCheck(emailArr)};

        function emailCheck(emailArr) {

            let emailError = document.getElementsByClassName('email-error-field')[0];
            let errorMessages = [];
            let emailToStr = emailArr.join('')
    
            if(emailToStr === '' || emailToStr == null) {
    
                errorMessages.push('You need to enter an email adress!')
    
            }
            else if(emailArr[emailArr.length - 4] !== '.') {
    
                errorMessages.push('That is not a valid e-mail adress.')
    
            }

            emailError.innerHTML = `<p>${errorMessages}</p>`

            console.log(`${errorMessages} - 1`)
    
            console.log(`emailerror : ${emailError.innerHTML}`)
    
            if(errorMessages.length === 0) {
    
                // Code for valid input
    
            }
    
        }


 
    }
}

let validator = new validationObj;
let form = document.getElementById('form')
let email = document.getElementById('email')
let submitButt = document.getElementById('submit')
form.addEventListener('submit', validator.inputFormatCheck)

