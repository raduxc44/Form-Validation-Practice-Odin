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

        //Country list generator

        class Country {

            constructor(name, zipFormat)
        
            {
                this.name = name;
                this.zipFormat = zipFormat;
            }
        
        }        

        let countryArr = [
            new Country ('Afghanistan', new RegExp("^\\d{4}$")),
            new Country ('Albania', new RegExp('\\d{4}')),
            new Country ('American Samoa', new RegExp('\\d{5}')),
            new Country ('Andorra', new RegExp('(?:AD)(\\d{3})')),
            new Country ('Antigua & Barbuda', new RegExp('\\d{5}')),
            new Country ('Argentina', new RegExp('([A-Z]\\d{4}[A-Z]{3})|([A-Z]\\d{4})')),
            new Country ('Armenia', new RegExp('(\\d{4})|(\\d{6})')),
            new Country ('Aruba', new RegExp('')),
            new Country ('Australia', new RegExp('\\d{4}')),
            new Country ('Austria', new RegExp('\\d{4}')),
            new Country ('Azerbaijan', new RegExp('(AZ) (\\d{4})')),
            new Country ('Bahamas', new RegExp('')),
            new Country ('Bahrain', new RegExp('\\d{3}\d?')),
            new Country ('Bangladesh', new RegExp('\\d{4}')),
            new Country ('Barbados', new RegExp('(?:BB)(\\d{5})')),
            new Country ('Belarus', new RegExp('\\d{6}')),
            new Country ('Belgium', new RegExp('\\d{4}')),
            new Country ('Belize', new RegExp('')),
            new Country ('Benin', new RegExp('')),
            new Country ('Bermuda', new RegExp('[A-Z]{2} \\d{2}')),
            new Country ('Bhutan', new RegExp('\\d{5}')),
            new Country ('Bolivia', new RegExp('')),
            new Country ('Bonaire', new RegExp('')),
            new Country ('Bosnia & Herzegovina', new RegExp('\\d{5}')),
            new Country ('Botswana', new RegExp('')),
            new Country ('Brazil', new RegExp('[0-9]{5}-[0-9]{3}')),
            new Country ('Brunei', new RegExp('[A-Z]{2}\\d{4}')),
            new Country ('Bulgaria', new RegExp("^\\d{4}$")),
            new Country ('Burkina Faso', new RegExp('')),
            new Country ('Burundi', new RegExp('')),
            new Country ('Cambodia', new RegExp('\\d{5}')),
            new Country ('Cameroon', new RegExp('')),
            new Country ('Canada', new RegExp(''),
            new Country ('Cayman Islands', new RegExp('[K][Y][0-9]{1}[-]([0-9]){4}')),
            new Country ('Central African Republic', new RegExp('')),
            new Country ('Chad', new RegExp('')),
            new Country ('Chile', new RegExp('\\d{7}')),
            new Country ('China', new RegExp('\\d{6}')),
            new Country ('Christmas Island"', new RegExp('(6798)')),
            new Country ('Cocos Island', new RegExp('(6799)')),
            new Country ('Colombia', new RegExp('\\d{6}')),
            new Country ('Comoros', new RegExp('')),
            new Country ('Congo', new RegExp('')),
            new Country ('Cook Islands', new RegExp('')),
            new Country ('Costa Rica', new RegExp('\\d{5}')),
            new Country ('Cote D\'voire', new RegExp('')),
            new Country ('Croatia', new RegExp('\\d{5}')),
            new Country ('Cuba', new RegExp('(?:CP)(\\d{5})')),
            new Country ('Curacao', new RegExp('')),
            new Country ('Cyprus', new RegExp('\\d{4}')),
            new Country ('Czech Republic', new RegExp('[0-9]{3} [0-9]{2}|[0-9]{5}')),
            new Country ('Denmark', new RegExp('\\d{4}')),
            new Country ('Djibouti', new RegExp('')),
            new Country ('Dominica', new RegExp('')),
            new Country ('Dominican Republic', new RegExp('\\d{5}')),
            new Country ('Ecuador', new RegExp('\\d{6}')),
            new Country ('Egypt', new RegExp('\\d{5}')),
            new Country ('El Salvador', new RegExp('((CP) \\d{4})')),
            new Country ('Equatorial Guinea', new RegExp('')),
            new Country ('Eritrea', new RegExp('')),
            new Country ('Estonia', new RegExp('\\d{5}')),
            new Country ('Ethiopia', new RegExp('\\d{4}')),
            new Country ('Falkland Islands', new RegExp('(FIQQ 1ZZ)')),
            new Country ('Faroe Islands', new RegExp('\\d{3}')),
            new Country ('Fiji', new RegExp('')),
            new Country ('Finland', new RegExp('\\d{5}')),
            new Country ('France', new RegExp('\\d{5}')),
            new Country ('French Guiana', new RegExp('\\d{5}')),
            new Country ('French Polynesia', new RegExp('((987)\\d{2})')),
            new Country ('French Southern Ter', new RegExp('((984)\\d{2})')),
            new Country ('Gabon', new RegExp('')),
            new Country ('Gambia', new RegExp('')),
            new Country ('Georgia', new RegExp('\\d{4}')),
            new Country ('Germany', new RegExp('\\d{5}')),
            new Country ('Ghana', new RegExp('')),
            new Country ('Gibraltar', new RegExp('(GX11 1AA)'))),
            new Country ('Greece', new RegExp('(\\d{3}) \\d{2}|\\d{5}')),
            new Country ('Greenland', new RegExp('\\d{4}')),
            new Country ('Grenada', new RegExp('')),
            new Country ('Guadeloupe', new RegExp('\\d{5}')),
            new Country ('Guam', new RegExp('((969)[1-3][0-2])')),
            new Country ('Guatemala', new RegExp('\\d{5}')),
            new Country ('Guinea', new RegExp('\\d{3}')),
            new Country ('Guyana', new RegExp('')),
            new Country ('Haiti', new RegExp('(?:HT)(\\d{4})')),
            new Country ('Honduras', new RegExp('\\d{5}')),
            new Country ('Hong Kong', new RegExp('(999077)')),
            new Country ('Hungary', new RegExp('\\d{4}')),
            new Country ('Iceland', new RegExp('\\d{3}')),
            new Country ('Indonesia', new RegExp('\\d{5}')),
            new Country ('India', new RegExp('\\d{6}')),
            new Country ('Iran', new RegExp('\\d{5}[\-]?\\d{5}')),
            new Country ('Iraq', new RegExp('\\d{5}')),
            new Country ('Ireland', new RegExp('')),
            new Country ('Isle of Man', new RegExp('(IM)([0-9][0-9A-HJKPS-UW]?|[A-HK-Y][0-9][0-9ABEHMNPRV-Y]?) [0-9][ABD-HJLNP-UW-Z]{2}')),
            new Country ('Israel', new RegExp('\\d{7}')),
            new Country ('Italy', new RegExp('\\d{5}')),
            new Country ('Jamaica', new RegExp('(JM)[A-Z]{3}\\d{2}')),
            new Country ('Japan', new RegExp('(\\d{3}-\\d{4})')),
            new Country ('Jordan', new RegExp('\\d{5}')),
            new Country ('Kazakhstan', new RegExp('\\d{6}')),
            new Country ('Kenya', new RegExp('\\d{5}')),
            new Country ('Kiribati', new RegExp('')),
            new Country ('Korea North', new RegExp('')),
            new Country ('Korea South', new RegExp('')),
            new Country ('Kuwait', new RegExp('\\d{5}')),
            new Country ('Kyrgyzstan', new RegExp('\\d{6}')),
            new Country ('Laos', new RegExp('^\\d{5}$')),
            new Country ('Latvia', new RegExp('[L]{1}[V]{1}[-]([0-9]){4}')),
            new Country ('Lebanon', new RegExp('\\d{4}( \\d{4})?')),
            new Country ('Lesotho', new RegExp('\\d{3}')),
            new Country ('Liberia', new RegExp('\\d{4}')),
            new Country ('Libya', new RegExp('')),
            new Country ('Liechtenstein', new RegExp('\\d{4}')),
            new Country ('Lithuania', new RegExp('((?:LT)[\-])?(\\d{5})')),
            new Country ('Luxembourg', new RegExp('((?:L)[\-])?(\\d{4})')),
            new Country ('Macedonia', new RegExp('\\d{4}')),
            new Country ('Madagascar', new RegExp('\\d{3}')),
            new Country ('Malaysia', new RegExp('\\d{5}')),
            new Country ('Malawi', new RegExp('')),
            new Country ('Maldives', new RegExp('\\d{5}')),
            new Country ('Mali', new RegExp('')),
            new Country ('Malta', new RegExp('[A-Z]{3} [0-9]{4}|[A-Z]{2}[0-9]{2}|[A-Z]{2} [0-9]{2}|[A-Z]{3}[0-9]{4}|[A-Z]{3}[0-9]{2}|[A-Z]{3} [0-9]{2}')),
            new Country ('Marshall Islands', new RegExp('((969)[6-7][0-9])')),
            new Country ('Martinique', new RegExp('\\d{5}')),
            new Country ('Mauritania', new RegExp('')),
            new Country ('Mauritius', new RegExp('([0-9A-Z]\\d{4})')),
            new Country ('Mayotte', new RegExp('\\d{5}')),
            new Country ('Mexico', new RegExp('\\d{5}')),
            new Country ('Moldova', new RegExp('\\d{5}')),
            new Country ('Monaco', new RegExp('\\d{5}')),
            new Country ('Mongolia', new RegExp('\\d{5}')),
            new Country ('Montserrat', new RegExp('(?:MSR )(\\d{4})')),
            new Country ('Morocco', new RegExp('\\d{5}')),
            new Country ('Mozambique', new RegExp('\\d{4}')),
            new Country ('Myanmar', new RegExp('\\d{5}')),
            new Country ('Nauru', new RegExp('')),
            new Country ('Nepal', new RegExp('\\d{5}')),
            new Country ('Netherlands', new RegExp('[0-9]{4} [A-Z]{2}|[0-9]{4}[A-Z]{2}')),
            new Country ('Nevis', new RegExp('')),
            new Country ('New Caledonia', new RegExp('\\d{5}')),
            new Country ('New Zealand', new RegExp('\\d{4}')),
            new Country ('Nicaragua', new RegExp('\\d{5}')),
            new Country ('Niger', new RegExp('\\d{4}')),
            new Country ('Nigeria', new RegExp('\\d{6}')),
            new Country ('Niue', new RegExp('')),
            new Country ('Norfolk Island', new RegExp('(2899)')),
            new Country ('Norway', new RegExp('\\d{4}')),
            new Country ('Oman', new RegExp('\\d{3}')),
            new Country ('Pakistan', new RegExp('\\d{5}')),
            new Country ('Palestine', new RegExp('(\\d{3}-\\d{3})')),
            new Country ('Panama', new RegExp('')),
            new Country ('Papua New Guinea', new RegExp('\\d{3}')),
            new Country ('Paraguay', new RegExp('\\d{4}')),
            new Country ('Peru', new RegExp('\\d{5}')),
            new Country ('Philippines', new RegExp('\\d{4}')),
            new Country ('Poland', new RegExp('[0-9]{2}[-]([0-9]){3}')),
            new Country ('Portugal', new RegExp('\\d{4}((-)\\d{3})')),
            new Country ('Puerto Rico', new RegExp('[0-9]{5}(?:-[0-9]{4})?')),
            new Country ('Qatar', new RegExp('')),
            new Country ('Republic of Montenegro', new RegExp('\\d{5}')),
            new Country ('Republic of Serbia', new RegExp('\\d{5}')),
            new Country ('Reunion', new RegExp('\\d{5}')),
            new Country ('Romania', new RegExp('\\d{6}')),
            new Country ('Russia', new RegExp('\\d{6}')),
            new Country ('Rwanda', new RegExp('')),
            new Country ('St Barthelemy', new RegExp('\\d{5}')),
            new Country ('St Eustatius', new RegExp('')),
            new Country ('St Helena', new RegExp('')),
            new Country ('St Lucia', new RegExp('')),
            new Country ('St Maarten', new RegExp('')),
            new Country ('St Vincent & Grenadines', new RegExp('(VC)(\\d{4})')),
            new Country ('Samoa', new RegExp('(96799)')),
            new Country ('San Marino', new RegExp('(4789\d)')),
            new Country ('Sao Tome & Principe', new RegExp('')),
            new Country ('Saudi Arabia', new RegExp('\\d{5}([\-]\\d{4})?')),
            new Country ('Senegal', new RegExp('\\d{5}')),
            new Country ('Seychelles', new RegExp('')),
            new Country ('Sierra Leone', new RegExp('')),
            new Country ('Singapore', new RegExp('\\d{6}')),
            new Country ('Slovakia', new RegExp('(\\d{3} \\d{2})|\\d{5}')),
            new Country ('Slovenia', new RegExp('\\d{4}')),
            new Country ('Solomon Islands', new RegExp('')),
            new Country ('Somalia', new RegExp('')),
            new Country ('South Africa', new RegExp('\\d{4}')),
            new Country ('Spain', new RegExp('\\d{5}')),
            new Country ('Sri Lanka', new RegExp('\\d{5}')),
            new Country ('Sudan', new RegExp('\\d{5}')),
            new Country ('Suriname', new RegExp('')),
            new Country ('Swaziland', new RegExp('([A-Z]\\d{3})')),
            new Country ('Sweden', new RegExp('(\\d{3} \\d{2})')),
            new Country ('Switzerland', new RegExp('\\d{4}')),
            new Country ('Syria', new RegExp('')),
            new Country ('Taiwan', new RegExp('(\\d{3}[-]\\d{2})|(\\d{3})')),
            new Country ('Tajikistan', new RegExp('\\d{3}')),
            new Country ('Tanzania', new RegExp('\\d{5}')),
            new Country ('Thailand', new RegExp('\\d{5}')),
            new Country ('Togo', new RegExp('')),
            new Country ('Tokelau', new RegExp('')),
            new Country ('Tonga', new RegExp('')),
            new Country ('Trinidad & Tobago', new RegExp('')),
            new Country ('Tunisia', new RegExp('\\d{4}')),
            new Country ('Turkey', new RegExp('\\d{5}')),
            new Country ('Turkmenistan', new RegExp('\\d{6}')),
            new Country ('Turks & Caicos Is', new RegExp('(TKCA 1ZZ)')),
            new Country ('Tuvalu', new RegExp('')),
            new Country ('Uganda', new RegExp('')),
            new Country ('United Kingdom', new RegExp('([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9]?[A-Za-z])))) [0-9][A-Za-z]{2})')),
            new Country ('Ukraine', new RegExp('\\d{5}')),
            new Country ('United Arab Erimates', new RegExp('')),
            new Country ('United States of America', new RegExp('[0-9]{5}(?:-[0-9]{4})?')),
            new Country ('Uruguay', new RegExp('\\d{5}')),
            new Country ('Uzbekistan', new RegExp('\\d{6}')),
            new Country ('Vanuatu', new RegExp('')),
            new Country ('Venezuela', new RegExp('\\d{4}')),
            new Country ('Vietnam', new RegExp('^\\d{6}$')),
            new Country ('Virgin Islands (Brit)', new RegExp('(VG11)[0-6][0]')),
            new Country ('Virgin Islands (USA)', new RegExp('\\d{5}')),
            new Country ('Wallis & Futana Is', new RegExp('((986)\\d{2})')),
            new Country ('Yemen', new RegExp('')),
            new Country ('Zambia', new RegExp('\\d{5}')),
            new Country ('Zimbabwe', new RegExp(''))
        ];
            
            
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
                console.log(countryInput.value)

            } 
        };
        // Zipcode check

        function zipCheck() {

            
            for(let i = 0; i < countryArr.length; i++) {
                
                if(countryInput.value == countryArr[i].name) {

                    // Valid input functionality

                    let zipValue = countryArr[i].zipFormat
                    console.log(zipValue)
                    console.log(zipInput.value)

                    const ok = zipValue.exec(zipInput.value)
                    console.log(ok)
                    

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

            
            

        }

    }
}
let validator = new validationObj;
let form = document.getElementById('form');
window.addEventListener('load', (validator.inputCheck));
let submitButt = document.getElementById('submit');