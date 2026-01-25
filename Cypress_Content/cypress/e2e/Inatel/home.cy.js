/// <reference types="Cypress"/>

import { runFooter } from "./footer.cy";


describe('Testando primeiro layer', () => {
    beforeEach(() => {
        cy.visit("https://inatel.br")
        cy.viewport(1920, 1080)
    });

    it('Verificando existência dos elementos na Barra de Menu', () => {
        cy.get('.topic-nav > :nth-child(1) > [href="#"]').should('be.visible')
        cy.get('.topic-nav > :nth-child(1) > [href="#"]').should('have.text', 'Conheça o Inatel')

        cy.get('.topic-nav > :nth-child(2) > [href="#"]').should('be.visible')
        cy.get('.topic-nav > :nth-child(2) > [href="#"]').should('have.text', 'Cursos')

        cy.get(':nth-child(3) > [href="#"]').should('be.visible')
        cy.get(':nth-child(3) > [href="#"]').should('have.text', 'Alunos')

        cy.get(':nth-child(4) > [href="#"]').should('be.visible')
        cy.get(':nth-child(4) > [href="#"]').should('have.text', 'Soluções Tecnológicas')

        cy.get(':nth-child(5) > [href="#"]').should('be.visible')
        cy.get(':nth-child(5) > [href="#"]').should('have.text', 'Pesquisa e Laboratórios')

        cy.get(':nth-child(6) > [href="#"]').should('be.visible')
        cy.get(':nth-child(6) > [href="#"]').should('have.text', 'Empreendedorismo')

        cy.get(':nth-child(7) > [href="#"]').should('be.visible')
        cy.get(':nth-child(7) > [href="#"]').should('have.text', 'Eventos')

        cy.get('.topic-nav > :nth-child(8) > a').should('be.visible')
        cy.get('.topic-nav > :nth-child(8) > a').should('have.text', 'Ex-alunos')

        cy.get('.topic-nav > :nth-child(9) > a').should('be.visible')
        cy.get('.topic-nav > :nth-child(9) > a').invoke('text').should('match', /vestibular/i)

        cy.get('#contactar').should('be.visible')
        cy.get('#noticias-inatel').should('be.visible')
    });

    it('Verificando o funcionamento do botão Conheça o Inatel', () => {
        cy.get('#contactar').click()
        cy.get('.flexBoxGeral > :nth-child(1) > .subtopic > .colorfff').should('have.text', 'Quem Somos')
        cy.get('.flexBoxGeral > :nth-child(1) > .subtopic > h2').should('have.text', 'Missão')
        cy.get('.SJ-MT-00 > .subtopic > h2').should('have.text', 'Visão')
    });

    it('Verificando o funcionamento do botão Notícias', () => {
        cy.get('#noticias-inatel').click()
        cy.url().should('include', '/noticias/')
        cy.get('.flexBoxGeral').should('be.visible').should('contain.text', "Destaque")
    });

});

describe('Testando layer Educação', () => {
    beforeEach(() => {
        cy.visit("https://inatel.br")
    });

    it('Titulo do layer', () => {
        cy.get('.wrapSobrepoeDestaque > .flexTS > h2').should('be.visible').should('contain.text', "Educação")
        cy.get('.wrapSobrepoeDestaque > .flexTS > .subtopic > h3').should('be.visible').should('contain.text', "Futuros líderes estão aqui, estude no Inatel!")
    });

    it('Elementos bloco Graduação', () => {
        //bloco Graduacao
        cy.get(':nth-child(1) > .boxLink > picture > img').should('be.visible')
        cy.get(':nth-child(1) > .boxLink > h4').should('have.text', 'Graduação')
        cy.get(':nth-child(1) > .boxLink > p').should('be.visible')
        cy.get(':nth-child(1) > .fixaBottom > .saibaMais').should('be.visible')
    });
    it('Elementos bloco Especialização', () => {
        //bloco Especialização
        cy.get(':nth-child(2) > .boxLink > picture > img').should('be.visible')
        cy.get(':nth-child(2) > .boxLink > h4').should('have.text', 'Especialização')
        cy.get(':nth-child(2) > .boxLink > p').should('be.visible')
        cy.get(':nth-child(2) > .fixaBottom > .saibaMais').should('be.visible')
    });

    it('Elementos bloco Mestrado e Doutorado', () => {
        //bloco Mestrado e Doutorado
        cy.get(':nth-child(3) > .boxLink > picture > img').should('be.visible')
        cy.get(':nth-child(3) > .boxLink > h4').should('have.text', 'Mestrado e Doutorado')
        cy.get(':nth-child(3) > .boxLink > p').should('be.visible')
        cy.get(':nth-child(3) > .fixaBottom > .saibaMais').should('be.visible')
    });

    it('Elementos bloco Inatel Online', () => {
        //bloco Inatel Online
        cy.get(':nth-child(4) > .boxLink > picture > img').should('be.visible')
        cy.get(':nth-child(4) > .boxLink > h4').should('have.text', 'Inatel Online')
        cy.get(':nth-child(4) > .boxLink > p').should('be.visible')
        cy.get(':nth-child(4) > .fixaBottom > .saibaMais').should('be.visible')
    });

    it('Elementos bloco Cursos de Extensão e Certificações', () => {
        //bloco Cursos de Extensão e Certificações
        cy.get(':nth-child(5) > .boxLink > picture > img').should('be.visible')
        cy.get(':nth-child(5) > .boxLink > h4').should('have.text', 'Cursos de Extensão e Certificações')
        cy.get(':nth-child(5) > .boxLink > p').should('be.visible')
        cy.get(':nth-child(5) > .fixaBottom > .saibaMais').should('be.visible')
    });
});


describe('Testando Footer', () => {

    beforeEach(() => {
        cy.visit("https://inatel.br")
        cy.get('[id*="cookie"], [class*="cookie"]').invoke('remove')
        cy.scrollTo("bottom")
    });

    runFooter();
});
