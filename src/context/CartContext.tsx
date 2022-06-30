import { useState, useContext, createContext } from 'react'
import { ChildrenProps } from '../util/types/ChildrenProps'
import { Image } from '../util/types/Image';

export type Item = {
    id: string,
    name: string,
    price: number,
    image: Image,
    amount?: number
}

type CartContextType = {
    items: Item[];
    displayed: boolean;
    addItem: (item: Item, increment?: number) => void;
    clearCart: () => void;
    toggleCart: () => void;
    payCart: () => void;
}

const CartContext = createContext({} as CartContextType)

export const useCartContext = () => useContext(CartContext)

const initialState: Item[] = []

export const CartProvider = ({ children }: ChildrenProps) => {

    const [items, setItems] = useState(initialState)
    const [displayed, setDisplayed] = useState(false)

    function addItem(item: Item, increment: number = 1) {
        const searchItem = items.find(eachItem => eachItem.id === item.id)
        if (searchItem) {
            if (searchItem.amount === 1 && increment === -1) {
                removeItem(item.id)
            } else {
                setItems(items.map(eachItem => eachItem.id === item.id ? { ...eachItem, amount: (eachItem.amount ? eachItem.amount : 0) + increment } : eachItem))
            }
        } else {
            setItems([...items, { id: item.id, name: item.name, price: item.price, image: item.image, amount: 1 }])
        }
    }

    function removeItem(id: string) {
        setItems(items.filter(item => item.id !== id))
    }

    function clearCart() {
        setItems(initialState)
    }

    function toggleCart() {
        setDisplayed(!displayed)
    }

    function payCart() {
        alert('Carro pagado')
    }

    return (
        <CartContext.Provider value={{
            items,
            displayed,
            addItem,
            clearCart,
            toggleCart,
            payCart
        }}>
            {children}
        </CartContext.Provider>
    )
}