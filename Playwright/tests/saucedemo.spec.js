import { test, expect } from '@playwright/test'
/* const {test, expect} = require('@playwright/test') */


test.describe('Swag Labs - Login Home', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.saucedemo.com/')
    })

    test('Should display the login page correctly', async ({ page }) => {
        await expect(page).toHaveTitle('Swag Labs')
        await expect(page.getByText('Swag Labs')).toHaveText('Swag Labs')
    })

    test('Should display login form elements', async ({ page }) => {
        await expect(page.locator('[data-test="username"]')).toBeVisible()
        await expect(page.locator('[data-test="username"]')).toBeEnabled()
        await expect(page.locator('[data-test="password"]')).toBeVisible()
        await expect(page.locator('[data-test="password"]')).toBeEnabled()
        await expect(page.locator('[data-test="login-button"]')).toBeVisible()
        await expect(page.locator('[data-test="login-button"]')).toBeEnabled()
    })

    test('Should display correct input placeholders', async ({ page }) => {
        await expect(page.locator('[data-test="username"]')).toHaveAttribute('placeholder', 'Username')
        await expect(page.locator('[data-test="password"]')).toHaveAttribute('placeholder', 'Password')
    })

    test('Should display Login text on button', async ({ page }) => {
        await expect(page.locator('[data-test="login-button"]')).toHaveText('Login')
    })

    test('Should display accepted usernames', async ({ page }) => {
        const loginCredentials = page.locator('[data-test="login-credentials"]');

        await expect(loginCredentials).toBeVisible();

        await expect(loginCredentials).toContainText('Accepted usernames are:');
        await expect(loginCredentials).toContainText('standard_user');
        await expect(loginCredentials).toContainText('locked_out_user');
        await expect(loginCredentials).toContainText('problem_user');
        await expect(loginCredentials).toContainText('performance_glitch_user');
        await expect(loginCredentials).toContainText('error_user');
        await expect(loginCredentials).toContainText('visual_user');
    });

    test('Should login successfully with valid credentials', async ({ page }) => {
        await page.locator('[data-test="username"]').fill('standard_user')
        await page.locator('[data-test="password"]').fill('secret_sauce')
        await page.locator('[id="login-button"]').click()

        await expect(page).toHaveTitle(/Swag Labs/)
    })

    test('Login without password', async ({ page }) => {
        await page.locator('[data-test="username"]').fill('standard_user')
        await page.locator('[id="login-button"]').click()

        await expect(page.locator('form div').filter({ hasText: /^Epic sadface: Password is required$/ })).toContainText('Password is required')
    })

    test('Login without username', async ({ page }) => {
        await page.locator('[data-test="password"]').fill('secret_sauce')
        await page.locator('[id="login-button"]').click()

        await expect(page.locator('form div').filter({ hasText: /^Epic sadface: Username is required$/ })).toContainText('Username is required')
    })

    test('Should display error with invalid credentials', async ({ page }) => {
        await page.locator('[data-test="username"]').fill('aaaa')
        await page.locator('[data-test="password"]').fill('999')
        await page.locator('[id="login-button"]').click()

        await expect(page.locator('form div')
            .filter({ hasText: /^Epic sadface: Username and password do not match any user in this service$/ }))
            .toContainText('Username and password do not match any user in this service')
    })

    test('Login with user and password inverted', async ({ page }) => {
        await page.locator('[data-test="username"]').fill('secret_sauce')
        await page.locator('[data-test="password"]').fill('standard_user')
        await page.locator('[id="login-button"]').click()

        await expect(page.locator('form div')
            .filter({ hasText: /^Epic sadface: Username and password do not match any user in this service$/ }))
            .toContainText('Username and password do not match any user in this service')
    })

})

