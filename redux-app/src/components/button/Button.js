import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { navClick } from '../../redux/actions/navActions';

import './index.css';

function Button({ title, navClick }) {
  const handleClick = (_title) => {
    navClick({
      title: _title,
    })
  };

  return (
    <div className="btn">
      <header className="App-header">
        <div>
          <h1>{title}</h1>
        </div>
        <Link to="/" onClick={() => handleClick('Home')}>Home</Link>
        <Link to="/list" onClick={() => handleClick('List')}>List</Link>
        <Link to="/new" onClick={() => handleClick('New')}>New</Link>
      </header>
    </div>
  )
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    title: state.navReducer.title
  }
}

export default connect(mapStateToProps, { navClick })(Button);
