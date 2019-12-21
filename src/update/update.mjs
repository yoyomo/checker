import { initialModel } from "../model/model.mjs";

//@flow
/*::
import type {Model} from '../model/model'
import type {Action} from './actions'
*/
export const update /*: Model => Action => {model: Model} */
= model => action => {
  switch(action.type){
    case "reset":
      model = initialModel;
    break;

    case "select-piece":
      const cell = model.rows[action.r][action.c];
      const piece = cell.piece;

      if(piece.team === 'one' && !model.playerOne.turn) break;
      if(piece.team === 'two' && !model.playerTwo.turn) break;

      model.selectedPiecePosition = [action.r, action.c];
    break;
  }

  return {model};
}