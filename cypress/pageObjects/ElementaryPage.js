class ElementaryPage {
  selectGrade() {
    cy.contains('span', 'Grade 1').eq(0).click();
  }

  scrollLearnForward() {
    cy.get('div.button-subject-name').eq(0).scrollIntoView()
  }

  validateDropdownVisible() {
    cy.get('div#SiteNavLabel-elementary-k-8>ul>li:nth-of-type(2)>a').should('be.visible');
  }
}

export default ElementaryPage;
