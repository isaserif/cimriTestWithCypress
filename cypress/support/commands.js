import customComandsLogin from "../pageObjectModel/loginPage"
Cypress.Commands.add('login',(username,password)=>{
    customComandsLogin.usernameField().type(username)
    customComandsLogin.passwordField().type(password)
    customComandsLogin.loginButton().click()
})