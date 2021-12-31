import { BrowserRouter as Router, Route } from 'react-router-dom'
import Button from './components/button/Button';

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
