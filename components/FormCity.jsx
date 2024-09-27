import React, { useState } from 'react'
import search_icon from "../media/images/search.png"

export const FormCity = ({setCiudad}) => {


    const [Form, setForm] = useState("")

    const handleChange = (e)=>{
        setForm(e.target.value)
    }

    const handleSubmit = (e)=>{
      e.preventDefault()
      setCiudad(Form)
      setForm("")
    }

    const handleReset = () =>{}


  return (
    <div>
        <form onSubmit={handleSubmit} className='search-bar'>
            <input type="text" name="name" placeholder="Ciudad" onChange={handleChange} value={Form}></input>
            <button type="submit" value="Enviar" ><img src={search_icon}></img></button>
        </form>
    </div>
  )
}
