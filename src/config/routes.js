import {
  Switch,
  Route
} from 'react-router-dom';
import HomePage from '../pages/HomePage';
import CityShowPage from '../pages/CityShowPage';
// import LoginPage from '../pages/LoginPage';
// import SignupPage from '../pages/SignupPage';
// import PostEditPage from '../pages/PostEditPage';
import PostShowPage from '../pages/PostShowPage';
import PostAddPage from '../pages/PostAddPage';

const routes = (
  <>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/cities" component={CityShowPage} />
      <Route exact path="/cities/:cityId" component={CityShowPage} />
      <Route exact path="/cities/:cityId/posts/new" component={PostAddPage} />
      <Route exact path="/posts/:postId" component={PostShowPage} />
      {/* <Route path="/posts/:postId/edit" component={PostEditPage} /> */}
      {/* <Route path="/login" component={LoginPage} />
      <Route path="/signup" component={SignupPage} /> */}
    </Switch>
  </>
);

export default routes;