/// <reference types="cypress" />

describe('File Upload',()=>{
    /*
    Dosya yukleyebilmek icin once plugin yuklememiz gerekiyor
    1) https://www.npmjs.com/package/cypress-file-upload bu adrese git
    2) Terminale npm install --save-dev cypress-file-upload bu kodu yapistir ve enter
    3) support/e2e.js file import 'cypress-file-upload'; bu kodu ekle
    4) yukleyecegimiz dosyalari once fixtures klasorune ekliyoruz
    5) cy.get(yuklenecek yerin locate).attachFile(pathOfFile1) methodunun icine yukleyecegimiz dosya yolunu ekliyoruz
    */
    const pathOfFile1='image (1).png'
    const pathOfFile2='image (2).png'
    const pathOfFile3='image (3).png'
    beforeEach(() =>{
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
    })

    it('Single File Upload 1',()=>{
        
        cy.get('#filesToUpload').attachFile(pathOfFile1)
        cy.get('#fileList > li').should('include.text','image (1).png')
        cy.get('#fileList > li').should('have.text','image (1).png')

    })
    it('Multiple File Upload 1',()=>{   
        cy.get('#filesToUpload').attachFile(pathOfFile1).wait(2000)
                                .attachFile(pathOfFile2).wait(2000)
                                .attachFile(pathOfFile3)
     //burada ayri ayri attachFile() icine yukleyecegimiz dosya yollarini yaziyoruz                           

    })
    it.only('Multiple File Upload 2',()=>{
        cy.get('#filesToUpload').attachFile([pathOfFile1,pathOfFile2,pathOfFile3])
         //bu sekilde koseli parantez icinde yukleyecegimiz tum dosya yollarini yazip ekleyebiliriz

        cy.get('#fileList > :nth-child(1)').should('have.text','image (1).png')//have.text de text tamamiyla ayni olmak zorunda
        cy.get('#fileList > :nth-child(2)').should('contain.text','image (2).png')//contain.text text in bir parcasini alabiliriz
        cy.get('#fileList > :nth-child(3)').should('include.text','image (3).png')//include.text text in bir parcasini alabiliriz
    })
    it('Override File Name',()=>{    
        cy.get('#filesToUpload').attachFile({filePath:pathOfFile1,fileName:'image01.png'})

    })
})