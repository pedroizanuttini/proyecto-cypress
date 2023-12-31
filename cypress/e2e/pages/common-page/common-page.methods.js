import { CommonPageElements } from "./common-page.elements";
import { CommonPageData } from "./common-page.data";

export class CommonPageMethods{
    static navigateTodemoBlaze(){
        cy.clearAllCookies();
        cy.clearLocalStorage();
        cy.visit(CommonPageData.url);
        CommonPageMethods.clickOnHomeOption();
    }

    static clickOnHomeOption(){
        CommonPageElements.topMenu.home.click();
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
          })
    }

    static clickOnContact(){
        CommonPageElements.topMenu.contact.click();
    }

    static clickOnAboutUs(){
        CommonPageElements.topMenu.aboutUs.click();
    }

    static clickOnCart(){
        CommonPageElements.topMenu.cart.click();
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
          })
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

    static verifySignedUser(username){
        CommonPageElements.signedUser.should('have.text', `Welcome ${username}`)
    }

    static logout(){
        cy.get('body').then($body=>{
            if($body.find('#logout2[staile="display: block"]').length>0){
        CommonPageElements.topMenu.logout.click();
        }

``     })
    }
}