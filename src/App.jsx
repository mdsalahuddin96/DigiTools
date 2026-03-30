import Banner from "./components/Banner"
import Nabvar from "./components/Nabvar"


function App() {
  

  return (
    <>
      <header className="bg-base-100 shadow-sm sticky top-0">
        <Nabvar></Nabvar>
      </header>
      {/* Banner section */}
      <section>
        <Banner></Banner>
      </section>
    </>
  )
}

export default App
