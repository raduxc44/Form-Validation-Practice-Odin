class validationObj {

    constructor(str) {

        this.str = str;

    }

    inputCheck(event) {

        event.preventDefault();

        // Initial variable declarations

        let validCheck = document.getElementsByClassName('validCheck');

        let emailInput = document.getElementById('email');
        let countryInput = document.getElementById('country');
        let zipInput = document.getElementById('zip');
        let passInput = document.getElementById('pass')
        let confirmInput = document.getElementById('passconf')

        let emailMessage = document.getElementsByClassName('error-field')[0];
        let countryMessage = document.getElementsByClassName('error-field')[1];
        let zipMessage = document.getElementsByClassName('error-field')[2];
        let passMessage = document.getElementsByClassName('error-field')[3];
        let confirmMessage = document.getElementsByClassName('error-field')[4];

        emailInput.addEventListener('change', emailCheck);
        countryInput.addEventListener('blur', countryCheck);
        zipInput.addEventListener('change', zipCheck)
        passInput.addEventListener('change', passCheck);
        confirmInput.addEventListener('change', passConfirmCheck)

        //Email check

        function emailCheck() {

            
            let emailString = emailInput.value.toString();
            let emailArr = emailString.split('');
            
    
            if(emailInput.value.length == 0) {
                
                // If the input field is empty, the input text box returns to default

                if(emailMessage) {emailMessage.innerHTML = ''};
                emailInput.classList.remove('invalid');
                emailInput.classList.remove('valid');
                validCheck[0].classList.remove('show')

            }

            else if (emailInput.value.length > 0) {
                
                // If an input exist, the function checks for the key characters
                
                let emailVerifiesChar = emailArr.includes ('@') && emailArr.includes ('.');
                let emailIndexDiff = emailArr.indexOf('.') - emailArr.indexOf('@');
                let emailExtension = (emailArr.length - 1) - emailArr.indexOf('.');

            if(emailVerifiesChar && emailIndexDiff >= 2 && emailExtension == 3) {
    
                // Valid input functionality

                validCheck[0].classList.add('show')
                emailInput.classList.add('valid');
                emailInput.classList.remove('invalid');
                emailMessage.innerHTML = '';

            } else {

                // Invalid input functionality

                validCheck[0].classList.remove('show')
                emailInput.classList.remove('valid');
                emailInput.classList.add('invalid');
                emailMessage.innerHTML = `<p>This is not a valid email adress.</p>`;

            }

                // Returns to email back to its original form for future back-end usage

            return emailArr.join(' ')
        
            
        }}

        //Country list generator

        class Country {

            constructor(name, zipFormat)
        
            {
                this.name = name;
                this.zipFormat = zipFormat;
            }
        
        }        

        
            
            
        (function countryPusher (arr) {
            
            for(let i = 0; i < arr.length; i++) {
            
                let countryMenu = document.getElementById('country');
                let htmlCountryOption = document.createElement('option');
                countryMenu.appendChild(htmlCountryOption)
                htmlCountryOption.value = countryArr[i].name;
                htmlCountryOption.textContent = countryArr[i].name;
            
            }
            
        })(countryArr);
        
        //Country input check

        function countryCheck() {

            
            
            
            // Invalid input functionality

            if(countryInput.value === 'Pick a country' ){

                validCheck[1].classList.remove('show')
                countryInput.classList.remove('valid');
                countryInput.classList.add('invalid');
                countryMessage.innerHTML = `<p>You did not select a valid country!</p>`;                
            
            } 

            // Valid input functionality

            else if(countryInput.value != 'Pick a country' && emailMessage.innerHTML != `<p>This is not a valid email adress.</p>`) {

                validCheck[1].classList.add('show')
                countryInput.classList.remove('invalid');
                countryMessage.innerHTML = '';

            } 
        };
        // Zipcode check

        function zipCheck() {

            
            for(let i = 0; i < countryArr.length; i++) {
                
                if(countryInput.value == countryArr[i].name) {

                    // Valid input functionality

                    let zipValue = countryArr[i].zipFormat
                    const ok = zipValue.exec(zipInput.value)
                    

                    if(ok) {
                        
                        validCheck[2].classList.add('show')
                        zipInput.classList.remove('invalid');
                        zipMessage.innerHTML = '';
                        
                    }

                    // Invalid input functionality

                    else if(!ok) {

                        validCheck[2].classList.remove('show')
                        zipInput.classList.remove('valid');
                        zipInput.classList.add('invalid');
                        zipMessage.innerHTML = `<p>You did not select a valid country!</p>`;

                    }
                }
                
                

                
            }

        }

        // Password check 

        function passCheck() {

            let symbolCheck;
            let lengthCheck;
            let numberCheck;
            let capitalCheck;

            

            // Symbol check

            if(passInput.value.includes('!') || passInput.value.includes('?') || passInput.value.includes('.') || 
                passInput.value.includes('$') || passInput.value.includes('#') || passInput.value.includes('%') ||
                passInput.value.includes('&') || passInput.value.includes('*') || passInput.value.includes('~')){

                symbolCheck = true;

            } else {symbolCheck = false};

            // Capital check

            let regexCapital = /^[A-Z]*/;
            console.log(regexCapital.exec(passInput.value))
            if(regexCapital.exec(passInput.value)) {capitalCheck = true} else {capitalCheck = false}

            // Length check

            if(passInput.value.length > 7 && passInput.value.length < 21) {

                lengthCheck = true;

            } else {lengthCheck = false}

            // Number check

            let regexNr = /\d/;
            if(regexNr.exec(passInput.value)) {numberCheck = true} else {numberCheck = false}

            // Valid input functionality

            if(symbolCheck && capitalCheck && lengthCheck && numberCheck) {

                validCheck[3].classList.add('show')
                passInput.classList.remove('invalid');
                passMessage.innerHTML = '';

            }

            // Invalid input functionality

            else {

                validCheck[3].classList.remove('show')
                passInput.classList.remove('valid');
                passInput.classList.add('invalid');
                passMessage.innerHTML = '<p>Your password must be 8 - 20 characters long and must contain a number, a symbol and a capital letter!'

            }

        }

        // Pass confirm check

        function passConfirmCheck () {

            // Valid input functionality

            if(confirmInput.value === passInput.value) {

                validCheck[4].classList.add('show')
                confirmInput.classList.remove('invalid');
                console.log('a')
                confirmMessage.innerHTML = '';

            }

            //Invalid input functionality

            else if(confirmInput.value != passInput.value) {

                validCheck[4].classList.remove('show')
                confirmInput.classList.remove('valid');
                confirmInput.classList.add('invalid');
                confirmMessage.innerHTML = '<p>Your passwords must match!</p>'

            }

        }
    }
}
let validator = new validationObj;
let form = document.getElementById('form');
window.addEventListener('load', (validator.inputCheck));
let submitButt = document.getElementById('submit');