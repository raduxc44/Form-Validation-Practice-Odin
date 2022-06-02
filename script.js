class validationObj {

    constructor(str) {

        this.str = str;

    }

    inputCheck(event) {

        event.preventDefault();

        let validCheck = document.getElementsByClassName('validCheck');

        //Email check

        (function emailCheck() {

            let emailString = email.value.toString();
            let emailArr = emailString.split('');
            let emailMessage = document.getElementsByClassName('error-field')[0];
    
            if(email.value.length == 0) {
                
                // If the input field is empty, the input field returns to default

                if(emailMessage) {emailMessage.remove()};
                email.classList.remove('invalid');
                email.classList.remove('valid');
                validCheck[0].classList.remove('show')

            }

            else if (email.value.length > 0) {
            
                let emailVerifiesChar = emailArr.includes ('@') && emailArr.includes ('.');
                let emailIndexDiff = emailArr.indexOf('.') - emailArr.indexOf('@');
                let emailExtension = (emailArr.length - 1) - emailArr.indexOf('.');

            if(emailVerifiesChar && emailIndexDiff >= 2 && emailExtension == 3) {
    
                validCheck[0].classList.add('show')
                email.classList.add('valid');
                email.classList.remove('invalid');
                if(emailMessage){emailMessage.innerHTML = `<p>You've entered a valid email adress!</p>`};

            } else {

                validCheck[0].classList.remove('show')
                email.classList.remove('valid');
                email.classList.add('invalid');
                if(emailMessage) {emailMessage.innerHTML = `<p>This is not a valid email adress.</p>`};

            }

            let emailToStr = emailArr.join('')
            return emailToStr;
        
        }})();
        (function countryCheck() {

            let countryInput = document.getElementById('country');
            let countryMessage = document.getElementsByClassName('error-field')[1];
            console.log(countryMessage)
            if(countryInput.value === 'Pick a country') {

                validCheck[1].classList.remove('show')
                countryInput.classList.remove('valid');
                countryInput.classList.add('invalid');
                if(countryMessage) {countryMessage.innerHTML = `<p>This is not a valid email adress.</p>`};
            
            } 
            else if(countryInput.value != 'Pick a country') {

                validCheck[1].classList.add('show')
                countryInput.classList.remove('invalid');
                if(countryMessage) {countryMessage.remove}

            }


        })();
    }
}

let validator = new validationObj;
let form = document.getElementById('form')
let email = document.getElementById('email')
let submitButt = document.getElementById('submit')
email.addEventListener('change', validator.inputCheck)
country.addEventListener('blur', validator.inputCheck)
let errorMsgArr = document.getElementsByClassName('error-field')
console.log(errorMsgArr)