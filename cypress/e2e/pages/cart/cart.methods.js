import { CartElements } from "./cart.elements";

export class cartMethods{
    static clickOnDeleteLink(productName){
        CartElements.links.delete(productName).click()
    }
}