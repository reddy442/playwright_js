const { test, expect } = require('@playwright/test')

exports.Loginpage= class Loginpage{

    constructor(page){
        this.page=page;
        this.usernameLoc = "#user-name";
        this.passwordLoc = "#password";
        this.loginBtnLoc = "#login-button";
    }

    async launchBrowserWithUrl(url){
        await this.page.goto(url);
    }
    
    async enterDetailsAndClickOnLogin(username,password){
        await this.page.locator(this.usernameLoc).fill(username);
        await this.page.locator(this.passwordLoc).fill(password);
        await this.page.locator(this.loginBtnLoc).click();
    }

}