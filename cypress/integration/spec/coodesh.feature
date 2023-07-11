Feature: Cadastro Plataforma Coodesh
        Eu como usuario desejo realizar um cadastro na plataforma de CVC Coodesh

    Background: Pagina do site
        Given que esteja na home do site coodesh


    Scenario: Realizar Login dados validos
        When preencher campos com dados validos
        Then devera visualizar a tela principal

    Scenario: Realizar Login dados invalidos 
        When preencher campos com dados invalidos
        Then devera retornar mensagem de erro


    Scenario: Cadastrar perfil do usuário e Pesquisar Vagas Disponiveis
        And visualize o layout "Login"
        When preencher o formulario de Cadastro
        And  aceitar o termos e condições e clicar em "Inscrever-se"
        And devera preencher o perfil de cadastro
        And devera clicar no botão "Vagas"
        Then devera visualizar a tela com as vagas disponiveis


