const { Given, When, Then, Before, After } = require('@cucumber/cucumber');
const LoginPage = require('../pages/loginPage');
const { getPage, closeBrowser } = require('../hooks/hooks');
const { expect } = require('@playwright/test');

let loginPage;

Given('User is on the SauceDemo homepage', async () => {
  loginPage = new LoginPage(getPage());
  await loginPage.open();
});

When('User enters valid credentials and submits', async () => {
  await loginPage.login('standard_user', 'secret_sauce');
});

Then('User should be logged in successfully', async () => {
 
});

