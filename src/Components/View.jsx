import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Add1 from './Add1'

const View = () => {
  var[update,setUpdate]= useState(false)
    var[selected,setSelected]= useState([])
    var[products,setProducts]= useState([])
    useEffect(()=>{
     axios.get("http://localhost:3000/Products")
      .then(response=>{setProducts(products=response.data)
      console.log(products)
    })
      .catch(error=>console.log(error))   
    },[])
    const deleteValue=(id)=>{
      console.log(id)
      axios.delete(" http://localhost:3000/Products/"+id)
      .then(response=>{
        alert("Succesfully Deleted")
        window.location.reload(false)
      })
      .catch(error=>console.log(error))
    }
    const updateValue=(value)=>{
      setSelected(value)
      setUpdate(true)
    }
    var finalJSX = <TableContainer>
    <Table>
        <TableHead>
            <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Brand</TableCell>
                <TableCell>Quantity</TableCell>
                <TableCell>Price</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
          {products.map((value,index)=>{
            return <TableRow>
              <TableCell>{value.id}</TableCell>
              <TableCell>{value.Name}</TableCell>
              <TableCell>{value.Brand}</TableCell>
              <TableCell>{value.Quantity}</TableCell>
              <TableCell>{value.Price}</TableCell>
              <TableCell>
                <Button  variant="contained" onClick={()=>deleteValue(value.id)}>Delete </Button> 
               
                </TableCell>
                <TableCell> <Button variant="contained" color='error' onClick={()=>updateValue(value)} >Update</Button></TableCell>
            </TableRow>
          })}
        </TableBody>
    </Table>
  </TableContainer>

 if(update)
  finalJSX=<Add1 data={selected} method ="put" />
  return (
  
  finalJSX )

 
}

export default View
