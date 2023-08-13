// utilities/iframes.js

// Switch to an iframe by index or selector
Cypress.Commands.add('switchToIframe', (iframe) => {
    if (typeof iframe === 'number') {
      cy.get('iframe').eq(iframe).as('iframe');
    } else {
      cy.get(iframe).as('iframe');
    }
  
    cy.get('@iframe').its('0.contentDocument').should('exist');
    cy.get('@iframe').then(($iframe) => {
      const iframeDoc = $iframe.contents();
      cy.wrap(iframeDoc).as('iframeDoc');
    });
  });
  
  // Switch back to the main window context
  Cypress.Commands.add('switchToMain', () => {
    cy.visit('/');
  });
  
  // Perform actions inside an iframe
  Cypress.Commands.add('withinIframe', (iframe, actions) => {
    cy.switchToIframe(iframe);
    actions();
    cy.switchToMain();
  });
  
  // Example usage:
  // cy.withinIframe('.my-iframe', () => {
  //   cy.get('.iframe-element').click();
  // });
  