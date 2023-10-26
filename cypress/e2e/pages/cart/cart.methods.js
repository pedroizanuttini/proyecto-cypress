import { Logger } from "../../util/logger";
import { CommonPageMethods } from "../common-page/common-page.methods";
import { LoginMethods } from "../login/login.methods";
import { CartElements } from "./cart.elements";


export class cartMethods{
    static clickOnDeleteLink(productName){
        CartElements.links.delete(productName).click()
    }

    static verifyProductAdded(productName){
        CartElements.links.delete(productName).should('be.visible')
    }

    static verifyCartPageIsShown(){
        cy.url().should('include', 'cart.html')
    }

    static clickOnPlaceOrderButton(){
        CartElements.buttons.placeOrder.click()
    }

    static deleteProducts(){
        cy.get('a[onclick*=deleteItem]').each(link=>{
            link.click()
            cy.wait(10000)
        })
    }

    static emptyCart(username,password){
        Logger.subStep('Navigate to Demoblaze')
        CommonPageMethods.navigateTodemoBlaze();
        Logger.subStep('Log out')
        CommonPageMethods.logout();
        Logger.subStep('Click on Home option')
        CommonPageMethods.clickOnHomeOption();
        Logger.subStep('Click on Login option')
        CommonPageMethods.clickOnLogin();
        Logger.subStep(`Login with this credentials ${username}/${password}`)
        LoginMethods.login(username,password);
        Logger.subStep('Click on Cart option')
        CommonPageMethods.clickOnCart();
        Logger.subStep('Delete products from cart')
        this.deleteProducts();
    }
}