import { LoginElements } from "./login.elements";
import { Logger } from "../../util/logger";

export class LoginMethods{
    static insertUsername(username){
        LoginElements.textboxes.username.invoke('val',username)
    }

    static insertPassword(password){
        LoginElements.textboxes.password.invoke('val',password)
    }

    static clickOnLoginButton(){
        LoginElements.button.login.click();
    }

    static login(username, password){
        Logger.subStep('Insert username')
        this.insertUsername(username)
        Logger.subStep('Insert password')
        this.insertPassword(password)
        Logger.subStep('Click on login button')
        this.clickOnLoginButton()
    }
}