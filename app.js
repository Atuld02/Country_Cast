//Object to store country data
const countryData = {};

//Object to map countries name with index
const countryMap = {};

// Calling API
fetch(`https://restcountries.eu/rest/v2/all`)
.then(res => res.json())
.then(data => filterData(data)) 
.catch(error => console.log(error));

//Filtering Data
const filterData = (data) => {
    for (let i = 0; i < 250; i++) {
        countryData[""+i] = {
            name : data[i].name,
	        alpha3Code: data[i].alpha3Code,
            area : data[i].area,
	        capital : data[i].capital,
            population : data[i].population,
            currencies: [...data[i].currencies],
	        flag : data[i].flag,
	        region : data[i].region,
	        languages: [...data[i].languages]
        }
        // Mapping country name with index and storing in countryMap Object
        countryMap[countryData[i].name] = i;
    }
}

//Taking search value from user
const searchInput = document.querySelector('#search__bar').value;
console.log(searchInput)

console.log(countryMap[searchInput]); //undefined
console.log(Object.values(countryData)); //undefined