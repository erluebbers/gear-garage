import { Given, Then } from "cypress-cucumber-preprocessor/steps"

Given('I go to the homepage', function() {
  cy.visit('/')
})

Then('I should see the title', function() {
  cy.get('[data-test="title"]').should("exist")
})