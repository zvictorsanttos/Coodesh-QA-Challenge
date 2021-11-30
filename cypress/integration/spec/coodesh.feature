Feature: Cadastro Plataforma Coodesh
        Eu como usuario desejo realizar um cadastro na plataforma de CVC Coodesh

    Background: Pagina do site
        Given que esteja na home do site coodesh


    Scenario: Cadastrar perfil do usuário
        And visualize o layout "Login"
        And clique no botão "Criar Conta"
        When preencher o formulario de Cadastro
        And  aceitar o termos e condições e clicar em "Inscrever-se"
        And devera visualizar a tela de perfil do usuario cadastrado
        Then devera preencher o perfil de cadastro



