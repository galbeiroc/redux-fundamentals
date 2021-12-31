import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { callApi, getData } from '../../redux/actions/apiActions';

import Item from '../../components/item/Item';

const List = ({ data, loading, callApi }) => {

  useEffect(() => {
    getData()
  }, []);

  if (!data) return <p>No data</p>;

  return (
    <div className='list'>
      <h1>List</h1>
      {loading && (<h3>Loading...</h3>)}
      {data && data.map((item) => <Item data={item} key={item.id} />)}
    </div>
  )
}

const mapStateToProps = (state) => ({
  data: state.apiReducer.data,
  loading: state.apiReducer.loading
});

export default connect(mapStateToProps, { callApi })(List);
