import { connect } from 'react-redux';

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
        <ul>
          <li onClick={() => handleClick('Home')}>Home</li>
          <li onClick={() => handleClick('List')}>List</li>
          <li onClick={() => handleClick('New')}>New</li>
        </ul>
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
