import React from 'react'
import Auxiliary from '../../../components/../hoc/Auxiliary'
import Button from '../../UI/Button/Button'
const orderSummary = (props) =>{
    console.log('[OrderSummary.js] props.ingredients' + props.ingredients.salad)
    const ingredientList = Object.keys(props.ingredients).map(ingredientKey => 
    {return <li key={ingredientKey}>
        <span style={{textTransform: 'capitalize'}}>{ingredientKey}</span> : {props.ingredients[ingredientKey]}</li>})
    console.log('[OrderSummary.js] ingredient li: ' + ingredientList)
    const formatter = new Intl.NumberFormat('en-SG', { style: 'currency', currency: 'SGD' })
    return (

        <Auxiliary>
            <h3>Your Order Summary </h3>
            <p>A burger with the following ingredients</p>
            <ul>
                {ingredientList}
            </ul>
            <p>Total Price: <strong>{formatter.format(props.totalPrice)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button clicked={props.purchaseCancel} btnType='Danger'>CANCEL</Button>
            <Button clicked={props.purchaseContinue} btnType='Success'>CONTINUE</Button>
        </Auxiliary>
    )   
}

export default orderSummary