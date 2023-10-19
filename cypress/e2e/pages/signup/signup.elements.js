export class SignupElements{
    static get textboxes(){
        return{
            get username(){
                return cy.get('input#sign-username')
            },
            get password(){
                return cy.get('input#sign-password')
            }
        }
    }

    static get buttons(){
        return{
            get close(){
                cy.contains('button', 'Close').eq(0)
            },
            get signup(){
                return cy.contains('button', 'Sign up').eq(0)
            }
        }
     
    }
}