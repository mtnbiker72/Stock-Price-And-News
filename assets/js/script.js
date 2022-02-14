// set up general variables
var currentDay = document.querySelector("#currentDay");
currentDay.innerHTML = moment().format("dddd, MMMM Do YYYY <br> h:mm:ss a");
const searchButton = document.querySelector("#search-button");
var favoriteStocks = JSON.parse(localStorage.getItem("favoriteStocks"));

// Determine if favoriteStocks is empty or not
if (!favoriteStocks) {
    favoriteStocks = [];
}

// Get favorite stocks out of local storage when page is loaded
showFavoriteStocks(favoriteStocks);

// Set up the help modal
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

// Get top 10 gainers in today's market
const key3 = "ff68f94336a3d6f23d221fad0ad0c114";

// Fetch to the Postman mock server for testing
// fetch('https://8ab2843d-3f90-4753-b9ef-06f11ad750c0.mock.pstmn.io/api/v3/stock_market/gainers?apikey=' + key3)

// Fetch to financial modeling prep API
fetch('https://financialmodelingprep.com/api/v3/stock_market/gainers?apikey=' + key3)
    .then(function (response) {
        return response.json()
    })
    .then(function (topStocks) {
        showTopTen(topStocks)
    })

// Load top stocks into windows
function showTopTen(stock) {
    for (let i = 0; i < 10; i++) {
        var topStock = `<p class="title" onClick="getNews('${stock[i].symbol}')">${stock[i].symbol}</p>`
        var changePercentage = `<p class="subtitle" onClick="getNews('${stock[i].symbol}')">${stock[i].changesPercentage.toFixed(2)}%⬆</p>`
        document.querySelector("#title" + i).innerHTML = topStock;
        document.querySelector("#subtitle" + i).innerHTML = changePercentage;
    }
}

// Get the news from the previous fetch and use it to get news from Contextual Web Search
function getNews(topStock) {
    document.querySelector(".news-heading").innerHTML = "News content for: " + topStock;
    window.scrollTo(0, 0);
    fetch("https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI?q=" + topStock + "&pageNumber=1&pageSize=10&autoCorrect=true&fromPublishedDate=null&toPublishedDate=null", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
            "x-rapidapi-key": "7b71e725f5msh9f62bb1a43745dep1a87a8jsnefdb78a01e7e"
        }
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (stockNews) {
            showNews(stockNews);
        })
}

// Display Stock News for the Selected Top Gaining Stock
var newsTitle = document.querySelectorAll(".article-title")
var newsDescription = document.querySelectorAll(".article-description")

// Populate html with data from the API response
function showNews(stockNews) {
    var newsTitle = document.querySelector("#article-title")
    var newsDescription = document.querySelector("#article-description")
    var newsBody = document.querySelector("#article-body")
    newsTitle.innerHTML = stockNews.value[0].title
    newsDescription.innerHTML = stockNews.value[0].description;
    newsBody.innerHTML = stockNews.value[0].body;
}

// Display Stock News for the Favorites Buttons
function showNews(stockNews) {
    // var companyName = document.querySelector(".company-name");
    var newsTitle1 = document.querySelector(".headline1");
    var newsDescription1 = document.querySelector(".description1");
    var url1 = document.querySelector(".url1");
    var body1 = document.querySelector(".body1");

    var newsTitle2 = document.querySelector(".headline2");
    var newsDescription2 = document.querySelector(".description2");
    var url2 = document.querySelector(".url2");
    var body2 = document.querySelector(".body2");

    newsTitle1.innerHTML = stockNews.value[0].title
    newsDescription1.innerHTML = "Description: " + stockNews.value[0].description;
    url1.href = stockNews.value[0].url;
    url1.innerHTML = "Read More ...";
    body1.innerHTML = stockNews.value[0].body;

    newsTitle2.innerHTML = stockNews.value[1].title
    newsDescription2.innerHTML = "Description: " + stockNews.value[1].description;
    url2.href = stockNews.value[1].url;
    url2.innerHTML = "Read More ...";
    body2.innerHTML = stockNews.value[1].body;
}


// Once search button is pressed, go to getFavoriteStock function
searchButton.addEventListener("click", getFavoriteStockNews);

// Store 6 favorite stocks in local storage
function getFavoriteStockNews() {
    var favStock = $("input").val();
    // getNews(favStock);
    if (favoriteStocks.indexOf(favStock) === -1) {
        favoriteStocks.push(favStock);
        localStorage.setItem('favoriteStocks', JSON.stringify(favoriteStocks));
        showFavoriteStocks(favoriteStocks);
        getNews(favStock);
    }
}

// Update the favorite stock tile and, when clicked, get the news
function showFavoriteStocks() {
    for (let i = 0; i < 6; i++) {
        if (favoriteStocks[i]) {
            var favoriteStock = `<p class="title" onClick="getNews('${favoriteStocks[i]}')">${favoriteStocks[i]}</p>`;
            document.querySelector("#favorite-stock" + i).innerHTML = favoriteStock;
            document.querySelector("#favorite-stock" + i).style.visibility = 'visible';
        }
        else {
            document.querySelector("#favorite-stock" + i).style.visibility = 'hidden';
        }
    }
}

// Clears local storage
$('#clear').on('click', function () {
    localStorage.clear();
    $("#favorite-stock0").empty();
    $("#favorite-stock1").empty();
    $("#favorite-stock2").empty();
    $("#favorite-stock3").empty();
    $("#favorite-stock4").empty();
    $("#favorite-stock5").empty();
    favoriteStocks = [];
})
