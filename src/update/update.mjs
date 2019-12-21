//@flow

import { initialModel } from "../model/model.mjs";

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

      if(piece.team === 'one' && model.turn !== 'one') break;
      if(piece.team === 'two' && model.turn !== 'two') break;

      model = {...model};
      model.selectedPiecePosition = [action.r, action.c];
    break;

    case "select-move":
      if(model.selectedPiecePosition.length === 0) break;

      const selectedPiece = model.rows[model.selectedPiecePosition[0]][model.selectedPiecePosition[1]].piece;

      if(!selectedPiece) break;
      if(model.rows[action.r][action.c].piece) break;

      model = {...model};
      model.rows[action.r][action.c] = {...model.rows[action.r][action.c]};
      model.rows[action.r][action.c].piece = selectedPiece;

      model.rows[model.selectedPiecePosition[0]][model.selectedPiecePosition[1]] = {...model.rows[model.selectedPiecePosition[0]][model.selectedPiecePosition[1]]};
      model.rows[model.selectedPiecePosition[0]][model.selectedPiecePosition[1]].piece = undefined;

      if(action.jump){
        const jumpedR = model.selectedPiecePosition[0] + (action.r > model.selectedPiecePosition[0] ? 1 : - 1)
        const jumpedC = model.selectedPiecePosition[1] + (action.c > model.selectedPiecePosition[1] ? 1 : - 1)

        model.rows[jumpedR][jumpedC] = {...model.rows[jumpedR][jumpedC]};
        model.rows[jumpedR][jumpedC].piece = undefined;

        if(model.turn === 'one') {
          model.playerOne = {...model.playerOne};
          model.playerOne.captures++;
        }
        else if(model.turn === 'two') {
          model.playerTwo = {...model.playerTwo};
          model.playerTwo.captures++;
        }
      }

      //TODO if there is more moves, stay active
      model.selectedPiecePosition = [];

      model.turn = model.turn === 'one' ? 'two' : 'one';

    break;
  }

  return {model};
}