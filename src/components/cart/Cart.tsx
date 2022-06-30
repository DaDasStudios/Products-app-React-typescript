import { useCartContext } from "../../context/CartContext";
import { BsTrash, BsCart3 } from 'react-icons/bs'

import Item from "./Item";

const Cart = () => {
  const { items, displayed, toggleCart, clearCart, payCart } = useCartContext();

  return (
    <div
      className={`transition-all duration-700 fixed right-0 inset-y-0 ${displayed ? "left-0" : "left-full"
        } bg-black/40 flex justify-end z-20`}
      onClick={toggleCart}
    >
      <div
        className="w-[360px] bg-slate-800 h-full shadow-2xl text-slate-300 py-10 overflow-x-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="mx-4 flex items-center justify-between mb-5 font-medium text-lg w-[320px]"
          onClick={toggleCart}
        >
          <div className="flex items-center">
            <BsCart3 className="text-3xl"></BsCart3>
            <h1 className="text-slate-300/80 ml-3 hover:text-slate-300">
              Your Products
            </h1>
          </div>
          <BsTrash className="text-2xl text-slate-300/80 ml-3 hover:text-slate-300" onClick={clearCart}></BsTrash>
        </button>
        <div>
          {items.map((item) => (
            <Item {...item}></Item>
          ))}
        </div>
        <div className="flex justify-center gap-4">
          <button className="bg-slate-300/50 hover:bg-slate-300/30 transition-colors text-white py-5 px-16 rounded-lg shadow-md font-medium"
            onClick={items.length !== 0 ? payCart: () => {}}>
            {items.length === 0 ? "Cart Empty" : "Pay Cart"}
          </button>

        </div>
      </div>
    </div>
  );
};

export default Cart;
