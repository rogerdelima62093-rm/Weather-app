const countries={"BD": "Bangladesh", "BE": "Belgium", "BF": "Burkina Faso", "BG": "Bulgaria", "BA": "Bosnia and Herzegovina", "BB": "Barbados", "WF": "Wallis and Futuna", 
"BL": "Saint Barthelemy", "BM": "Bermuda", "BN": "Brunei", "BO": "Bolivia", "BH": "Bahrain", "BI": "Burundi", "BJ": "Benin", "BT": "Bhutan", "JM": "Jamaica", 
"BV": "Bouvet Island", "BW": "Botswana", "WS": "Samoa", "BQ": "Bonaire, Saint Eustatius and Saba ", "BR": "Brazil", "BS": "Bahamas", "JE": "Jersey", "BY": "Belarus", 
"BZ": "Belize", "RU": "Russia", "RW": "Rwanda", "RS": "Serbia", "TL": "East Timor", "RE": "Reunion", "TM": "Turkmenistan", "TJ": "Tajikistan", "RO": "Romania", 
"TK": "Tokelau", "GW": "Guinea-Bissau", "GU": "Guam", "GT": "Guatemala", "GS": "South Georgia and the South Sandwich Islands", "GR": "Greece", "GQ": "Equatorial Guinea",
"GP": "Guadeloupe", "JP": "Japan", "GY": "Guyana", "GG": "Guernsey", "GF": "French Guiana", "GE": "Georgia", "GD": "Grenada", "GB": "United Kingdom", "GA": "Gabon",
"SV": "El Salvador", "GN": "Guinea", "GM": "Gambia", "GL": "Greenland", "GI": "Gibraltar", "GH": "Ghana", "OM": "Oman", "TN": "Tunisia", "JO": "Jordan", "HR": "Croatia", 
"HT": "Haiti", "HU": "Hungary", "HK": "Hong Kong", "HN": "Honduras", "HM": "Heard Island and McDonald Islands", "VE": "Venezuela", "PR": "Puerto Rico", 
"PS": "Palestinian Territory", "PW": "Palau", "PT": "Portugal", "SJ": "Svalbard and Jan Mayen", "PY": "Paraguay", "IQ": "Iraq", "PA": "Panama", "PF": "French Polynesia", 
"PG": "Papua New Guinea", "PE": "Peru", "PK": "Pakistan", "PH": "Philippines", "PN": "Pitcairn", "PL": "Poland", "PM": "Saint Pierre and Miquelon", "ZM": "Zambia", 
"EH": "Western Sahara", "EE": "Estonia", "EG": "Egypt", "ZA": "South Africa", "EC": "Ecuador", "IT": "Italy", "VN": "Vietnam", "SB": "Solomon Islands", "ET": "Ethiopia",
"SO": "Somalia", "ZW": "Zimbabwe", "SA": "Saudi Arabia", "ES": "Spain", "ER": "Eritrea", "ME": "Montenegro", "MD": "Moldova", "MG": "Madagascar", "MF": "Saint Martin",
"MA": "Morocco", "MC": "Monaco", "UZ": "Uzbekistan", "MM": "Myanmar", "ML": "Mali", "MO": "Macao", "MN": "Mongolia", "MH": "Marshall Islands", "MK": "Macedonia", 
"MU": "Mauritius", "MT": "Malta", "MW": "Malawi", "MV": "Maldives", "MQ": "Martinique", "MP": "Northern Mariana Islands", "MS": "Montserrat", "MR": "Mauritania",
"IM": "Isle of Man", "UG": "Uganda", "TZ": "Tanzania", "MY": "Malaysia", "MX": "Mexico", "IL": "Israel", "FR": "France", "IO": "British Indian Ocean Territory",
"SH": "Saint Helena", "FI": "Finland", "FJ": "Fiji", "FK": "Falkland Islands", "FM": "Micronesia", "FO": "Faroe Islands", "NI": "Nicaragua", "NL": "Netherlands",
"NO": "Norway", "NA": "Namibia", "VU": "Vanuatu", "NC": "New Caledonia", "NE": "Niger", "NF": "Norfolk Island", "NG": "Nigeria", "NZ": "New Zealand", "NP": "Nepal",
"NR": "Nauru", "NU": "Niue", "CK": "Cook Islands", "XK": "Kosovo", "CI": "Ivory Coast", "CH": "Switzerland", "CO": "Colombia", "CN": "China", "CM": "Cameroon",
"CL": "Chile", "CC": "Cocos Islands", "CA": "Canada", "CG": "Republic of the Congo", "CF": "Central African Republic", "CD": "Democratic Republic of the Congo",
"CZ": "Czech Republic", "CY": "Cyprus", "CX": "Christmas Island", "CR": "Costa Rica", "CW": "Curacao", "CV": "Cape Verde", "CU": "Cuba", "SZ": "Swaziland",
"SY": "Syria", "SX": "Sint Maarten", "KG": "Kyrgyzstan", "KE": "Kenya", "SS": "South Sudan", "SR": "Suriname", "KI": "Kiribati", "KH": "Cambodia",
"KN": "Saint Kitts and Nevis", "KM": "Comoros", "ST": "Sao Tome and Principe", "SK": "Slovakia", "KR": "South Korea", "SI": "Slovenia", "KP": "North Korea",
"KW": "Kuwait", "SN": "Senegal", "SM": "San Marino", "SL": "Sierra Leone", "SC": "Seychelles", "KZ": "Kazakhstan", "KY": "Cayman Islands", "SG": "Singapore",
"SE": "Sweden", "SD": "Sudan", "DO": "Dominican Republic", "DM": "Dominica", "DJ": "Djibouti", "DK": "Denmark", "VG": "British Virgin Islands",
"DE": "Germany", "YE": "Yemen", "DZ": "Algeria", "US": "United States of America", "UY": "Uruguay", "YT": "Mayotte", "UM": "United States Minor Outlying Islands",
"LB": "Lebanon", "LC": "Saint Lucia", "LA": "Laos", "TV": "Tuvalu", "TW": "Taiwan", "TT": "Trinidad and Tobago", "TR": "Turkey", "LK": "Sri Lanka",
"LI": "Liechtenstein", "LV": "Latvia", "TO": "Tonga", "LT": "Lithuania", "LU": "Luxembourg", "LR": "Liberia", "LS": "Lesotho", "TH": "Thailand",
"TF": "French Southern Territories", "TG": "Togo", "TD": "Chad", "TC": "Turks and Caicos Islands", "LY": "Libya", "VA": "Vatican", "VC": "Saint Vincent and the Grenadines",
"AE": "United Arab Emirates", "AD": "Andorra", "AG": "Antigua and Barbuda", "AF": "Afghanistan", "AI": "Anguilla", "VI": "U.S. Virgin Islands", "IS": "Iceland",
"IR": "Iran", "AM": "Armenia", "AL": "Albania", "AO": "Angola", "AQ": "Antarctica", "AS": "American Samoa", "AR": "Argentina", "AU": "Australia", "AT": "Austria",
"AW": "Aruba", "IN": "India", "AX": "Aland Islands", "AZ": "Azerbaijan", "IE": "Ireland", "ID": "Indonesia", "UA": "Ukraine", "QA": "Qatar", "MZ": "Mozambique"};











