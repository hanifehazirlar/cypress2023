/// <reference types="cypress" />

describe('',()=>{

    it('JSON Object',()=>{
        cy.visit('/')
        const simpleObject={'key1':'value1','key2':'value2','key3':'value3'}
        console.log(simpleObject.key2) //value2
        console.log(simpleObject['key3']) //value3

        const simpleArrayOfValue=['one','two','three']
        console.log(simpleArrayOfValue[1])//two
        const arrayObject = [{'key1': 'value1'}, {'key2': 'value2'}, {'key3': 'value3'}]    //array object olusturduk ve key-value'lere ulastik
        console.log(arrayObject[1])         // key ve value'yu getirdi
        console.log(arrayObject[2].key3)    // sadece value'yu getirdi
        const dataType = {'string': 'metin', 'number': 15, 'boolean': true}      // data tiplerinini gosterimi
        console.log(dataType.number)
        console.log(dataType.string)
        console.log(dataType.boolean)
        const body = {
            "Student": [
                {"FirstName": "Sena", "LastName": "Cengiz"},
                {"FirstName": "Yusuf", "LastName": "Enginar"},
                {"FirstName": "Kamuran", "LastName": "Ced"}
            ]}
        console.log(body.Student[2].LastName)       // son ogrencinin lastname'ini yazdirdik
        console.log(body.Student[1].FirstName)
        console.log(body.Student[0].FirstName)
        console.log(body)                           // olusturdugumuz data'nin hepsini yazdirdik









    })
    
})