Feature: Login to SauceDemo
  As a user
  I want to login to SauceDemo
  So that I can access SauceDemo's content
  Background:
  Given User is on the SauceDemo homepage 
  
  Scenario: User logs in to SauceDemo
    When User enters valid credentials and submits
    Then User should be logged in successfully
