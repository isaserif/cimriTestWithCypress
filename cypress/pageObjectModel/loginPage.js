class loginPage{

usernameField(){
    return cy.get('#root div:nth-child(1) > div > form > div:nth-child(1)')
}
passwordField(){
    return cy.get('#password')
}
loginButton(){
    return cy.get('#root div:nth-child(1) > div > form > div:nth-child(4)')
}}
export default new loginPage()