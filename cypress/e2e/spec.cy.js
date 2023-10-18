import { LoginElements } from "./pages/login/login.elements"
import { LoginMethods } from "./pages/login/login.methods"

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.demoblaze.com/')
    cy.get('a[data-target="#logInModal"]').click()
    LoginMethods.login('username','password')
    cy.wait(10000)
  })
})