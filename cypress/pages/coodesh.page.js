const faker = require("faker");

const randomName = faker.name.findName();
const randomEmail = faker.internet.email();
const randomCPF = faker.address.zipCode();

export class AutomationCoodesh {
  static visitarHome(site) {
    cy.visit("/");
  }

  static visualizarLogin(Login) {
    cy.get(".nav-link > .transition-3d-hover").click();
  }

  static clicar_Criarconta(conta) {
    cy.get(`[href="/auth/candidates/signup"]`).click();
  }

  static preencher_Formulariocadastro(cadastro) {
    cy.get("#displayName").type(randomName);
    cy.get("#email").type(randomEmail);
    cy.get("#password").type("Testqacoodesh1@");
  }

  static aceitar_Termos(termos) {
    cy.get('input[value="1"]')
      .should("not.be.visible")
      .check({ force: true })
      .should("be.checked");
    cy.wait(10000);
    cy.get(".mt-5 > :nth-child(5)").click();
    cy.wait(10000);
  }
  static validar_Perfil(validation) {
    cy.get(".ml-3").should("be.visible", "Adicionar");
  }

  static preencher_Perfil(perfil) {
    cy.get(".ml-3").click();
    cy.get("#cpf").type(randomCPF);
    cy.get("#summary").type("Desafio Coodesh Vaga Para QA");
    cy.get("[id='social_medias.facebook_url']").type(
      "https://www.facebook.com/bruno.cerza"
    );
    cy.get("[id='preferences.job_search']").select("searching_asap");
    cy.get("#race").select("noanswer");
    cy.get("#gender").select("noanswer");
    cy.get("#sexual_orientation").select("noanswer");
    cy.get("[id='disabilities.type']").select("none");
    cy.get("#clt")
      .should("not.be.visible")
      .check({ force: true })
      .should("be.checked");
    cy.get("[id='preferences.salary_range.currency']").select("USD");
    cy.get("[id='preferences.salary_range.min']").type("10000");
    cy.get("[id='preferences.salary_range.max']").type("50000");
    cy.get("[id='address.city']").type("Maldivas");
    cy.get("[id='preferences.other_cities']")
      .should("not.be.visible")
      .check({ force: true })
      .should("be.checked");
    cy.get(".justify-content-end > .transition-3d-hover").click();
  }

  static clicar_Dashboard(dashboard) {
    cy.wait(10000);
    cy.get(".nav-link").click();
  }

  static clicar_Vagas(vagas) {
    cy.get(":nth-child(3) > .p-3 > .align-items-center").click();
  }

  static pesquisar_Vagas(pesquisarvagas) {
    cy.get(
      ":nth-child(1) > .js-focus-state > .input-group > .form-control"
    ).type("Pleno");
    cy.get(
      ":nth-child(2) > .js-focus-state > .input-group > .form-control"
    ).type("São Paulo");
    cy.get(".align-self-lg-end > .transition-3d-hover").click().screenshot();
  }
}
