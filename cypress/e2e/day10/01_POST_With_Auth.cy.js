/// <reference types="cypress" />

describe('POST With Auth',()=>{

    it('Test',()=>{
        cy.request({
            url:'https://restful-booker.herokuapp.com/booking',
            method:'POST',
            auth:{
                "username" : "admin",
                "password" : "password123"
            },
            body:{
                "firstname" : "Ayse",
                "lastname" : "Gul",
                "totalprice" : 230,
                "depositpaid" : true,
                "bookingdates" : {
                    "checkin" : "2023-02-01",
                    "checkout" : "2023-02-10"
                },
                "additionalneeds" : "Breakfast"
            },
                "token": "abc123"   
        }).then((response)=>{
            console.log(response)
            expect(response.status).to.equal(200)
            expect(response.body.booking.firstname).to.equal("Ayse")
            expect(response.body.booking.lastname).to.equal("Gul")
            expect(response.body.booking.totalprice).to.equal(230)
            expect(response.body.booking.bookingdates.checkin).to.equal("2023-02-01")
            expect(response.body.booking.bookingdates.checkout).to.equal("2023-02-10")
            expect(response.body.booking.additionalneeds).to.equal("Breakfast")
        })
    })
})