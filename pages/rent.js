const { I, selectors } = inject();

module.exports = {
  rentAModelByUser(name, lastName, cardNumber, email) {
    I.see(selectors.formVisibility);
    I.fillField(selectors.formNameInput, name);
    I.fillField(selectors.formLastNameInput, lastName);
    I.fillField(selectors.formCardNumberInput, cardNumber);
    I.fillField(selectors.formEmailInput, email);
    I.click(selectors.rentButtonOnForm);
  },
};
