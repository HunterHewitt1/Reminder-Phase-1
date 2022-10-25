import { useState, useEffect } from 'react'

import axios from 'axios'

function App() {
  useEffect(() => {
    let response = axios.get('localhost:3001/realtors')
  }, [])

  return (
    <div className="App">
      <h1>All Realtors Here.</h1>
    </div>
  )
}

export default App
