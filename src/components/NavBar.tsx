import { NavLink } from 'react-router-dom'
import { BsCart3 } from 'react-icons/bs'
import { useLoginContext } from '../context/LoginContext'
import CartBtn from './cart/CartBtn'

export default function NavBar() {
    const { isAuthenticated, login, logout, user } = useLoginContext()

    return (
        <header className='shadow-md shadow-gray-400'>
            <nav className="hidden lg:flex bg-slate-800 box-border items-center gap-9 md: justify-items-center lg:justify-between py-6 max-w-full px-32 text-white leading-none font-medium">
                <ul className="w-full flex justify-between items-center ">
                    <div className="flex items-center gap-9">
                        <img
                            className="h-12 w-auto rounded-full"
                            src={isAuthenticated && user ? user.picture : "https://www.nureva.com/hubfs/images/pages/sales/01083-resellers/01083-resellers-icon-product-501x401.png"}
                            alt=""
                        />
                        <li className='hover:text-sky-200'><NavLink to="/">{isAuthenticated ? "Dashboard" : "Home"}</NavLink></li>
                        <li className='hover:text-sky-200'><NavLink to="/about">About</NavLink></li>
                        <li className='hover:text-sky-200'><NavLink to="/projects">Projects</NavLink></li>
                        {isAuthenticated ? <li><NavLink to={'/add'}>Add Product</NavLink></li> : null}
                        <li className="text-sky-200 hover:text-sky-300 font-bold"><button onClick={isAuthenticated ? logout : login}>{isAuthenticated ? "Logout" : "Login"}</button></li>
                    </div>
                    <li className='hover:text-sky-200 align-self-end'><CartBtn disabled={isAuthenticated ? false : true}></CartBtn></li>
                </ul>
            </nav>
            <nav className='flex justify-center items-center gap-9 bg-slate-800 py-6 lg:hidden'>
                <button className='group'>
                    <BsCart3 className='text-4xl text-sky-200 transform focus:scale-125 hover:scale-125 transition-transform mx-auto mt-4'></BsCart3>

                    <ul className="flex flex-col justify-center gap-4 transition-all text-sky-200 font-bold overflow-hidden max-h-0 group-focus-within:max-h-96 ease-in-out duration-500 mt-6">
                        <li className='hover:text-sky-300'><NavLink to="/">Dashboard</NavLink></li>
                        <li className='hover:text-sky-300'><NavLink to="/about">About</NavLink></li>
                        <li className='hover:text-sky-300'><NavLink to="/projects">Projects</NavLink></li>
                        {isAuthenticated ? <li><NavLink to={'/add'}>Add Product</NavLink></li> : null}
                        <li className="text-sky-200 hover:text-sky-300 font-bold"><span onClick={isAuthenticated ? logout : login}>{isAuthenticated ? "Logout" : "Login"}</span></li>
                    </ul>
                </button>
                <CartBtn disabled={isAuthenticated ? false : true}></CartBtn>
            </nav>
        </header>
    )
}
