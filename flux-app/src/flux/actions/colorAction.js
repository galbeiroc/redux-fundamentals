import dispatcher from '../dispatcher';

export const COLOR_APP_ACTIONS = {
  CHANGE_COLOR: "ColorAppActions.ChangeColor",
}

export function changeColor(colorName) {
  dispatcher.dispatch({
    type: COLOR_APP_ACTIONS.CHANGE_COLOR,
    value: colorName,
  })
}
