/// <reference types="Cypress"/>


describe('Testando primeiro layer da página', () => {
    beforeEach(() => {
        cy.visit("https://inatel.br")
        cy.viewport(1920, 1080)
        cy.get('#contactar').should('have.text', 'Conheça o Inatel')
    });

    it('Verificando existência dos elementos no primeiro layer', () => {
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
        cy.get('.topic-nav > :nth-child(9) > a').should('have.text', 'VESTIBULAR')

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
        cy.get('summary').should('contain.text', 'Editorias')
        cy.get('h1').should('have.text', 'Todas')
    });

});

describe('Testando segundo layer da página', () => {
    beforeEach(() => {
        cy.visit("https://inatel.br")
        cy.viewport(1920, 1080)
        cy.get('#contactar').should('have.text', 'Conheça o Inatel')
    });

    it('Verificando existência dos elementos no segundo layer', () => {
        cy.get('.wrapSobrepoeDestaque > .flexTS > h2')

        //bloco Graduacao
        cy.get(':nth-child(1) > .boxLink > picture > img').should('be.visible')
        cy.get(':nth-child(1) > .boxLink > h4').should('have.text', 'Graduação')
        cy.get(':nth-child(1) > .boxLink > p').should('be.visible')
        cy.get(':nth-child(1) > .fixaBottom > .saibaMais').should('be.visible')

        //bloco Especialização
        cy.get(':nth-child(2) > .boxLink > picture > img').should('be.visible')
        cy.get(':nth-child(2) > .boxLink > h4').should('have.text', 'Especialização')
        cy.get(':nth-child(2) > .boxLink > p').should('be.visible')
        cy.get(':nth-child(2) > .fixaBottom > .saibaMais').should('be.visible')

        //bloco Mestrado e Doutorado
        cy.get(':nth-child(3) > .boxLink > picture > img').should('be.visible')
        cy.get(':nth-child(3) > .boxLink > h4').should('have.text', 'Mestrado e Doutorado')
        cy.get(':nth-child(3) > .boxLink > p').should('be.visible')
        cy.get(':nth-child(3) > .fixaBottom > .saibaMais').should('be.visible')

        //bloco Inatel Online
        cy.get(':nth-child(4) > .boxLink > picture > img').should('be.visible')
        cy.get(':nth-child(4) > .boxLink > h4').should('have.text', 'Inatel Online')
        cy.get(':nth-child(4) > .boxLink > p').should('be.visible')
        cy.get(':nth-child(4) > .fixaBottom > .saibaMais').should('be.visible')

        //bloco Cursos de Extensão e Certificações
        cy.get(':nth-child(5) > .boxLink > picture > img').should('be.visible')
        cy.get(':nth-child(5) > .boxLink > h4').should('have.text', 'Cursos de Extensão e Certificações')
        cy.get(':nth-child(5) > .boxLink > p').should('be.visible')
        cy.get(':nth-child(5) > .fixaBottom > .saibaMais').should('be.visible')

    });
});

