import React, {Component} from 'react';
import { Typography, AppBar, Toolbar } from '@material-ui/core'
import { Link } from 'react-router-dom'
import Genres from './Genres'

const Navigation = () => {
  return (
   <div>
     <AppBar>
      <Toolbar>
        {/* <IconButton color="inherit">
        </IconButton> */}
             <Typography variant= "h6" style={{flexGrow: "1"}}>
                    Mighty Healthy
            </Typography>
            <ul className="nav-list">
                   <li className="nav-list-item">
                        <Link to="/createAccount">Create Account</Link>  
                    </li> 
                    <li className="nav-list-item">
                        <Link to="/login">Login</Link>  
                    </li>         
            </ul>
      </Toolbar>
    </AppBar>
   
   </div> 
  )
}
export default Navigation