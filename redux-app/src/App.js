import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Button from './components/button/Button';

import Home from './pages/home/Home';
import List from './pages/list/List';
import Form from './pages/form/Form';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Button />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<List />} />
          <Route path="/new" element={<Form />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
