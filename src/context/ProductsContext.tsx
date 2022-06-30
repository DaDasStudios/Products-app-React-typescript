import { useContext, createContext, useState, ReactNode } from 'react'
import { Products } from '../util/types/Product'
import { addProductReq, getProductsReq } from '../api/products'
import { ProductFormState } from '../components/products/AddProduct'
import { useNavigate } from 'react-router-dom'

type ProductsContextType = {
    products: Products;
    getProducts: () => void;
    addProduct: (product: ProductFormState) => void
}

type ProductsContextProviderProps = {
    children: ReactNode
}

const ProductsContext = createContext({} as ProductsContextType)

export const useProductsContext = () => useContext(ProductsContext)

export const ProductsContextProvider = ({children}: ProductsContextProviderProps) => {

    const [products, setProducts] = useState([] as Products)
    const navigate = useNavigate()

    async function getProducts() {
        const res = await getProductsReq()
        res.data ? setProducts(res.data) : []
    }
    async function addProduct(product: ProductFormState) {
        const res = await addProductReq(product)
        res.data ? setProducts([...products, res.data]) : null
        navigate('/')
    }

    return ( 
        <ProductsContext.Provider value={{
            products,
            getProducts,
            addProduct
        }}>
            {children}
        </ProductsContext.Provider>
    )
}