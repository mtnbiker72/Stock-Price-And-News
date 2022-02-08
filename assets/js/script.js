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

var currentDay = document.querySelector("#currentDay")
currentDay.innerHTML = moment().format("dddd, MMMM Do YYYY <br> h:mm:ss a")

var modal = $('#help-modal')
var helpBtn = $('#helpBtn')
var span = $('#help-close')

helpBtn.on('click', function () {
    modal.addClass('is-active')
});

span.on('click', function () {
    modal.removeClass('is-active')
})

$(window).click(function (event) {
    if (event.target == modal) {
        modal.removeClass('is-active')
    }
})
// end modal

// Get top 10 gainers in today's market
const key3 = "ff68f94336a3d6f23d221fad0ad0c114";

fetch('https://financialmodelingprep.com/api/v3/stock_market/gainers?apikey=' + key3)
    .then(function (response) {
        return response.json()
    })
    .then(function (topStocks) {
        showTopTen(topStocks)
    })

function showTopTen(stock) {
    for (let i = 0; i < 10; i++) {
        var topStock = `<p class="title" onClick="getNews('${stock[i].symbol}')">${stock[i].symbol}</p>`
        document.querySelector("#top-stocks" + i).innerHTML = topStock;
    }
}

function getNews(stockSymbol) {
    // Get stock news from StockData
    var key2 = config.STOCK_DATA_KEY;
    fetch(`https://api.stockdata.org/v1/news/all?symbols=${stockSymbol}&filter_entities=true&language=en&api_token=` + key2)
        .then(function (response) {
            return response.json()
        })
        .then(function (stockNews) {
            showNews(stockNews)
        })
}

function showNews(stockNews) {
    document.querySelector(".article1").innerHTML = stockNews.data[0].entities[0].name;
    document.querySelector(".article2").innerHTML = stockNews.data[0].title;
    document.querySelector(".article3").innerHTML = stockNews.data[0].url;
}

//clear local storage (TODO: clear buttons created using custom stock tickers)
$('#clear').on('click', function(){
    localStorage.clear();
})
