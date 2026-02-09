/// <reference types="Cypress"/>

describe('Checking elements on Home page', () => {

    describe('Checking main elements', () => {
        beforeEach(() => {
            cy.login_teste('standard_user', 'secret_sauce')
        });

        it('Deve conter o elemento Titulo e Subtitulo visivel', () => {
            cy.get('.app_logo').should('be.visible').invoke("text").should('contain', "Swag Labs")
            cy.get('[data-test="title"]').should('be.visible').should('contain.text', "Products")
        });

        it('Deve conter o elemento Icone do Carrinho visivel', () => {
            cy.get('[data-test="shopping-cart-link"]').should('be.visible')
        });

        it('Deve conter o elemento filtro visivel', () => {
            cy.get('[data-test="product-sort-container"]').should('be.visible')
        });

        it('Deve conter o elemento menu hamburguer', () => {
            cy.get('.bm-burger-button').should('be.visible').should('exist')
        });

        it('Deve conter All Items, About, Logou, Reset App State ao clicar no Hamburguer Menu', () => {
            cy.get('.bm-burger-button').click()
            cy.get('[data-test="inventory-sidebar-link"]').should('contain.text', "All Items")
            cy.get('[data-test="about-sidebar-link"]').should('contain.text', "About")
            cy.get('[data-test="logout-sidebar-link"]').should('contain.text', "Logout")
            cy.get('[data-test="reset-sidebar-link"]').should('contain.text', "Reset App State")
        });

        it('Deve conter a layer footer', () => {
            cy.get('[data-test="footer"]').should('be.visible').should('exist')
        });
    });

    /* 
    describe('Checking items card elements', () => {

        beforeEach(() => {
            cy.login_teste('standard_user', 'secret_sauce')
        });

        it('teste04C', () => {
            // cy.get('[data-test="inventory-container"]').should('have.length.greaterThan', 0) 
            cy.get('.inventory_item').first().within(() => {
                cy.get('.inventory_item_img').should('exist')
                cy.get('.inventory_item_name').should('exist')
                cy.get('.inventory_item_desc').should('exist')
                cy.get('.inventory_item_price').should('exist')
                cy.contains(/add to cart/i).should('exist')
            })

        });
    });

     */





    describe('Checking elements on footer', () => {

        beforeEach(() => {
            cy.login_teste('standard_user', 'secret_sauce')
        });

        it('Deve exibir botão do Twitter com link valido', () => {
            cy.get('[data-test="social-twitter"]').should('exist').and('be.visible').and('have.attr', 'href').and('include', 'https://twitter.com/saucelabs')
        });

        it('Deve exibir botão do Facebook com link valido', () => {
            cy.get('[data-test="social-facebook"]').should('exist').and('be.visible').and('have.attr', 'href').and('include', "https://www.facebook.com/saucelabs")
        });

        it('Deve exibir botão do LinkedIN com link valido', () => {
            cy.get('[data-test="social-linkedin"]').should('exist').and('be.visible').and('have.attr', 'href').and('include', "https://www.linkedin.com/company/sauce-labs")
        });

        it('Deve conter o texto de direitos reservados', () => {
            cy.get('[data-test="footer-copy"]').should('be.visible').and('contain.text', "© 2026 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy")
        });
    });
});


