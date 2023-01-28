/// <reference types="cypress" />

describe('JsonPlaceHolder',()=>{
    const requestURL='https://jsonplaceholder.cypress.io/comments'
    //dogrulama islemlerini 4 farkli sekilde asagidaki testlerde yaptik assert ile expect ayni islemi yapiyor
    //yapilis sekillerinde expect de to kullaniyoruz
    it('Test01',()=>{
        cy.request(requestURL).should((response)=>{
           assert.equal(response.status,200) 
           assert.equal(response.body[1].postId,1)
           assert.equal(response.body[1].id,2)
           assert.equal(response.body[1].name,'quo vero reiciendis velit similique earum')
           assert.equal(response.body[1].email,'Jayne_Kuhic@sydney.com')
           assert.equal(response.body[1].body,'est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et')
           /*
           {
    "postId": 1,
    "id": 2,
    "name": "quo vero reiciendis velit similique earum",
    "email": "Jayne_Kuhic@sydney.com",
    "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
  }
           */
        })

    })
    it('Test02',()=>{
        cy.request(requestURL).should((response)=>{
            expect(response.status).to.eq(200)
            expect(response.body[1].postId).to.eq(1)
            expect(response.body[1].id).to.eq(2)
            expect(response.body[1].name).to.eq('quo vero reiciendis velit similique earum')
            expect(response.body[1].email).to.eq('Jayne_Kuhic@sydney.com')
            expect(response.body[1].body).to.eq('est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et')
        })

    })
    it('Test03',()=>{
        cy.request({
            url:requestURL,
            method:'GET'
        }).should((response)=>{
            expect(response.status).to.eq(200)
            expect(response.body[1].postId).to.eq(1)
            expect(response.body[1].id).to.eq(2)
            expect(response.body[1].name).to.eq('quo vero reiciendis velit similique earum')
            expect(response.body[1].email).to.eq('Jayne_Kuhic@sydney.com')
            expect(response.body[1].body).to.eq('est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et')
        })

    }) 
    it('Test04',()=>{
        cy.request({
            url:requestURL,
            method:'GET'
        }).should((response)=>{
            assert.equal(response.status,200) 
           assert.equal(response.body[1].postId,1)
           assert.equal(response.body[1].id,2)
           assert.equal(response.body[1].name,'quo vero reiciendis velit similique earum')
           assert.equal(response.body[1].email,'Jayne_Kuhic@sydney.com')
           assert.equal(response.body[1].body,'est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et')
        })

    }) 
})