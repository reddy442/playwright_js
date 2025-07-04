const { test, expect} = require('@playwright/test');
const { Registeruser } = require('../../pages/AutomationExample/Registeruser');

test('Register user', async ({ page }) => {

    const registerpage = new Registeruser(page);
    
    await registerpage.launchBrowserWithUrl("https://automationexercise.com/");
    await registerpage.RegisteruserDetails("Sunkra","t122222@gmail.com","1234589778","26","June","2020","Reddybabu","Babu","Asddfggg","piler","tirupati","Andhrapradesh","chittoor","517214","12345566777");
    await expect(page).toHaveURL("https://automationexercise.com/account_created");


})


