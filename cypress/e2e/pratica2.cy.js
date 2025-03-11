describe('template spec', () => {
  it('passes', () => {
    cy.visit('www.youtube.com')
    cy.get('.ytSearchboxComponentInput').type('Gustavo guanabara')
    cy.get('.ytSearchboxComponentSearchButton').click()
    cy.get('#channel-title > #container > #text-container > #text').click()
    cy.get('[tab-title="Playlists"]').click()
    cy.get(':nth-child(4) > .yt-lockup-view-model-wiz > .yt-lockup-view-model-wiz__content-image > .yt-collection-thumbnail-view-model > .collections-stack-wiz > :nth-child(1) > :nth-child(3) > .yt-thumbnail-view-model > .yt-thumbnail-view-model__image > .yt-core-image').click()
    cy.get('.ytd-watch-metadata > #top-level-buttons-computed > .ytSegmentedLikeDislikeButtonViewModelHost > .smartimation > .smartimation__content > .ytSegmentedLikeDislikeButtonViewModelSegmentedButtonsWrapper > .ytLikeButtonViewModelHost > toggle-button-view-model > .yt-spec-button-view-model > .yt-spec-button-shape-next > yt-touch-feedback-shape > .yt-spec-touch-feedback-shape > .yt-spec-touch-feedback-shape__fill').click()
  })
})