import React from 'react';
import { Redirect, Link } from 'react-router-dom';

// TODO: UPDATE COMPONENT DETAILS
class RecipeAddPage extends React.Component {
  state = {
    recipeName: '',
    recipeBody: '',
    recipeImg: '',
    categoryName: '',
    categoryId: '',
    redirect: false
  }
  
  handleTitleChange = (event) => {
    this.setState({ recipeName: event.target.value });
  }

  handleBodyChange = (event) => {
    this.setState({ recipeBody: event.target.value });
  }

  handleImgChange = (event) => {
    this.setState({ recipeImg: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const newRecipe = {
      recipeName: this.state.recipeName,
      recipeBody: this.state.recipeBody,
      recipeImg: this.state.recipeImg,
      category: this.state.categoryId
    }

    fetch('http://localhost:4000/recipes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newRecipe)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        this.setState({ redirect: true });
      });
      
  }

  componentDidMount() {
    fetch(`http://localhost:4000/categories/${this.props.match.params.categoryId}`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          categoryName: data.categoryName,
          categoryId: data._id
        });
      })
      .catch((err) => {
        console.log('Error adding a new category:', err);
      })
  }

  render() {
    if (this.state.redirect) return <Redirect to={`/categories/${this.props.match.params.categoryId}`} />

    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <h2 className="form-header">
          Add a Recipe for {this.state.categoryName}
        </h2>
        <div className="form-group">
          <label className="form-label" htmlFor="recipe-title">Title:</label>
          <input
            className="form-input" 
            type="text" 
            id="recipe-title" 
            value={this.state.recipeName} 
            onChange={this.handleTitleChange}
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="recipe-body">Body:</label>
          <textarea
            className="form-input form-input-body"
            type="text" 
            id="recipe-body" 
            value={this.state.recipeBody} 
            onChange={this.handleBodyChange}
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="recipe-body">Recipe Image:</label>
          <input
            className="form-input"
            type="text" 
            id="recipe-body" 
            value={this.state.recipeImg} 
            onChange={this.handleImgChange}
          />
        </div>

        <button type="submit">Add Recipe</button>

        <Link className="form-return-button" to={`/categories/${this.props.match.params.categoryId}`}>
          <button>Back to {this.state.categoryName}</button>
        </Link>
      </form>
    )
  }
}

export default RecipeAddPage;
