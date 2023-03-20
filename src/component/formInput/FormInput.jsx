import React,{useState} from 'react'
import './FormInput.css'

const FormInput = (props) => {
    const {label,errorMessage,onChange,...inputProps} = props

    const [focused,setFocusedAndLeav] = useState(false)

    const handleFocuse=()=>{
      setFocusedAndLeav(true)
    }

  return (
    <div className='formInput'>
      <label>{label}:</label>
      <input
      {...inputProps}
      onChange={onChange}
      onBlur={handleFocuse}
      focused={focused.toString()}
      onFocus={()=>inputProps.name === 'cpassword' && setFocusedAndLeav(true)}
       />
      <small>{errorMessage}</small>
    </div>
  )
}

export default FormInput
