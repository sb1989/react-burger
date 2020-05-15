import React from 'react'
import BuildControl from './BuildControl/BuildControl'
import classes from './BuildControls.css'

const controlLabel = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'}
]

const buildControls = (props)=>{
    return(
        <div className={classes.BuildControls}>
            {controlLabel.map((lblItem) =>{return <BuildControl 
            key={lblItem.label}
            label={lblItem.label} 
            added={()=>props.ingredientAdded(lblItem.type)}/>})}
        </div>
    )
}

export default buildControls