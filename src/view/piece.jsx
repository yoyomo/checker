//@flow
/*::
import {View} from 'muvjs/muv-dom';
import type {PieceType} from '../model/model';
*/

/*::
interface PieceProps {
  piece: PieceType | void,
  selected: boolean,
  onSelect: () => void,
  key: string
}
*/

import React from 'react';

export const Piece /*: PieceProps => () => View */
  = props => {
    const piece = props.piece;
    if (!piece) return () => null;
    let shapeStyle = "";
    if (piece.type === "circle") {
      shapeStyle = { borderRadius: '100%', width: '75%', height: '75%' };
    } else if (piece.type === "square") {
      shapeStyle = { width: '50%', height: '50%'};
    }
    return (
      <div key={props.key} style={{ position: 'relative', width: '100%', height: '100%' }}
        onClick={props.onSelect}>
        <div
          style={{
            ...shapeStyle,
            border: props.selected ? 'red 3px solid' : 'gold 2px solid',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            position: 'absolute',
            backgroundColor: piece.team === 'one' ? "black" : "white"
          }}>

        </div>

      </div>
    )
  }
