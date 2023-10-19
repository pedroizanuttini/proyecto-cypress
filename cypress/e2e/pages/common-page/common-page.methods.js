import { CommonPageElements } from "./common-page.elements";

export class CommonPageMethods{
    static navigateTodemoBlaze(){
        cypress.visit(CommonPageMethods.url);
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
}