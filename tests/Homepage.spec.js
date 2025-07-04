const { test, expect } = require('@playwright/test');

test('Home page', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/');
    const pagetitle = page.title();
    console.log('page is title:', pagetitle);
    await expect(page).toHaveTitle('STORE');
    const pageURL = page.url();
    console.log('page url is:', pageURL);
    await expect(page).toHaveURL('https://www.demoblaze.com/');
    await page.close();
});