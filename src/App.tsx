import { HomePage } from "./pages/HomePage";
import { About } from "./pages/About";
import { NotFound404 } from "./pages/NotFound404";
import { Projects } from "./pages/Projects";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import { Login } from "./pages/Login";
import { AddProduct } from "./components/products/AddProduct";
import { Auth0Provider } from "@auth0/auth0-react";
import { LoginProvider } from "./context/LoginContext";
import { ProductsContextProvider } from "./context/ProductsContext";
import { CartProvider } from "./context/CartContext";
import Cart from "./components/cart/Cart";

const domain = "dev-ce1o7xbb.us.auth0.com";
const clientId = "05jqzi8YAgA3HxxVdrWZMhneFCC17cFn"

function App() {
  return (
    <>
      <Auth0Provider
        domain={domain}
        clientId={clientId}
        redirectUri={window.location.origin}
      >
        <LoginProvider>
          <CartProvider>
            <ProductsContextProvider>
              <NavBar></NavBar>
              <Cart></Cart>
              <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/projects" element={<Projects />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/add" element={<AddProduct />}></Route>
                <Route path="*" element={<NotFound404 />}></Route>
              </Routes>
            </ProductsContextProvider>
          </CartProvider>
        </LoginProvider>
      </Auth0Provider>
    </>
  );
}

export default App;
