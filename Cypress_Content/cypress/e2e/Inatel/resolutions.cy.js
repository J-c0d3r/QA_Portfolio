/// <reference types="Cypress"/>

import { runFooter } from "./footer.cy";

describe('Testando em diferentes resoluções', () => {
    beforeEach(() => {
        cy.visit("https://inatel.br")
        cy.get('#contactar').should('have.text', 'Conheça o Inatel')
    });

    describe('Resolução 1920x1080', () => {
        it('Verificando existencia das layers', () => {
            cy.viewport(1920, 1080)
            cy.get('.slickComTexto > picture > img').should('be.visible')
            cy.get('.wrapSobrepoeDestaque').should('be.visible')
            cy.get('#SolucoesTecnologicas > .wrapCont').should('be.visible')
            cy.get('#compartilhamosIdeias').should('be.visible')
            cy.get('#promoverAInovacao').should('be.visible')
            cy.get('#comunidade').should('be.visible')
            cy.get('.backComImgFaixa6 > .wrap1396 > .wrapCont').should('be.visible')
            cy.get('[style="background: #f3f5fa;"] > .wrap1396 > .wrapCont').should('be.visible')
            cy.get('#sp-bottom').should('be.visible')
        });

        runFooter();
    });

    describe('Resolução iphone-6', () => {
        it('Verificando existencia das layers', () => {
            cy.viewport('iphone-6')
            cy.get('.ma-navMobile.mobileHome').should('be.visible')

            cy.get('.slickComTexto > picture > img').should('be.visible')
            cy.get('.wrapSobrepoeDestaque').should('be.visible')
            cy.get('#SolucoesTecnologicas > .wrapCont').should('be.visible')
            cy.get('#compartilhamosIdeias').should('be.visible')
            cy.get('#promoverAInovacao').should('be.visible')
            cy.get('#comunidade').should('be.visible')
            cy.get('.backComImgFaixa6 > .wrap1396 > .wrapCont').should('be.visible')
            cy.get('[style="background: #f3f5fa;"] > .wrap1396 > .wrapCont').should('be.visible')
            cy.get('#sp-bottom').should('be.visible')
        });

        runFooter();
    });

    describe('Resolução 800x600', () => {
        it('Verificando existencia das layers', () => {
            cy.viewport(800, 600)
            cy.get('.ma-navMobile.mobileHome').should('be.visible')

            cy.get('.slickComTexto > picture > img').should('be.visible')
            cy.get('.wrapSobrepoeDestaque').should('be.visible')
            cy.get('#SolucoesTecnologicas > .wrapCont').should('be.visible')
            cy.get('#compartilhamosIdeias').should('be.visible')
            cy.get('#promoverAInovacao').should('be.visible')
            cy.get('#comunidade').should('be.visible')
            cy.get('.backComImgFaixa6 > .wrap1396 > .wrapCont').should('be.visible')
            cy.get('[style="background: #f3f5fa;"] > .wrap1396 > .wrapCont').should('be.visible')
            cy.get('#sp-bottom').should('be.visible')
        });

        runFooter();
    });

});
