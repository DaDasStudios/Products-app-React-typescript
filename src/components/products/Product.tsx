import { Product as ProductProps } from "../../util/types/Product"
import { BsCartPlusFill } from 'react-icons/bs'
import setCurrency from '../../util/setCurrency'
import { useCartContext } from '../../context/CartContext'

export const Product = ({_id, name, description, image, price }: ProductProps) => {
    const {addItem} = useCartContext()

    return (
        <div className="bg-white hover:bg-gray-100 transition-colors lg:transform lg:transition-transform lg:hover:scale-105  shadow-md shadow-gray-300 rounded-lg cursor-pointer max-w-[400px] overflow-hidden">
            <div>
                <img className="h-80 w-full object-cover" src={image.url} alt={name} />
            </div>
            <article className="flex justify-between p-5 gap-2">
                <div>
                    <h3 className="capitalize text-slate-800 font-medium text-2xl">{setCurrency(price)}</h3>
                    <h5 className="capitalize text-gray-500">{name}. {description}</h5>
                    <h6 className="text-green-600 font-medium">{Math.random() > 0.3 ? "" : "Envío gratis"}</h6>
                </div>
                <button className="bg-blue-500 hover:bg-blue-600 rounded-lg py-2 px-5 text-white font-medium shadow-md flex justify-center items-center max-h-[80px]" onClick={() => addItem({id: _id, name, price, image})}>
                    <BsCartPlusFill className="text-2xl mr-3"></BsCartPlusFill>
                    <p>Add to cart</p>
                </button>
            </article>

        </div>
    )
}
