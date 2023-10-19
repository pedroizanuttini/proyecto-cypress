import { Homeelements } from "./home.elements";


export class HomeMethods{
    static clickOnPhonesOption(){
        Homeelements.categoriesMenu.phone.click();
    }
    static clickOnLaptopsOption(){
        Homeelements.categoriesMenu.laptops.click();
    }
    static clickOnMonitorsOption(){
        Homeelements.categoriesMenu.monitors.click();
    }

    static clickOnProductLink(productName){
        Homeelements.product(productName).click()
    }
}