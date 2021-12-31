import React, { useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import { callApi } from '../../redux/actions/apiActions';

import Item from '../../components/item/Item';

const List = ({ data, callApi }) => {
  useEffect(() => {
    axios.get('http://dev.contanimacion.com/api_tablon/api/mensajes')
    .then(resp => callApi(resp.data))
    .catch(err => console.log(err));
  }, []);

  if (!data) return <p>No data</p>;

  return (
    <div className='list'>
      <h1>List</h1>
      {data && data.map((item) => <Item data={item} key={item.id} />)}
    </div>
  )
}

const mapStateToProps = (state) => ({
  data: state.apiReducer.data
});

export default connect(mapStateToProps, { callApi })(List);
