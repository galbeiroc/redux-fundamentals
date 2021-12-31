import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getData } from '../../redux/actions/apiActions';

import Item from '../../components/item/Item';

const List = ({ list, loading, error, getData:fetchData, }) => {

  useEffect(() => {
    fetchData()
  }, [fetchData]);

  return (
    <div className='list'>
      <h1>List</h1>
      {loading && (<h3>Loading...</h3>)}
      {error && error.length && (<h4>Error {error}</h4>)}
      {list && list.map((item) => <Item data={item} key={item.id} />)}
    </div>
  )
}

const mapStateToProps = (state) => ({
  list: state.apiReducer.data,
  loading: state.apiReducer.loading,
  error: state.apiReducer.error,
});


export default connect(mapStateToProps, { getData })(List);
