import React from 'react';
import { Link } from 'react-router-dom';

// TODO: UPDATE COMPONENT DETAILS
class RecipeShowPage extends React.Component {
  state = {
    recipe: {},
  }

  componentDidMount() {
    fetch(`http://localhost:4000/recipes/${this.props.match.params.recipeId}`)
      .then(response => response.json())
      .then(data => this.setState({ recipe: data }));
  }

  renderRecipeInfo() {
    if (this.state.recipe.category) {
      return (
        <>
          <h2 className="recipe-title">{this.state.recipe.recipeTitle}</h2>
          <p className="recipe-body">{this.state.recipe.recipeBody}</p>

          <Link className="form-return-button" to={`/categories/${this.state.recipe.category._id}`}>
            <button>Back to {this.state.recipe.category.categoryName}</button>
          </Link>
        </>
      );
    }
  }

  render() {
    return (
      <main className="show-recipe-page">
        {this.renderRecipeInfo()}

      </main>
    );
  }
}

export default RecipeShowPage;
