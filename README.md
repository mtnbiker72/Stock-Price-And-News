# Project1-Finance

User Story:
AS AN investor
I WANT to see the trending stocks with news headlines about the company
SO THAT I can plan to buy shares accordingly
AS AN investor
I WANT to see my favorite stocks
SO THAT I can view recent news for them
https://www.investopedia.com/ask/answers/155.asp (Why we think these two go together)

Acceptance Criteria:
GIVEN that I am looking for investment advice,
WHEN I open the app
THEN the top 10 trending companies are visible, along with their stocks
WHEN i input a specific company's name
THEN that name and its stocks is added to the list as well as local storage
WHEN I click on one of said companies' names
THEN a series of news stories are generated about that company, within the last week/month or so

We used the APIS 'Financial modeling prep' (https://financialmodelingprep.com)

(Since the free version is rate limited, we used Postman's mock-server for testing)

 'Contextual Web Search' (https://contextualwebsearch-websearch-v1.p.rapidapi.com)'

When the user opens the page, the top ten 'gaining' stocks are fetched into the code, then their stock symbols (i.e. PTON for Peloton) are used as the text for a series of buttons.
When the user clicks one of these buttons, news stories about that company/stock are displayed on the bottom of the page.

In addition to these ten stocks, the user has the ability to add a custom stock they want to track via a search input (a modal in the corner of the screen gives instructions on looking up stock symbols via a link)
These new stocks are tracked in local storage (which the user can clear at any time), meaning they stay constant on page load even if the top gaining stocks are different every day.

Here's what it looks like:

Our page link:
