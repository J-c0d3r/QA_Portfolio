/// <reference types="Cypress"/>

describe('Teste Funcional de Login', () => {
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


    //#1
    it('Saber se está no site correto', () => {
        cy.visit("https://www.saucedemo.com/")
        cy.get('.login_logo').should('exist')
    });

    //#2
    it('Login Invalido: Campo User e Senha em Branco', () => {
        cy.visit("https://www.saucedemo.com/")
        cy.get('[data-test="username"]').should('contain', '')
        cy.get('[data-test="password"]').should('contain', '')
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username is required')
    });

    //#3
    it('Login Invalido: User Invalido e Senha em Branco', () => {
        cy.visit("https://www.saucedemo.com/")
        cy.get('[data-test="username"]').type('aaa')
        cy.get('[data-test="password"]').should('contain', '')
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Password is required')
    });

    //#4
    it('Login Invalido: User em Branco e Senha Invalida', () => {
        cy.visit("https://www.saucedemo.com/")
        cy.get('[data-test="username"]').should('contain', '')
        cy.get('[data-test="password"]').type('aaa')
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username is required')
    });

    //#5
    it('Login Invalido: User Válido e Senha Invalida', () => {
        cy.visit("https://www.saucedemo.com/")
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('aaa')
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username and password do not match any user in this service')
    });

    //#6
    it('Login Invalido: User Invalido e Senha Valida', () => {
        cy.visit("https://www.saucedemo.com/")
        cy.get('[data-test="username"]').type('aaa')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username and password do not match any user in this service')
    });

    //#7
    it('Verifica se o login funciona corretamente com o 1º username', () => {
        cy.login_teste('standard_user', 'secret_sauce')
        cy.get('[data-test="title"]').should('contain', 'Products')
    });

 /*    //#8
    it('Verifica se o login funciona corretamente com o 2º username', () => {
        cy.login_teste('locked_out_user', 'secret_sauce')
        cy.get('[data-test="title"]').should('contain', 'Products')
    }); */

    //#9
    it('Verifica se o login funciona corretamente com o 3º username', () => {
        cy.login_teste('problem_user', 'secret_sauce')
        cy.get('[data-test="title"]').should('contain', 'Products')
    });

    //#10
    it('Verifica se o login funciona corretamente com o 4º username', () => {
        cy.login_teste('performance_glitch_user', 'secret_sauce')
        cy.get('[data-test="title"]').should('contain', 'Products')
    });

    //#11
    it('Verifica se o login funciona corretamente com o 5º username', () => {
        cy.login_teste('error_user', 'secret_sauce')
        cy.get('[data-test="title"]').should('contain', 'Products')
    });

    //#12
    it('Verifica se o login funciona corretamente com o 6º username', () => {
        cy.login_teste('visual_user', 'secret_sauce')
        cy.get('[data-test="title"]').should('contain', 'Products')
    });

    //#13
    it('User e Senha Alternados', () => {
        cy.login_teste('secret_sauce', 'standard_user')
        cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username and password do not match any user in this service')
    });

    //#14
    it('User e Senha com 20 9', () => {
        cy.login_teste('99999999999999999999', '99999999999999999999')
        cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username and password do not match any user in this service')
    });


    //#15
    it('User e Senha com 50 9', () => {
        cy.login_teste('99999999999999999999999999999999999999999999999999', '99999999999999999999999999999999999999999999999999')
        cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username and password do not match any user in this service')
    });

    //#16
    it('User e Senha com 100 9', () => {
        cy.login_teste('999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999', '999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999')
        cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username and password do not match any user in this service')
    });

    //#17
    it('Verifica se botão LogOut funciona corretamente', () => {
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