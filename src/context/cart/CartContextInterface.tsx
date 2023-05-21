export interface CartContextInterface{
    productsCarts:ProductsCart[]
    addProductCart: (productsCart: ProductsCart) => void
    increaseOneByProduct: (productsCart: ProductsCart) => void
    reduceOneByProduct: (productsCart: ProductsCart) => void
    deleteProductById: (id: string) => void
}

export interface Cart{
  products:ProductsCart[]
  total:number
}

export interface ProductsCart{
  id:string
  url:string
  name:string
  color:string
  size:string
  quantity:number
  subTotal:number
}
