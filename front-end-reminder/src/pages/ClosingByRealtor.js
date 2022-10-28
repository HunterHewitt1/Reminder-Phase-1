import { useState, useEffect, useSyncExternalStore } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import axios from 'axios'

function ClosingByRealtor() {
  const [realtors, updateRealtor] = useState([])
  const [form, setForm] = useState({
    name: '',
    brokerName: '',
    email: '',
    phone: ''
  })
  let { id } = useParams()

  useEffect(() => {
    const apiCall = async () => {
      let response = await axios.get(`http://localhost:3001/realtor/${id}`)
      updateRealtor(response.data)
    }

    apiCall()
  }, [id])

  const handleChange = async (event) => {
    setForm({ ...form, [event.target.id]: event.target.value })
  }
  const handleUpdate = async (event) => {
    event.preventDefault()
    let updateNewRealtor = await axios.put(
      `http://localhost:3001/realtors/${id}`,
      form
    )
    updateRealtor([realtors, updateNewRealtor])
    setForm({ name: '', brokerName: '', email: '', phone: '' })
  }

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
      <br></br>
      <h2>Update Realtor</h2>
      <form onSubmit={handleUpdate}>
        <label htmlFor="name">Name: </label>
        <input id="name" value={form.name} onChange={handleChange}></input>
        <label htmlFor="brokerName">Broker Name: </label>
        <input
          id="brokerName"
          value={form.brokerName}
          onChange={handleChange}
        ></input>
        <label htmlFor="email">Email: </label>
        <input id="email" value={form.email} onChange={handleChange}></input>
        <label htmlFor="phone">Phone: </label>
        <input id="phone" value={form.phone} onChange={handleChange}></input>
        <button type="submit">Update Realtor</button>
      </form>
    </div>
  )
}
export default ClosingByRealtor
