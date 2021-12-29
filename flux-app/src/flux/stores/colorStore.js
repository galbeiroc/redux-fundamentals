import dispatcher from "../dispatcher";
import * as ColorActions from "../actions/colorAction";
import { EventEmitter } from 'events';

class ColorStore extends EventEmitter {
  constructor() {
    super();

    this.activeColor = '#ff0000'
  }

  handleActions = (action) => {
    switch(action.type) {
      case ColorActions.COLOR_APP_ACTIONS.CHANGE_COLOR: {
        this.activeColor = action.value;
        console.log(action.value)
        this.emit('storeUpdated');
        break;
      }
      default: {}
    }
  }

  getActiveColor = () => {
    return this.activeColor;
  }
}

const colorStore = new ColorStore();
dispatcher.register(colorStore.handleActions);

export default new ColorStore();