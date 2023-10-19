import { cartMethods } from "./pages/cart/cart.methods"
import { Homeelements } from "./pages/home/home.elements"
import { HomeMethods } from "./pages/home/home.methods"
import { LoginElements } from "./pages/login/login.elements"
import { LoginMethods } from "./pages/login/login.methods"
import { Logger } from "./util/logger"

describe('template spec', () => {
  it('passes', () => {
    const usuario = 'random02'
    const contrasena = 'random02'

    Logger.stepNumber(1)
    Logger.step('Navigate to Demoblaze page')
    cy.visit('https://www.demoblaze.com/index.html')

    Logger.stepNumber(2)
    Logger.step('Click on "Login" link')
    cy.get('a[data-target="#logInModal"]').click()

    Logger.stepNumber(3)
    Logger.step(`Login with this credentials: "${usuario}"/${contrasena}`)
    LoginMethods.login(usuario,contrasena)
    Logger.verification(`The Home should show "welcome ${usuario}" text`)
    cy.get('a#nameofuser').should('contain.text',usuario)
  })
})