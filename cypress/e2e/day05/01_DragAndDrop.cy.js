/// <reference types="cypress" />

describe('Drag and Drop',()=>{

    it('should dragndrop',()=>{
        cy.visit('https://the-internet.herokuapp.com/drag_and_drop');
        //drag and drog komutu calismasi icin plugin yuklenmesi gerekiyor 
        // 1) adres https://www.npmjs.com/package/@4tw/cypress-drag-drop
        // 2) terminale npm install --save-dev @4tw/cypress-drag-drop bu komutu yapistir enter
        // 3) support/e2e.js dosyasina require('@4tw/cypress-drag-drop') bu kodu yapistir
      
        cy.get('#column-a').drag('#column-b')

    })
    it.only('should dragndrop',()=>{
        cy.visit('https://the-internet.herokuapp.com/drag_and_drop');
        const dataTransfer=new DataTransfer()
        cy.get('#column-a').trigger('dragstart',{
            dataTransfer
        })
        cy.get('#column-b').trigger('drop',{
            dataTransfer

        })

    })
})