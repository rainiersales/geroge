export const dataCy = (selector: string) => {
    cy.get(`[data-cy=${selector}]`)
  }

export const validateArrayItems = (SelectorPrefix: string, chars: Array <string>) => {
    chars.forEach((char) => cy.dataCy(SelectorPrefix + char));
  }

export const login = (SelectorPrefix: string, chars: Array <string>) => {
    chars.forEach((char) => cy.dataCy(SelectorPrefix + char));
  }