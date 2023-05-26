
/*

cy.step('"Alt Kategoriler" altında "Cep Telefonları" tiklar')
cy.step('Fiyat Aralığı bolümüne en az 3000 en fazla 5000 girer')
cy.step('OK btonuna tiklar')
cy.step('"Markalar" bolümünde "samsun' tiki işaretler)
cy.step('Cikan ilk ürün isminde samsun geçtigi dogrular')
cy.step('Tümünü incele butonuna tiklar')
cy.step('Bu ürünün diğer seçenekleri bölümünde "Beyaz" seçilir ve ürün başliginda "Beyaz" kelimesinin geçtiğini dogrular ')
cy.step('"Şu an en ucuz" linkine tiklar')
cy.step('https://wnt.com.tr/ adresine gidilebildigini verify eder')
*/
import 'cypress-plugin-steps'
import cimriHompage from '../../pageObjectModel/cimriHompage';
describe('Kullanici Login olduktan sonra ürün seçer ve ürünün en ucuz oldugu alisveris sitesine yönlendirilir',{testIsolation:false} , () => {
});
it('ürün sec', () => {
  cy.on('uncaught:exception',(err,runnable)=>{return false})
 
  cy.step('cimri.com adresine gider')
  cy.visit("/uyelik/giris-yap")

  cy.step('Login olur')
  cy.fixture("cimriLogin").as('credentials')
  cy.get('@credentials').then((data)=>{
    cy.login(data.mail,data.password)

   cy.step('ELEKTRONİK,CEP TELEFONU Linkinin üzerine gelir')
   cy.get(cimriHompage.elektroniVeCepTelefonu().trigger('mouseover')) 

   cy.step('Acilan pencereden "Cep Telefonu" linkine tiklar')
   cy.get(cimriHompage.cepTelefonu().click())
});

    
});