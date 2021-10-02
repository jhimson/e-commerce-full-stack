import './App.css';

import { Switch, Route, Router } from 'react-router-dom';

// Pages
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import PageNotFound from './pages/PageNotFound';
import DashboardPage from './pages/DashboardPage';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';

function App() {
  return (
    <Switch>
      <Route path="/" component={HomeScreen} exact />
      <Route path="/product/:id" component={ProductScreen} />
      <Route path="/cart/:id?" component={CartScreen} />
      <Route path="/login" component={LoginPage} exact />
      <Route path="/register" component={RegisterPage} exact />
      <Route path="/dashboard" component={DashboardPage} exact />
      <Route component={PageNotFound} exact />
    </Switch>
  );
}

export default App;
