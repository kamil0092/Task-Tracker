import React from 'react'
import Button from './Button'
import propsType from "prop-types";

const Header = ({title ,onAdd  , showAdd}) => {

  return ( 
  <header className='header' >
    <h1>{title}</h1>
    <Button color ={showAdd ? 'red' : 'green'} text ={showAdd ?  'Close' : "Add"} onClick={onAdd} />
  </header>
  )
}

Header.defaultProps = {
  title : "Task-Tracker"
}

Header.propsType ={
  title : propsType.string.isRequired
}

export default Header