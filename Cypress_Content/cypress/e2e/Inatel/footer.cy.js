/* /// <reference types="Cypress"/> */

export function runFooter() {
    describe('Elementos do Rodape', () => {

        /* beforeEach(() => {
            cy.visit("https://inatel.br")
            cy.get('[id*="cookie"], [class*="cookie"]').invoke('remove')
            cy.scrollTo("bottom")
        }); */

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
}
