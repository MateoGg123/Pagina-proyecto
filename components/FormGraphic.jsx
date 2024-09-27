import React from 'react'

export const FormGraphic = ({title,options,handleChange,disabled}) => {
    let id = `select-${title}`
   
    
  return (
    <div className="form">
            <select name={id} id={id} onChange={handleChange} disabled={disabled} className='select_form'>
                <option value={""} className='option_form' >{title}</option>
                {
                    options.map((element,index) =>  
                        <option value={[options[index],options[index+1]]} className='option_form'>{`${options[index]} - ${options[index+1]}`}</option>
                    )
                }
            </select>
        </div>
  )
}