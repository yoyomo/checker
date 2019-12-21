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
      , CheckerBoardContent(model)
      , button({onclick: dispatcher.reset})('Reset')
      , div()("Players turn: "+ model.turn)
      , div()("Player 1 captures: "+ model.playerOne.captures)
      , div()("Player 2 captures: "+ model.playerTwo.captures)
    ])

}