test.describe('Swag Labs - Products List', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.saucedemo.com/')
        await page.locator('[data-test="username"]').fill('standard_user')
        await page.locator('[data-test="password"]').fill('secret_sauce')
        await page.locator('[id="login-button"]').click()
    })

    test('Should correct page', async ({ page }) => {
        await expect(page.getByText('Swag Labs')).toHaveText('Swag Labs')
        await expect(page.locator('[data-test="shopping-cart-link"]')).toBeVisible()
        await expect(page.getByRole('button', { name: 'Open Menu' })).toBeVisible()
        await expect(page.locator('[data-test="title"]')).toHaveText('Products')
    })

    test('Logout button', async ({ page }) => {
        await page.getByRole('button', { name: 'Open Menu' }).click()
        await page.locator('[data-test="logout-sidebar-link"]').click()
        await expect(page.locator('[data-test="login-button"]')).toHaveText('Login')
    });

    test('Should display social media links in footer', async ({ page }) => {
        await expect(page.locator('[data-test="social-twitter"]')).toBeVisible()
        await expect(page.locator('[data-test="social-twitter"]')).toBeEnabled()
        await expect(page.locator('[data-test="social-facebook"]')).toBeVisible()
        await expect(page.locator('[data-test="social-facebook"]')).toBeEnabled()
        await expect(page.locator('[data-test="social-linkedin"]')).toBeVisible()
        await expect(page.locator('[data-test="social-linkedin"]')).toBeEnabled()
    });

    test('Should elements on footer', async ({ page }) => {
        await expect(page.locator('[data-test="footer"]')).toBeVisible()
        await expect(page.locator('[data-test="footer"]')).toBeEnabled()
        await expect(page.locator('[data-test="footer-copy"]')).toBeVisible()
        await expect(page.locator('[data-test="footer-copy"]')).toBeEnabled()
        await expect(page.locator('[data-test="footer-copy"]')).toContainText('2026 Sauce Labs')
    });

    test('Should add product to cart', async ({ page }) => {
        await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

        await expect(page.locator('[data-test="shopping-cart-link"]')).toHaveText('1');
        await expect(page.locator('[data-test="remove-sauce-labs-backpack"]')).toBeVisible();
    });

    test('Should remove product from cart', async ({ page }) => {
        await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        await page.locator('[data-test="remove-sauce-labs-backpack"]').click();

        await expect(page.locator('[data-test="shopping-cart-badge"]')).not.toBeVisible();
        await expect(page.locator('[data-test="add-to-cart-sauce-labs-backpack"]')).toBeVisible();
    });

    test('Should sort products by price low to high', async ({ page }) => {
        await page.locator('[data-test="product-sort-container"]').selectOption('lohi');

        const pricesText = await page.locator('[data-test="inventory-item-price"]').allTextContents();

        const prices = pricesText.map(price =>
            Number(price.replace('$', ''))
        );

        const sortedPrices = [...prices].sort((a, b) => a - b);

        expect(prices).toEqual(sortedPrices);
    });

    test('Should navigate to product details page', async ({ page }) => {
        await page.locator('[data-test="item-4-title-link"]').click();
        await expect(page.locator('[data-test="inventory-item-name"]')).toHaveText('Sauce Labs Backpack');
        await expect(page.locator('[data-test="back-to-products"]')).toBeVisible();
    });

    test('Should return to products page', async ({ page }) => {
        await page.locator('[data-test="item-4-title-link"]').click();
        await page.locator('[data-test="back-to-products"]').click();
        await expect(page.locator('[data-test="title"]')).toHaveText('Products');
    });

    test('Should complete checkout successfully', async ({ page }) => {
        await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

        await page.locator('[data-test="shopping-cart-link"]').click();

        await page.locator('[data-test="checkout"]').click();

        await page.locator('[data-test="firstName"]').fill('test');
        await page.locator('[data-test="lastName"]').fill('teste2');
        await page.locator('[data-test="postalCode"]').fill('123');

        await page.locator('[data-test="continue"]').click();

        await page.locator('[data-test="finish"]').click();

        await expect(page.locator('[data-test="complete-header"]')).toHaveText('Thank you for your order!');
        await expect(page.locator('[data-test="back-to-products"]')).toHaveText('Back Home')
    });

})
