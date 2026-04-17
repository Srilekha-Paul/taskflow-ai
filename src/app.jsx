import { Router } from 'preact-router';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

const App = () => {
  return (
    <Router>
      <Login path="/" />
      <Login path="/login" />
      <Dashboard path="/dashboard" />
    </Router>
  );
};

export default App;