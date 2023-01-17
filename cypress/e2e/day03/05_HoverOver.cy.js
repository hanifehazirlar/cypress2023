/// <reference types="cypress" />

describe('HoverOver',()=>{

    it('TestCase',()=>{
        cy.visit('https://www.amazon.com/')
        cy.get('.icp-nav-link-inner > .nav-line-2 > .nav-icon').wait(2000).trigger('mouseover')
        //cy.wait(3000)
        cy.get('#nav-flyout-icp > .nav-template > #icp-flyout-mkt-change > .nav-text > .icp-mkt-change-lnk').click()
        
        //1.yol click ile
        //cy.get('[class="a-dropdown-prompt"]').click()
        //cy.get('[id="icp-dropdown_18"]').click()
        //2.yol select ile
        cy.get('#icp-dropdown').select('Turkey (Türkiye)',{force: true} )
    })
    it.skip('',()=>{

    })
})