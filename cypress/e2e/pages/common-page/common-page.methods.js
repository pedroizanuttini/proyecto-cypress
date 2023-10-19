import { CommonPageElements } from "./common-page.elements";
import { CommonPageData } from "./common-page.data";

export class CommonPageMethods{
    static navigateTodemoBlaze(){
        cy.clearCookies();
        cy.visit(CommonPageData.url);
    }

    static clickOnHomeOption(){
        CommonPageElements.topMenu.home.click();
    }

    static clickOnContact(){
        CommonPageElements.topMenu.contact.click();
    }

    static clickOnAboutUs(){
        CommonPageElements.topMenu.aboutUs.click();
    }

    static clickOnCart(){
        CommonPageElements.topMenu.cart.click();
    }

    static clickOnLogin(){
        CommonPageElements.topMenu.login.click();
    }

    static clickOnSignUp(){
        CommonPageElements.topMenu.signUp.click();
    }

    static verifyAlert(expectedMessage){
        cy.on('window.alert',(str)=>{
            expect(str).to.equal(expectedMessage)
        })
    }

    static generateRandomString(length =10) {
        let result = '';
        const characters = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
          counter += 1;
        }
        return result;
    }

}