describe.only('Rodape', () => {

    beforeEach(() => {
        cy.visit("https://inatel.br")
        cy.get('[id*="cookie"], [class*="cookie"]').invoke('remove')
        cy.scrollTo("bottom")
    });

    it('Informações de endereço e contato', () => {
        cy.get('.logoRodape > h2').should('exist')
        cy.get('.mt15-1920').should('contain.text', "Instituto Nacional de Telecomunicações – Inatel")
        cy.get('.logoRodape > :nth-child(3)').should('contain.text', "Campus em Santa Rita do Sapucaí - MG - Brasil")
        cy.get('.logoRodape > :nth-child(4)').should('contain.text', "Av. João de Camargo, 510 - Centro - 37536-001")
        cy.get('.logoRodape > :nth-child(5)').should('contain.text', "Telefone")
        /* cy.get('.logoRodape > :nth-child(5) > a').should('contain.text', "+55 (35) 3471-9200") */
        cy.get('.logoRodape > :nth-child(6)').should('contain.text', "WhatsApp")
    });

    it('Social Medias - Instagram', () => {
        /* cy.get('[id*="cookie"], [class*="cookie"]').invoke('remove') */
        /* cy.get('.redes-footer > ul > :nth-child(2) > a').scrollIntoView().click() */
        cy.get('.redes-footer > ul > :nth-child(2) > a')
            .should('be.visible')
            .and('have.attr', 'href', 'https://www.instagram.com/inatel.tecnologias')
            .and('have.attr', 'target', '_blank')
    });

    it('Social Medias - Youtube', () => {
        cy.get('.redes-footer > ul > :nth-child(3) > a')
            .should('be.visible')
            .and('have.attr', 'href', 'https://www.youtube.com/channel/UCBB5HfmeAByTUs0XuzFXRew')
            .and('have.attr', 'target', '_blank')
    });

    it('Social Medias - LinkedIN', () => {
        cy.get('.redes-footer > ul > :nth-child(4) > a')
            .should('be.visible')
            .and('have.attr', 'href', 'https://www.linkedin.com/school/inatel/')
            .and('have.attr', 'target', '_blank')
    });

    it('Social Medias - Flickr', () => {
        cy.get('.redes-footer > ul > :nth-child(5) > a')
            .should('be.visible')
            .and('have.attr', 'href', 'https://www.flickr.com/photos/inatel/albums')
            .and('have.attr', 'target', '_blank')
    });

    it('QR-Code e-MEC', () => {
        cy.get('.infosRodape > a > picture > img').should('exist')
    });


    it('Links Gerais - Ouvidoria', () => {
        cy.get('.mb30-1920 > :nth-child(1) > a').should('be.visible').click()
        cy.url().should('include', '/ouvidoria')
        cy.get('.flexBoxGeral').should('be.visible').should('contain.text', "Ouvidoria do Inatel")
    });

    it('Links Gerais - Carreiras', () => {
        cy.get('.mb30-1920 > :nth-child(2) > a').should('be.visible').click()
        cy.url().should('include', '/carreiras')
        cy.get('h1.colorfff').should('be.visible').should('contain.text', "carreira")
    });

    it('Links Gerais - Política de Privacidade', () => {
        cy.get('.mb30-1920 > :nth-child(4) > a')
            .should('be.visible')
            .and('have.attr', 'href', '/politica-privacidade')
            .and('have.attr', 'target', '_blank')

        /* cy.url().should('include', '/politica-privacidade')
        cy.get('.flexBoxGeral').should('be.visible').should('contain.text', "Política de Privacidade") */
    });

    it('Links Gerais - Documentos Institucionais', () => {
        cy.get('.mb30-1920 > :nth-child(5) > a').should('be.visible').click()
        cy.url().should('include', '/documentos-institucionais')
        cy.get('.flexBoxGeral').should('be.visible').should('contain.text', "Documentos Institucionais")
    });

    it('Links Gerais - Faça um Tour Virtual', () => {
        cy.get('.mb30-1920 > :nth-child(6) > a').should('be.visible').click()
        cy.url().should('include', '/conheca-o-inatel/')
        /* cy.get('.flexBoxGeral').should('be.visible').should('contain.text', "Bem-vindo ao Inatel") */
    });

    it('Links Gerais - Notícias', () => {
        cy.get('.mb30-1920 > :nth-child(7) > a').should('be.visible').click()
        cy.url().should('include', '/noticias/')
        cy.get('.flexBoxGeral').should('be.visible').should('contain.text', "Destaque")
    });

    it('Links Gerais - Mapa do Site', () => {
        cy.get('.mb30-1920 > :nth-child(8) > a').should('be.visible').click()
        cy.url().should('include', '/home/mapa-do-site')
        cy.get('.colorfff').should('be.visible').should('contain.text', "Mapa do Site")
    });
});

describe('Testando resoluções diferentes', () => {
    beforeEach(() => {
        cy.visit("https://inatel.br")
        cy.get('#contactar').should('have.text', 'Conheça o Inatel')
    });

    it('Resolução 1920x1080', () => {
        cy.viewport(1920, 1080)
        /* cy.get('.ma-navMobile.mobileHome').should('be.visible') */
        /* cy.get('.ui_w').should('be.visible') */

        cy.get('#SolucoesTecnologicas > .wrapCont').should('be.visible')
        cy.get('#compartilhamosIdeias').should('be.visible')
        cy.get('#promoverAInovacao').should('be.visible')
        cy.get('#comunidade').should('be.visible')
        cy.get('.backComImgFaixa6 > .wrap1396 > .wrapCont').should('be.visible')
        cy.get('[style="background: #f3f5fa;"] > .wrap1396 > .wrapCont').should('be.visible')
        cy.get('#sp-bottom').should('be.visible')

    });

    it('Resolução iphone-6', () => {
        cy.viewport('iphone-6')
        cy.get('.ma-navMobile.mobileHome').should('be.visible')
        /* cy.get('.ui_w').should('be.visible') */

        cy.get('#SolucoesTecnologicas > .wrapCont').should('be.visible')
        cy.get('#compartilhamosIdeias').should('be.visible')
        cy.get('#promoverAInovacao').should('be.visible')
        cy.get('#comunidade').should('be.visible')
        cy.get('.backComImgFaixa6 > .wrap1396 > .wrapCont').should('be.visible')
        cy.get('[style="background: #f3f5fa;"] > .wrap1396 > .wrapCont').should('be.visible')
        cy.get('#sp-bottom').should('be.visible')

    });

    it('Resolução 800x600', () => {
        cy.viewport(800, 600)
        cy.get('.ma-navMobile.mobileHome').should('be.visible')
        /* cy.get('.ui_w').should('be.visible') */

        cy.get('#SolucoesTecnologicas > .wrapCont').should('be.visible')
        cy.get('#compartilhamosIdeias').should('be.visible')
        cy.get('#promoverAInovacao').should('be.visible')
        cy.get('#comunidade').should('be.visible')
        cy.get('.backComImgFaixa6 > .wrap1396 > .wrapCont').should('be.visible')
        cy.get('[style="background: #f3f5fa;"] > .wrap1396 > .wrapCont').should('be.visible')
        cy.get('#sp-bottom').should('be.visible')
        cy.wait(200)
    });
});
