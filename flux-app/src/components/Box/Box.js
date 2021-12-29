import { useEffect, useState } from 'react';
import ColorStore from '../../flux/stores/colorStore';

import './index.css';

function Box() {
  const [color, setColor] = useState(ColorStore.getActiveColor())
  useEffect(() => {
    ColorStore.on('storeUpdated', updateColor);

    return () => {
      ColorStore.removeListener('storeUpdated', updateColor)
    }
  }, []);

  const updateColor = () => {
    setColor(ColorStore.getActiveColor());
  };

  return (
    <div className="box">
      <div className="color-container" style={{ background: color }}></div>
    </div>
  )
}

export default Box;