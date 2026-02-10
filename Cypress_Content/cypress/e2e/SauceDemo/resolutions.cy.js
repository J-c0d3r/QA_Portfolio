describe('Testes de resoluções da tela de login - Responsividade', () => {
    beforeEach(() => {
        cy.visit("https://www.saucedemo.com/")
    })

    it('Resolução 320x480', () => {
        cy.viewport(320, 480)
        cy.get('.login_logo').should('be.visible')
        cy.get('[data-test="username"]').should('be.visible')
        cy.get('[data-test="password"]').should('be.visible')
        cy.get('[data-test="login-button"]').should('be.visible')
        cy.get('[data-test="login-credentials"]').should('be.visible')
        cy.get('[data-test="login-password"]').should('be.visible')
    });

    it('Resolução 2999x2999', () => {
        cy.viewport(2999, 2999)
        cy.get('.login_logo').should('be.visible')
        cy.get('[data-test="username"]').should('be.visible')
        cy.get('[data-test="password"]').should('be.visible')
        cy.get('[data-test="login-button"]').should('be.visible')
        cy.get('[data-test="login-credentials"]').should('be.visible')
        cy.get('[data-test="login-password"]').should('be.visible')
    });

    it('Resolução macbook-13', () => {
        cy.viewport('macbook-13')
        cy.get('.login_logo').should('be.visible')
        cy.get('[data-test="username"]').should('be.visible')
        cy.get('[data-test="password"]').should('be.visible')
        cy.get('[data-test="login-button"]').should('be.visible')
        cy.get('[data-test="login-credentials"]').should('be.visible')
        cy.get('[data-test="login-password"]').should('be.visible')
    });

    it('Resolução ipad-mini', () => {
        cy.viewport('ipad-mini')
        cy.get('.login_logo').should('be.visible')
        cy.get('[data-test="username"]').should('be.visible')
        cy.get('[data-test="password"]').should('be.visible')
        cy.get('[data-test="login-button"]').should('be.visible')
        cy.get('[data-test="login-credentials"]').should('be.visible')
        cy.get('[data-test="login-password"]').should('be.visible')
    });

    it('Resolução iphone-6', () => {
        cy.viewport('iphone-6')
        cy.get('.login_logo').should('be.visible')
        cy.get('[data-test="username"]').should('be.visible')
        cy.get('[data-test="password"]').should('be.visible')
        cy.get('[data-test="login-button"]').should('be.visible')
        cy.get('[data-test="login-credentials"]').should('be.visible')
        cy.get('[data-test="login-password"]').should('be.visible')
    });

    it('Resolução ipad-2 portrait', () => {
        cy.viewport('ipad-2', 'portrait')
        cy.get('.login_logo').should('be.visible')
        cy.get('[data-test="username"]').should('be.visible')
        cy.get('[data-test="password"]').should('be.visible')
        cy.get('[data-test="login-button"]').should('be.visible')
        cy.get('[data-test="login-credentials"]').should('be.visible')
        cy.get('[data-test="login-password"]').should('be.visible')
    });

    it('Resolução iphone-4 landscape', () => {
        cy.viewport('iphone-4', 'landscape')
        cy.get('.login_logo').should('be.visible')
        cy.get('[data-test="username"]').should('be.visible')
        cy.get('[data-test="password"]').should('be.visible')
        cy.get('[data-test="login-button"]').should('be.visible')
        cy.get('[data-test="login-credentials"]').should('be.visible')
        cy.get('[data-test="login-password"]').should('be.visible')
    });

});

