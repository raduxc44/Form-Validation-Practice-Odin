class validationObj {

    constructor(str) {

        this.str = str;

    }

    inputCheck(event) {

        event.preventDefault()

        //Email check

        let emailString = email.value.toString();
        let emailArr = emailString.split('');

        (function emailCheck() {

            let emailMessage = document.getElementsByClassName('email-error-field')[0];
            let emailToStr = emailArr.join('')

            if(emailArr.includes ('@') && emailArr.includes ('.') && 
              (emailArr.indexOf('.') - emailArr.indexOf('@') >= 2) && ((emailArr.length - 1) - emailArr.indexOf('.') > 2)) {
    
                email.classList.add('valid');
                email.classList.remove('invalid');
                emailMessage.innerHTML = `<p>You've entered a valid email adress!</p>`

            } else {

                email.classList.remove('valid');
                email.classList.add('invalid');
                emailMessage.innerHTML = `<p>This is not a valid email adress.</p>`

            }
            return emailToStr;
        })();


 
    }
}

let validator = new validationObj;
let form = document.getElementById('form')
let email = document.getElementById('email')
let submitButt = document.getElementById('submit')
form.addEventListener('submit', validator.inputCheck)

