import { useState } from "react";
import Banner from "./components/Banner";
import Nabvar from "./components/Nabvar";
import Stats from "./components/Stats";
import Toggling from "./components/Toggling";

function App() {
  const [activeTab,setActiveTab]=useState('product')
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
        <h1>{activeTab==='product'?"Product Tab active":"Cart tab active"}</h1>
      </main>
    </>
  );
}

export default App;
