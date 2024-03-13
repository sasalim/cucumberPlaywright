const { Given, When, Then, Before, After } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { getPage, closeBrowser } = require('../hooks/hooks');
const { AddProductPage } = require('../pages/addProductPage');

let addProductPage;
let loginPage; 


When('User selects an item', async () => {
  addProductPage = new AddProductPage(getPage());
  await addProductPage.selectItem();
});

When('User clicks the add to cart button', async () => {
  await addProductPage.addToCart();
});

When('User clicks on the cart icon', async () => {
  await addProductPage.clickOnCartIcon();
});

Then('User should see the item added to the cart', async () => {
  const isItemAdded = await addProductPage.verifyItemAdded();
  expect(isItemAdded).toBe(true);
});