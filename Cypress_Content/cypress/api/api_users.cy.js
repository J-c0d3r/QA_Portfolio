/// <reference types="Cypress"/>

/* var test = "../../../support/functions.js" */

describe('Testes - Cadastrar Usuários', () => {

    //#1
    it('Adicionar um novo usuário comum', () => {
        let userInfo = criarUsuario();
        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/usuarios',
            body: {
                "nome": userInfo[0],
                "email": userInfo[2],
                "password": userInfo[1],
                "administrador": "false"
            }
        }).then((response) => {
            expect(response.status).to.equal(201)
            expect(response.body.message).to.equal('Cadastro realizado com sucesso')
        })
    });

    //#2
    it('Adicionar um novo usuário com campo nome em branco', () => {
        let userInfo = criarUsuario();
        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/usuarios',
            body: {
                "nome": "",
                "email": userInfo[2],
                "password": userInfo[1],
                "administrador": "false"
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.equal(400)
            expect(response.body.nome).to.equal('nome não pode ficar em branco')
        })
    });

    //#3
    it('Adicionar um novo usuário com campo email em branco', () => {
        let userInfo = criarUsuario();
        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/usuarios',
            body: {
                "nome": userInfo[0],
                "email": "",
                "password": userInfo[1],
                "administrador": "false"
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.equal(400)
            expect(response.body.email).to.equal('email não pode ficar em branco')
        })
    });

    //#4
    it('Adicionar um novo usuário com campo password em branco', () => {
        let userInfo = criarUsuario();
        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/usuarios',
            body: {
                "nome": userInfo[0],
                "email": userInfo[2],
                "password": "",
                "administrador": "false"
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.equal(400)
            expect(response.body.password).to.equal('password não pode ficar em branco')
        })
    });

    //#5
    it('Adicionar usuário duplicado', () => {
        let userInfo = criarUsuario();
        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/usuarios',
            body: {
                "nome": userInfo[0],
                "email": userInfo[2],
                "password": userInfo[1],
                "administrador": "false"
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.equal(201)
            expect(response.body.message).to.equal('Cadastro realizado com sucesso')
        })

        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/usuarios',
            body: {
                "nome": userInfo[0],
                "email": userInfo[2],
                "password": userInfo[1],
                "administrador": "false"
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.equal(400)
            expect(response.body.message).to.equal('Este email já está sendo usado')
        })
    });


});


function criarUsuario(){

    let hour = new Date().getHours().toString();
    let minutes = new Date().getMinutes().toString();
    let sec = new Date().getSeconds().toString();

    let user = 'testID' + hour + minutes + sec;
    let password = 'testPass';
    let email = 'test' + hour + minutes + sec + '@qa.com.br';

    let userInfo = [user, password, email];

    return userInfo;

}