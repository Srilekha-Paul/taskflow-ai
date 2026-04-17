import { Router } from 'preact-router';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';

const App = () => {
  return (
    <Router>
      <Login path="/" />
      <Login path="/login" />
      <Register path="/register" />
      <Dashboard path="/dashboard" />
    </Router>
  );
};

export default App;