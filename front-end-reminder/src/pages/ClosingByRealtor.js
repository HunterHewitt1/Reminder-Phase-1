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
      <h1>Closing Information.</h1>
      {realtors.map((realtor) => (
        <div key={realtor._id}>
          <h2>{`Realtor Name: ${realtor.realtorName}`}</h2>
          <h2>{`Client Name: ${realtor.clientName}`}</h2>
          <h2>{`Email: ${realtor.email}`}</h2>
          <h2>{`Property Address: ${realtor.propertyAddress}`}</h2>
          <h2>{`MLS Number: ${realtor.MLS}`}</h2>
          <h2>{`Close Date: ${realtor.closeDate}`}</h2>
          <h2>{`Exucuted Contract Date: ${realtor.exucutedContractDate}`}</h2>
          <h2>{`Option Period: ${realtor.optionPeriod}`}</h2>
        </div>
      ))}
      <h3>Closings By Realtors</h3>
    </div>
  )
}
export default ClosingByRealtor
