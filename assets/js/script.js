var currentDay = document.querySelector("#currentDay")

currentDay.innerHTML = moment().format("dddd, MMMM Do YYYY <br> h:mm:ss a")
