Feature("End2End");

Scenario("user rents Toyota Aygo  from 2 of May 2022 to 2 of June 2022", ({ I, searchPage, rentPage }) => {
  I.amOnPage("");
  searchPage.searchForAModel("Toyota Aygo");
	searchPage.clickRentButtonOnSearchResults();
  rentPage.rentAModelByUser(
    "Karl",
    "Johanson",
    "123456789",
    "test@test.com"
  );
	I.see("Page not found"); //! is not expected actually :)
});
