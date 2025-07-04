const { test, expect } = require('@playwright/test')

exports.Cartpage=class Cartpage{

constructor(page){
    this.page=page;
    this.selectCheckout="//*[@data-test='checkout']"
}  
async clickoncheckoutbtn(){
    await this.page.locator(this.selectCheckout).click();
}  
}