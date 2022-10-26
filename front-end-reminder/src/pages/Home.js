import { useState, useEffect } from 'react'



import axios from 'axios'

function Home() {
  const [realtors, updateRealtor] = useState([])
  const [formState, setFormState] = useState({name: "", brokerName: "", email: "", phone: "" })

  useEffect(() => {
    const apiCall = async () => {
      let response = await axios.get('http://localhost:3001/realtors')
      updateRealtor(response.data)
    }

    apiCall()

  }, [])

  const handleChange = (event) => {
    setFormState({...formState, [event.target.id]: event.target.value})
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log(formState)
    let newRealtor = await axios.post("http://localhost:3001/realtors", 
    formState)
    .then((response) => {
      return response
    })
    .catch((error) => {
      return error
    });
    updateRealtor([...realtors, newRealtor.data])
    setFormState({name: "", brokerName: "", email: "", phone: "" })
  }

  return (
    <div className="App">
      <h1>All Realtors Here.</h1>
      {realtors.map((realtor) => (
        <div key={realtor._id}>
          <h2>{ realtor.name }</h2>
        </div>
      ))}
      <h3>Add Another Realtor:</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name:</label>
        <input id='name' value={formState.name} onChange={handleChange}/>
        <label htmlFor='brokerName'>Broker Name:</label>
        <input id='brokerName' value={formState.brokerName} onChange={handleChange}/>
        <label htmlFor='email'>Email:</label>
        <input id='email' value={formState.email} onChange={handleChange}/>
        <label htmlFor='phone'>Phone:</label>
        <input id='phone' value={formState.phone} onChange={handleChange}/>
        <button type='submit'>Add Realtor</button>
      </form>
    </div>
  )
}

export default Home