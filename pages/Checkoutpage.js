const { test, expect } = require('@playwright/test')

exports.Checkoutpage=class checkoutpage{
    constructor(page){
        this.page=page;
        this.Firstnameloc="//*[@id='first-name']";
        this.Lastnameloc="//*[@id='last-name']";
        this.Zipcodelac="//*[@id='postal-code']";
        this.ContinueBtn="//*[@id='continue']";
    }
    async Checkoutpage_Navigate_Continuepage(firstname,lastname,zipcode){
            await this.page.locator(this.Firstnameloc).fill(firstname);
            await this.page.locator(this.Lastnameloc).fill(lastname);
            await this.page.locator(this.Zipcodelac).fill(zipcode);
            await this.page.locator(this.ContinueBtn).click();
    }
}