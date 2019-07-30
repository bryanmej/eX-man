import { useState } from 'react'

const useForm = () => {
  const [form, setForm] = useState({})

  const handleInputs = e => {
    e.persist()
    setForm(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }
  return [form, handleInputs]
}

export default useForm


