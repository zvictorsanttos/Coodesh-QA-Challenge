Feature: Cadastro Plataforma Coodesh
        Eu como usuario desejo realizar um cadastro na plataforma de CVC Coodesh

    Background: Pagina do site
        Given que esteja na home do site coodesh
        And visualize o layout "Login"
        And clique no botão "Criar Conta"

    Scenario: Realizar Cadastro de Usuario
        When preencher o formulario de Cadastro
        And  aceitar o termos e condições
        And clicar no botão "Pesquisar"
        Then devera visualizar a tela de perfil do usuario cadastrado


    Scenario: Informar dados do perfil cadastrado
        When clicar no botão "Adicionar"
        And preencher o formulario do perfil
        And clicar no botão "Salvar"
        Then deverá cadastrar as informações do usuário

    Scenario: Informar dados secundarios do usuario
        When visualizar a pagina de perfil do usuario
        And preencher todos os campos de dados
        Then deverá visualizar perfil com cadastro completo

    Scenario: Pesquisa por vagas
        When que está logado na conta
        And clicar em "Ver Vagas"
        Then deverá visualizar empresas com vagas disponiveis
