describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.amazon.com.br/?&tag=hydrbrabk-20&ref=pd_sl_7rwd1q78df_e&adgrpid=155790195778&hvpone=&hvptwo=&hvadid=677606588104&hvpos=&hvnetw=g&hvrand=1649168592851286781&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1001625&hvtargid=kwd-10573980&hydadcr=26346_11691057&gad_source=1')
    cy.wait(2000)
    cy.get('.nav-search-field').type('ps5')
    cy.get('#nav-search-submit-button').click()
  })
})