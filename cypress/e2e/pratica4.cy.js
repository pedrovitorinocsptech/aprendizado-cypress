describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://sextourecife.com.br/')
    cy.get('.texto-mapa').click()
    cy.get('.navbar-map-page > :nth-child(2)').click()
    cy.get('#categorias').select('Festa')
    cy.get('p > :nth-child(4)').click()
    cy.get('#input-nome').type('Pedro Silva')
    cy.get('.endereco > input').type('pedro@email.com')
    cy.get('select').select('Bugs')
    cy.get('textarea').type('O botão do header não tem classe')
    cy.get('.botao2').click()
  })
})