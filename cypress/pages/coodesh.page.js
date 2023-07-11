import { LOGIN } from "./components/login.components";
const faker = require("faker");

const randomName = faker.name.findName();
const randomEmail = faker.internet.email();
const randomCPF = faker.address.zipCode();

export class AutomationCoodesh {
  static visitarHome(site) {
    cy.visit("/");
  }

  static visualizarLogin(Login) {
    cy.get('#onetrust-accept-btn-handler').click()
    cy.get(".css-ho5z4q > .chakra-stack > .chakra-button").click();
    cy.wait(5000)
  }

  static preencher_Formulariocadastro(cadastro) {
    cy.get("#field-6").type(randomName);
    cy.get("#field-7").type(randomEmail);
    cy.get("#field-8").type("Testqacoodesh1@");
  }

  static aceitar_Termos(termos) {
    cy.get('#tabs-12--tabpanel-0 > .css-1811skr > .css-14vqccz > .chakra-switch > .chakra-switch__track > .chakra-switch__thumb').click()
    cy.get('#tabs-12--tabpanel-0 > .css-1811skr > .css-18dmrac').click()
    cy.wait(10000);
  }


  static preencher_Perfil(perfil) {
    cy.get(':nth-child(7) > .custom-control > .checkbox-outline__label').click()
    cy.get('.col-md-12 > .react-select > .css-yk16xz-control > .css-8bb4di > .css-tlfecz-indicatorContainer').type('Amazon API').wait(5000).press('enter')
    cy.get('#years_experience').select('+5 anos')
    cy.get('.react-tel-input > .form-control').type('81995291069')
    cy.get("[id='address.city']").type('Vitoria de Santo Antão')
    cy.get('#home-office-integral').click()
    cy.get('.w-100').click()
    cy.get('.col-lg-12 > .react-select > .css-yk16xz-control > .css-8bb4di > .css-tlfecz-indicatorContainer').click().wait(5000)
    cy.contains('Cultura e Esporte').click({force:true})
    cy.get("#race").select("Pessoa Parda");
    cy.get("#gender").select("Homem");
    cy.get("#sexual_orientation").select("noanswer");
    cy.get("[id='disabilities.type']").select("none");
    cy.get('.btn-primary').click()
    cy.get('.btn-primary').click()
    cy.get(':nth-child(1) > td').click()
    cy.get(':nth-child(9) > td > .rc-slider > .rc-slider-rail').click()
    cy.get('.btn-primary').click()
    cy.get(':nth-child(5) > td').click()
    cy.get('.btn-primary').click().wait(3000)
    cy.get('.d-flex > .w-100').click()
  }

   static preencher_Login() {
     cy.get('#onetrust-accept-btn-handler').click()
     cy.get("[id='field-6']").type(LOGIN.INP_EMAIL)
     cy.get("[id='field-7']").type(LOGIN.INP_SENHA)
     cy.contains("Entrar").click()

  }
  static preencher_LoginInvalidos() {
    cy.get('#onetrust-accept-btn-handler').click()
    cy.get("[id='field-6']").type(LOGIN.INP_EMAILINVALIDO)
    cy.get("[id='field-7']").type(LOGIN.INP_SENHA)
    cy.contains("Entrar").click()

 }

  

  static validar_MenuPrincipal(){
    cy.contains("Seja bem-vindo!").should("be.visible")
  }
  static validar_MensagemDeErro(){
    cy.wait(3000)
    cy.contains("Usuário não encontrado").should("be.visible")
  }

  static clicar_Vagas(vagas) {
    cy.get(":nth-child(3) > .p-3 > .align-items-center").click();
  }

  static pesquisar_Vagas(pesquisarvagas) {
    cy.get('.col-lg-7 > .input-group > .form-control').type("Mary Flower - Factory Software")
    cy.get('.col-lg-3 > .input-group > .form-control').type("Belo Horizonte")
    cy.get('.align-self-lg-end > .btn-block').click()
    cy.contains('Mary Flower - Factory Software').scrollIntoView().should('be.visible')
    cy.contains('QA Mobile').scrollIntoView().should('be.visible')
    
  }
}
