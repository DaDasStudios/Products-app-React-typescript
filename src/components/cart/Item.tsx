import { Item } from "../../context/CartContext";
import setCurrency from "../../util/setCurrency";
import { IoMdRemove, IoMdAdd } from 'react-icons/io'
import { useCartContext } from '../../context/CartContext'

const CartItem = ({id, name, price, amount, image }: Item) => {
  const {addItem} = useCartContext()
  return (
    <div className="overflow-hidden border-b border-slate-400/30 pb-2 flex gap-4 mx-4 my-4">
      <img
        className="rounded-lg shadow-md w-1/2 min-h-[150px] object-cover"
        src={image.url}
        alt={name}
      />
      <section className="w-full mr-4 my-4 flex flex-col justify-between">
        <article>
          <h3 className="text-lg font-medium">
            {name} x{amount}
          </h3>
          <h5 className="text-md font-medium text-slate-300/80">
            {amount ? setCurrency(price * amount): null}
          </h5>
        </article>
        <div className="flex content-center justify-between text-lg text-slate-300/80">
            <button className="hover:text-slate-300" onClick={() => addItem({id, name, price, image})}><IoMdAdd></IoMdAdd></button>
            <button className="hover:text-slate-300" onClick={() => addItem({id, name, price, image}, -1)}><IoMdRemove></IoMdRemove></button>
        </div>
      </section>
    </div>
  );
};

export default CartItem;
