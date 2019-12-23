//@flow
import { CheckerBoard } from './checker-board.jsx';
import { reset } from '../update/actions.mjs';
import React from 'react';

export const View = dispatch => {

  const dispatcher = {
    reset: () => dispatch(reset())
  }

  const CheckerBoardContent = CheckerBoard(dispatch);

  return model =>
    <div>
      {CheckerBoardContent(model)}
      <button onClick={dispatcher.reset}>Reset</button>
      <div>{"Players turn: " + model.turn}</div>
      <div>{"Player 1 captures: "+ model.playerOne.captures}</div>
      <div>{"Player 2 captures: "+ model.playerTwo.captures}</div>
  </div>

}