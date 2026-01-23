/// <reference types="Cypress"/>

describe('API - Testes de Login', () => {

    //#1
    it('Deve realizar o login com sucesso', () => {
        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/login',
            body: {
                "email": "fulano@qa.com",
                "password": "teste"
            }
        }).then((response) => {
            expect(response.status).to.equal(200)
            expect(response.body.message).to.equal('Login realizado com sucesso')
        })
    });

    //#2
    it('Deve validar com senha incorreta', () => {
        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/login',
            body: {
                "email": "fulano@qa.com",
                "password": "senhaIncorreta"
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.equal(401)
            expect(response.body.message).to.equal('Email e/ou senha inválidos')
        })
    });

    //#3
    it('Deve validar com email incorreto', () => {
        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/login',
            body: {
                "email": "aaa",
                "password": "teste"
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.equal(400)
            expect(response.body.email).to.equal('email deve ser um email válido')
        })
    });

    //#4
    it('Deve validar com email e senha em branco', () => {
        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/login',
            body: {
                "email": "",
                "password": ""
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.equal(400)
            expect(response.body.email).to.equal('email não pode ficar em branco')
            expect(response.body.password).to.equal('password não pode ficar em branco')
        })
    });

    //#5
    it('Deve validar com email em branco e senha correta', () => {
        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/login',
            body: {
                "email": "",
                "password": "teste"
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.equal(400)
            expect(response.body.email).to.equal('email não pode ficar em branco')
        })
    });

    //#6
    it('Deve validar com email correto e senha em branco', () => {
        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/login',
            body: {
                "email": "fulano@qa.com",
                "password": ""
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.equal(400)
            expect(response.body.password).to.equal('password não pode ficar em branco')
        })
    });

    //#7
    it('Deve validar com email só números e senha correta', () => {
        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/login',
            body: {
                "email": "1234567890",
                "password": "teste"
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.equal(400)
            expect(response.body.email).to.equal('email deve ser um email válido')
        })
    });

    //#8
    it('Deve validar com email "text@" e senha correta', () => {
        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/login',
            body: {
                "email": "text@",
                "password": "teste"
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.equal(400)
            expect(response.body.email).to.equal('email deve ser um email válido')
        })
    });

    //#9
    it('Deve validar com email "text@text" e senha correta', () => {
        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/login',
            body: {
                "email": "text@text",
                "password": "teste"
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.equal(400)
            expect(response.body.email).to.equal('email deve ser um email válido')
        })
    });




});
