class BookYourTrip {
  // Locators
  getOneWayRadio() {
    return cy.get("[value='One way']");
  }
  getRoundTripRaido() {
    return cy.get('[value="Round trip"]');
  }
  getCabinClass() {
    return cy.get(".select > select").eq(0);
  }
  getFromDropDown() {
    return cy.get(".select > select").eq(1);
  }
  getFromDate() {
    return cy.get('[placeholder="MM/DD/YY"]').eq(0);
  }
  getReturnDate() {
    return cy.get('[placeholder="MM/DD/YY"]').eq(1);
  }
  getToDate() {
    return cy.get('[placeholder="MM/DD/YY"]').eq(1);
  }
  getToDropDown() {
    return cy.get(".select > select").eq(2);
  }
  getFirstThreeDropDowns() {
    return cy.get(".select").then(($el) => {
      return Cypress.$($el).slice(0, 3).toArray();
    });
  }
  getDepartAndReturnDate() {
    return cy.get(".label").then(($el) => {
      return Cypress.$($el).slice(4, 6).toArray();
    });
  }
  getNumOfPassangers() {
    return cy.get(":nth-child(7) > .select > select");
  }
  getFirstPassanger() {
    return cy.get(":nth-child(8) > .select > select");
  }
  getBookButton() {
    return cy.get(".Button_c_button__TmkRS");
  }
  getDepart() {
    return cy.get(".is-underlined");
  }
  getDestination() {
    return cy.get(".is-italic");
  }
  getFlightDetails() {
    return cy.get(".mt-4 > p");
  }
  getSecondPassanger() {
    return cy.get(":nth-child(9) > .select > select");
  }

  // Methods
  getNewDate(month, day, year) {
    return `${year}-${month}-${day}`;
  }
}

export default BookYourTrip;
