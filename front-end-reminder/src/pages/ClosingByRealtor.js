import { useState, useEffect, useSyncExternalStore } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

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

  const handleDelete = async (event) => {
    event.preventDefault()
    let deletedRealtor = await axios.delete(
      `http://localhost:3001/realtors/${id}`,
      form
    )
    updateRealtor([realtors, deletedRealtor.data])
    setForm({ name: '', brokerName: '', email: '', phone: '' })
  }

  return (
    <div className="App">
      {realtors.map((realtor) => (
        <div id="borderInfo" key={realtor._id}>
          <h1>{`Closing Information for ${realtor.realtorName}`}</h1>
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
      <br></br>
      <button id="btn">
        <Link to="/"> Home </Link>
      </button>
      <h2>Update Realtor: </h2>
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
        <button
          class="updateBtn"
          type="submit"
          onClick="window.location.reload();"
        >
          Update Realtor
        </button>
      </form>
      <button onClick={handleDelete}>Delete</button>
    </div>
  )
}
export default ClosingByRealtor
