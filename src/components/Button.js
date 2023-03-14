import PropsType from 'prop-types';
import React from 'react'

const Button = ({color , text , onClick}) => {
  return <button 
  onClick={onClick}
  style={{backgroundColor :color}} 
   className='btn'>
  {text}
  </button>

}

Button.defaulProps ={
  color : 'steelBlue'
}

Button.PropsType ={ 
  text : PropsType.string.isRequired,
  color : PropsType.string,
  onClick : PropsType.func
}

export default Button
