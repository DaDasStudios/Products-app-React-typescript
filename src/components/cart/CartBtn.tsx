import { useCartContext } from '../../context/CartContext'
import { BsCart3 } from 'react-icons/bs'

type CartBtnProps = {
    disabled: boolean
}

const CartBtn = ({ disabled }: CartBtnProps) => {
    const {toggleCart} = useCartContext()
    return (
        <button className={disabled ? "text-sky-100/70 cursor-not-allowed" : 'text-sky-200'} disabled={disabled}>
            <BsCart3 className=' text-4xl transform focus:scale-125 hover:scale-125 transition-transform mx-auto mb-1' onClick={
                disabled ? () => () => {} :
                toggleCart
                }></BsCart3>
        </button>
    )
}

export default CartBtn