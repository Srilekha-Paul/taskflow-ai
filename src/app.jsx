import { Router } from 'preact-router';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import { isAuthenticated } from "./utils/auth";
import Projects from "./pages/Projects";
import Tasks from "./pages/Tasks";
import Team from "./pages/Team";


const App = () => {
  return (
    <Router>
      <Login path="/" />
      <Login path="/login" />
      <Register path="/register" />
      <Dashboard path="/dashboard" />
      {isAuthenticated() && <Dashboard path="/dashboard" />}
      {!isAuthenticated() && <Login path="/dashboard" />}
      <Projects path="/projects" />
      <Tasks path="/tasks" />
      <Team path="/team" />
    </Router>
  );
};

export default App;