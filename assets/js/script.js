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

helpBtn.on('click', function(){
    modal.addClass('is-active')
});

span.on('click', function(){
    modal.removeClass('is-active')
})

$(window).click(function(event){
    if (event.target == modal){
        modal.removeClass('is-active')
    }
})
// end modal

// Get the top 10 stocks from Yahoo
var key1 = config.YAHOO_KEY
fetch('https://yfapi.net/v1/finance/trending/US', {
    headers: {
        'accept': 'application/json',
        'X-API-KEY': key1
    }
})

    .then(function (response) {
        return response.json()
    })
    .then(function (topStocks) {
        showTopTen(topStocks)
    })

function showTopTen(stock) {
    document.querySelector("#top-stocks1").innerHTML = stock.finance.result[0].quotes[0].symbol;
    document.querySelector("#top-stocks2").innerHTML = stock.finance.result[0].quotes[1].symbol;
    document.querySelector("#top-stocks3").innerHTML = stock.finance.result[0].quotes[2].symbol;
    document.querySelector("#top-stocks4").innerHTML = stock.finance.result[0].quotes[3].symbol;
    document.querySelector("#top-stocks5").innerHTML = stock.finance.result[0].quotes[4].symbol;
    document.querySelector("#top-stocks6").innerHTML = stock.finance.result[0].quotes[5].symbol;
    document.querySelector("#top-stocks7").innerHTML = stock.finance.result[0].quotes[6].symbol;
    document.querySelector("#top-stocks8").innerHTML = stock.finance.result[0].quotes[7].symbol;
    document.querySelector("#top-stocks9").innerHTML = stock.finance.result[0].quotes[8].symbol;
    document.querySelector("#top-stocks10").innerHTML = stock.finance.result[0].quotes[9].symbol;
}


// Get stock news from StockData
var key2 = config.STOCK_DATA_KEY;
fetch('https://api.stockdata.org/v1/news/all?symbols=CMCSA&filter_entities=true&language=en&api_token=' + key2)
    .then(function (response) {
        return response.json()
    })
    .then(function (stockNews) {
        showNews(stockNews)
    })

function showNews(stockNews) {
    document.querySelector(".article1").innerHTML = stockNews.data[0].entities[0].name;
    document.querySelector(".article2").innerHTML = stockNews.data[0].title;
    document.querySelector(".article3").innerHTML = stockNews.data[0].url;
}

function showTopTen(stock) {
        document.querySelector(".top-stocks1").innerHTML = stock.finance.result[0].quotes[0].symbol;
        document.querySelector(".top-stocks2").innerHTML = stock.finance.result[0].quotes[1].symbol;
        document.querySelector(".top-stocks3").innerHTML = stock.finance.result[0].quotes[2].symbol;
        document.querySelector(".top-stocks4").innerHTML = stock.finance.result[0].quotes[3].symbol;
        document.querySelector(".top-stocks5").innerHTML = stock.finance.result[0].quotes[4].symbol;
        document.querySelector(".top-stocks6").innerHTML = stock.finance.result[0].quotes[5].symbol;
        document.querySelector(".top-stocks7").innerHTML = stock.finance.result[0].quotes[6].symbol;
    }

function getNews(stockName) {
        var stockEL = "";
        for (var i = 0; i < 9; i++) {
            stockEL += `<div onClick="getStockNews('${stockName[i]}')">${stockName[i]}</div>`
        }
        stockName.innerHTML = stockEl;
    }