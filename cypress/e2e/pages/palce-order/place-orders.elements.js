export class PlaceOrderElements{
    static get textboxes(){
        return {
            get name(){
                return cy.get('input#name');
            },
            get country(){
                return cy.get('input#country')
            },
            get city(){
                return cy.get('input#city')
            },
            get creditcard(){
                cy.get('input#card')
            },
            get month(){
                cy.get('input#month')
            },
            get year(){
                cy.get('input#year')
            }
        }
    }

    static get buttons(){
        return {
            get close(){
                return cy.get('div[id="orderModal"] button').eq(1)
            },
            get purchase(){
                return cy.contains('button', 'Purchase')
            }
        }
    }
}