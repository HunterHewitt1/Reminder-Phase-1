import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

import axios from 'axios'

function Home() {
  const [realtors, newRealtor] = useState([])
  const [formState, setFormState] = useState({
    name: '',
    brokerName: '',
    email: '',
    phone: ''
  })

  let navigate = useNavigate()
  const showRealtor = (id) => {
    navigate(`${id}`)
  }

  useEffect(() => {
    const apiCall = async () => {
      let response = await axios.get('http://localhost:3001/realtors')
      newRealtor(response.data)
    }

    apiCall()
  }, [])

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log(formState)
    let newRealtor = await axios
      .post('http://localhost:3001/realtors', formState)
      .then((response) => {
        return response
      })
      .catch((error) => {
        return error
      })
    newRealtor([...realtors, newRealtor.data])
    setFormState({ name: '', brokerName: '', email: '', phone: '' })
  }
  const refreshPage = () => {
    window.location.reload()
  }

  return (
    <div className="App">
      <button>
        <Link to="/realtors"> Home </Link>
      </button>
      <h1>Select one of the following realtors to view closings </h1>
      {realtors.map((realtor) => (
        <div
          key={realtor._id}
          onClick={() => {
            showRealtor(realtor._id)
          }}
        >
          <h4>{realtor.name}</h4>
        </div>
      ))}
      <h2>Add Another Realtor:</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input id="name" value={formState.name} onChange={handleChange} />
        <label htmlFor="brokerName">Broker Name:</label>
        <input
          id="brokerName"
          value={formState.brokerName}
          onChange={handleChange}
        />
        <label htmlFor="email">Email:</label>
        <input id="email" value={formState.email} onChange={handleChange} />
        <label htmlFor="phone">Phone:</label>
        <input id="phone" value={formState.phone} onChange={handleChange} />
        <button type="submit" onClick="refreshPage">
          Add Realtor
        </button>
      </form>
    </div>
  )
}

export default Home
