const { beforeEach } = require("mocha");
import cimriHompage from "../../pageObjectModel/cimriHompage";
describe('Ana Sayfanin Doğrulanmasi; Menülerin veya ana kategorilerin doğru bir şekilde görüntülendiği kontrol edilir',{testIsolation:false} ,() => {
    beforeEach(() => {
        cy.slowDown(2000)
        cy.on('uncaught:exception',(err,runnable)=>{return false})
        cy.step('cimri.com sitesine gider')
        cy.visit("/")
}); 
it('Logo, başlik ve url  doğru bir şekilde görüntülendiği kontrol edilir', () => {
    cy.step('Title in "Cimri - En son kaça olur?"" eşit oldugu verify edilir')
    cy.title().should('eq','Cimri - En son kaça olur?')
    cy.step('Url adresinin "https://www.cimri.com/"" eşit oldugu verify edilir')
    cy.url().should('eq','https://www.cimri.com/')
    cy.step('cimri logosunun" görünür oldugu verify edilir')      
    cy.get(cimriHompage.cimriLogo()).should('be.visible')
});
it('Hesabim bölümü görünür olmali, Mause ile üzerine gelindiginde "Kayit Ol" ve Giriş Yap" Linklerine tiklanabilme ve ilgili sayfalara gidilebilmeli', () => {
    cy.step('Hesabim Linkinin üzerine gelinir')
    cy.get(cimriHompage.hesabimLink()).should('be.visible').trigger('mouseover')
    
    cy.step(' Kayit ol linkine tiklanir')
    cy.get(cimriHompage.kayitOlLink()).should('be.visible').click()

    cy.step('Kayit ol butonunun görünür oldugu dogrulanir')
    cy.get(cimriHompage.kayitOlButton()).should('be.visible')

    cy.step('Anasayfaya geri gelir')
    cy.go(-1)

    cy.step('Hesabim Linkinin üzerine gelinir')
    cy.get(cimriHompage.hesabimLink()).trigger('mouseover')

    cy.step('Giriş Yap linkine tiklanir')
    cy.get(cimriHompage.girişYapLink()).should('be.visible').click()

   cy.step('Giriş Yap" butonunun görünür oldugu dogrulanir')
    cy.get(cimriHompage.girisYapButton()).should('be.visible')


});
});