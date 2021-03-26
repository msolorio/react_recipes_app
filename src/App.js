import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
// TODO: UPDATE COMPONENT NAMES
import MainPage from './pages/MainPage';
import ShowRecipePage from './pages/ShowRecipePage';
import AddRecipePage from './pages/AddRecipePage';
import Header from './components/Header';
import './App.css';

// TODO: UPDATE ROUTES
function App() {
  return (
    <div>
      <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/categories" component={MainPage} />
          <Route exact path="/categories/:categoryId" component={MainPage} />
          <Route exact path="/categories/:categoryId/recipes/new" component={AddRecipePage} />
          <Route exact path="/recipes/:recipeId" component={ShowRecipePage} />
        </Switch>
      </div>
  );
}

export default App;
