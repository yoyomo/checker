//@flow
/*::
import type {Dispatch, View} from 'muvjs/muv-dom'
import type {Model, PieceType} from '../model/model'
*/
import { div } from "muvjs/muv-dom";
import { Piece } from "./piece.mjs";
import { AvailableMove } from "./available-move.mjs";
import { selectPiece, selectMove } from '../update/actions';

export const jumpAvailable /*: Model => boolean */
  = model => {
    const sR = model.selectedPiecePosition[0];
    const sC = model.selectedPiecePosition[1];
    const selectedCellRow = model.rows[sR];
    const selectedCell = selectedCellRow && selectedCellRow[sC];
    const selectedPiece = selectedCell && selectedCell.piece;

    const topCellRow = model.rows[sR - 1];
    const bottomCellRow = model.rows[sR + 1];
    const leftTopCell = !!topCellRow && topCellRow[sC - 1];
    const leftTopPiece = !!leftTopCell && leftTopCell.piece;
    const rightTopCell = !!topCellRow && topCellRow[sC + 1];
    const rightTopPiece = !!rightTopCell && rightTopCell.piece;
    const leftBottomCell = !!bottomCellRow && bottomCellRow[sC - 1];
    const leftBottomPiece = !!leftBottomCell && leftBottomCell.piece;
    const rightBottomCell = !!bottomCellRow && bottomCellRow[sC + 1];
    const rightBottomPiece = !!rightBottomCell && rightBottomCell.piece;

    return !!selectedPiece &&
      (
        (selectedPiece.team === 'one' && (((!!leftTopPiece && leftTopPiece.team === "two") || (!!rightTopPiece && rightTopPiece.team === "two"))
          || (selectedPiece.type === 'square' && (((!!leftBottomPiece && leftBottomPiece.team === "two") || (!!rightBottomPiece && rightBottomPiece.team === "two"))))))
        ||
        (selectedPiece.team === 'two' && (((!!leftBottomPiece && leftBottomPiece.team === "one") || (!!rightBottomPiece && rightBottomPiece.team === "one"))
          || (selectedPiece.type === 'square' && (((!!leftTopPiece && leftTopPiece.team === "one") || (!!rightTopPiece && rightTopPiece.team === "one"))))))
      );

  }

export const CheckerBoard /*: Dispatch => Model => View*/
  = dispatch => {

    const dispatcher = {
      onSelectPiece: (r, c) => dispatch(selectPiece(r, c)),
      onSelectMove: (r, c) => dispatch(selectMove(r, c)),
      onSelectJump: (r, c) => dispatch(selectMove(r, c, true))
    }

    return model => {
      const sR = model.selectedPiecePosition[0];
      const sC = model.selectedPiecePosition[1];
      const selectedCellRow = model.rows[sR];
      const selectedCell = selectedCellRow && selectedCellRow[sC];
      const selectedPiece = selectedCell && selectedCell.piece;

      const isJumpAvailable = jumpAvailable(model);

      return div({ style: "width: 100%; height 100%; display: flex; flex-direction: column" })(
        model.rows.map((row, r) =>
          div({
            style: `display: flex;
                flex-direction: row`})(
              row.map((cel, c) => {
                const piece /*: PieceType | void */ = cel.piece;
                const isSelected = sR === r && sC === c;

                const isAvailable = scope => {
                  return !piece && selectedPiece &&
                    (c === sC - scope || c === sC + scope) &&
                    (
                      (selectedPiece.team === 'one' && ((r === sR - scope) || (selectedPiece.type === 'square' && r === sR + scope)))
                      ||
                      (selectedPiece.team === 'two' && ((r === sR + scope) || (selectedPiece.type === 'square' && r === sR - scope)))
                    );
                }

                const availableMove = isAvailable(1);
                const availableJump = isAvailable(2) && isJumpAvailable;

//TODO fix extra jump bug

                return div({
                  style: `width: 75px; height: 75px;
                            background-color: ${cel.dark ? "black" : "white"};`
                })(
                  piece ?
                    Piece({ key: `piece-${r}-${c}`, piece, selected: isSelected, onSelect: () => dispatcher.onSelectPiece(r, c) })()
                    :
                    availableMove ?
                      AvailableMove({ key: `available-move-${r}-${c}`, onSelect: () => dispatcher.onSelectMove(r, c) })()
                      :
                      availableJump ?
                        AvailableMove({ key: `available-jump-${r}-${c}`, onSelect: () => dispatcher.onSelectJump(r, c) })() : undefined

                )
              })
            )
        ))
    }
  }