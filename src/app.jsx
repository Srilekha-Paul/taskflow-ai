import { Router } from 'preact-router';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import { isAuthenticated } from "./utils/auth";

const App = () => {
  return (
    <Router>
      <Login path="/" />
      <Login path="/login" />
      <Register path="/register" />
      <Dashboard path="/dashboard" />
      {isAuthenticated() && <Dashboard path="/dashboard" />}
      {!isAuthenticated() && <Login path="/dashboard" />}
    </Router>
  );
};

export default App;