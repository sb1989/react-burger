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
        this.setState({
                ingredients: updatedIngredients
            }
        ) 
        
        this.setState(
                (prevState, props)=>{ return {
                    totalPrice: prevState.totalPrice + INGREDIENT_PRICES[type]
                }
            }
        )
    }
    render(){
        return (
            <Auxiliary>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls ingredientAdded={this.addIngredientHandler}/>
            </Auxiliary>
        )
    }

}

export default BurgerBuilder