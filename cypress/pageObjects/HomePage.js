class HomePage {
    visit() {
      cy.visit('https://tvolearn.com/');
    }
  
    validateTitle() {
      cy.title().should('contain', 'TVO Learn');
    }
  
    navigateToElementaryDropdown() {
      cy.contains('Elementary (K - 8)').click();
      cy.wait(2000)
    }
  }
  
  export default HomePage;
  