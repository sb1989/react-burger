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
    const formatter = new Intl.NumberFormat('en-SG', { style: 'currency', currency: 'SGD' })

    return(
        <div className={classes.BuildControls}>
            <p>Current Price: <strong>{formatter.format(props.price)}</strong></p>
            {controlLabel.map((lblItem) =>{return <BuildControl 
            key={lblItem.label}
            label={lblItem.label} 
            added={()=>props.ingredientAdded(lblItem.type)}
            removed={()=>props.ingredientRemoved(lblItem.type)}
            disabled={props.disabled[lblItem.type]}/>})}
            <button onClick={props.ordered}
             disabled={!props.orderable} className={classes.OrderButton}>ORDER NOW</button>
        </div>
    )
}

export default buildControls