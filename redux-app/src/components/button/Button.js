import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import Form from '../../pages/form/Form';
import Home from '../../pages/home/Home';
import List from '../../pages/list/List';

import { navClick } from '../../redux/actions/navActions';

import './index.css';

const OBJ_PAGE = {
  home: 'Home',
  list: 'List',
  new: 'Form',
};

function Button({ title, navClick, page }) {
  const handleClick = (_title) => {
    navClick({
      title: _title,
    })
  };

  useEffect(() => {
    navClick({
      title: OBJ_PAGE[page] || OBJ_PAGE.home,
    })
  }, [navClick, page]);

  const renderPage = () => {
    const objRenderPage = {
      home: <Home />,
      list: <List />,
      new: <Form />,
    }
    return objRenderPage[page] || objRenderPage.home;
  };

  const { home, list, new:form } = OBJ_PAGE;
  return (
    <div className="btn">
      <header className="App-header">
        <div>
          <h1>{title}</h1>
        </div>
        <Link to="home" onClick={() => handleClick(home)}>{home}</Link>
        <Link to="list" onClick={() => handleClick(list)}>{list}</Link>
        <Link to="new" onClick={() => handleClick(form)}>{form}</Link>
      </header>
      {renderPage()}
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    title: state.navReducer.title,
    page: ownProps.match.params.page
  }
}

export default connect(mapStateToProps, { navClick })(Button);
