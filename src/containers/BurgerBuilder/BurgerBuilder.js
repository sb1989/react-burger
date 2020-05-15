import React, {Component} from 'react'
import Auxiliary from '../../hoc/Auxiliary'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}
class BurgerBuilder extends Component{
    state={
        ingredients:{
            salad:0,
            bacon:0,
            cheese:0,
            meat:0
        },
        totalPrice: 4
    }

    addIngredientHandler = (type) => {
        const prevCount = this.state.ingredients[type]
        const updatedCount = prevCount + 1
        const updatedIngredients = {
            ...this.state.ingredients
        }

        updatedIngredients[type] = updatedCount

        const prevPrice = this.state.totalPrice;
        const updatedPrice = prevPrice + INGREDIENT_PRICES[type]
        this.setState({
                ingredients: updatedIngredients,
                totalPrice: updatedPrice
            }
        ) 
    }

    removeIngredientHandler = (type) => {
        const prevCount = this.state.ingredients[type]
        if(prevCount <=0 ){
            return
        }

        const updatedCount = prevCount - 1
        const updatedIngredients = {
            ... this.state.ingredients
        }
        updatedIngredients[type] = updatedCount

        const prevPrice = this.state.totalPrice;
        const updatedPrice = prevPrice + INGREDIENT_PRICES[type]
        this.setState({
                ingredients: updatedIngredients,
                totalPrice: updatedPrice
            }
        ) 
    }

    render(){
        const disabledProperties = {...this.state.ingredients}
        for(let key in disabledProperties){
            console.log('key value in disbaled: ' + key)
            disabledProperties[key] = disabledProperties[key] <= 0
        }
        return (
            <Auxiliary>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls 
                ingredientAdded={this.addIngredientHandler} 
                ingredientRemoved={this.removeIngredientHandler}
                disabled={disabledProperties}
                price={this.state.totalPrice}
                />
                {console.log(this.state.totalPrice)}
            </Auxiliary>
        )
    }

}

export default BurgerBuilder