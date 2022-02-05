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


showTrendingStocks(stockList);
fetch('https://yfapi.net/data/2.5/weather?q=' + cityName + '&appid=' + apiKey)
    .then(function (response) {
        return response.json()
    }) // Convert data to json
    .then(function (weatherData) {
       getWeatherData(weatherData);
    })