/// <reference types="cypress"/>

import { createUser } from '../../support/functions.js'

/*https://www.globalsqa.com/angularjs-protractor-practice-site/*/

var user;

function registerUser() {
  user = createUser();
  cy.get('#firstName').type(user[0]);
  cy.get('#Text1').type(user[0]);
  cy.get('#username').type(user[0]);
  cy.get('#password').type(user[1]);
  cy.get('.btn-primary').click();
}

describe('Testing GLOBALSQA - Register Login Example - Functionalities', () => {

  beforeEach(() => {
    cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/');
  });

  it('Verificando Botão Cancel retornar para página Login', () => {
    cy.get('.btn-link').click()
    cy.get('.btn-link').click()
    cy.get('h2').should('contain.text', "Login")
  });

  it('Registrando um usuário com sucesso', () => {
    cy.get('.btn-link').click();
    registerUser();
    cy.get('.ng-binding').should('contain.text', 'Registration successful');
  })


  it('Registrando um usuário e Logando ambos com sucesso', () => {
    cy.get('.btn-link').click();
    registerUser();
    cy.get('.ng-binding').should('contain.text', 'Registration successful');
    cy.get('#username').type(user[0])
    cy.get('#password').type(user[1])
    cy.get('.btn-primary').click()
    cy.get('h1.ng-binding').should('contain.text', "Hi " + user[0] + "!")
    cy.get('div.ng-scope > :nth-child(2)').should('contain.text', "You're logged in!!")
  })

  it('Deletando usuário com sucesso!', () => {
    cy.get('.btn-link').click();
    registerUser();
    cy.get('.ng-binding').should('contain.text', 'Registration successful');
    cy.get('#username').type(user[0])
    cy.get('#password').type(user[1])
    cy.get('.btn-primary').click()
    cy.get('div.ng-scope > :nth-child(2)').should('contain.text', "You're logged in!!")
    cy.get('.ng-binding > a').click();
    cy.get('.btn').click();
    cy.get('#username').type(user[0])
    cy.get('#password').type(user[1])
    cy.get('.btn-primary').click()
    cy.get('.ng-binding').should('have.text', 'Username or password is incorrect');
  })

  it('Registrando um usuário como todos os campos em branco', () => {
    cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/register');
    cy.get('.btn-primary').should('be.disabled');
  })

  it('Registrando um usuário Campo First Name em Branco', () => {
    cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/register');
    cy.get('#Text1').type('inatel');
    cy.get('#username').type('inatel');
    cy.get('#password').type('inatel');
    cy.get('.btn-primary').should('be.disabled');
  })

  it('Registrando um usuário Campo Last Name em Branco', () => {
    cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/register');
    cy.get('#firstName').type('inatel');
    cy.get('#username').type('inatel');
    cy.get('#password').type('inatel');
    cy.get('.btn-primary').should('be.disabled');
  })

  it('Registrando um usuário Campo Username em Branco', () => {
    cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/register');
    cy.get('#firstName').type('inatel');
    cy.get('#Text1').type('inatel');
    cy.get('#password').type('inatel');
    cy.get('.btn-primary').should('be.disabled');
  })

  it('Registrando um usuário Campo Senha em Branco', () => {
    cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/register');
    cy.get('#firstName').type('inatel');
    cy.get('#Text1').type('inatel');
    cy.get('#username').type('inatel');
    cy.get('.btn-primary').should('be.disabled');
  })


  it('Registrando um usuário. Campo First name Escreve, Apaga, Checa Error', () => {
    cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/register');
    cy.get('#firstName').type('inatel');
    cy.get('#firstName').clear()
    cy.get('#Text1').type('inatel');
    cy.get('#username').type('inatel');
    cy.get('#password').type('inatel');
    cy.get('.has-error > .help-block').should('have.text', 'First name is required');
    cy.get('.btn-primary').should('be.disabled');
  })

  it('Registrando um usuário. Campo Last name Escreve, Apaga, Checa Error', () => {
    cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/register');
    cy.get('#firstName').type('inatel');
    cy.get('#Text1').type('inatel');
    cy.get('#Text1').clear()
    cy.get('#username').type('inatel');
    cy.get('#password').type('inatel');
    cy.get('.has-error > .help-block').should('have.text', 'Last name is required');
    cy.get('.btn-primary').should('be.disabled');
  })

  it('Registrando um usuário. Username Escreve, Apaga, Checa Error', () => {
    cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/register');
    cy.get('#firstName').type('inatel');
    cy.get('#Text1').type('inatel');
    cy.get('#username').type('inatel');
    cy.get('#username').clear()
    cy.get('#password').type('inatel');
    cy.get('.has-error > .help-block').should('have.text', 'Username is required');
    cy.get('.btn-primary').should('be.disabled');
  })

  it('Registrando um usuário. Campo Senha Escreve, Apaga, Checa Error', () => {
    cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/register');
    cy.get('#firstName').type('inatel');
    cy.get('#Text1').type('inatel');
    cy.get('#username').type('inatel');
    cy.get('#password').type('inatel');
    cy.get('#password').clear();
    cy.get('.has-error > .help-block').should('have.text', 'Password is required');
    cy.get('.btn-primary').should('be.disabled');
  })
})


describe('Testing GLOBALSQA - Register Login Example - Visual Elements', () => {
  it('Checando existência dos elementos na página login', () => {
    cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/');

    cy.get('h2').should('exist')
    cy.get('h2').should('contain.text', "Login")

    cy.get('#username').should('exist')
    cy.get('#password').should('exist')

    cy.get('.credits > :nth-child(1)').should('exist')
    cy.get('.credits > :nth-child(1)').should('contain.text', "AngularJS User Registration and Login Example")

    cy.get(':nth-child(2) > a').should('exist')

  });

  it('Checando existência dos elementos na página register', () => {
    cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/register');

    cy.get('h2').should('exist')
    cy.get('h2').should('contain.text', "Register")

    cy.get('#firstName').should('exist')
    cy.get('#Text1').should('exist')

    cy.get('#username').should('exist')
    cy.get('#password').should('exist')

    cy.get('.credits > :nth-child(1)').should('exist')
    cy.get('.credits > :nth-child(1)').should('contain.text', "AngularJS User Registration and Login Example")

    cy.get(':nth-child(2) > a').should('exist')

  });

});
