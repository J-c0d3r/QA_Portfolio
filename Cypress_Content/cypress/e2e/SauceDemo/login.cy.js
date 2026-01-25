/// <reference types="Cypress"/>

describe('Testes de Funcionalidades do Login', () => {

    beforeEach(() => {
        cy.visit("https://www.saucedemo.com")
    });

    it('Saber se está no site correto', () => {        
        cy.url().should('eq', 'https://www.saucedemo.com/')
        cy.title().should('eq', 'Swag Labs')
    });

    it('Deve realizar o login com sucesso', () => {
        cy.login_teste('standard_user', 'secret_sauce')
        cy.get('[data-test="title"]').should('contain', 'Products')
    });

    it('Validar Login Incorreto', () => {
        cy.login_teste('incorreto', 'secret_sauce')
        cy.get('[data-test="error"]').should('contain', 'Epic sadface: Username and password do not match any user in this service')
    });

    it('Validar Senha Incorreta', () => {
        cy.login_teste('standard_user', 'incorreto')
        cy.get('[data-test="error"]').should('contain', 'Epic sadface: Username and password do not match any user in this service')
    });


    it('Login Invalido: Username e Senha em Branco', () => {
        cy.get('[data-test="username"]').should('contain', '')
        cy.get('[data-test="password"]').should('contain', '')
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username is required')
    });

    it('Login Invalido: User Invalido e Senha em Branco', () => {
        cy.get('[data-test="username"]').type('aaa')
        cy.get('[data-test="password"]').should('contain', '')
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Password is required')
    });

    it('Login Invalido: User em Branco e Senha Invalida', () => {
        cy.get('[data-test="username"]').should('contain', '')
        cy.get('[data-test="password"]').type('aaa')
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username is required')
    });

    it('Login Invalido: User Válido e Senha Invalida', () => {
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('aaa')
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username and password do not match any user in this service')
    });

    it('Login Invalido: User Invalido e Senha Valida', () => {
        cy.get('[data-test="username"]').type('aaa')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username and password do not match any user in this service')
    });

    it('Deve autenticar corretamente com o 1º username', () => {
        cy.login_teste('standard_user', 'secret_sauce')
        cy.get('[data-test="title"]').should('contain', 'Products')
    });

    it('Deve mostrar a mensagem de erro corretamente com o 2º username', () => {
        cy.login_teste('locked_out_user', 'secret_sauce')
        cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Sorry, this user has been locked out.')
    });

    it('Deve autenticar corretamente com o 3º username', () => {
        cy.login_teste('problem_user', 'secret_sauce')
        cy.get('[data-test="title"]').should('contain', 'Products')
    });

    it('Deve autenticar corretamente com o 4º username', () => {
        cy.login_teste('performance_glitch_user', 'secret_sauce')
        cy.get('[data-test="title"]').should('contain', 'Products')
    });

    it('Deve autenticar corretamente com o 5º username', () => {
        cy.login_teste('error_user', 'secret_sauce')
        cy.get('[data-test="title"]').should('contain', 'Products')
    });

    it('Deve autenticar corretamente com o 6º username', () => {
        cy.login_teste('visual_user', 'secret_sauce')
        cy.get('[data-test="title"]').should('contain', 'Products')
    });

    it('User e Senha Alternados', () => {
        cy.login_teste('secret_sauce', 'standard_user')
        cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username and password do not match any user in this service')
    });


    it('User e Senha com 20 9', () => {
        cy.login_teste('99999999999999999999', '99999999999999999999')
        cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username and password do not match any user in this service')
    });

    it('User e Senha com 50 9', () => {
        cy.login_teste('99999999999999999999999999999999999999999999999999', '99999999999999999999999999999999999999999999999999')
        cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username and password do not match any user in this service')
    });

    it('User e Senha com 100 9', () => {
        cy.login_teste('999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999', '999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999')
        cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username and password do not match any user in this service')
    });

    it('Deve retornar para a tela de login ao realizar o LogOut', () => {
        //login
        cy.login_teste('standard_user', 'secret_sauce')
        cy.get('[data-test="title"]').should('contain', 'Products')

        //logout
        cy.get('.bm-burger-button').click()
        cy.get('[data-test="logout-sidebar-link"]').click()
        cy.get('.login_logo').should('exist')

        //confirmação
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username is required')
    });

});

describe('Verificando elementos na interface', () => {

    beforeEach(() => {
        cy.visit("https://www.saucedemo.com/")
    });

    it('Deve conter o titulo da pagina', () => {
        cy.get('.login_logo').invoke("text").should('contain', "Swag Labs")
    });

    it('Deve conter os campos Username e Password', () => {
        cy.get('[data-test="username"]').should('be.visible').should('exist')
        cy.get('[data-test="password"]').should('be.visible').should('exist')
    });

    it('Deve conter o botão login', () => {
        cy.get('[data-test="login-button"]').should('be.visible').should('exist')
    });

    it('Deve conter a lista de usernames', () => {
        const usernames = [
            'standard_user',
            'locked_out_user',
            'problem_user',
            'performance_glitch_user',
            'error_user',
            'visual_user'
        ]
        usernames.forEach(usernames => {
            cy.get('[data-test="login-credentials"]').should('contain.text', usernames)
        })
    });

    it('Deve conter a lista de senhas', () => {
        cy.get('[data-test="login-password"]').should('contain.text', "secret_sauce")
    });
});
