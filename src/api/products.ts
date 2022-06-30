import axios from "axios"
import { ProductFormState } from '../components/products/AddProduct'

export const getProductsReq = async () => await axios.get('/products')

export const addProductReq = async (product: ProductFormState) => {
    const form = new FormData()

    for (let key in product) {
        form.append(key, product[key as keyof ProductFormState])
    }

    return await axios.post('/products', form, { headers: {'Type-Content': "multipart/form-data"}})
}