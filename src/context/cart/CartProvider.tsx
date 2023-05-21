'use client'
import { useState } from "react";
//import { CartContext } from "./CartContext";
import { ProductsCart} from "./CartContextInterface";


export const CartProvider = ({ children }: { children: any }) => {
    
    const [productsCarts, setProductsCarts] = useState<ProductsCart[]>([])

    function addProductCart(productsCart: ProductsCart): void {
        setProductsCarts([...productsCarts, productsCart])
    }
    
    function increaseOneByProduct(productsCart: ProductsCart): void{
        productsCart.quantity = productsCart.quantity++
        updateProductByProduct(productsCart)
    }

    function reduceOneByProduct(productsCart: ProductsCart):void{
        productsCart.quantity = productsCart.quantity--
        updateProductByProduct(productsCart)
    }

    function deleteProductById(id: string):void {
        setProductsCarts([...productsCarts.filter(particularProductsCart => particularProductsCart.id != id)])
    }

    function updateProductByProduct(productsCart: ProductsCart) :void{
        setProductsCarts([...productsCarts.map(particularProductsCart =>
            particularProductsCart.id === productsCart.id
                ? { ...particularProductsCart, ...productsCart }
                : particularProductsCart)])
    }
    
    // return <CartContext.Provider value={{
    //     productsCarts,
    //     addProductCart,
    //     increaseOneByProduct,
    //     reduceOneByProduct,
    //     deleteProductById
    // }}>{children}</CartContext.Provider>
}