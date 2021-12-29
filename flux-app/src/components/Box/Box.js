import { useEffect, useState } from 'react';
import colorStore from '../../flux/stores/colorStore';

import './index.css';

function Box() {
  const [color, setColor] = useState(colorStore.getActiveColor());

  useEffect(() => {
    colorStore.on('storeUpdated', updateColor);

    return () => {
      colorStore.removeListener('storeUpdated', updateColor)
    }
  }, []);

  const updateColor = () => {
    setColor(colorStore.getActiveColor());
  };

  return (
    <div className="box">
      <div className="color-container" style={{ backgroundColor: color }}></div>
    </div>
  )
}

export default Box;