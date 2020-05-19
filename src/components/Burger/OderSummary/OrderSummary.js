import React from 'react'
import Auxiliary from '../../../components/../hoc/Auxiliary'
const orderSummary = (props) =>{
    console.log('[OrderSummary.js] props.ingredients' + props.ingredients.salad)
    const ingredientList = Object.keys(props.ingredients).map(ingredientKey => 
    {return <li key={ingredientKey}>
        <span style={{textTransform: 'capitalize'}}>{ingredientKey}</span> : {props.ingredients[ingredientKey]}</li>})
    console.log('[OrderSummary.js] ingredient li: ' + ingredientList)
    return (

        <Auxiliary>
            <h3>Your Order Summary </h3>
            <p>A burger with the following ingredients</p>
            <ul>
                {ingredientList}
            </ul>
            <p>Continue to Checkout?</p>
            <button>CANCEL</button>
            <button>CONTINUE</button>
        </Auxiliary>
    )   
}

export default orderSummary