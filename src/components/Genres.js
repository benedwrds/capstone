import React, {Component} from 'react';
import { Typography, AppBar, Toolbar } from '@material-ui/core'
import { Link } from 'react-router-dom'

const Genres = () => {
  return (
  <div className="genre">
    <ul className="nav-list">
    <li className="nav-list-item">
        <Link>Vegetarian</Link>  
    </li> 
    <li className="nav-list-item">
        <Link>Vegan</Link>  
    </li>  
    <li className="nav-list-item">
        <Link>All Recipes</Link>  
    </li>         
    </ul>
  </div>
  )
}

export default Genres