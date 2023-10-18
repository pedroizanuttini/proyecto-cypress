import { LoginElements } from "./pages/login/login.elements"
import { LoginMethods } from "./pages/login/login.methods"

describe('template spec', () => {
  it('passes', () => {
    const usuario = 'random02'
    const contrasena = 'random02'
    cy.visit('https://www.demoblaze.com/index.html')
    cy.get('a[data-target="#logInModal"]').click()
    LoginMethods.login(usuario,contrasena)
    cy.get('a#nameofuser').should('contain.text',usuario)
  })
})