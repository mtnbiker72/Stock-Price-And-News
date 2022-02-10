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

var currentDay = document.querySelector("#currentDay");
currentDay.innerHTML = moment().format("dddd, MMMM Do YYYY <br> h:mm:ss a");
const searchButton = document.querySelector("#search-button");
var favoriteStocks = JSON.parse(localStorage.getItem("favoriteStocks"));

// Determine if favoriteStocks is empty or not
if (!favoriteStocks) {
    favoriteStocks = [];
}

showFavoriteStocks(favoriteStocks);

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

fetch('https://8ab2843d-3f90-4753-b9ef-06f11ad750c0.mock.pstmn.io/api/v3/stock_market/gainers?apikey=' + key3)
    // fetch('https://financialmodelingprep.com/api/v3/stock_market/gainers?apikey=' + key3)
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

function getNews(topStock) {
    fetch("https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI?q=" + topStock + "&pageNumber=1&pageSize=10&autoCorrect=true&fromPublishedDate=null&toPublishedDate=null", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
            "x-rapidapi-key": "7b71e725f5msh9f62bb1a43745dep1a87a8jsnefdb78a01e7e"
        }
    })
        .then(function (response) {
            return response.json()
        })
        .then(function (stockNews) {
            showNews(stockNews)
        })
}

function showNews(stockNews) {
    document.querySelector(".article1-1").innerHTML = stockNews.value[0].title
    document.querySelector(".article1-2").innerHTML = stockNews.value[0].description;
    document.querySelector(".article1-2").innerHTML = stockNews.value[0].url;
    document.querySelector(".article2-1").innerHTML = stockNews.value[1].title
    document.querySelector(".article2-2").innerHTML = stockNews.value[1].description;
    document.querySelector(".article2-2").innerHTML = stockNews.value[1].url;
}

// document.addEventListener("click", function(event) {
//     console.log(event.target)
//     if (event.target.classList.contains("title")) {
//     // alert ("I have been clicked")   
//     document.location.replace("./newspage.html")
//     }
//     })

// Once search button is pressed, go to getFavoriteStock function
searchButton.addEventListener("click", getFavoriteStockNews);

function getFavoriteStockNews() {
    var favStock = $("input").val();
    // getNews(favStock);
    if (favoriteStocks.indexOf(favStock) === -1) {
        favoriteStocks.push(favStock);
        localStorage.setItem('favoriteStocks', JSON.stringify(favoriteStocks));
        showFavoriteStocks(favoriteStocks);
    }
}


// Update the favorite stock tile and, when clicked, get the news
function showFavoriteStocks() {
    for (let i = 0; i < 4; i++) {
        var favoriteStock = `<p class="title" onClick="getNews('${favoriteStocks[i]}')">${favoriteStocks[i]}</p>`
        document.querySelector("#favorite-stock" + i).innerHTML = favoriteStock;
    }
}

// Clears local storage
$('#clear').on('click', function () {
    localStorage.clear();
    $("#favorite-stock0").empty();
    $("#favorite-stock1").empty();
    $("#favorite-stock2").empty();
    $("#favorite-stock3").empty();
    favoriteStocks = [];
})

