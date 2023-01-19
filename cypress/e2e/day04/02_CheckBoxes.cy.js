/// <reference types="cypress" />

describe('Check Boxes',()=>{

    it.skip('Test Case 1',()=>{
        cy.visit('https://www.sahibinden.com/bentley')
        cy.wait(3000)
        cy.get('#onetrust-reject-all-handler').click();
        cy.get('#searchResultLeft-a17 > dl > .collapseContent > .facetedSearchList > .jspContainer > .jspPane > :nth-child(1) > .text-content > .js-attribute > i').click();
        
        cy.get('dd div li .js-attribute.facetedCheckbox i').first().click();
        cy.wait(3000);
        
        cy.get('dd div li .js-attribute.facetedCheckbox i').eq(3).click({force: true})
        //1.yol
        cy.get('dd div li .js-attribute.facetedCheckbox i').eq(2).should('not.be.checked')
        //should('not.be.checked') checkbox in tikli olmadigini dogruladi
        //2.yol
        cy.get('.jspPane > :nth-child(5) > .text-content > .js-attribute > i').should('not.be.checked')
      
        //cy.get(locate).first() : methodu aldigimiz locate de birden fazla web element varsa birinciyi sec demek
        //cy.get(locate).eq(index): medhodu aldigimiz locate de birden fazla web element varsa istedigimiz indexteki elementi sec demek
        //cy.get('.feature-discovery__info-title').click({force: true})
        cy.get('dd div li .js-attribute.facetedCheckbox i').eq(2).click({force: true}).should('be.checked')

    })
 
    it('Single Checkbox',() => {
        cy.visit('https://www.amazon.com')
        cy.get('[href="/gp/goldbox?ref_=nav_cs_gb"]').click();
        cy.get('input[type="checkbox"]').eq(1).check({force: true});
        //tikla
        cy.get('input[type="checkbox"]').eq(2).check().should('be.checked')
        //tiklamayi kaldir
        cy.get('input[type="checkbox"]').eq(2).uncheck().should('not.be.checked')

   /* 
   check() methodu ıle checkbox'a ve radio butonlara  tıklama ıslemını gerceklestirebiliyoruz
   eger tıklama yapmazsa ıcıne {force: true} yazarak calıstırıyoruz 
   direk locate check({force: true}) seklınde calısmaz ıse mutlaka locate kısmını type olarak alıyoruz
   */
    })
    it('All CheckBoxes 1',()=>{
        cy.visit('https://the-internet.herokuapp.com/checkboxes');
        cy.get('input[type="checkbox"]').check();//tum checkboxlari tikladi
        cy.wait(3000);
        cy.get('input[type="checkbox"]').uncheck();//tum checkboxlari kaldirdi
        // type='checkbox' olmasi sartiyla checkboxlari check ve uncheck komtutyla tikleyip tiki kaldirabiliyoruz


    })
    it('All Checkbox 2',()=>{
        cy.visit('https://www.amazon.com')
        cy.get('[href="/gp/goldbox?ref_=nav_cs_gb"]').click();
        //1.kutuya tikla
        cy.get('input[type="checkbox"]').eq(0).check().should('be.checked')

        //5.kutuya tikla
        cy.get('input[type="checkbox"]').eq(4).check().should('be.checked')

        //12.kutuya tikla
        cy.get('input[type="checkbox"]').eq(11).check().should('be.checked')

        //Tiklamalari kaldir
         //1.kutudan tiki kaldir
         cy.get('input[type="checkbox"]').eq(0).uncheck().should('not.be.checked')

          //5.kutudan tiki kaldir
        cy.get('input[type="checkbox"]').eq(4).uncheck().should('not.be.checked')

        //12.kutudan tiki kaldir
        cy.get('input[type="checkbox"]').eq(11).uncheck().should('not.be.checked')

        //uncheck(): Tiklamayi kaldirir
        //should(not.be.checked') secili olmadigini dogrular

    })
    it.only('All CheckBoxes 2',()=>{
        cy.visit('https://the-internet.herokuapp.com/checkboxes');
        cy.get('input[type="checkbox"]').click({ multiple: true })
        //click() methodu normalde tek bir web elemente tiklar
        //click({ multiple: true }) bu sekilde yazdigimizda verilen locateteki tum elementlere tiklar
        cy.get('input[type="checkbox"]').first().should('have.attr','checked')
        //ustteki kod da verilen locatin birncisinin locatetinde class attributunun adi checked mi diye sorguladik

        cy.get('input[type="checkbox"]').should('have.attr','checked')
        //ustteki kod da verilen tum locatelerin locatinde class attributunun adlari checked mi diye sorguladik



    })
})