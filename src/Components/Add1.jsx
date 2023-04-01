import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Add1 = (props) => {
  var[input,setInput]=useState(props.data)
  console.log(props.data)
  const inputHandler = (e)=>{
      const{name,value}=e.target
      setInput({...input,[name]:value})
  }
  const readValues= ()=>{
      console.log("clicked")
      if(props.method==="post"){
      axios.post("http://localhost:3000/Products",input)
      .then(response=>{
          alert("Successfully added")
      })
      .catch(error=>console.log(error))
  }
  else if(props.method==="put"){
      axios.put("http://localhost:3000/Products/"+input.id,input)
      .then(response=>{
          alert("Updated Succesfully")
          window.location.reload(false)
      })
      .catch(err=>console.log(err))
  }
  }
return (
  <div>
 <p></p> <TextField id="outlined-basic" label="Name" variant="outlined" name='Name' value={input.Name}onChange={inputHandler} />
  <Typography>{input.Name}</Typography><br></br>
  <TextField id="outlined-basic" label="Brand" variant="outlined" name='Brand' value={input.Brand}onChange={inputHandler} />
  <Typography>{input.Brand}</Typography><br></br>
  <TextField id="outlined-basic" label="Quantity" variant="outlined" name='Quantity' value={input.Quantity}onChange={inputHandler} />
  <Typography>{input.Quantity}</Typography><br></br>
  <TextField id="outlined-basic" label="Price" variant="outlined" name='Price' value={input.Price}onChange={inputHandler} />
  <Typography>{input.Price}</Typography><br></br>
  <Button variant="contained" onClick={readValues} >Submit</Button>
  </div>
)
}


export default Add1
