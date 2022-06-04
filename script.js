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
        
        function zipCheck() {

            

            for(let i = 0; i < countryArr.length; i++) {

                // Valid input functionality

                if(zipInput.value == countryArr[i].zipFormat) {

                    validCheck[2].classList.add('show')
                    zipInput.classList.remove('invalid');
                    zipMessage.innerHTML = '';
                    console.log(countryInput.value)

                }

                // Invalid input functionality

                else if(zipInput.value != countryArr[i].zipFormat) {

                    validCheck[2].classList.remove('show')
                    zipInput.classList.remove('valid');
                    zipInput.classList.add('invalid');
                    zipMessage.innerHTML = `<p>Your zipcode is not valid!</p>`

                }

            }

        }

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

let countryArr = [
new Country ('Afghanistan', "^\\d{4}$"),
new Country ('Albania', '\d{4}'),
new Country ('American Samoa', '\d{5}'),
new Country ('Andorra', '(?:AD)(\d{3})'),
new Country ('Antigua & Barbuda', '\d{5}'),
new Country ('Argentina', '([A-Z]\d{4}[A-Z]{3})|([A-Z]\d{4})'),
new Country ('Armenia', '(\d{4})|(\d{6})'),
new Country ('Aruba', 'STRNG_LTN_EXT_255'),
new Country ('Australia', '\d{4}'),
new Country ('Austria', '\d{4}'),
new Country ('Azerbaijan', '(AZ) (\d{4})'),
new Country ('Bahamas', 'STRNG_LTN_EXT_255'),
new Country ('Bahrain', '\d{3}\d?'),
new Country ('Bangladesh', '\d{4}'),
new Country ('Barbados', '(?:BB)(\d{5})'),
new Country ('Belarus', '\d{6}'),
new Country ('Belgium', '\d{4}'),
new Country ('Belize', 'STRNG_LTN_EXT_255'),
new Country ('Benin', 'STRNG_LTN_EXT_255'),
new Country ('Bermuda', '[A-Z]{2} \d{2}'),
new Country ('Bhutan', '\d{5}'),
new Country ('Bolivia', 'STRNG_LTN_EXT_255'),
new Country ('Bonaire', 'STRNG_LTN_EXT_255'),
new Country ('Bosnia & Herzegovina', '\d{5}'),
new Country ('Botswana', 'STRNG_LTN_EXT_255'),
new Country ('Brazil', '[0-9]{5}-[0-9]{3}'),
new Country ('Brunei', '[A-Z]{2}\d{4}'),
new Country ('Bulgaria', "^\\d{4}$"),
new Country ('Burkina Faso', 'STRNG_LTN_EXT_255'),
new Country ('Burundi', 'STRNG_LTN_EXT_255'),
new Country ('Cambodia', '\d{5}   '),
new Country ('Cameroon', 'STRNG_LTN_EXT_255'),
new Country ('Canada', 'STRNG_LTN_EXT_255'),
new Country ('Cayman Islands', '[K][Y][0-9]{1}[-]([0-9]){4}'),
new Country ('Central African Republic', 'STRNG_LTN_EXT_255'),
new Country ('Chad', 'STRNG_LTN_EXT_255'),
new Country ('Chile', '\d{7}'),
new Country ('China', '\d{6}'),
new Country ('Christmas Island"', '(6798)'),
new Country ('Cocos Island', '(6799)'),
new Country ('Colombia', '\d{6}'),
new Country ('Comoros', 'STRNG_LTN_EXT_255'),
new Country ('Congo', 'STRNG_LTN_EXT_255'),
new Country ('Cook Islands', 'STRNG_LTN_EXT_255'),
new Country ('Costa Rica', '\d{5}'),
new Country ('Cote D\'voire', 'STRNG_LTN_EXT_255'),
new Country ('Croatia', '\d{5}'),
new Country ('Cuba', '(?:CP)(\d{5})'),
new Country ('Curacao', 'STRNG_LTN_EXT_255'),
new Country ('Cyprus', '\d{4}'),
new Country ('Czech Republic', '[0-9]{3} [0-9]{2}|[0-9]{5}'),
new Country ('Denmark', '\d{4}'),
new Country ('Djibouti', 'STRNG_LTN_EXT_255'),
new Country ('Dominica', 'STRNG_LTN_EXT_255'),
new Country ('Dominican Republic', '\d{5}'),
new Country ('Ecuador', '\d{6}'),
new Country ('Egypt', '\d{5}'),
new Country ('El Salvador', '((CP) \d{4})'),
new Country ('Equatorial Guinea', 'STRNG_LTN_EXT_255'),
new Country ('Eritrea', 'STRNG_LTN_EXT_255'),
new Country ('Estonia', '\d{5}'),
new Country ('Ethiopia', '\d{4}'),
new Country ('Falkland Islands', '(FIQQ 1ZZ)'),
new Country ('Faroe Islands', '\d{3}'),
new Country ('Fiji', 'STRNG_LTN_EXT_255'),
new Country ('Finland', '\d{5}'),
new Country ('France', '\d{5}'),
new Country ('French Guiana', '\d{5}'),
new Country ('French Polynesia', '((987)\d{2})'),
new Country ('French Southern Ter', '((984)\d{2})'),
new Country ('Gabon', 'STRNG_LTN_EXT_255'),
new Country ('Gambia', 'STRNG_LTN_EXT_255'),
new Country ('Georgia', '\d{4}'),
new Country ('Germany', '\d{5}'),
new Country ('Ghana', 'STRNG_LTN_EXT_255'),
new Country ('Gibraltar', '(GX11 1AA)'),
new Country ('Greece', '(\d{3}) \d{2}|\d{5}'),
new Country ('Greenland', '\d{4}'),
new Country ('Grenada', 'STRNG_LTN_EXT_255'),
new Country ('Guadeloupe', '\d{5}'),
new Country ('Guam', '((969)[1-3][0-2])'),
new Country ('Guatemala', '\d{5}'),
new Country ('Guinea', '\d{3}'),
new Country ('Guyana', 'STRNG_LTN_EXT_255'),
new Country ('Haiti', '(?:HT)(\d{4})'),
new Country ('Honduras', '\d{5}'),
new Country ('Hong Kong', '(999077)'),
new Country ('Hungary', '\d{4}'),
new Country ('Iceland', '\d{3}'),
new Country ('Indonesia', '\d{5}'),
new Country ('India', '\d{6}'),
new Country ('Iran', '\d{5}[\-]?\d{5}'),
new Country ('Iraq', '\d{5}'),
new Country ('Ireland', 'STRNG_LTN_EXT_255'),
new Country ('Isle of Man', '(IM)([0-9][0-9A-HJKPS-UW]?|[A-HK-Y][0-9][0-9ABEHMNPRV-Y]?) [0-9][ABD-HJLNP-UW-Z]{2}'),
new Country ('Israel', '\d{7}'),
new Country ('Italy', '\d{5}'),
new Country ('Jamaica', '(JM)[A-Z]{3}\d{2}'),
new Country ('Japan', '(\d{3}-\d{4})'),
new Country ('Jordan', '\d{5}'),
new Country ('Kazakhstan', '\d{6}'),
new Country ('Kenya', '\d{5}'),
new Country ('Kiribati', 'STRNG_LTN_EXT_255'),
new Country ('Korea North', 'STRNG_LTN_EXT_255'),
new Country ('Korea South', 'STRNG_LTN_EXT_255'),
new Country ('Kuwait', '\d{5}'),
new Country ('Kyrgyzstan', '\d{6}'),
new Country ('Laos', '^\\d{5}$'),
new Country ('Latvia', '[L]{1}[V]{1}[-]([0-9]){4}'),
new Country ('Lebanon', '\d{4}( \d{4})?'),
new Country ('Lesotho', '\d{3}'),
new Country ('Liberia', '\d{4}'),
new Country ('Libya', 'STRNG_LTN_EXT_255'),
new Country ('Liechtenstein', '\d{4}'),
new Country ('Lithuania', '((?:LT)[\-])?(\d{5})'),
new Country ('Luxembourg', '((?:L)[\-])?(\d{4})'),
new Country ('Macedonia', '\d{4}'),
new Country ('Madagascar', '\d{3}'),
new Country ('Malaysia', '\d{5}'),
new Country ('Malawi', 'STRNG_LTN_EXT_255'),
new Country ('Maldives', '\d{5}'),
new Country ('Mali', 'STRNG_LTN_EXT_255'),
new Country ('Malta', '[A-Z]{3} [0-9]{4}|[A-Z]{2}[0-9]{2}|[A-Z]{2} [0-9]{2}|[A-Z]{3}[0-9]{4}|[A-Z]{3}[0-9]{2}|[A-Z]{3} [0-9]{2}'),
new Country ('Marshall Islands', '((969)[6-7][0-9])'),
new Country ('Martinique', '\d{5}'),
new Country ('Mauritania', 'STRNG_LTN_EXT_255'),
new Country ('Mauritius', '([0-9A-Z]\d{4})'),
new Country ('Mayotte', '\d{5}'),
new Country ('Mexico', '\d{5}'),
new Country ('Moldova', '\d{5}'),
new Country ('Monaco', '\d{5}'),
new Country ('Mongolia', '\d{5}'),
new Country ('Montserrat', '(?:MSR )(\d{4})'),
new Country ('Morocco', '\d{5}'),
new Country ('Mozambique', '\d{4}'),
new Country ('Myanmar', '\d{5}'),
new Country ('Nauru', 'STRNG_LTN_EXT_255'),
new Country ('Nepal', '\d{5}'),
new Country ('Netherlands', '[0-9]{4} [A-Z]{2}|[0-9]{4}[A-Z]{2}'),
new Country ('Nevis', 'STRNG_LTN_EXT_255'),
new Country ('New Caledonia', '\d{5}'),
new Country ('New Zealand', '\d{4}'),
new Country ('Nicaragua', '\d{5}'),
new Country ('Niger', '\d{4}'),
new Country ('Nigeria', '\d{6}'),
new Country ('Niue', 'STRNG_LTN_EXT_255'),
new Country ('Norfolk Island', '(2899)'),
new Country ('Norway', '\d{4}'),
new Country ('Oman', '\d{3}'),
new Country ('Pakistan', '\d{5}'),
new Country ('Palestine', '(\d{3}-\d{3})'),
new Country ('Panama', 'STRNG_LTN_EXT_255'),
new Country ('Papua New Guinea', '\d{3}'),
new Country ('Paraguay', '\d{4}'),
new Country ('Peru', '\d{5}'),
new Country ('Philippines', '\d{4}'),
new Country ('Poland', '[0-9]{2}[-]([0-9]){3}'),
new Country ('Portugal', '\d{4}((-)\d{3})'),
new Country ('Puerto Rico', '[0-9]{5}(?:-[0-9]{4})?'),
new Country ('Qatar', 'STRNG_LTN_EXT_255'),
new Country ('Republic of Montenegro', '\d{5}'),
new Country ('Republic of Serbia', '\d{5}'),
new Country ('Reunion', '\d{5}'),
new Country ('Romania', '\d{6}'),
new Country ('Russia', '\d{6}'),
new Country ('Rwanda', 'STRNG_LTN_EXT_255'),
new Country ('St Barthelemy', '\d{5}'),
new Country ('St Eustatius', 'STRNG_LTN_EXT_255'),
new Country ('St Helena', '(ASCN 1ZZ|TDCU 1ZZ|STHL 1ZZ)'),
new Country ('St Lucia', 'STRNG_LTN_EXT_255'),
new Country ('St Maarten', 'STRNG_LTN_EXT_255'),
new Country ('St Vincent & Grenadines', '(VC)(\d{4})'),
new Country ('Samoa', '(96799)'),
new Country ('San Marino', '(4789\d)'),
new Country ('Sao Tome & Principe', 'STRNG_LTN_EXT_255'),
new Country ('Saudi Arabia', '\d{5}([\-]\d{4})?'),
new Country ('Senegal', '\d{5}'),
new Country ('Seychelles', 'STRNG_LTN_EXT_255'),
new Country ('Sierra Leone', 'STRNG_LTN_EXT_255'),
new Country ('Singapore', '\d{6}'),
new Country ('Slovakia', '(\d{3} \d{2})|\d{5}'),
new Country ('Slovenia', '\d{4}'),
new Country ('Solomon Islands', 'STRNG_LTN_EXT_255'),
new Country ('Somalia', 'STRNG_LTN_EXT_255'),
new Country ('South Africa', '\d{4}'),
new Country ('Spain', '\d{5}'),
new Country ('Sri Lanka', '\d{5}'),
new Country ('Sudan', '\d{5}'),
new Country ('Suriname', 'STRNG_LTN_EXT_255'),
new Country ('Swaziland', '([A-Z]\d{3})'),
new Country ('Sweden', '(\d{3} \d{2})'),
new Country ('Switzerland', '\d{4}'),
new Country ('Syria', 'STRNG_LTN_EXT_255'),
new Country ('Taiwan', '(\d{3}[-]\d{2})|(\d{3})'),
new Country ('Tajikistan', '\d{3}'),
new Country ('Tanzania', '\d{5}'),
new Country ('Thailand', '\d{5}'),
new Country ('Togo', 'STRNG_LTN_EXT_255'),
new Country ('Tokelau', 'STRNG_LTN_EXT_255'),
new Country ('Tonga', 'STRNG_LTN_EXT_255'),
new Country ('Trinidad & Tobago', 'STRNG_LTN_EXT_255'),
new Country ('Tunisia', '\d{4}'),
new Country ('Turkey', '\d{5}'),
new Country ('Turkmenistan', '\d{6}'),
new Country ('Turks & Caicos Is', '(TKCA 1ZZ)'),
new Country ('Tuvalu', 'STRNG_LTN_EXT_255'),
new Country ('Uganda', 'STRNG_LTN_EXT_255'),
new Country ('United Kingdom', '([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9]?[A-Za-z])))) [0-9][A-Za-z]{2})'),
new Country ('Ukraine', '\d{5}'),
new Country ('United Arab Erimates', 'STRNG_LTN_EXT_255'),
new Country ('United States of America', '[0-9]{5}(?:-[0-9]{4})?'),
new Country ('Uruguay', '\d{5}'),
new Country ('Uzbekistan', '\d{6}'),
new Country ('Vanuatu', 'STRNG_LTN_EXT_255'),
new Country ('Venezuela', '\d{4}'),
new Country ('Vietnam', '^\\d{6}$'),
new Country ('Virgin Islands (Brit)', '(VG11)[0-6][0]'),
new Country ('Virgin Islands (USA)', '\d{5}'),
new Country ('Wallis & Futana Is', '((986)\d{2})'),
new Country ('Yemen', 'STRNG_LTN_EXT_255'),
new Country ('Zambia', '\d{5}'),
new Country ('Zimbabwe', 'STRNG_LTN_EXT_255'),
]


function countryPusher (arr) {

    for(let i = 0; i < countryArr.length; i++) {

        let countryMenu = document.getElementById('country');
        let htmlCountryOption = document.createElement('option');
        countryMenu.appendChild(htmlCountryOption)
        htmlCountryOption.value = countryArr[i].name;
        htmlCountryOption.textContent = countryArr[i].name;

    }

}
countryPusher(countryArr)





console.log(countryArr)