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

describe('GlobalSQA – Register and Login Functional Tests', () => {

  beforeEach(() => {
    cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/');
    cy.wait(100);
  });

  it('Deve registrar um usuário com sucesso', () => {
    cy.get('.btn-link').click();
    registerUser();
    cy.get('.ng-binding').should('contain.text', 'Registration successful');
  })


  it('Deve registrar um usuário e realizar o login ambos com sucesso', () => {
    cy.get('.btn-link').click();
    registerUser();
    cy.get('.ng-binding').should('contain.text', 'Registration successful');
    cy.get('#username').type(user[0])
    cy.get('#password').type(user[1])
    cy.get('.btn-primary').click()
    cy.get('h1.ng-binding').should('contain.text', "Hi " + user[0] + "!")
    cy.get('div.ng-scope > :nth-child(2)').should('contain.text', "You're logged in!!")
  })

  it('Deve deletar um usuário com sucesso!', () => {
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

  it('Botão Register deve permanecer desabilitado quando todos os campos estiverem em branco', () => {
    cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/register');
    cy.get('.btn-primary').should('be.disabled');
  })

  it('Botão Register deve permanecer desabilitado quando o campo First Name estiver em Branco', () => {
    cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/register');
    cy.get('#Text1').type('inatel');
    cy.get('#username').type('inatel');
    cy.get('#password').type('inatel');
    cy.get('.btn-primary').should('be.disabled');
  })

  it('Botão Register deve permanecer desabilitado quando o campo Last Name estiver em Branco', () => {
    cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/register');
    cy.get('#firstName').type('inatel');
    cy.get('#username').type('inatel');
    cy.get('#password').type('inatel');
    cy.get('.btn-primary').should('be.disabled');
  })

  it('Botão Register deve permanecer desabilitado quando campo Username estiver em Branco', () => {
    cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/register');
    cy.get('#firstName').type('inatel');
    cy.get('#Text1').type('inatel');
    cy.get('#password').type('inatel');
    cy.get('.btn-primary').should('be.disabled');
  })

  it('Botão Register deve permanecer desabilitado quando campo Senha estiver em Branco', () => {
    cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/register');
    cy.get('#firstName').type('inatel');
    cy.get('#Text1').type('inatel');
    cy.get('#username').type('inatel');
    cy.get('.btn-primary').should('be.disabled');
  })


  it('Botão Register deve permanecer desabilitado após preencher e limpar o campo First Name', () => {
    cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/register');
    cy.get('#firstName').type('inatel');
    cy.get('#firstName').clear()
    cy.get('#Text1').type('inatel');
    cy.get('#username').type('inatel');
    cy.get('#password').type('inatel');
    cy.get('.has-error > .help-block').should('have.text', 'First name is required');
    cy.get('.btn-primary').should('be.disabled');
  })

  it('Botão Register deve permanecer desabilitado após preencher e limpar o campo Last Name', () => {
    cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/register');
    cy.get('#firstName').type('inatel');
    cy.get('#Text1').type('inatel');
    cy.get('#Text1').clear()
    cy.get('#username').type('inatel');
    cy.get('#password').type('inatel');
    cy.get('.has-error > .help-block').should('have.text', 'Last name is required');
    cy.get('.btn-primary').should('be.disabled');
  })

  it('Botão Register deve permanecer desabilitado após preencher e limpar o campo UserName', () => {
    cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/register');
    cy.get('#firstName').type('inatel');
    cy.get('#Text1').type('inatel');
    cy.get('#username').type('inatel');
    cy.get('#username').clear()
    cy.get('#password').type('inatel');
    cy.get('.has-error > .help-block').should('have.text', 'Username is required');
    cy.get('.btn-primary').should('be.disabled');
  })

  it('Botão Register deve permanecer desabilitado após preencher e limpar o campo Password', () => {
    cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/register');
    cy.get('#firstName').type('inatel');
    cy.get('#Text1').type('inatel');
    cy.get('#username').type('inatel');
    cy.get('#password').type('inatel');
    cy.get('#password').clear();
    cy.get('.has-error > .help-block').should('have.text', 'Password is required');
    cy.get('.btn-primary').should('be.disabled');
  })

  it('Botão Cancel deve retornar para a página de Login', () => {
    cy.get('.btn-link').click()
    cy.wait(150)
    cy.get('.btn-link').click()
    cy.get('h2').should('contain.text', "Login")
  });

})


describe('GlobalSQA – Register and Login Visual Tests', () => {
  it('Deve conter os elementos Titulo, Username, Password, Rodape', () => {
    cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/');

    cy.get('h2').should('exist')
    cy.get('h2').should('contain.text', "Login")

    cy.get('#username').should('exist')
    cy.get('#password').should('exist')

    cy.get('.credits > :nth-child(1)').should('exist')
    cy.get('.credits > :nth-child(1)').should('contain.text', "AngularJS User Registration and Login Example")

    cy.get(':nth-child(2) > a').should('exist')

  });

  it('Deve conter os elementos Titulo, First name, Last name, Username, Password, Rodape', () => {
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
