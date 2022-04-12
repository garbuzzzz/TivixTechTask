const { I, selectors } = inject();

module.exports = {
  searchForAModel(model) {
		I.see("Please fill pickup and drop off dates");
		I.click(selectors.countrySelect);
		I.selectOption(selectors.countrySelect, "Germainy");
		I.click(selectors.countrySelect);
		I.fillField(selectors.modelInput, model);
		I.fillField(selectors.pickupInput, "02052022");
		I.fillField(selectors.dropoffInput, "02062022");
		I.click(selectors.searchButton);
  },

	clickRentButtonOnSearchResults() {
		I.click(selectors.rentButtonInTable);
    I.see("License plate: 811 LCX");
    I.click(selectors.rentButtonOnCarCard);
	}
};
