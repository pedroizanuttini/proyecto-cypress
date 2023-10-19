import { PlaceOrderElements } from "./place-orders.elements";

export class PlaceOrderMethods{
    static insertName(name){
        PlaceOrderElements.textboxes.name.invoke('val',name)
    }
    static insertCountry(country){
        PlaceOrderElements.textboxes.country.invoke('val',country)
    }
    static insertCity(city){
        PlaceOrderElements.textboxes.city.invoke('val',city)
    }
    static insertCreditCard(cardNumber){
        PlaceOrderElements.textboxes.creditcard.invoke('val',cardNumber)
    }
    static insertCreditCard(month){
        PlaceOrderElements.textboxes.month.invoke('val',month)
    }
    static insertYear(year){
        PlaceOrderElements.textboxes.year.invoke('val',year)
    }

    static clickOnCloseButton(){
        PlaceOrderElements.buttons.close.click()
    }

    static clickOnPurchaseButton(){
        PlaceOrderElements.buttons.purchase.click()
    }
    
    
    
}