const userTab = document.querySelector("[data-userWeather]");
const searchTab = document.querySelector("[data-searchWeather]");
const userContainer = document.querySelector(".weather-container");

const grantAccessContainer = document.querySelector(".grant-location-container");
const searchForm = document.querySelector("[data-searchForm]");
const loadingScreen =document.querySelector(".loading-container");
const userInfoContainer = document.querySelector(".user-info-container");

// intial varibale required

let currentTab=userTab;
const API_KEY="50e2d15714bf474fb8b153058242301";
currentTab.classList.add("current-tab");
getfromSessionStorage();

// one more work left
function switchTab(clickedTab){
    if(clickedTab!=currentTab){
        currentTab.classList.remove("current-tab");
        currentTab=clickedTab;
        currentTab.classList.add("current-tab");
        if(!searchForm.classList.contains("active")){
            // to check ki bhai tu searchfrom may nahi ahi and usma say yaa doo class hata doo
            userInfoContainer.classList.remove("active");
            grantAccessContainer.classList.remove("active");
            searchForm.classList.add("active");
        }
        else{
            // abh isma ulta hoga obviously 
            searchForm.classList.remove("active");
            userInfoContainer.classList.remove("active");
            // ab isma we are in your actual location weather tho if session new nahi hai tho cordinates use kero and local storage may hai 
            getfromSessionStorage();
        }
    }
}


 





