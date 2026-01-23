/// <reference types="Cypress"/>

describe('Teste E2E - Realizando a compra de produtos com sucesso', () => {
    it('Fluxo da Compra de Produtos', () => {
        cy.login_teste('standard_user','secret_sauce')
        cy.get('[data-test="title"]').should('contain', 'Products')
        
        // Ordenação de produtos de menor para maior valor
        cy.get('[data-test="product-sort-container"]').select('Price (low to high)')
        //Valida se foi ordenado
        cy.get(':nth-child(1) > [data-test="inventory-item-description"]').should('contain', 'Sauce Labs Onesie')
        cy.get(':nth-child(2) > [data-test="inventory-item-description"]').should('contain', 'Sauce Labs Bike Light')
        cy.get(':nth-child(3) > [data-test="inventory-item-description"]').should('contain', 'Sauce Labs Bolt T-Shirt')

        //Adiciona produtos ao carrinho
        cy.contains('Sauce Labs Onesie').click();
        cy.get('.btn_primary').click();
        cy.get('[data-test="back-to-products"]').click();

        cy.contains('Sauce Labs Bike Light').click();
        cy.get('.btn_primary').click();
        cy.get('[data-test="back-to-products"]').click();

        cy.contains('Sauce Labs Bolt T-Shirt').click();
        cy.get('.btn_primary').click();
        cy.get('[data-test="back-to-products"]').click();

        //Checa a quantidade de produtos adicionados no carrinho
        cy.get('[data-test="shopping-cart-link"]').should('have.text', '3');
        cy.get('[data-test="shopping-cart-link"]').click()

        //Checa no carrinho
        cy.verificaProdutos();

        //Confirma informações
        cy.get('[data-test="checkout"]').click()
        cy.get('[data-test="firstName"]').type('Teste Primeiro Nome')
        cy.get('[data-test="lastName"]').type('Teste Ultimo NOme')
        cy.get('[data-test="postalCode"]').type('65565487')
        cy.get('[data-test="continue"]').click()

        //Verifica produtos no checkout
        cy.verificaProdutos();

        //Checa o valor total
        cy.get('[data-test="total-label"]').should('have.text', 'Total: $36.69')
        cy.get('[data-test="finish"]').click()
        cy.get('[data-test="complete-header"]').should('have.text', 'Thank you for your order!')
    });
});

describe.only('Testes variados', () => {
    it('Teste com o carrinho vazio', () => {
        //login
        cy.login_teste('standard_user','secret_sauce')
        cy.get('[data-test="title"]').should('contain', 'Products')

        cy.get('[data-test="shopping-cart-link"]').click()
        cy.get('[data-test="checkout"]').click()

        //CheckoutInformation
        cy.get('[data-test="firstName"]').type('Teste Primeiro Nome')
        cy.get('[data-test="lastName"]').type('Teste Ultimo Nome')
        cy.get('[data-test="postalCode"]').type('65565487')
        cy.get('[data-test="continue"]').click()

        //Confirma se o total é 0
        cy.get('[data-test="total-label"]').should('have.text', 'Total: $0.00')
        cy.get('[data-test="finish"]').click()

        //Confirma tela final
        cy.get('[data-test="complete-header"]').should('have.text', 'Thank you for your order!')
    });

    it('Teste todas as informações no checkout em branco', () => {
        //login
        cy.login_teste('standard_user','secret_sauce')
        cy.get('[data-test="title"]').should('contain', 'Products')

        cy.get('[data-test="shopping-cart-link"]').click()
        cy.get('[data-test="checkout"]').click()

        //CheckoutInformation
        cy.get('[data-test="firstName"]').should('contain','')
        cy.get('[data-test="lastName"]').should('contain','')
        cy.get('[data-test="postalCode"]').should('contain','')
        cy.get('[data-test="continue"]').click()

        //checagem
        cy.get('[data-test="error"]').should('have.text', 'Error: First Name is required')
    });

    
});