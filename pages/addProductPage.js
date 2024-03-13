
class AddProductPage {
 
  constructor(page) {
    
    this.page = page;
  }
  async addToCart() {
    await this.page.click('.btn_primary');
  }
  async selectItem() {
    
    await this.page.click('a[id="item_4_title_link"]');
}

  async clickOnCartIcon() {
    await this.page.click('.shopping_cart_link');
  }

  async verifyItemAdded() {
    await this.page.waitForSelector('.cart_item');
    const cartItems = await this.page.$$('.cart_item');
    return cartItems.length > 0;
  }

  async close() {
    await this.browser.close();
  }
}

module.exports = { AddProductPage };