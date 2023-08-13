import HomePage from '../pageObjects/HomePage';
import ElementaryPage from '../pageObjects/ElementaryPage';

describe('Elementary Dropdown Navigation', () => {
  const homePage = new HomePage();
  const elementaryPage = new ElementaryPage();

  beforeEach(() => {
    cy.viewport(1366, 768);
    homePage.visit();
  });

  it('should navigate to Elementary dropdown', () => {
    cy.log('Navigating to Elementary dropdown...');
    homePage.navigateToElementaryDropdown();
    elementaryPage.validateDropdownVisible();

  });
});
