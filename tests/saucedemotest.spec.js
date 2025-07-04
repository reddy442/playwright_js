const { test, expect } = require('@playwright/test')

test('Sauce demo login test', async ({ page }) => {


    // open brower & with url
    await page.goto("https://www.saucedemo.com/");

    // find the locators of username, password & login button
    const usernameLoc = await page.locator("#user-name");
    const passwordLoc = await page.locator("#password");
    const loginBtn = await page.locator("#login-button");
    const selectBag = await page.locator('(//*[@data-test="inventory-item-name"])[1] ');
    const selectaddcart = await page.locator('(//*[@data-test="add-to-cart"])[1]');
    const selectcart = await page.locator("//*[@data-test='shopping-cart-link']");

    usernameLoc.fill("standard_user");
    await page.waitForTimeout(3000);
    passwordLoc.fill("secret_sauce");
    await page.waitForTimeout(3000);
    loginBtn.click();
    await page.waitForTimeout(3000);

    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");

    selectBag.click();
    await page.waitForTimeout(3000);
    selectaddcart.click();
    await page.waitForTimeout(3000);
    selectcart.click();
    await page.waitForTimeout(3000);

    await expect(page).toHaveURL("https://www.saucedemo.com/cart.html");

    await page.close();
})