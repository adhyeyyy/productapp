import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
   
   <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
            </IconButton>
            <Typography variant="h4" component="div" align="left" sx={{ flexGrow: 1 }}>
              Product App
            </Typography>
            <Button color="inherit"><Link to ='/' style={{color:'white',textDecoration:'none'}}>View</Link></Button>
            <Button color="inherit"><Link to ='/add' style={{color:'white',textDecoration:'none'}}>Add</Link></Button>
          </Toolbar>
        </AppBar>
      </Box>
      )
    }
    

export default Navigation
