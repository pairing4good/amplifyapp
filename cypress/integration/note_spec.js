describe('Notes Application', () => {

    before(() => {
      cy.signIn();
    });
  
    after(() => {
      cy.clearLocalStorageSnapshot();
      cy.clearLocalStorage();
    });
  
    beforeEach(() => {
      cy.restoreLocalStorage();
      cy.visit('/');
    });
  
    afterEach(() => {
      cy.saveLocalStorage();
    });

    it('should have header', () => {
      cy.get('h1').should('have.text', 'My Notes App')
    })

    it('should have footer', () => {
      cy.get('[data-testid=sign-out] > .hydrated').should('be.visible')
    })

    it('should add new note', () => {
      cy.get('[data-testid=note-name-field]').type('test note');
      cy.get('[data-testid=note-description-field]').type('test note description');
      cy.get('[data-testid=note-form-submit]').click();

      cy.get('[data-testid=test-name-0]').should('have.text', 'test note');
      cy.get('[data-testid=test-description-0]').should('have.text', 'test note description');
    })

    it('should delete note', () => {
      cy.get('[data-testid=test-button-0]').click();

      cy.get('[data-testid=test-name-0]').should('not.exist')
      cy.get('[data-testid=test-description-0]').should('not.exist')
    })
})
