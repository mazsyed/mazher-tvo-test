import HomePage from '../pageObjects/HomePage';
import ElementaryPage from '../pageObjects/ElementaryPage';
import SubjectsPage from '../pageObjects/SubjectsPage';

describe('Subjects Functionality Tests', () => {
  const homePage = new HomePage();
  const elementaryPage = new ElementaryPage();
  const subjectsPage = new SubjectsPage();

  beforeEach(() => {
    cy.viewport(1366, 768);
    homePage.visit();
  });

  it('should navigate to Elementary dropdown and click on a card', () => {
    cy.log('Navigating to Elementary dropdown and clicking on a card...');
    homePage.navigateToElementaryDropdown();
    elementaryPage.selectGrade();
    elementaryPage.scrollLearnForward();
    subjectsPage.clickOnCard();
    subjectsPage.validateSubjectPage();
  });


});
