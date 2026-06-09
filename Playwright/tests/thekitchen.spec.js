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

test('Home page should load correctly', async ({ page }) => {

    await page.goto('https://kitchen.applitools.com/')

    await expect(page).toHaveTitle('The Kitchen')

    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toHaveText('The Kitchen')

    await expect(page.getByText('A pantry full of web')).toBeVisible()

    await expect(page.getByRole('link', { name: 'Powered by Applitools' })).toBeVisible()

});

test.describe('Alert Page Tests', () => {

    test('Should navigate to Alert page from Home', async ({ page }) => {

        await page.goto('https://kitchen.applitools.com/')

        await page.getByRole('link', { name: 'Alert' }).click()

        await expect(page).toHaveTitle(/Alert/)
        await expect(page.getByRole('heading', { name: 'Alert' })).toHaveText('Alert')

    });

    test('Should Trigger an Alert working correctly', async ({ page }) => {

        await page.goto('https://kitchen.applitools.com/ingredients/alert')

        await expect(page.getByRole('button', { name: 'Trigger an Alert' })).toBeVisible()
        await page.getByRole('button', { name: 'Trigger an Alert' }).click()
        await expect(page.getByText('Triggered 1 time(s)')).toBeVisible()

    });

    test('Should Trigger a Confirmation working correctly', async ({ page }) => {

        await page.goto('https://kitchen.applitools.com/ingredients/alert')

        await expect(page.getByRole('button', { name: 'Trigger a Confirmation' })).toBeVisible()
        await page.getByRole('button', { name: 'Trigger a Confirmation' }).click()
        await expect(page.getByRole('button', { name: 'Trigger a Confirmation' })).toBeVisible()

    });


});

