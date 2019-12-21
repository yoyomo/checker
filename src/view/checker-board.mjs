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
    const rightTopCell = !!topCellRow && topCellRow[sC + 1];
    const leftBottomCell = !!bottomCellRow && bottomCellRow[sC - 1];
    const rightBottomCell = !!bottomCellRow && bottomCellRow[sC + 1];

    const leftTopPiece = !!leftTopCell && leftTopCell.piece;
    const rightTopPiece = !!rightTopCell && rightTopCell.piece;
    const leftBottomPiece = !!leftBottomCell && leftBottomCell.piece;
    const rightBottomPiece = !!rightBottomCell && rightBottomCell.piece;

    const topTopCellRow = model.rows[sR - 2];
    const bottomBottomCellRow = model.rows[sR + 2];
    const leftLeftTopTopCell = !!topTopCellRow && topTopCellRow[sC - 2];
    const rightRightTopTopCell = !!topTopCellRow && topTopCellRow[sC + 2];
    const leftLeftBottomBottomCell = !!bottomBottomCellRow && bottomBottomCellRow[sC - 2];
    const rightRightBottomBottomCell = !!bottomBottomCellRow && bottomBottomCellRow[sC + 2];

    return !!selectedPiece &&
      (
        (selectedPiece.team === 'one' && (((!!leftTopPiece && leftTopPiece.team === "two" && !!leftLeftTopTopCell && !leftLeftTopTopCell.piece) || (!!rightTopPiece && rightTopPiece.team === "two" && !!rightRightTopTopCell && !rightRightTopTopCell.piece))
          || (selectedPiece.type === 'square' && (((!!leftBottomPiece && leftBottomPiece.team === "two" && !!leftLeftBottomBottomCell && !leftLeftBottomBottomCell.piece) || (!!rightBottomPiece && rightBottomPiece.team === "two" && !!rightRightBottomBottomCell && !rightRightBottomBottomCell.piece))))))
        ||
        (selectedPiece.team === 'two' && (((!!leftBottomPiece && leftBottomPiece.team === "one" && !!leftLeftBottomBottomCell && !leftLeftBottomBottomCell.piece) || (!!rightBottomPiece && rightBottomPiece.team === "one" && !!rightRightBottomBottomCell && !rightRightBottomBottomCell.piece))
          || (selectedPiece.type === 'square' && (((!!leftTopPiece && leftTopPiece.team === "one" && !!leftLeftTopTopCell && !leftLeftTopTopCell.piece) || (!!rightTopPiece && rightTopPiece.team === "one" && !!rightRightTopTopCell && !rightRightTopTopCell.piece))))))
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

                const isValidJump = () => {
                  const jumpingR = sR + (r > sR ? 1 : - 1)
                  const jumpingC = sC + (c > sC ? 1 : - 1)
                  const opposingTeam = model.turn === 'one' ? 'two' : 'one';
                  const jumpingCellRow = model.rows[jumpingR];
                  const jumpingCell = jumpingCellRow && jumpingCellRow[jumpingC];
                  const jumpingCellPiece = jumpingCell && jumpingCell.piece;
                  return jumpingCellPiece && jumpingCellPiece.team === opposingTeam;
                }

                const availableMove = isAvailable(1) && !model.justJumped;
                const availableJump = isAvailable(2) && isValidJump() && isJumpAvailable;

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