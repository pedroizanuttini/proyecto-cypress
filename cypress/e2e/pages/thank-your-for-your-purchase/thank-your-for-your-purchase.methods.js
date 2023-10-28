import { ThankYouForYourPurchaseElements } from "./thank-your-for-your-purchase.elements"

export class ThankYouForYourPurchasemethods{
    static clickOnOkButton(){
        cy.wait(1000)
        ThankYouForYourPurchaseElements.buttons.ok.click()
    }

    static verifyGreenCheckMark(){
        ThankYouForYourPurchaseElements.icons.greenCheckMark.should("exist")
    }
}