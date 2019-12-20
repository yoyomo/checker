import { div, button } from 'muvjs/muv-dom';
import { CheckerBoard } from './checker-board.mjs';
import { reset } from '../update/actions.mjs';

export const view = dispatch => {

  const dispatcher = {
    reset: () => dispatch(reset())
  }

  const CheckerBoardContent = CheckerBoard(dispatch);

  return model =>
    div()([
      ,
      CheckerBoardContent(model),
      button({onclick: dispatcher.reset})('Reset')
    ])

}