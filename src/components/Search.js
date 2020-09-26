import React, { Component } from 'react'

class Search extends Component {
  state = {
    recipes : []
  }

  componentDidMount(){
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian")
    .then((response) => {
        return response.json();
    })
    .then((myJson) => {
        this.setState({recipes: myJson});
        console.log(myJson)
    })
  }

  render() {
    return( 
        <div>
            {/* <h1>Veggie Options</h1>
            {
                this.state.recipes.map((recipes) => {
               return (
                 <h1>{recipes.meals.strMeal}</h1>
               ) 
                })
            } */}
        </div>
    )
}
}

export default Search