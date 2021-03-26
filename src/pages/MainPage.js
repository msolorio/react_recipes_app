import React from 'react';

// TODO: UPDATE COMPONENT NAMES
import CategorySidebar from '../components/MainPage/CategorySidebar';
import CategoryDetail from '../components/MainPage/CategoryDetail';
import CategoryRecipes from '../components/MainPage/Recipes';
import './MainPage.css';

// TODO: UPDATE COMPONENT DETAILS
class categoryShowPage extends React.Component {
  state = {
    categories: []
  }

  componentDidMount() {
    fetch('http://localhost:4000/categories')
      .then((response) => response.json())
      .then((categoriesData) => {
        console.log('categoriesData:', categoriesData);
        this.setState({ categories: categoriesData })
      });
  }
  
  render() {
    console.log('this.state:', this.state);

    const activeCategory = this.state.categories.find((category) => {
      return category._id === this.props.match.params.categoryId;
    });

    return (
      <div className="category-show-page">
        <div className="sidebar">
          <CategorySidebar categories={this.state.categories} />
        </div>
        <main className="category-info">
          {activeCategory && <CategoryDetail category={activeCategory} />}
          {activeCategory && <CategoryRecipes category={activeCategory} />}
        </main>
      </div>
    );
  }
}


export default categoryShowPage;
