class cimriHompage{
// Locate almak için
    cimriMarketLink(){
        return cy.get('a[name="market"]')
  }

    cimriLogo(){
        return cy.get('a[title="cimri Logo"]')
  }

    hesabimLink(){
      return cy.get('div[style="cursor:pointer"]')
    }

    kayitOlLink(){
      return cy.get('button[class="nu3ou5-3 ecMTfx"]')
    }

    kayitOlButton(){
      return cy.get('div:contains("Kayıt Ol")')
    }

    girişYapLink(){
      return cy.get('button:contains("Giriş Yap")')
    }
    girisYapButton(){
      return cy.get('div:contains("Giriş Yap")')
    }
    elektroniVeCepTelefonu(){
      return cy.get('#__next nav > div > ol > li:nth-child(1)')
    }
    cepTelefonu(){
      return cy.get('a:contains("Cep Telefonu")')
    }
} export default new cimriHompage()