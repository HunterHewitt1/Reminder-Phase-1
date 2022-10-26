import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import axios from 'axios'

function ClosingByRealtor() {
  const [realtors, updateRealtor] = useState([])
  let { id } = useParams()

  useEffect(() => {
    const apiCall = async () => {
      let response = await axios.get(`http://localhost:3001/realtor/${id}`)
      updateRealtor(response.data)
    }

    apiCall()
  }, [])

  return (
    <div className="App">
      <h1>All Realtors Here.</h1>
      {realtors.map((realtor) => (
        <div key={realtor._id}>
          <h2>{realtor.realtorName}</h2>
          <h2>{realtor.realtorName}</h2>
          <h2>{realtor.realtorName}</h2>
          <h2>{realtor.realtorName}</h2>
        </div>
      ))}
      <h3>Closings By Realtors</h3>
    </div>
  )
}
export default ClosingByRealtor
