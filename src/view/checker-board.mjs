//@flow
/*::
import type {Dispatch, View} from 'muvjs/muv-dom'
import type {Model, PieceType} from '../model/model'
*/
import { div } from "muvjs/muv-dom";
import { Piece } from "./piece.mjs";
import {selectPiece} from '../update/actions';

export const CheckerBoard /*: Dispatch => Model => View*/
 = dispatch => {

  const dispatcher = {
    onSelect: (r,c) => dispatch(selectPiece(r,c))
  }

  return model =>
    div({ style: "width: 100%; height 100%; display: flex; flex-direction: column" })(
      model.rows.map((row,r) =>
        div({
          style: `display: flex;
                flex-direction: row`})(
            row.map((cel, c) => {
              const piece /*: PieceType | void */ = cel.piece;
              const isSelected = model.selectedPiecePosition[0] === r && 
              model.selectedPiecePosition[1] === c;
              return div({
                style: `width: 75px; height: 75px;
                            background-color: ${cel.dark ? "black" : "white"};`
              })(Piece({ piece, selected: isSelected, onSelect: () => dispatcher.onSelect(r,c) })())
            })
          )
      ))
}