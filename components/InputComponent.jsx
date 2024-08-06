import { InputAdornment, MenuItem, TextField } from '@mui/material'
import React from 'react'

const InputComponent = ({type="text", name, placeholder, options, icon, onChange, label}) => {
  return (
    <>
    {type==="select"?
                <TextField
                id="outlined-select-currency"
                name={name}
                select
                label={label}
                required
            >
                {options.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>
    :
    <TextField type={type} required label={label} name={name} id="outlined-start-adornment" placeholder={placeholder|| "Enter the value"} sx={{ m: 1, width: '25ch' }} InputProps={{ startAdornment: <InputAdornment position="start">{icon}</InputAdornment>, }} />
}
{/* <input type={type} className="form-control" placeholder={placeholder|| "Enter the value"} onChange={onChange}/> */}
    </>
  )
}

export default InputComponent