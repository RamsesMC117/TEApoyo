import Header from "./components/header"
import Hero from "./components/hero"

function App() {
  return (
    <>
      <div className="flex flex-col">
        <div>
          <Header />
        </div>
        <div>
          <Hero />
        </div>
      </div>
    </>
  )
}

export default App
