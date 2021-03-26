import {
  Switch,
  Route
} from 'react-router-dom';
import HomePage from '../pages/HomePage';
import categoryShowPage from '../pages/categoryShowPage';
// import LoginPage from '../pages/LoginPage';
// import SignupPage from '../pages/SignupPage';
// import RecipeEditPage from '../pages/RecipeEditPage';
import RecipeShowPage from '../pages/RecipeShowPage';
import RecipeAddPage from '../pages/RecipeAddPage';

const routes = (
  <>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/categories" component={categoryShowPage} />
      <Route exact path="/categories/:categoryId" component={categoryShowPage} />
      <Route exact path="/categories/:categoryId/recipes/new" component={RecipeAddPage} />
      <Route exact path="/recipes/:recipeId" component={RecipeShowPage} />
      {/* <Route path="/recipes/:recipeId/edit" component={RecipeEditPage} /> */}
      {/* <Route path="/login" component={LoginPage} />
      <Route path="/signup" component={SignupPage} /> */}
    </Switch>
  </>
);

export default routes;