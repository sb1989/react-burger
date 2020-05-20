import React from 'react'
import burgerlogo from '../../assets/images/burger-logo.png'   
import classes from './Logo.css'
const logo = (props)=>{
    return(
        <div className={classes.Logo}>
            <img src={burgerlogo} alt='MyBurger'/>
        </div>
    )
}

export default logo