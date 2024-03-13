Feature: Add Product to Cart on SauceDemo
  As a user
  I want to add a product to the cart on SauceDemo
  So that I can purchase it later
  Background:
  Given User is on the SauceDemo homepage
  When User enters valid credentials and submits
  Then User should be logged in successfully

  Scenario: User adds a product to the cart after logging in
    When User selects an item
    And User clicks the add to cart button
    And User clicks on the cart icon
    Then User should see the item added to the cart

