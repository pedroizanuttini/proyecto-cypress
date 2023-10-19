import { ThankYouForYourPurchaseElements } from "./thank-your-for-your-purchase.elements"

export class ThankYouForYourPurchasemethods{
    static clickOnOkButton(){
        ThankYouForYourPurchaseElements.buttons.click()
    }

    static verifyGreenCheckMark(){
        ThankYouForYourPurchaseElements.icons.greenCheckMark.should("exist")
    }
}