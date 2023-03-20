import { useState } from 'react'
import './App.css'
import FormInput from './component/formInput/FormInput'

function App() {
   
  const [values,setValues] = useState({
    username:'',
    email:'',
    birthday:'',
    password:'',
    cpassword:''
  })

  const inputForm =[
    {
      id:1,
      name:'username',
      type:'text',
      placeholder:'Username',
      label:'Username',
      errorMessage:'username must be 3-16 ',
      pattern:'^[A-Za-z)-9]{3,16}$',
      required:true,
    },
    {
      id:2,
      name:'email',
      type:'email',
      placeholder:'Email',
      label:'Email',
      errorMessage:'It shoud be a valid email',
      required:true,
    },
    {
      id:3,
      name:'birthday',
      type:'date',
      placeholder:'Birthday',
      label:'Birthday',
      errorMessage:'Date required',
      required:true
    },
    {
      id:4,
      name:'password',
      type:'password',
      placeholder:'Password',
      label:'Password',
      errorMessage:'Password should be 8-10 ',
      pattern:`^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required:true,
    },
    {
      id:5,
      name:'cpassword',
      type:'password',
      placeholder:'Confirm Password',
      label:'Confirm Password',
      errorMessage:'Password do not matched',
      pattern:values.password,
      required:true,
    },

  ]
  
  const handleSubmit =(e)=>{
    e.preventDefault()

    console.log(values)
  }

  const onChange=(e)=>{
    setValues({...values,[e.target.name]:e.target.value})
  }

  

  return (
    <div className="App">
      <form onSubmit={handleSubmit} >
        {
          inputForm.map((input)=>{
            return <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange} />
          })
        }
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default App
