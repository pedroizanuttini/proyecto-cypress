import { CommonPageMethods } from "../common-page/common-page.methods";
import { ProducDetailsElements } from "./product-datails.elements";

export class ProductDetailsMethods{

    static clickOnAddToCartButton(){
        ProducDetailsElements.buttons.addToCart.click();
    }

    static verifyProductDetailsPageDisplayed(){
        ProducDetailsElements.buttons.addToCart.should('be.visible')
    }

    static verifyProductAddedMessage(){
        CommonPageMethods.verifyAlert('Product added')
    }
}
    