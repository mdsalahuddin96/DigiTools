import { Suspense, useState } from "react";
import Banner from "./components/Banner";
import Nabvar from "./components/Nabvar";
import Stats from "./components/Stats";
import Toggling from "./components/Toggling";
import Products from "./components/Products/Products";
import Carts from "./components/Carts/Carts";
import Start from "./components/Started/Start";
const fetchProducts = async () => {
  const res = await fetch("../public/products.json");
  return res.json();
};
const productsRes = fetchProducts();
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
            <Products productsRes={productsRes} />
          </Suspense>
        )}
        {activeTab === "cart" && <Carts></Carts>}
        <Start></Start>
      </main>
    </>
  );
}

export default App;
