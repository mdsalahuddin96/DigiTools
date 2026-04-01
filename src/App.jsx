import { Suspense, useState } from "react";
import Banner from "./components/Banner";
import Nabvar from "./components/Nabvar";
import Stats from "./components/Stats";
import Toggling from "./components/Toggling";
import Products from "./components/products/Products";
import Carts from "./components/carts/Carts";
import Start from "./components/started/Start";
import Pricing from "./components/pricing/Pricing";
import Workflow from "./components/Workflow";
import Footerbody from "./components/footer/Footerbody";
import Copyright from "./components/footer/Copyright";
const fetchProducts = async () => {
  const res = await fetch("/products.json");
  return res.json();
};
const productPromise = fetchProducts();
function App() {
  const [activeTab, setActiveTab] = useState("product");
  const [cartItems, setCartItems] = useState([]);
  return (
    <>
      <header className="bg-base-100 shadow-sm sticky top-0">
        <Nabvar cartItems={cartItems} setActiveTab={setActiveTab}></Nabvar>
      </header>

      {/* Banner section */}
      <section>
        <Banner></Banner>
      </section>

      {/* Stats section */}
      <section className="bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
        <Stats></Stats>
      </section>
      <main>
        {/* Toggling */}
        <Toggling
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          cartItems={cartItems}
        ></Toggling>
        {activeTab === "product" && (
          <Suspense fallback={<p>Data loading...</p>}>
            <Products
              productPromise={productPromise}
              cartItems={cartItems}
              setCartItems={setCartItems}
            />
          </Suspense>
        )}
        {activeTab === "cart" && (
          <Carts cartItems={cartItems} setCartItems={setCartItems}></Carts>
        )}
        <Start></Start>
        <Pricing></Pricing>

        {/* Workflow section */}
        <section className="bg-linear-to-r py-28 from-[#4F39F6] to-[#9514FA]">
          <Workflow></Workflow>
        </section>
        
      </main>
      <footer className="bg-[#101727] pt-28">
        <Footerbody></Footerbody>
        <Copyright></Copyright>
      </footer>
    </>
  );
}

export default App;
