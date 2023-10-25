import { CommonPageData } from "../pages/common-page/common-page.data";
import { CommonPageMethods } from "../pages/common-page/common-page.methods";
import { LoginData } from "../pages/login/login.data";
import { LoginMethods } from "../pages/login/login.methods";
import { Logger } from "../util/logger";

describe(CommonPageData.testSuites.authenticacion, () =>{
    it('Inicio de sesion valido', ()=>{

        Logger.stepNumber(1)
        Logger.step(' Navegar a la página de inicio.')
        CommonPageMethods.navigateTodemoBlaze();

        Logger.stepNumber(2)
        Logger.step('Hacer clic en "Log in" en la barra de navegación.')
        CommonPageMethods.clickOnLogin();

        Logger.stepNumber(3)
        Logger.step(' Ingresar un nombre de usuario y contraseña válidos.')
        LoginMethods.insertUsername(LoginData.validCredentials.username)
        LoginMethods.insertPassword(LoginData.validCredentials.password)

        Logger.stepNumber(4)
        Logger.step('Hacer clic en "Log in" para iniciar sesión.')
        LoginMethods.clickOnLoginButton();
        Logger.verification('Verificar que se redirige al usuario a la página de inicio.')
        CommonPageMethods.verifySignedUser(LoginData.validCredentials.username)

        Logger.postCondition('Log out')
        CommonPageMethods.logout()
        cy.wait(10000)
    });

    it('Inicio de sesion invalido', ()=>{

        Logger.stepNumber(1)
        Logger.step(' Navegar a la página de inicio.')
        CommonPageMethods.navigateTodemoBlaze();

        Logger.stepNumber(2)
        Logger.step('Hacer clic en "Log in" en la barra de navegación.')
        CommonPageMethods.clickOnLogin();

        Logger.stepNumber(3)
        Logger.step('Ingresar un nombre de usuario y contraseña invalidos.')
        LoginMethods.insertUsername(LoginData.validCredentials.username)
        LoginMethods.insertPassword('contrasenaInvalida')

        Logger.stepNumber(4)
        Logger.step('Hacer clic en "Log in" para iniciar sesión.')
        LoginMethods.clickOnLoginButton();
        Logger.verification('Verificar que se muestra un mensaje de error de inicio de sesion')
        LoginMethods.verifyWrongPasswordMessage();
    });
});