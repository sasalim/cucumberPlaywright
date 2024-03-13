const { Before, After } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
 
let page;
 
Before(async () => {
      
    const browser = await chromium.launch({ headless: false });;
    page = await browser.newPage();
});
 
After(async () => {
    if (page) {
        await page.close();
    }
});
 
module.exports = {
    getPage: () => page,
};

