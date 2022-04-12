Feature("Smoke tests");

Scenario("Search results are visible after searching", ({ I, searchPage }) => {
  I.amOnPage("");
  searchPage.searchForAModel("Volkswagen Touran");
	I.seeElement("#search-results");
	I.see("384 OIC"); // check some specific data returned from the server based on the car model
});

Scenario("Personal data form is opened after clicking on Rent! button on a Car card", ({ I, searchPage }) => {
  I.amOnPage("");
  searchPage.searchForAModel("Toyota Aygo");
  searchPage.clickRentButtonOnSearchResults();
	I.seeElement("#rent_form");
});


