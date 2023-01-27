class HomePage{
    getSinginLink(){
        //return cy.get('[href="/login"] > .header__option > .header__lineTwo')bu sekilde de yapilabilir
        return cy.contains('Sign In')
    }
}
export default HomePage