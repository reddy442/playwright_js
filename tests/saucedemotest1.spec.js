const { test, expect } = require('@playwright/test')
const { Loginpage } = require('../pages/Loginpage');
const { productpage } = require('../pages/productpage');
const { Cartpage } = require('../pages/Cartpage');
const { Checkoutpage } = require('../pages/Checkoutpage');
const { Paymentdetails } = require('../pages/Paymentdetails');





test('Sauce demo login test', async ({ page }) => {

    // import the page object model library
    const login = new Loginpage(page);
    const product = new productpage(page);
    const cartpage = new Cartpage(page);
    const checkoutpage = new Checkoutpage(page);
    const paymentpage =new Paymentdetails(page);

    // open brower & with url
    await login.launchBrowserWithUrl("https://www.saucedemo.com/");
    // find the locators of username, password & login button
    await login.enterDetailsAndClickOnLogin("standard_user", "secret_sauce");
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");

    await product.clickOnProduct_Navigatetocartpage();
    await expect(page).toHaveURL("https://www.saucedemo.com/cart.html");

    await cartpage.clickoncheckoutbtn();
    await expect(page).toHaveURL("https://www.saucedemo.com/checkout-step-one.html")

    await checkoutpage.Checkoutpage_Navigate_Continuepage("firstname", "lastname", "zipcode");
    await expect(page).toHaveURL("https://www.saucedemo.com/checkout-step-two.html");

    await paymentpage.Display_FullPayment_Details("Payment Information:","Shipping Information:","Price Total");
    await expect(page).toHaveURL("https://www.saucedemo.com/checkout-complete.html");






    await page.close();
})