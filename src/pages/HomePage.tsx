import Container from "../components/layout/Container";
import { useLoginContext } from "../context/LoginContext";
import { NavLink } from "react-router-dom";
import { ProductsTable } from "../components/products/ProductsTable";
import LoadingSpin from "../components/layout/LoadingSpin";

export const HomePage = () => {
  const { login, isAuthenticated, isLoading } = useLoginContext();


  if (isLoading)
    return (
      <Container>
        <div className="flex justify-center items-center">
          <LoadingSpin></LoadingSpin>
        </div>
      </Container>
    );
  else {
    if (isAuthenticated)
      return (
        <>
          <Container>
            <ProductsTable></ProductsTable>
          </Container>
        </>
      );
    else
      return (
        <Container>
          <article className="grid grid-cols-1 lg:grid-cols-2">
            <div className="flex flex-col gap-6">
              <header className="text-6xl font-extrabold">
                <h1 className=" text-gray-900 mb-2">Sell your products here</h1>
                <h1 className="text-sky-600">the best platform</h1>
              </header>
              <p className="text-xl text-gray-600">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum
                saepe officia consequatur, ipsam maiores exercitationem soluta
                cupiditate culpa molestias.
              </p>
              <div className="flex gap-4 mt-5">
                <NavLink
                  to="/about"
                  className="text-white text-lg font-semibold bg-sky-500 hover:bg-sky-600 rounded-lg py-6 px-12"
                >
                  Get Started
                </NavLink>
                {!isAuthenticated ? (
                  <button
                    onClick={login}
                    className="text-sky-600 text-lg font-semibold bg-sky-200 hover:bg-sky-300 rounded-lg py-6 px-12"
                  >
                    Login
                  </button>
                ) : null}
              </div>
            </div>
            <img
              className="ml-60"
              src="https://www.nureva.com/hubfs/images/pages/sales/01083-resellers/01083-resellers-icon-product-501x401.png"
              alt=""
            />
          </article>
        </Container>
      );
  }
};
