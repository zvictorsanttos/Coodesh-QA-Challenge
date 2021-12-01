/// <reference types="cypress" />
import {
  Given,
  When,
  Then,
  And,
  But,
} from "cypress-cucumber-preprocessor/steps";
import { AutomationCoodesh } from "../../pages/coodesh.page";

Given(`que esteja na home do site coodesh`, (site) => {
  AutomationCoodesh.visitarHome(site);
});

And(`visualize o layout "Login"`, (Login) => {
  AutomationCoodesh.visualizarLogin(Login);
});

And(`clique no botão "Criar Conta"`, (conta) => {
  AutomationCoodesh.clicar_Criarconta(conta);
});
When(`preencher o formulario de Cadastro`, (cadastro) => {
  AutomationCoodesh.preencher_Formulariocadastro(cadastro);
});
And(`aceitar o termos e condições e clicar em "Inscrever-se"`, (termos) => {
  AutomationCoodesh.aceitar_Termos(termos);
});

//CheckPoint Tela de Perfil
And(
  `devera visualizar a tela de perfil do usuario cadastrado`,
  (validation) => {
    AutomationCoodesh.validar_Perfil(validation);
  }
);
And(`devera preencher o perfil de cadastro`, (perfil) => {
  AutomationCoodesh.preencher_Perfil(perfil);
});
And(`devera clicar no botão "Ir ao dashboard"`, (dashboard) => {
  AutomationCoodesh.clicar_Dashboard(dashboard);
});

And(`devera clicar no botão "Vagas"`, (vagas) => {
  AutomationCoodesh.clicar_Vagas(vagas);
});

Then(`devera visualizar a tela com as vagas disponiveis`, (pesquisarvagas) => {
  AutomationCoodesh.pesquisar_Vagas(pesquisarvagas);
});

