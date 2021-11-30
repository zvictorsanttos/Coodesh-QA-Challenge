export class AutomationCoodesh {
  static visitarHome(site) {
    cy.visit("/");
  }

  static visualizarLogin(Login) {
    cy.get(".transition-3d-hover").click();
  }

  static clicar_Criarconta(conta) {
    cy.get(`[href="/auth/candidates/signup"]`).click();
  }

  static preencher_Formulariocadastro(cadastro) {
    cy.get("#displayName").type("QA Teste");
    cy.get("#email").type("qatestcoodesh110112220033@hotmail.com");
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
    cy.get("#cpf").type("242.279.310-36");
    cy.get("#summary").type("Desafio Coodesh Vaga Para QA");
    //cy.get(".facebook_url").type("qatestcoodesh.com/qavaga");
    //cy.get(".linkedin_url").type("qatestcoodesh.com/qavaga");
    //cy.get(".twitter_url").type("qatestcoodesh.com/qavaga");
    //cy.get("#social_medias.github_url").type("qatestcoodesh.com/qavaga");
    //cy.get("#social_medias.stackoverflow_url").type("qatestcoodesh.com/qavaga");
    //cy.get("#social_medias.medium").type("qatestcoodesh.com/qavaga");
    //cy.get("#social_medias.devto").type("qatestcoodesh.com/qavaga");
    //cy.get("#social_medias.twitch").type("qatestcoodesh.com/qavaga");
    //cy.get("[id='social_medias.youtube']").type(
    //  "https://www.youtube.com/channel/UC7QaQPOIOaZ7g-ZwPyuqTFw"
    //);
    //cy.get("#social_medias.behance").type("qatestcoodesh.com/qavaga");
    //cy.get("#social_medias.dribble").type("qatestcoodesh.com/qavaga");
    //cy.get("#social_medias.whereby").type("qatestcoodesh.com/qavaga");
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

  /*static clicar_pesquisar(pesquisa) {
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
