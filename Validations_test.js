Feature("Validations");

Scenario(
  "Rent page - validation for all fields is working if the user doesn't fill out the form and clicks Rent",
  ({ I, searchPage, selectors }) => {
    I.amOnPage("");
    searchPage.searchForAModel("Toyota Aygo");
    searchPage.clickRentButtonOnSearchResults();
    I.click(selectors.rentButtonOnForm);
		I.see("Name is required");
		I.see("Last name is required");
		I.see("Email is required");
		I.see("Card number is required");
		I.seeAttributesOnElements("//form[@id='rent_form']/h5[1]", { class: "alert alert-danger"});
		I.seeAttributesOnElements("//form[@id='rent_form']/h5[2]", { class: "alert alert-danger"});
		I.seeAttributesOnElements("//form[@id='rent_form']/h5[3]", { class: "alert alert-danger"});
		I.seeAttributesOnElements("//form[@id='rent_form']/h5[4]", { class: "alert alert-danger"});
  }
);