userTab.addEventListener("click", ()=>{
    // pass click tab to input parameter;
    switchTab(userTab);
} );
searchTab.addEventListener("click", ()=>{
    // pass click tab to input parameter;
    switchTab(searchTab);
} );

// check if coordinates are already present in session storage
function getfromSessionStorage(){
    const localCoordinates = sessionStorage.getItem("user-coordinates");
    if(!localCoordinates){
        // cordinates nahi milla cordinate save nahi hai  tho grant location wali window ayegi
        grantAccessContainer.classList.add("active");
    }
    else{
        const coordinates = JSON.parse(localCoordinates);
        // we have cordinates tho info lani hai isko use ker k 
        fetchUserWeatherInfo(coordinates);
    }
    }


async function fetchUserWeatherInfo(coordinates){
    const {lat, lon} = coordinates;
    // make grantconatiner invisble 
    grantAccessContainer.classList.remove("active");
    //make loader visible 
    loadingScreen.classList.add("active");
    // abi api call for data 
    try {
        const response = await fetch(
            `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${lat},${lon}&aqi=no`
        );
        const data = await response.json();
        loadingScreen.classList.remove("active");
        userInfoContainer.classList.add("active");
        renderWeatherInfo(data);
    } 
    catch (error) {
        loadingScreen.classList.remove("active");
        console.log("Error in getting lat long ");
    }
    
}
    

function renderWeatherInfo(weatherInfo){
    const cityName = document.querySelector("[data-cityName]");
    const countryIcon = document.querySelector("[data-countryIcon]");
    const desc = document.querySelector("[data-weatherDesc]");
    const weatherIcon = document.querySelector("[dataWeatherIcon]");
    const temp = document.querySelector("[data-temp]");
    const windspeed = document.querySelector("[data-windspeed]");
    const humidity = document.querySelector("[data-humidity]");
    const cloudiness = document.querySelector("[data-cloudiness]");

    // fetch values from weatherinfo say values nikalni hai 
    cityName.innerText =  weatherInfo?.location?.name;


    let country = weatherInfo?.location?.country;
    let coutrycode = Object.keys(countries).find(key =>
        countries[key] === country);
    countryIcon.src = `https://flagcdn.com/144x108/${coutrycode.toLowerCase()}.png`;


    // have to do country flag 
    // have to add weather discription
    //have to add weather icon
    temp.innerText = `${weatherInfo?.current?.temp_c}℃`;
    windspeed.innerText = `${weatherInfo?.current?.wind_kph}m/s`;
    humidity.innerText = `${weatherInfo?.current?.humidity}%`;
    cloudiness.innerText = `${weatherInfo?.current?.cloud}%`;

}

function getLocation(){
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else{
        //H.w. show an alert for no gelolocation support available
        grantAccessButton.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position){
    const userCoordinates = {
        lat: position.coords.latitude,
        lon: position.coords.longitude,
    }
    sessionStorage.setItem("user-coordinates", JSON.stringify(userCoordinates));
    fetchUserWeatherInfo(userCoordinates);
}

const  grantAccessButton = document.querySelector("[data-grantAccess]");
grantAccessButton.addEventListener("click", getLocation);

const searchInput = document.querySelector("[data-searchInput]");
searchForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    let cityName = searchInput.value;
    if (cityName === ""){
        return ;
    }
    else{
        fetchSearchWeatherInfo(cityName);
    }
})

async function fetchSearchWeatherInfo(city){
    loadingScreen.classList.add("active");
    userInfoContainer.classList.remove("active");
    grantAccessContainer.classList.remove("active");
    
    try {
        const response = await fetch(
            `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no
            `
        );
        const data=await response.json();
        loadingScreen.classList.remove("active");
        userInfoContainer.classList.add("active");
        renderWeatherInfo(data);

        
    } catch (error) {
        console.log("geeting error in fetchSearchWeatherInfo");
    }

}