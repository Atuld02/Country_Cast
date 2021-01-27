//Object to store country data
let countryData = {};
const countryMap = {};
let it = 0;

//Filtering Data
const filterData = (data) => { 
    countryData.name        =   data[0].name;
    countryData.alpha3Code  =   data[0].alpha3Code;
    countryData.area        =   data[0].area;
    countryData.capital     =   data[0].capital;
    countryData.population  =   data[0].population;
    countryData.currencies  =   [...data[0].currencies];
    countryData.flag        =   data[0].flag;
    countryData.region      =   data[0].region;
    countryData.languages   =   [...data[0].languages];
}
        

const getData = async (query) => {
    try {
        await fetch(`https://restcountries.eu/rest/v2/name/${query}?fullText=true`)
        .then((res) => res.json())
        .then(data => filterData(data)) 
    } catch (err) {
        alert(err);
    }
}




//Taking search value from user
const searchInput = document.querySelector('#search__bar').value;
getData(searchInput);
console.log(countryData['flag'])





