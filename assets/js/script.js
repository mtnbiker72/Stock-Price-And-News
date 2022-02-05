
var currentDay = document.querySelector("#currentDay")

currentDay.innerHTML = moment().format("dddd, MMMM Do YYYY <br> h:mm:ss a")
//  Emerald - Create template in html
// Emerald - moment.js time and date (or equivalent)

//  Heather - Call stock API to top 10 trending stock in US market
// stretch goal - allow them to chose their market
// display stocks and company names (as drop down list) 
// make them selectable

// Area of input for user to lookup their stock symbol
// Autocomplete stock symbol lookup
// Store in local storage recently searched stocks
// Stretch goal - allow user to input company name and convert to ticker symbol

// Heather - Call news API with selected stock as parameters
// Present the news articles
// Stretch goal - link to the article

// Stretch - ability to remove stocks from favorites


// Modal popup for search query examples "need help searching" with close button

<<<<<<< HEAD
fetch('https://yfapi.net/v1/finance/trending/US', {
    headers: {
    'accept': 'application/json',
    'X-API-KEY': 'DR9oOHsUiU4aXTPgJZ4L945Jr9axhdZoTVlM2sd1'
    }})

.then(function (response) {
    return response.json()
    })
.then(function (topStocks) {
   showTopTen(topStocks) 
})

function showTopTen(stock) {
    document.querySelector(".top-stocks1").innerHTML = stock.finance.result[0].quotes[0].symbol;
    document.querySelector(".top-stocks2").innerHTML = stock.finance.result[0].quotes[1].symbol;
    document.querySelector(".top-stocks3").innerHTML = stock.finance.result[0].quotes[2].symbol;
    document.querySelector(".top-stocks4").innerHTML = stock.finance.result[0].quotes[3].symbol;
    document.querySelector(".top-stocks5").innerHTML = stock.finance.result[0].quotes[4].symbol;
    document.querySelector(".top-stocks6").innerHTML = stock.finance.result[0].quotes[5].symbol;
    document.querySelector(".top-stocks7").innerHTML = stock.finance.result[0].quotes[6].symbol;
}
=======

showTrendingStocks(stockList);
fetch('https://yfapi.net/data/2.5/weather?q=' + cityName + '&appid=' + apiKey)
    .then(function (response) {
        return response.json()
    }) // Convert data to json
    .then(function (weatherData) {
       getWeatherData(weatherData);
    })
>>>>>>> 1b76c56faab1b188d784e8a5c09eeb32f84439d2
