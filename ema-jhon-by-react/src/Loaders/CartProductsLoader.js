import { getShoppingCart } from "../../../utilities/fakedb"

const cartProductsLoader = async() =>{
    const loadedProducts = await fetch('../../public/fakeData/products.json')
    const products = await loadedProducts.json()

    const sotoredCart = getShoppingCart()

    const savedCart = []
    for( const id in sotoredCart){
        const addedProduct = products.find(od => od.id === id)
        if(addedProduct){
            const quantity = sotoredCart[id]
            addedProduct.quantity = quantity
            savedCart.push(addedProduct)
        }
    }
    return savedCart

}

export default cartProductsLoader;