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

            console.log('a')
            let emailMessage = document.getElementsByClassName('email-error-field')[0];
            let emailToStr = emailArr.join('')

            if(emailArr.includes ('@') && emailArr.includes ('.') && (emailArr.indexOf('.') - emailArr.indexOf('@') >= 2)) {
    
                email.classList.add('valid');
                emailMessage.innerHTML = `<p>You've entered a valid email adress!</p>`

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

