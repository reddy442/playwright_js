const { test, expect } = require('@playwright/test')


exports.Registeruser = class Registeruser {

    constructor(page) {
        this.page = page;
        this.homepageloc = "//*[contains(@class,'shop-menu')]//li[contains(.,'Home')]";
        this.signinbtnloc = "//*[@href='/login']";
        this.newusersignuploc ="//*[@class='signup-form']";
        this.nameloc= "//*[@name='name']";
        this.emailloc = "//*[@data-qa='signup-email']";
        this.signupbtnloc="//*[@data-qa='signup-button']";
        this.Titlemrloc = "//*[@id='id_gender1']";
        this.passwordloc = "//*[@id='password']";
        this.dayloc = "(//*[@class='form-control'])[4]";
        this.monthloc = "//*[@data-qa='months']";
        this.yearloc = "//*[@name='years']";
        this.Signupforournewslettercheckboxloc = "//*[@for='newsletter']";
        this.Receivespecialoffersfromourpartnerscheckboxloc= "//*[@for='optin']";
        this.Accountinformationloc="(//*[@class='title text-center'])[1]";
        this.Firstnameloc="//*[@name='first_name']";
        this.Lastnameloc="//*[@name='last_name']";
        this.companyloc="//*[@id='company']";
        this.address1loc="//*[@id='address1']";
        this.address2loc="//*[@id='address2']";
        this.stateloc="//*[@id='state']";
        this.cityloc="//*[@id='city']";
        this.zipcodeloc="//*[@id='zipcode']";
        this.mobilenumberloc="//*[@id='mobile_number']";
        this.createaccountbtnloc="//*[@data-qa='create-account']";

    }
    async launchBrowserWithUrl(url) {
        await this.page.goto(url);

    }
    async RegisteruserDetails(Username,EmailAddress,Password,Day,Month,Year,Firstname,Lastname,Company,Address1,Address2,State,City,Zipcode,Mobilenumber) {
        await expect(this.page.locator(this.homepageloc)).toBeVisible();
        await this.page.locator(this.signinbtnloc).click();
     
        await expect(this.page.locator(this.newusersignuploc)).toBeVisible();
        await this.page.locator(this.nameloc).fill(Username);
        await this.page.locator(this.emailloc).fill(EmailAddress);
        await this.page.locator(this.signupbtnloc).click();
        await this.page.locator(this.Titlemrloc).check(); // use check() instead of toBeCheck()
        
        await this.page.locator(this.passwordloc).fill(Password);
        await this.page.locator(this.dayloc).selectOption(Day);
        await this.page.locator(this.monthloc).selectOption(Month);
        await this.page.locator(this.yearloc).selectOption(Year);
        
        await this.page.locator(this.Signupforournewslettercheckboxloc).check();
        await this.page.locator(this.Receivespecialoffersfromourpartnerscheckboxloc).check();
        
        await expect(this.page.locator(this.Accountinformationloc)).toBeVisible();
        await this.page.locator(this.Firstnameloc).fill(Firstname);
        await this.page.locator(this.Lastnameloc).fill(Lastname);
        await this.page.locator(this.companyloc).fill(Company);
        await this.page.locator(this.address1loc).fill(Address1);
        await this.page.locator(this.address2loc).fill(Address2);
        await this.page.locator(this.stateloc).fill(State);
        await this.page.locator(this.cityloc).fill(City);
        await this.page.locator(this.zipcodeloc).fill(Zipcode);
        await this.page.locator(this.mobilenumberloc).fill(Mobilenumber);
        await this.page.locator(this.createaccountbtnloc).click();
        
        
    }
}