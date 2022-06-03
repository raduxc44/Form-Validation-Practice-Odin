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

let countryArr = [];


function countryPusher (obj) {

    countryArr.push(obj)

}
countryPusher(new Country ('Afghanistan', "^\\d{4}$"));
countryPusher(new Country ('Albania', '\d{4}'));
countryPusher(new Country ('American Samoa', '\d{5}'));
countryPusher(new Country ('Andorra', '(?:AD)(\d{3})'));
countryPusher(new Country ('Antigua & Barbuda', '\d{5}'));
countryPusher(new Country ('Argentina', '([A-Z]\d{4}[A-Z]{3})|([A-Z]\d{4})'));
countryPusher(new Country ('Armenia', '(\d{4})|(\d{6})'));
countryPusher(new Country ('Aruba', 'STRNG_LTN_EXT_255'));
countryPusher(new Country ('Australia', '\d{4}'));
countryPusher(new Country ('Austria', '\d{4}'));
countryPusher(new Country ('Azerbaijan', '(AZ) (\d{4})'));
countryPusher(new Country ('Bahamas', 'STRNG_LTN_EXT_255'));
countryPusher(new Country ('Bahrain', '\d{3}\d?'));
countryPusher(new Country ('Bangladesh', '\d{4}'));
countryPusher(new Country ('Barbados', '(?:BB)(\d{5})'));
countryPusher(new Country ('Belarus', '\d{6}'));
countryPusher(new Country ('Belgium', '\d{4}'));
countryPusher(new Country ('Belize', 'STRNG_LTN_EXT_255'));
countryPusher(new Country ('Benin', 'STRNG_LTN_EXT_255'));
countryPusher(new Country ('Bermuda', '[A-Z]{2} \d{2}'));
countryPusher(new Country ('Bhutan', '\d{5}'));
countryPusher(new Country ('Bolivia', 'STRNG_LTN_EXT_255'));
countryPusher(new Country ('Bonaire', 'STRNG_LTN_EXT_255'));
countryPusher(new Country ('Bosnia & Herzegovina', '\d{5}'));
countryPusher(new Country ('Botswana', 'STRNG_LTN_EXT_255'));
countryPusher(new Country ('Brazil', '[0-9]{5}-[0-9]{3}'));
countryPusher(new Country ('Brunei', '[A-Z]{2}\d{4}'));
countryPusher(new Country ('Bulgaria', "^\\d{4}$"));
countryPusher(new Country ('Burkina Faso', 'STRNG_LTN_EXT_255'));
countryPusher(new Country ('Burundi', 'STRNG_LTN_EXT_255'));
countryPusher(new Country ('Cambodia', '\d{5}   '));
countryPusher(new Country ('Cameroon', 'STRNG_LTN_EXT_255'));
countryPusher(new Country ('Canada', 'STRNG_LTN_EXT_255'));
countryPusher(new Country ('Cayman Islands', '[K][Y][0-9]{1}[-]([0-9]){4}'));
countryPusher(new Country ('Central African Republic', 'STRNG_LTN_EXT_255'));
countryPusher(new Country ('Chad', 'STRNG_LTN_EXT_255'));
countryPusher(new Country ('Chile', '\d{7}'));
countryPusher(new Country ('China', '\d{6}'));
countryPusher(new Country ('Christmas Island"', '(6798)'));
countryPusher(new Country ('Cocos Island', '(6799)'));
countryPusher(new Country ('Colombia', '\d{6}'));
countryPusher(new Country ('Comoros', 'STRNG_LTN_EXT_255'));
countryPusher(new Country ('Congo', 'STRNG_LTN_EXT_255'));
countryPusher(new Country ('Cook Islands', 'STRNG_LTN_EXT_255'));
countryPusher(new Country ('Costa Rica', '\d{5}'));
countryPusher(new Country ('Cote D\'voire', 'STRNG_LTN_EXT_255'));
countryPusher(new Country ('Croatia', '\d{5}'));
countryPusher(new Country ('Cuba', '(?:CP)(\d{5})'));
countryPusher(new Country ('Curacao', 'STRNG_LTN_EXT_255'));
countryPusher(new Country ('Cyprus', '\d{4}'));
countryPusher(new Country ('Czech Republic', '[0-9]{3} [0-9]{2}|[0-9]{5}'));
countryPusher(new Country ('Denmark', '\d{4}'));
countryPusher(new Country ('Djibouti', 'STRNG_LTN_EXT_255'));
countryPusher(new Country ('Dominica', 'STRNG_LTN_EXT_255'));
countryPusher(new Country ('Dominican Republic', '\d{5}'));
countryPusher(new Country ('Ecuador', '\d{6}'));
countryPusher(new Country ('Egypt', '\d{5}'));
countryPusher(new Country ('El Salvador', '((CP) \d{4})'));
countryPusher(new Country ('Equatorial Guinea', 'STRNG_LTN_EXT_255'));
countryPusher(new Country ('Eritrea', 'STRNG_LTN_EXT_255'));
countryPusher(new Country ('Estonia', '\d{5}'));
countryPusher(new Country ('Ethiopia', '\d{4}'));
countryPusher(new Country ('Falkland Islands', '(FIQQ 1ZZ)'));
countryPusher(new Country ('Faroe Islands', '\d{3}'));
countryPusher(new Country ('Fiji', 'STRNG_LTN_EXT_255'));
countryPusher(new Country ('Finland', '\d{5}'));
countryPusher(new Country ('France', '\d{5}'));
countryPusher(new Country ('French Guiana', '\d{5}'));
countryPusher(new Country ('French Polynesia', '((987)\d{2})'));
countryPusher(new Country ('French Southern Ter', '((984)\d{2})'));
countryPusher(new Country ('Gabon', 'STRNG_LTN_EXT_255'));
countryPusher(new Country ('Gambia', 'STRNG_LTN_EXT_255'));
countryPusher(new Country ('Georgia', '\d{4}'));
countryPusher(new Country ('Germany', '\d{5}'));
countryPusher(new Country ('Ghana', 'STRNG_LTN_EXT_255'));
countryPusher(new Country ('Gibraltar', '(GX11 1AA)'));
countryPusher(new Country ('Greece', '(\d{3}) \d{2}|\d{5}'));
countryPusher(new Country ('Greenland', '\d{4}'));
countryPusher(new Country ('Grenada', 'STRNG_LTN_EXT_255'));
countryPusher(new Country ('Guadeloupe', '\d{5}'));
countryPusher(new Country ('Guam', '((969)[1-3][0-2])'));
countryPusher(new Country ('Guatemala', '\d{5}'));
countryPusher(new Country ('Guinea', '\d{3}'));
countryPusher(new Country ('Guyana', 'STRNG_LTN_EXT_255'));
countryPusher(new Country ('Haiti', '(?:HT)(\d{4})'));
countryPusher(new Country ('Honduras', '\d{5}'));
countryPusher(new Country ('Hong Kong', '(999077)'));
countryPusher(new Country ('Hungary', '\d{4}'));
countryPusher(new Country ('Iceland', '\d{3}'));
countryPusher(new Country ('Indonesia', '\d{5}'));
countryPusher(new Country ('India', '\d{6}'));
countryPusher(new Country ('Iran', '\d{5}[\-]?\d{5}'));
countryPusher(new Country ('Iraq', '\d{5}'));
countryPusher(new Country ('Ireland', 'STRNG_LTN_EXT_255'));
countryPusher(new Country ('Isle of Man', '(IM)([0-9][0-9A-HJKPS-UW]?|[A-HK-Y][0-9][0-9ABEHMNPRV-Y]?) [0-9][ABD-HJLNP-UW-Z]{2}'));
countryPusher(new Country ('Israel', '\d{7}'));
countryPusher(new Country ('Italy', '\d{5}'));
countryPusher(new Country ('Jamaica', '(JM)[A-Z]{3}\d{2}'));
countryPusher(new Country ('Japan', '(\d{3}-\d{4})'));
countryPusher(new Country ('Jordan', '\d{5}'));
countryPusher(new Country ('Kazakhstan', '\d{6}'));
countryPusher(new Country ('Kenya', '\d{5}'));
countryPusher(new Country ('Kiribati', 'STRNG_LTN_EXT_255'));
countryPusher(new Country ('Korea North', 'STRNG_LTN_EXT_255'));
countryPusher(new Country ('Korea South', 'STRNG_LTN_EXT_255'));
countryPusher(new Country ('Kuwait', '\d{5}'));
countryPusher(new Country ('Kyrgyzstan', '\d{6}'));
countryPusher(new Country ('Laos', '^\\d{5}$'));
countryPusher(new Country ('Latvia', '[L]{1}[V]{1}[-]([0-9]){4}'));
countryPusher(new Country ('Lebanon', '\d{4}( \d{4})?'));
countryPusher(new Country ('Lesotho', '\d{3}'));
countryPusher(new Country ('Liberia', '\d{4}'));
countryPusher(new Country ('Libya', 'STRNG_LTN_EXT_255'));
countryPusher(new Country ('Liechtenstein', '\d{4}'));
countryPusher(new Country ('Lithuania', '((?:LT)[\-])?(\d{5})'));
countryPusher(new Country ('Luxembourg', '((?:L)[\-])?(\d{4})'));
countryPusher(new Country ('Macedonia', '\d{4}'));
countryPusher(new Country ('Madagascar', '\d{3}'));
countryPusher(new Country ('Malaysia', '\d{5}'));
countryPusher(new Country ('Malawi', 'STRNG_LTN_EXT_255'));
countryPusher(new Country ('Maldives', '\d{5}'));
countryPusher(new Country ('Mali', 'STRNG_LTN_EXT_255'));
countryPusher(new Country ('Malta', '[A-Z]{3} [0-9]{4}|[A-Z]{2}[0-9]{2}|[A-Z]{2} [0-9]{2}|[A-Z]{3}[0-9]{4}|[A-Z]{3}[0-9]{2}|[A-Z]{3} [0-9]{2}'));
countryPusher(new Country ('Marshall Islands', '((969)[6-7][0-9])'));
countryPusher(new Country ('Martinique', '\d{5}'));
countryPusher(new Country ('Mauritania', 'STRNG_LTN_EXT_255'));
countryPusher(new Country ('Mauritius', '([0-9A-Z]\d{4})'));
countryPusher(new Country ('Mayotte', '\d{5}'));
countryPusher(new Country ('Mexico', '\d{5}'));
countryPusher(new Country ('Moldova', '\d{5}'));
countryPusher(new Country ('Monaco', '\d{5}'));
countryPusher(new Country ('Mongolia', '\d{5}'));
countryPusher(new Country ('Montserrat', '(?:MSR )(\d{4})'));
countryPusher(new Country ('Morocco', '\d{5}'));
countryPusher(new Country ('Mozambique', '\d{4}'));
countryPusher(new Country ('Myanmar', '\d{5}'));
countryPusher(new Country ('Nauru', 'STRNG_LTN_EXT_255'));
countryPusher(new Country ('Nepal', '\d{5}'));
countryPusher(new Country ('Netherlands', '[0-9]{4} [A-Z]{2}|[0-9]{4}[A-Z]{2}'));
countryPusher(new Country ('Nevis', 'STRNG_LTN_EXT_255'));
countryPusher(new Country ('New Caledonia', '\d{5}'));
countryPusher(new Country ('New Zealand', '\d{4}'));
countryPusher(new Country ('Nicaragua', '\d{5}'));
countryPusher(new Country ('Niger', '\d{4}'));
countryPusher(new Country ('Nigeria', '\d{6}'));
countryPusher(new Country ('Niue', 'STRNG_LTN_EXT_255'));
countryPusher(new Country ('Norfolk Island', '(2899)'));
countryPusher(new Country ('Norway', '\d{4}'));
countryPusher(new Country ('Oman', '\d{3}'));
countryPusher(new Country ('Pakistan', '\d{5}'));
countryPusher(new Country ('Palestine', '(\d{3}-\d{3})'));
countryPusher(new Country ('Panama', 'STRNG_LTN_EXT_255'));
countryPusher(new Country ('Papua New Guinea', '\d{3}'));
countryPusher(new Country ('Paraguay', '\d{4}'));
countryPusher(new Country ('Peru', '\d{5}'));
countryPusher(new Country ('Philippines', '\d{4}'));
countryPusher(new Country ('Poland', '[0-9]{2}[-]([0-9]){3}'));
countryPusher(new Country ('Portugal', '\d{4}((-)\d{3})'));
countryPusher(new Country ('Puerto Rico', '[0-9]{5}(?:-[0-9]{4})?'));
countryPusher(new Country ('Qatar', 'STRNG_LTN_EXT_255'));
countryPusher(new Country ('Republic of Montenegro', '\d{5}'));
countryPusher(new Country ('Republic of Serbia', '\d{5}'));
countryPusher(new Country ('Reunion', '\d{5}'));
countryPusher(new Country ('Romania', '\d{6}'));
countryPusher(new Country ('Russia', '\d{6}'));
countryPusher(new Country ('Rwanda', 'STRNG_LTN_EXT_255'));
countryPusher(new Country ('St Barthelemy', '\d{5}'));
countryPusher(new Country ('St Eustatius', 'STRNG_LTN_EXT_255'));
countryPusher(new Country ('St Helena', '(ASCN 1ZZ|TDCU 1ZZ|STHL 1ZZ)'));
countryPusher(new Country ('St Lucia', 'STRNG_LTN_EXT_255'));
countryPusher(new Country ('St Maarten', 'STRNG_LTN_EXT_255'));
countryPusher(new Country ('St Vincent & Grenadines', '(VC)(\d{4})'));
countryPusher(new Country ('Samoa', '(96799)'));
countryPusher(new Country ('San Marino', '(4789\d)'));
countryPusher(new Country ('Sao Tome & Principe', 'STRNG_LTN_EXT_255'));
countryPusher(new Country ('Saudi Arabia', '\d{5}([\-]\d{4})?'));
countryPusher(new Country ('Senegal', '\d{5}'));
countryPusher(new Country ('Seychelles', 'STRNG_LTN_EXT_255'));
countryPusher(new Country ('Sierra Leone', 'STRNG_LTN_EXT_255'));
countryPusher(new Country ('Singapore', '\d{6}'));
countryPusher(new Country ('Slovakia', '(\d{3} \d{2})|\d{5}'));
countryPusher(new Country ('Slovenia', '\d{4}'));
countryPusher(new Country ('Solomon Islands', 'STRNG_LTN_EXT_255'));
countryPusher(new Country ('Somalia', 'STRNG_LTN_EXT_255'));
countryPusher(new Country ('South Africa', '\d{4}'));
countryPusher(new Country ('Spain', '\d{5}'));
countryPusher(new Country ('Sri Lanka', '\d{5}'));
countryPusher(new Country ('Sudan', '\d{5}'));
countryPusher(new Country ('Suriname', 'STRNG_LTN_EXT_255'));
countryPusher(new Country ('Swaziland', '([A-Z]\d{3})'));
countryPusher(new Country ('Sweden', '(\d{3} \d{2})'));
countryPusher(new Country ('Switzerland', '\d{4}'));
countryPusher(new Country ('Syria', 'STRNG_LTN_EXT_255'));
countryPusher(new Country ('Taiwan', '(\d{3}[-]\d{2})|(\d{3})'));
countryPusher(new Country ('Tajikistan', '\d{3}'));
countryPusher(new Country ('Tanzania', '\d{5}'));
countryPusher(new Country ('Thailand', '\d{5}'));
countryPusher(new Country ('Togo', 'STRNG_LTN_EXT_255'));
countryPusher(new Country ('Tokelau', 'STRNG_LTN_EXT_255'));
countryPusher(new Country ('Tonga', 'STRNG_LTN_EXT_255'));
countryPusher(new Country ('Trinidad & Tobago', 'STRNG_LTN_EXT_255'));
countryPusher(new Country ('Tunisia', '\d{4}'));
countryPusher(new Country ('Turkey', '\d{5}'));
countryPusher(new Country ('Turkmenistan', '\d{6}'));
countryPusher(new Country ('Turks & Caicos Is', '(TKCA 1ZZ)'));
countryPusher(new Country ('Tuvalu', 'STRNG_LTN_EXT_255'));
countryPusher(new Country ('Uganda', 'STRNG_LTN_EXT_255'));
countryPusher(new Country ('United Kingdom', '([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9]?[A-Za-z])))) [0-9][A-Za-z]{2})'));
countryPusher(new Country ('Ukraine', '\d{5}'));
countryPusher(new Country ('United Arab Erimates', 'STRNG_LTN_EXT_255'));
countryPusher(new Country ('United States of America', '[0-9]{5}(?:-[0-9]{4})?'));
countryPusher(new Country ('Uruguay', '\d{5}'));
countryPusher(new Country ('Uzbekistan', '\d{6}'));
countryPusher(new Country ('Vanuatu', 'STRNG_LTN_EXT_255'));
countryPusher(new Country ('Venezuela', '\d{4}'));
countryPusher(new Country ('Vietnam', '^\\d{6}$'));
countryPusher(new Country ('Virgin Islands (Brit)', '(VG11)[0-6][0]'));
countryPusher(new Country ('Virgin Islands (USA)', '\d{5}'));
countryPusher(new Country ('Wallis & Futana Is', '((986)\d{2})'));
countryPusher(new Country ('Yemen', 'STRNG_LTN_EXT_255'));
countryPusher(new Country ('Zambia', '\d{5}'));
countryPusher(new Country ('Zimbabwe', 'STRNG_LTN_EXT_255'));





console.log(countryArr)