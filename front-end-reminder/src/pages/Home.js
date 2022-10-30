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
    document.location.reload()
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
      <form class="homeForm" onSubmit={handleSubmit}>
        <label class="nameForm" htmlFor="name">
          Name:
        </label>
        <input
          class="border"
          id="name"
          value={formState.name}
          onChange={handleChange}
        />
        <label class="nameForm" htmlFor="brokerName">
          Broker Name:
        </label>
        <input
          class="border"
          id="brokerName"
          value={formState.brokerName}
          onChange={handleChange}
        />
        <label class="nameForm" htmlFor="email">
          Email:
        </label>
        <input
          class="border"
          id="email"
          value={formState.email}
          onChange={handleChange}
        />
        <label class="nameForm" htmlFor="phone">
          Phone:
        </label>
        <input
          class="border"
          id="phone"
          value={formState.phone}
          onChange={handleChange}
        />
        <button class="addBtn" type="submit" onClick="refreshPage">
          Add Realtor
        </button>
      </form>
    </div>
  )
}

export default Home
