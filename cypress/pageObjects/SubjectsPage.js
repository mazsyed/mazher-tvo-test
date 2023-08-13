class SubjectsPage {
  clickOnCard() {
    cy.get('div.button-subject-name').eq(0).click()
  }

  validateSubjectPage() {
    cy.url().should('include', 'mathematics');
    cy.contains('button', 'Number')
    cy.contains('h2', 'Resources for Learning')
  }

}

export default SubjectsPage;
