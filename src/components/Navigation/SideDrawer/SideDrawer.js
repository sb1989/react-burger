import React from 'react'
import Logo from '../../Logo/Logo'
import classes from './SideDrawer.css'
import NavigationItems from '../NavigationItems/NavigationItems'
import Backdrop from '../../UI/Backdrop/Backdrop'
import Auxiliary from '../../../hoc/Auxiliary'
const sideDrawer=(props)=>{
    console.log('[SideDrawer.js] props.open' + props.open)
    let attachedClasses = [classes.SideDrawer, classes.Close]

    if(props.open){
        attachedClasses = [classes.SideDrawer, classes.Open]
    }
    return (
        <Auxiliary>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo/>
                </div>
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </Auxiliary>
    )
}

export default sideDrawer