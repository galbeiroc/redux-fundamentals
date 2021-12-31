import React, { useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import { callApi } from '../../redux/actions/apiActions';

import Item from '../../components/item/Item';

const List = ({ data, loading, callApi }) => {

  useEffect(() => {
    callApi({ data: [], loading: true });
    axios.get('http://dev.contanimacion.com/api_tablon/api/mensajes')
    .then(resp => callApi({ data: resp.data, loading: false }))
    .catch(err => console.log(err));
  }, [callApi]);

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
