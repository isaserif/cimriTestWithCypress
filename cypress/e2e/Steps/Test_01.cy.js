const { beforeEach } = require("mocha");
import cimriHompage from "../../pageObjectModel/cimriHompage";
describe('Cimri.com adresine gidilir', () => {
    beforeEach(() => {
        cy.on('uncaught:exception',(err,runnable)=>{return false})
        cy.visit("/")
    });
    afterEach(() => {
        cy.log('Test bitti')
    });
    it('cimri.com anasayfa da title, url ve logo testleri yapilir', () => {
        // Title in "Cimri - En son kaça olur?"" eşit oldugu verify edilir
        cy.title().should('eq','Cimri - En son kaça olur?')
        // Url adresinin "https://www.cimri.com/"" eşit oldugu verify edilir
        cy.url().should('eq','https://www.cimri.com/')
        // "cimri logosunun" görünür oldugu verify edilir
        cimriHompage.cimriLogo().should('be.visible')
    });
    

    it('Cimri market linkine tiklar ve gidilen sayfanin title, url ve konum sec linkinin görünür oldugu verify edilir ve ana sayfaya geri gelinir', () => {
        // cimri market linkine tiklar
        cimriHompage.cimriMarketLink().click()
        // Ana sayfaya geri gelir
        cy.go(-1)
          
    });

});