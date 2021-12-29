import * as ColorActions from '../../flux/actions/colorAction'

import './index.css';

function Button() {

  const handleClik = (color) => {
    ColorActions.changeColor(color);
  };

  return (
    <div className="btn">
      <button onClick={() => handleClik('#ff0000')}>Red</button>
      <button onClick={() => handleClik('#00ff00')}>Green</button>
    </div>
  )
}

export default Button;