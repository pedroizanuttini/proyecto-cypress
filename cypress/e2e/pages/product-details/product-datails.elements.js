export class ProducDetailsElements{
    static get buttons(){
        return {
            get addToCart(){
                return cy.contains('a', 'Add to cart')
            }
        }
    }
}