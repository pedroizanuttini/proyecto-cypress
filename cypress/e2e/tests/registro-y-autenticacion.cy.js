import { CommonPageData } from "../pages/common-page/common-page.data"
import { CommonPageMethods } from "../pages/common-page/common-page.methods"
import { LoginMethods } from "../pages/login/login.methods"
import { SignupMethods } from "../pages/signup/signup.methods"
import { Logger } from "../util/logger"

describe(CommonPageData.testSuites.registroYAutenticacion,()=>{
    it('Registro de usuario valido',()=>{
        Logger.stepNumber(1);
        Logger.step('Navegar a la página de inicio.');
        CommonPageMethods.navigateTodemoBlaze();

        Logger.stepNumber(2);
        Logger.step('Hacer click en "Sign up" en la barra de navegacion')
        CommonPageMethods.clickOnSignUp()

        Logger.stepNumber(3);
        Logger.step('Completar todos los campos obligatorios con información válida.');
        SignupMethods.insertUsername('asdfdasfdsa');
        SignupMethods.insertPassword('asdfdasfdsa');

        Logger.stepNumber(4);
        Logger.step('Hacer clic en "Sign up" para registrar el usuario.')
        SignupMethods.clickOnSignupButton()
        cy.wait(2000)
        Logger.verification('Verificar que se muestre el mensaje "Sign up successful"')
        SignupMethods.verifySignUpSuccessfullMessageDisplayed()


    })
})

// Paso 1: Navegar a la página de inicio.
// Paso 2: Hacer clic en "Sign up" en la barra de navegación.
// Paso 3: Completar todos los campos obligatorios con información válida.
// Paso 4: Hacer clic en "Sign up" para registrar el usuario.
// Paso 5: Verificar que se redirige al usuario a la página de inicio de sesión.
