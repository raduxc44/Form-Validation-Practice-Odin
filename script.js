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
        //zipInput.addEventListener('change', )
        passInput.addEventListener('change', passCheck);
        //confirmInput.addEventListener('change', )

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

            let emailToStr = emailArr.join('')
            return emailToStr;
        
            
        }}

        //Country check

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
                console.log(countryInput.value)

            } 
        };
        // Zipcode check *soon*
        let countryArr = [];

        // Password check 

        function passCheck() {

            
            

        }

    }
}
let validator = new validationObj;
let form = document.getElementById('form')
window.addEventListener('load', (validator.inputCheck))
let submitButt = document.getElementById('submit')





class Country {

    constructor(name, zipFormat)

    {
        this.name = name;
        this.zipFormat = zipFormat;
    }

}