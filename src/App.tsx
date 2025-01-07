import { BrowserRouter as Router } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import './App.css';

function App() {
  return (
    <Router>
      <MainLayout />
    </Router>
  );
}

export default App;
