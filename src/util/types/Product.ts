import { Image } from './Image'
export type Product = {
    _id: string,
    name: string,
    description: string,
    price: number,
    image: Image,
}

export type Products = Product[]