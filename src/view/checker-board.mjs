//@flow
/*::
import type {Dispatch, View} from 'muvjs/muv-dom'
import type {Model} from '../model/model'
*/
import { div } from "muvjs/muv-dom";
import { CirclePiece, SquarePiece } from "./piece.mjs";

export const CheckerBoard /*: Dispatch => Model => View*/
 = dispatch => {


  return model =>
    div({ style: "width: 100%; height 100%; display: flex; flex-direction: column" })(
      model.rows.map(row =>
        div({
          style: `display: flex;
                flex-direction: row`})(
            row.map(cel => {
              return div({
                style: `width: 75px; height: 75px;
                            background-color: ${cel.dark ? "black" : "white"};`
              })(cel.piece && CirclePiece({ team: cel.piece.team })())
            })
          )
      ))
}