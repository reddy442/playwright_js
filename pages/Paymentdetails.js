  const { test, expect } = require('@playwright/test');

  exports.Paymentdetails = class Paymentdetails {
    constructor(page) {
      this.page = page;
      this.paymentLoc = "//*[@class='summary_info_label'][1]";
      this.shippingLoc = "//*[@data-test='shipping-info-label']";
      this.totalLoc = "//*[@data-test='total-info-label']";
      this.finishBtnLoc = "//*[@id='finish']";
    }

    async Display_FullPayment_Details(payment,shipping,total) {
      await expect(this.page.locator(this.paymentLoc)).toContainText(payment);
      await expect(this.page.locator(this.shippingLoc)).toContainText(shipping);
      await expect(this.page.locator(this.totalLoc)).toContainText(total);
      await this.page.locator(this.finishBtnLoc).click();
    }
  }
