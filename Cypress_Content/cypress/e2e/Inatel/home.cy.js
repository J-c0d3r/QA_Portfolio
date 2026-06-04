/// <reference types="Cypress"/>

import { runFooter } from "./footer.cy";


describe('Testando primeiro layer', () => {
    beforeEach(() => {
        cy.visit("https://inatel.br")
        cy.viewport(1920, 1080)
    });

    it('Cada elemento na Barra de Menu deve existir', () => {
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

    it('Botão Conheça o Inatel deve redirecionar para página Quem Somos', () => {
        cy.get('#contactar').click()
        cy.get('.flexBoxGeral > :nth-child(1) > .subtopic > .colorfff').should('have.text', 'Quem Somos')
        cy.get('.flexBoxGeral > :nth-child(1) > .subtopic > h2').should('have.text', 'Missão')
        cy.get('.SJ-MT-00 > .subtopic > h2').should('have.text', 'Visão')
    });

    it('Botão Notícias deve redirecionar para página Notícias', () => {
        cy.get('#noticias-inatel').click()
        cy.url().should('include', '/noticias/')
        cy.get('.flexBoxGeral').should('be.visible').should('contain.text', "Destaque")
    });

});

describe('Testando elementos do layer Educação', () => {
    beforeEach(() => {
        cy.visit("https://inatel.br")
    });

    it('Deve conter o Titulo do layer', () => {
        cy.get('.wrapSobrepoeDestaque > .flexTS > h2').should('be.visible').should('contain.text', "Educação")
        cy.get('.wrapSobrepoeDestaque > .flexTS > .subtopic > h3').should('be.visible').should('contain.text', "Futuros líderes estão aqui, estude no Inatel!")
    });

    it('Deve conter os elementos do bloco Graduação', () => {
        cy.get(':nth-child(1) > .boxLink > picture > img').should('be.visible')
        cy.get(':nth-child(1) > .boxLink > h4').should('have.text', 'Graduação')
        cy.get(':nth-child(1) > .boxLink > p').should('be.visible')
        cy.get(':nth-child(1) > .fixaBottom > .saibaMais').should('be.visible')
    });
    it('Deve conter os elementos do bloco Especialização', () => {
        cy.get(':nth-child(2) > .boxLink > picture > img').should('be.visible')
        cy.get(':nth-child(2) > .boxLink > h4').should('have.text', 'Especialização')
        cy.get(':nth-child(2) > .boxLink > p').should('be.visible')
        cy.get(':nth-child(2) > .fixaBottom > .saibaMais').should('be.visible')
    });

    it('Deve conter os elementos do bloco Mestrado e Doutorado', () => {
        cy.get(':nth-child(3) > .boxLink > picture > img').should('be.visible')
        cy.get(':nth-child(3) > .boxLink > h4').should('have.text', 'Mestrado e Doutorado')
        cy.get(':nth-child(3) > .boxLink > p').should('be.visible')
        cy.get(':nth-child(3) > .fixaBottom > .saibaMais').should('be.visible')
    });

    it('Deve conter os elementos do bloco Inatel Online', () => {
        cy.get(':nth-child(4) > .boxLink > picture > img').should('be.visible')
        cy.get(':nth-child(4) > .boxLink > h4').should('have.text', 'Inatel Online')
        cy.get(':nth-child(4) > .boxLink > p').should('be.visible')
        cy.get(':nth-child(4) > .fixaBottom > .saibaMais').should('be.visible')
    });

    it('Deve conter os elementos do bloco Cursos de Extensão e Certificações', () => {
        cy.get(':nth-child(5) > .boxLink > picture > img').should('be.visible')
        cy.get(':nth-child(5) > .boxLink > h4').should('have.text', 'Cursos de Extensão e Certificações')
        cy.get(':nth-child(5) > .boxLink > p').should('be.visible')
        cy.get(':nth-child(5) > .fixaBottom > .saibaMais').should('be.visible')
    });
});


describe('Testando Footer', () => {

   /*  beforeEach(() => {
        cy.visit("https://inatel.br")
        cy.get('[id*="cookie"], [class*="cookie"]').invoke('remove')
        cy.scrollTo("bottom")
    }); */

    runFooter();
});
