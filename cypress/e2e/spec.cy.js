import { Homeelements } from "./pages/home/home.elements"
import { HomeMethods } from "./pages/home/home.methods"
import { LoginElements } from "./pages/login/login.elements"
import { LoginMethods } from "./pages/login/login.methods"

describe('template spec', () => {
  it('passes', () => {
    // const usuario = 'random02'
    // const contrasena = 'random02'
    cy.visit('https://www.demoblaze.com/index.html')
    HomeMethods.clickOnProductLink('Iphone 6 32gb')
    cy.wait(10000)
  })
})