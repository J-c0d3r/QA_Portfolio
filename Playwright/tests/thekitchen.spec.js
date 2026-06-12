import test, { page, expect } from '@playwright/test'

test('The Kitchen Tests', async ({ page }) => {

    await page.goto('https://kitchen.applitools.com/')
    /* await page.pause() */

    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toHaveCount(1)

    if (page.getByRole('heading', { name: 'The Kitchen' })) {
        await page.getByRole('heading', { name: 'The Kitchen' }).click()
    }

    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toBeVisible()
    //await expect.soft(page.getByRole('heading', { name: 'The Kitchen' })).toBeHidden()

    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toBeEnabled()
    //await expect.soft(page.getByRole('heading', { name: 'The Kitchen' })).toBeDisabled()

    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toHaveText('The Kitchen')
    //await expect.soft(page.getByRole('heading', { name: 'The Kitchen' })).not.toHaveText('The Kitchen')

    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toHaveAttribute('class', 'chakra-heading css-dpmy2a')
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toHaveAttribute('class', /.*css-dpmy2a/)
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toHaveClass(/.*css-dpmy2a/)

    await expect(page).toHaveURL('https://kitchen.applitools.com/')
    await expect(page).toHaveTitle(/.*Kitchen/)

    //await expect(page).toHaveScreenshot()

})

test.describe('Home Page Tests', () => {

    test('Home page should load correctly', async ({ page }) => {

        await page.goto('https://kitchen.applitools.com/')

        await expect(page).toHaveTitle('The Kitchen')

        await expect(page.getByRole('heading', { name: 'The Kitchen' })).toBeVisible()
        await expect(page.getByRole('heading', { name: 'The Kitchen' })).toHaveText('The Kitchen')

        await expect(page.getByText('A pantry full of web')).toBeVisible()

        await expect(page.getByRole('link', { name: 'Powered by Applitools' })).toBeVisible()

    });

    test('Should navigate to Alert page from Home', async ({ page }) => {
        await page.goto('https://kitchen.applitools.com/')

        await page.getByRole('link', { name: 'Alert' }).click()

        await expect(page).toHaveTitle(/Alert/)
        await expect(page.getByRole('heading', { name: 'Alert' })).toHaveText('Alert')
    });

    test('Should navigate to Canvas page from Home', async ({ page }) => {

        await page.goto('https://kitchen.applitools.com/')

        await expect(page.getByRole('link', { name: 'Canvas' })).toBeVisible()
        await expect(page.getByRole('link', { name: 'Canvas' })).toBeEnabled()
        await page.getByRole('link', { name: 'Canvas' }).click()
        await expect(page).toHaveTitle(/Canvas/)
        await expect(page.getByRole('heading', { name: 'Canvas' })).toHaveText('Canvas')
        await expect(page.getByRole('heading', { name: 'Canvas' })).toBeVisible()
    });

    test('Should navigate to Cookie page from Home', async ({ page }) => {

        await page.goto('https://kitchen.applitools.com/')

        await expect(page.getByRole('link', { name: 'Canvas' })).toBeVisible()
        await expect(page.getByRole('link', { name: 'Canvas' })).toBeEnabled()
        await page.getByRole('link', { name: 'Cookie' }).click()
        await expect(page).toHaveTitle(/Cookie/)
        await expect(page.getByRole('heading', { name: 'Cookie' })).toHaveText('Cookie')
        await expect(page.getByRole('heading', { name: 'Cookie' })).toBeVisible()
    });

})



test.describe('Alert Page Tests', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://kitchen.applitools.com/ingredients/alert')
    })

    test('Should Trigger an Alert working correctly', async ({ page }) => {

        //await page.goto('https://kitchen.applitools.com/ingredients/alert')

        page.once('dialog', async dialog => {
            expect(dialog.type()).toBe('alert')
            expect(dialog.message()).toContain('Airfryers can make anything!')

            await dialog.accept()
        })

        await expect(page.getByRole('button', { name: 'Trigger an Alert' })).toBeVisible()
        await page.getByRole('button', { name: 'Trigger an Alert' }).click()
        await expect(page.getByText('Triggered 1 time(s)')).toBeVisible()

    });

    test('Should Trigger a Confirmation working correctly', async ({ page }) => {

        page.once('dialog', async dialog => {
            expect(dialog.type()).toBe('confirm')
            expect(dialog.message()).toContain('Proceed with adding garlic?')

            await dialog.accept();
        })

        await expect(page.getByRole('button', { name: 'Trigger a Confirmation' })).toBeVisible()
        await page.getByRole('button', { name: 'Trigger a Confirmation' }).click()
        await expect(page.getByText('Answer: Yes')).toHaveText('Answer: Yes')
    });

    test('Should Trigger a Prompt working correctly', async ({ page }) => {

        page.once('dialog', async dialog => {
            expect(dialog.type()).toBe('prompt')
            expect(dialog.message()).toContain('What is your favorite food?')

            await dialog.accept('PotatoTest')
        })

        await expect(page.getByRole('button', { name: 'Trigger a Prompt' })).toBeVisible()
        await page.getByRole('button', { name: 'Trigger a Prompt' }).click()
        await expect(page.getByText('Answer: PotatoTest')).toHaveText('Answer: PotatoTest')
    });

    test('Footer Page is Visible', async ({ page }) => {

        await expect(page.getByRole('link', { name: 'Powered by Applitools' })).toHaveText('Powered by Applitools')

    });
});

test.describe('Canvas Page Tests', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://kitchen.applitools.com/ingredients/canvas')
    })


    test('Canvas should be visible', async ({ page }) => {

        const canvas = page.locator('#burger_canvas')

        await expect(canvas).toBeVisible()
        await expect(canvas).toHaveAttribute('width', '600')
        await expect(canvas).toHaveAttribute('height', '400');

    });

    test('Footer Page is Visible', async ({ page }) => {

        await expect(page.getByRole('link', { name: 'Powered by Applitools' })).toHaveText('Powered by Applitools')

    });
})

test.describe('Cookie Page Tests', () => {

    test.beforeEach(async ({ page, context }) => {
        await page.goto('https://kitchen.applitools.com/ingredients/cookie')
        await context.clearCookies();
        console.log(await context.cookies())
    })

    test('should display default cookie information', async ({ page }) => {
        await expect(page.getByRole('heading', { name: 'Protein' })).toBeVisible();
        await expect(page.getByText('Name: protein')).toBeVisible();

        await expect(page.getByRole('heading', { name: 'Veggie' })).toBeVisible();
        await expect(page.getByText('Name: vegetable')).toBeVisible();
    });

    test('should display protein cookie value', async ({ page, context }) => {
        await context.addCookies([
            {
                name: 'protein',
                value: 'chicken',
                domain: 'kitchen.applitools.com',
                path: '/',
            },
        ]);

        await expect(page.getByText('Default Value: chicken', { exact: true })).toBeVisible();
    });

    test('should create protein3 cookie in browser context', async ({ page, context }) => {
        await context.addCookies([
            {
                name: 'protein3',
                value: 'chicken3',
                domain: 'kitchen.applitools.com',
                path: '/',
            },
        ]);

        const cookies = await context.cookies();

        //console.log(cookies);
        /* console.log(JSON.stringify(cookies, null, 2)); */

        const proteinCookie = cookies.find(cookie => cookie.name === 'protein3');

        expect(proteinCookie).toBeDefined();
        expect(proteinCookie.value).toBe('chicken3');
    });

    test('Footer Page is Visible', async ({ page }) => {

        await expect(page.getByRole('link', { name: 'Powered by Applitools' })).toHaveText('Powered by Applitools')

    });

})
