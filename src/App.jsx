import { Suspense, useState } from "react";
import Banner from "./components/Banner";
import Nabvar from "./components/Nabvar";
import Stats from "./components/Stats";
import Toggling from "./components/Toggling";
import Products from "./components/products/Products";
import Carts from "./components/carts/Carts";
import Start from "./components/Started/Start";
import Pricing from "./components/pricing/Pricing";
const fetchProducts = async () => {
  const res = await fetch('/products.json');
  return res.json();
};
const productPromise = fetchProducts();
function App() {
  const [activeTab, setActiveTab] = useState("product");
  return (
    <>
      <header className="bg-base-100 shadow-sm sticky top-0">
        <Nabvar></Nabvar>
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
        <Toggling activeTab={activeTab} setActiveTab={setActiveTab}></Toggling>
        {activeTab === "product" && (
          <Suspense fallback={<p>Data loading...</p>}>
            <Products productPromise={productPromise} />
          </Suspense>
        )}
        {activeTab === "cart" && <Carts></Carts>}
        <Start></Start>
        <Pricing></Pricing>
      </main>
    </>
  );
}

export default App;
