import { BrowserRouter as Router, Route } from 'react-router-dom'
import Button from './components/button/Button';

import Home from './pages/home/Home';
import List from './pages/list/List';
import Form from './pages/form/Form';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
          <Route path="/:page" component={Button} />
      </Router>
    </div>
  );
}

export default App;
