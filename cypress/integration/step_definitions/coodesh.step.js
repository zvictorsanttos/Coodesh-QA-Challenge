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
Then(`devera preencher o perfil de cadastro`, (perfil) => {
  AutomationCoodesh.preencher_Perfil(perfil);
});

/*When(`clique no botão "Consulte agora"`, (consulte) => {
  AutomationPesquisa.clicar_ConsulteAgora(consulte);
});

When(`visualizar a aba "Busca rápida"`, (buscarapida) => {
  AutomationPesquisa.visualizar_Buscarapida(buscarapida);
});

When(`e pesquisar por Médicos no Rio de Janeiro`, (medicos) => {
  AutomationPesquisa.pesquisar_medicosRiodeJaneiro(medicos);
});

When(`clicar no botão "Pesquisar"`, (pesquisa) => {
  AutomationPesquisa.clicar_pesquisar(pesquisa);
});

//Cenario 1

Then(
  `devera visualizar os resultados com todo os médicos do Rio de Janeiro`,
  (resultado) => {
    AutomationPesquisa.visualizar_resultados(resultado);
  }
);

Then(
  `devera visualizar a Especialidade e Cidade de cada médico`,
  (EspecialidadeCidade) => {
    AutomationPesquisa.visualizar_EspecialidadeCidade(EspecialidadeCidade);
  }
);

//Cenario 2

Then(`não devera conter a cidade São Paulo na primeira pagina`, (naoconter) => {
  AutomationPesquisa.visualizar_naoconterSP(naoconter);
});

//Then(`não devera conter a cidade São Paulo na segunda pagina`, (paginacao) => {
//	AutomationPesquisa.paginacao_naoconterSP(paginacao)
//});

//Then(`não devera conter a cidade São Paulo na terceira pagina`, (paginacao) => {
//    AutomationPesquisa.paginacao_naoconterSP(paginacao)
//});
*/
