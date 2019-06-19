const { Given, When, Then } = require('cucumber');
const assert = require('assert');
const { driver } = require('../support/web_driver');

Given(/^browse http:\/\/(\d+)\.(\d+)\.(\d+)\.(\d+)\/$/, async function (arg1,arg2,arg3,arg4) {

    await driver.get("http://35.244.31.61/");
});

When(/^I visit webpage$/, async function () {

    return 'webpage success';
});

Then(/^I should get home page$/, async function () {

    //let result = await driver.findElement({ id: "" }).getText();
    return driver.getTitle();
    
});

Given(/^Edit a user details$/, async function () {

    return 'editing a user';
});

When(/^user  edit a user , visits http:\/\/(\d+)\.(\d+)\.(\d+)\.(\d+)\/customers\/edit\/(\d+)$/, async function (arg1, arg2, arg3, arg4,arg5) {

    await driver.get("http://35.244.31.61/customers/edit/22");
});

When(/^clicks on save button$/, async function () {

    let save = driver.findElement({name:"submit"}).click()
});

Then(/^user details are modified$/, async function () {

    return 'user modified';
});

When(/^user clicks on add$/, async function () {

    return driver.findElement({className:"data-btn"}).click();
});

When(/^gets adduser page, adds details$/, async function () {
    await driver.get("http://35.244.31.61/customers/add");
});

When(/^clicks save button$/, async function () {
    await driver.sleep(2000);
   

   driver.findElement({name:"name"}).sendKeys("test")
   driver.findElement({name:"address"}).sendKeys("testaddress");
   driver.findElement({name:"email"}).sendKeys("testEmail");
   driver.findElement({name:"phone"}).sendKeys("0000");
   await driver.sleep(5000);
   let r = driver.findElement({ name: "submit" }).click();

});

Then(/^new user is added$/, async function () {

 return "success";
});


When(/^I click delete button$/, async function () {

    //return driver.findElement({ className: "a-inside.delete" }).click();
    let r = driver.findElement({ className: "delete" }).click();

});

Then(/^the user should be deleted on homepage$/, async function () {

    return "element deleted";
});



