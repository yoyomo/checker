import { div } from 'muvjs/muv-dom';
import { CheckerBoard } from './checker-board.mjs';

export const view = dispatch => {

  const CheckerBoardContent = CheckerBoard(dispatch);

  return model =>
    div()([
      ,
      CheckerBoardContent(model)
    ])

}