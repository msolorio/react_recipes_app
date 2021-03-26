import React from 'react';
import { Redirect, Link } from 'react-router-dom';

class CategoryRecipes extends React.Component {
  state = { redirect: false };

  renderRecipes() {
    return this.props.category.recipes.map((recipe) => {
      return (
        <Link to={`/recipes/${recipe._id}`} key={recipe._id}>
          <article className="recipe">
            <h4>{recipe.recipeName}</h4>
            <p>{recipe.recipeBody}</p>
          </article>
        </Link>
      );
    });
  }

  handleButtonClick = () => this.setState({ redirect: true })

  
  render() {
    if (this.state.redirect && this.props.category) {
      return <Redirect to={`/categories/${this.props.category._id}/recipes/new`} />;
    }

    return (
      <section className="recipes-section">
        <button className="add-recipe-button" onClick={this.handleButtonClick}>Add Recipe</button>
        {this.props.category && this.renderRecipes()}
      </section>
    );
  }
}

export default CategoryRecipes;