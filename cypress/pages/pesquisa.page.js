export class AutomationPesquisa {
  static visitarHome(site) {
    cy.visit("/");
  }

  /*static visualizarLayout(layout) {
    cy.get("#fragment-0-ehmo > .component-heading > div").should(
      "contain",
      "Guia Médico"
    );
  }

  static clicar_ConsulteAgora(consulte) {
    cy.get("#fragment-oimm-link").click();
  }

  static visualizar_Buscarapida(buscarapida) {
    cy.get("#react-tabs-0").should("contain", "Busca rápida");
  }

  static pesquisar_medicosRiodeJaneiro(medicos) {
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
