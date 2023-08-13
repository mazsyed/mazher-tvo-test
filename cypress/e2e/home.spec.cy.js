import HomePage from '../pageObjects/HomePage';

describe('Home Page Navigation', () => {
  const homePage = new HomePage();

  beforeEach(() => {
    cy.viewport(1366, 768);
    homePage.visit();
  });

  it('should navigate to TVO Learn home page', () => {
    cy.log('Navigating to TVO Learn home page...');
    homePage.validateTitle();
  });
});
