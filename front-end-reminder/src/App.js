import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Realtors from './pages/Realtors'
import ClosingByRealtor from './pages/ClosingByRealtor'
import './App.css'

const App = () => {
  return (
    <div>
      <header></header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<ClosingByRealtor />} />
          {/* <Route path="/realtors" element={<Realtors/>} /> */}
        </Routes>
      </main>
    </div>
  )
}

export default App
