const { chromium } = require('playwright');
class LoginPage {
  constructor(page) {
    this.page = page;
  }
  async open() {

    await this.page.goto('https://www.saucedemo.com',{ timeout: 3000000 });
}
async login(username, password) {
    await this.page.fill('#user-name', username);
    await this.page.fill('#password', password);
    await this.page.click('#login-button');
}

async verifyLoginSuccess() {
  const successElement = await this.page.waitForSelector('span[class="title"]');
  return successElement !== null;
}
async verifyLoginSuccess() {
  
  await this.page.waitForSelector('.success-message', { timeout: 200000 });
  const pageTitle = await this.page.title();
  return pageTitle.includes('Swag Labs',);
}
}

module.exports = LoginPage;