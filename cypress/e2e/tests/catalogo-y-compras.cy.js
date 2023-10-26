import { CommonPageData } from "../pages/common-page/common-page.data";
import { CommonPageMethods } from "../pages/common-page/common-page.methods";
import { LoginData } from "../pages/login/login.data";
import { LoginMethods } from "../pages/login/login.methods";
import { Logger } from "../util/logger";
import {HomeMethods} from "../pages/home/home.methods"
import { ProductDetailsMethods } from "../pages/product-details/product-details.methods";
import { cartMethods } from "../pages/cart/cart.methods";
import { PlaceOrderMethods } from "../pages/place-order/place-order.methods";
import { PlaceOrderData } from "../pages/place-order/place-order.data";
import {ThankYouForYourPurchasemethods } from "../pages/thank-your-for-your-purchase/thank-your-for-your-purchase.methods";


const user = LoginData.validCredentials;
const product = 'ASUS Full HD'

describe(CommonPageData.testSuites.catalogoYCompra, ()=>{
    it('Navegacion por categorias',()=>{

        Logger.stepNumber(1)
        Logger.step('Iniciar sesión como usuario registrado.')
        Logger.subStep('Navegate to Demoblaze application')
        CommonPageMethods.navigateTodemoBlaze()
        Logger.subStep('Click on "Log in" link')
        CommonPageMethods.clickOnLogin();
        LoginMethods.login(user.username,user.password)

        Logger.stepNumber(2)
        Logger.step('Navegar a la pagina de inicio')
        CommonPageMethods.clickOnHomeOption()

        Logger.stepNumber(3)
        Logger.step('Seleccionar una categoria de productos en el menu de navegacion')
        HomeMethods.clickOnMonitorsOption();
        Logger.verification(' Verificar que se muestra la lista de productos correspondiente a la categoría seleccionada')
        HomeMethods.verifyProductDisplayed('Apple monitor 24')
        HomeMethods.verifyProductDisplayed('ASUS Full HD')

    })

    it('Agregar producto al carrito',()=>{

        Logger.stepNumber(1)
        Logger.step('Iniciar sesión como usuario registrado.')
        Logger.subStep('Navegate to Demoblaze application')
        CommonPageMethods.navigateTodemoBlaze()
        Logger.subStep('Click on "Log in" link')
        CommonPageMethods.clickOnLogin();
        LoginMethods.login(user.username,user.password)

        Logger.stepNumber(2)
        Logger.step('Navegar a la pagina de inicio')
        CommonPageMethods.clickOnHomeOption()

        Logger.stepNumber(3)
        Logger.step('Seleccionar una categoria de productos en el menu de navegacion')
        HomeMethods.clickOnMonitorsOption();
        
        Logger.stepNumber(4)
        Logger.step('Hacer click en un producto especifico')
        HomeMethods.clickOnProductLink(product)

        Logger.stepNumber(5)
        Logger.verification('Verificar que se muestra la pagina de detalles del producto')
        ProductDetailsMethods.verifyProductDetailsPageDisplayed();

        Logger.stepNumber(6)
        Logger.step('Hacer click en el boton "Add to cart"')
        ProductDetailsMethods.clickOnAddToCartButton();

        Logger.stepNumber(7)
        Logger.verification('Verificar que se muestra un mensaje de confirmacion y el producto se agrega exitosamente')
        ProductDetailsMethods.verifyProductAddedMessage();
        CommonPageMethods.clickOnCart();
        cartMethods.verifyProductAdded(product)

        Logger.postCondition('Empty cart and logout')
        cartMethods.emptyCart(user.username,user.password)
        CommonPageMethods.logout()
    })

    it('Realizar una compra',()=>{

        Logger.stepNumber(1)
        Logger.step('Iniciar sesión como usuario registrado.')
        Logger.subStep('Navegate to Demoblaze application')
        CommonPageMethods.navigateTodemoBlaze()
        Logger.subStep('Click on "Log in" link')
        CommonPageMethods.clickOnLogin();
        LoginMethods.login(user.username,user.password)

        Logger.stepNumber(2)
        Logger.step('Navegar a la pagina de inicio')
        CommonPageMethods.clickOnHomeOption()

        Logger.stepNumber(3)
        Logger.step('Seleccionar una categoria de productos en el menu de navegacion')
        HomeMethods.clickOnMonitorsOption();
        
        Logger.stepNumber(4)
        Logger.step('Hacer click en un producto especifico')
        HomeMethods.clickOnProductLink(product)

        Logger.stepNumber(5)
        Logger.verification('Verificar que se muestra la pagina de detalles del producto')
        ProductDetailsMethods.verifyProductDetailsPageDisplayed();

        Logger.stepNumber(6)
        Logger.step('Hacer click en el boton "Add to cart"')
        ProductDetailsMethods.clickOnAddToCartButton();

        Logger.stepNumber(7)
        Logger.verification('Verificar que se muestra un mensaje de confirmacion y el producto se agrega exitosamente')
        cy.wait(3000)
        ProductDetailsMethods.verifyProductAddedMessage();
        CommonPageMethods.clickOnCart();
        cartMethods.verifyProductAdded(product)

        Logger.stepNumber(8)
        Logger.step('Hacer clic en la opcion "Cart" de la barra de navegacion.')
        CommonPageMethods.clickOnCart();

        Logger.stepNumber(9)
        Logger.step('Verificar que se muestra la página del carrito de compras')
        cartMethods.verifyCartPageIsShown()

        Logger.stepNumber(10)
        Logger.step(' Hacer clic en el botón "Place Order"')
        cartMethods.clickOnPlaceOrderButton();

        Logger.stepNumber(11)
        Logger.step('Completar los campos obligatorios en la página de información de envío.')
        PlaceOrderMethods.insertOrderInformation(PlaceOrderData.testData)

        Logger.stepNumber(12)
        Logger.step('Hacer clic en el botón "Purchase".')
        PlaceOrderMethods.clickOnPurchaseButton();

        Logger.stepNumber(13)
        Logger.step('Verificar que se muestra un mensaje de confirmación y se redirige al usuario a la página de inicio')
        cy.wait(3000)
        ThankYouForYourPurchasemethods.verifyGreenCheckMark();
        ThankYouForYourPurchasemethods.clickOnOkButton();
        HomeMethods.verifyHomePageIsShown();

        Logger.postCondition('Logout')
        CommonPageMethods.logout();
        


    })
})