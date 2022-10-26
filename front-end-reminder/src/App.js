import { Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Realtors from "./pages/Realtors"



const App = () => {
  return(
    <div>
      <header>

      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home/>} />
          {/* <Route path="/realtors" element={<Realtors/>} /> */}
        </Routes>
      </main>
    </div>
  )
}

export default App