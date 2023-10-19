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
}