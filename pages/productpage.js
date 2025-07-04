const { test, expect } = require('@playwright/test')

exports.productpage = class productpage {

    constructor(page) {
        this.page = page;
        this.selectBag = "(//*[@data-test='inventory-item-name'])[1]";
        this.secectaddcart = "(//*[@data-test='add-to-cart'])[1]";
        this.selectcart = ("//*[@data-test='shopping-cart-link']");
    }

    async clickOnProduct_Navigatetocartpage() {
        await this.page.locator(this.selectBag).click();
        await this.page.locator(this.secectaddcart).click();
        await this.page.locator(this.selectcart).click();
    }
}