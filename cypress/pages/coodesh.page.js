export class AutomationCoodesh {
  static visitarHome(site) {
    cy.visit("/");
  }

  static visualizarLogin(Login) {
    cy.get(".transition-3d-hover").click()
    ;
  }

  static clicar_Criarconta(conta) {
    cy.get(`[href="/auth/candidates/signup"]`).click();
    }

  static preencher_Formulariocadastro(cadastro) {
    cy.get("#displayName").type("QA Teste");
    cy.get("#email").type("qatestcoodesh1333@hotmail.com");
    cy.get("#password").type("Testqacoodesh1@");
    
  }

  static aceitar_Termos(termos) {
    cy.get('input[value="1"]').should('not.be.visible').check({ force: true
    }).should('be.checked');
    cy.wait(25000);    
    cy.get(".mt-5 > :nth-child(5)").click();
    cy.wait(10000);
  }
  static validar_Perfil(validation) {
    cy.get('.ml-3').should('be.visible','Adicionar');
  }
  /*static pesquisar_medicosRiodeJaneiro(medicos) {
    cy.get(".AutoSuggest__value-container").type("Rio de Janeiro");
  }

  static clicar_pesquisar(pesquisa) {
    cy.get(".Button").click();
  }

  static visualizar_resultados(resultado) {
    cy.get("#gm-v3-root > :nth-child(1) > :nth-child(2)").should("be.visible");
  }

  static visualizar_EspecialidadeCidade(EspecialidadeCidade) {
    cy.wait(25000);
    cy.get("#gm-v3-root > :nth-child(1) > :nth-child(2)").should(
      "contain",
      "Goytacazes/RJ"
    );
    cy.get(
      ":nth-child(1) > .ProviderCard > .Provider--infos > .ProviderSpecialties > .ProviderSpecialties--item"
    )
      .should("be.visible", "Specialties")
      .screenshot();
  }

  static visualizar_naoconterSP(naoconter) {
    cy.wait(25000);
    cy.get("#gm-v3-root > :nth-child(1) > :nth-child(2)")
      .should("not.contain.text", "São Paulo/SP")
      .screenshot();
  }

  static paginacao_naoconterSP(paginacao) {
    cy.wait(15000);
    cy.get(".justify-content-center > .Button").click();
    cy.get("#gm-v3-root > :nth-child(1) > :nth-child(2)")
      .should("not.contain.text", "São Paulo/SP")
      .screenshot();
  }*/
}
