import { slowCypressDown } from 'cypress-slow-down';
const { faker } =require('@faker-js/faker')
let fakeMail= faker.internet.email()
let fakePassword= faker.internet.password()

describe('cimri.com anasayfasina gidilir ve login olunur', () => {
beforeEach(() => {
   cy.on('uncaught:exception',(err,runnable)=>{return false})// tavsiye edilmez
   cy.fixture("cimriLogin").as('credentials')
   cy.visit("/uyelik/giris-yap")
});
   it('login olunur', () => {
      cy.slowDown(2000)
      cy.get('@credentials').then((data)=>{
      cy.login(data.mail,data.password)
    })
 });
   it('yanlis mail ile login olunca hata mesaji alir', () => {
      cy.login(fakeMail,fakePassword)
   });
});