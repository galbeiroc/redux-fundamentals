import React from 'react';

import './index.css';

const Item = ({ data }) => {
  return (
    <div className='item'>
      <h3>{data.asunto}</h3>
      <p>{data.mensaje}</p>
    </div>
  )
}

export default Item;