describe('Testes de resoluções da tela home - Responsividade', () => {
    beforeEach(() => {
        cy.visit("https://www.saucedemo.com/")
        cy.login_saucedemo('standard_user', 'secret_sauce')
    })

    it('Resolução 320x480', () => {
        cy.viewport(320, 480)
        cy.get('.bm-burger-button').should('be.visible')
        cy.get('.app_logo').should('be.visible')
        cy.get('[data-test="shopping-cart-link"]').should('be.visible')
        cy.get('[data-test="shopping-cart-link"]').should('be.visible')
        cy.get('[data-test="product-sort-container"]').should('be.visible')
        cy.get('[data-test="inventory-item-sauce-labs-backpack-img"]').should('be.visible')
        cy.get('[data-test="inventory-item-sauce-labs-backpack-img"]').should('be.visible')
        cy.get('[data-test="footer"]').should('be.visible')
    });

    it('Resolução 2999x2999', () => {
        cy.viewport(2999, 2999)
        cy.get('.bm-burger-button').should('be.visible')
        cy.get('.app_logo').should('be.visible')
        cy.get('[data-test="shopping-cart-link"]').should('be.visible')
        cy.get('[data-test="shopping-cart-link"]').should('be.visible')
        cy.get('[data-test="product-sort-container"]').should('be.visible')
        cy.get('[data-test="inventory-item-sauce-labs-backpack-img"]').should('be.visible')
        cy.get('[data-test="inventory-item-sauce-labs-backpack-img"]').should('be.visible')
        cy.get('[data-test="footer"]').should('be.visible')
    });

    it('Resolução macbook-13', () => {
        cy.viewport('macbook-13')
        cy.get('.bm-burger-button').should('be.visible')
        cy.get('.app_logo').should('be.visible')
        cy.get('[data-test="shopping-cart-link"]').should('be.visible')
        cy.get('[data-test="shopping-cart-link"]').should('be.visible')
        cy.get('[data-test="product-sort-container"]').should('be.visible')
        cy.get('[data-test="inventory-item-sauce-labs-backpack-img"]').should('be.visible')
        cy.get('[data-test="inventory-item-sauce-labs-backpack-img"]').should('be.visible')
        cy.get('[data-test="footer"]').should('be.visible')
    });

    it('Resolução ipad-mini', () => {
        cy.viewport('ipad-mini')
        cy.get('.bm-burger-button').should('be.visible')
        cy.get('.app_logo').should('be.visible')
        cy.get('[data-test="shopping-cart-link"]').should('be.visible')
        cy.get('[data-test="shopping-cart-link"]').should('be.visible')
        cy.get('[data-test="product-sort-container"]').should('be.visible')
        cy.get('[data-test="inventory-item-sauce-labs-backpack-img"]').should('be.visible')
        cy.get('[data-test="inventory-item-sauce-labs-backpack-img"]').should('be.visible')
        cy.get('[data-test="footer"]').should('be.visible')
    });

    it('Resolução iphone-6', () => {
        cy.viewport('iphone-6')
        cy.get('.bm-burger-button').should('be.visible')
        cy.get('.app_logo').should('be.visible')
        cy.get('[data-test="shopping-cart-link"]').should('be.visible')
        cy.get('[data-test="shopping-cart-link"]').should('be.visible')
        cy.get('[data-test="product-sort-container"]').should('be.visible')
        cy.get('[data-test="inventory-item-sauce-labs-backpack-img"]').should('be.visible')
        cy.get('[data-test="inventory-item-sauce-labs-backpack-img"]').should('be.visible')
        cy.get('[data-test="footer"]').should('be.visible')
    });

    it('Resolução ipad-2 portrait', () => {
        cy.viewport('ipad-2', 'portrait')
        cy.get('.bm-burger-button').should('be.visible')
        cy.get('.app_logo').should('be.visible')
        cy.get('[data-test="shopping-cart-link"]').should('be.visible')
        cy.get('[data-test="shopping-cart-link"]').should('be.visible')
        cy.get('[data-test="product-sort-container"]').should('be.visible')
        cy.get('[data-test="inventory-item-sauce-labs-backpack-img"]').should('be.visible')
        cy.get('[data-test="inventory-item-sauce-labs-backpack-img"]').should('be.visible')
        cy.get('[data-test="footer"]').should('be.visible')
    });

    it('Resolução iphone-4 landscape', () => {
        cy.viewport('iphone-4', 'landscape')
        cy.get('.bm-burger-button').should('be.visible')
        cy.get('.app_logo').should('be.visible')
        cy.get('[data-test="shopping-cart-link"]').should('be.visible')
        cy.get('[data-test="shopping-cart-link"]').should('be.visible')
        cy.get('[data-test="product-sort-container"]').should('be.visible')
        cy.get('[data-test="inventory-item-sauce-labs-backpack-img"]').should('be.visible')
        cy.get('[data-test="inventory-item-sauce-labs-backpack-img"]').should('be.visible')
        cy.get('[data-test="footer"]').should('be.visible')
    });
});
