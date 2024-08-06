import React from 'react'

const InputComponent = ({type="text", placeholder, options, icon, onChange, label}) => {
  return (
    <>
    {type==="select"?
    <div className="input-group mb-3">
      <span className="input-group-text" id="basic-addon1">{icon}</span>
      <select className="form-select" aria-label="Default select example" onChange={onChange}>
        {options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
    :
    <div className="input-group mb-3">
      <span className="input-group-text" id="basic-addon1">{label}</span>
      <input type={type} className="form-control" placeholder={placeholder|| "Enter the value"} onChange={onChange}/>
      <span className="input-group-text" id="basic-addon2">{icon}</span>
    </div>
    }
    </>
  )
}

export default InputComponent