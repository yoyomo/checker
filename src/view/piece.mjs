//@flow
/*::
import {View} from 'muvjs/muv-dom';
import {PieceType} from '../model/model';
*/
import { div } from "muvjs/muv-dom";

/*::
interface PieceProps {
  piece: PieceType | void,
  selected: boolean,
  onSelect: () => void
}
*/

export const Piece /*: PieceProps => () => View */
  = props => {
    const piece = props.piece;
    if(!piece) return () => null;
    let shapeStyle = "";
    if (piece.type === "circle") {
      shapeStyle = "border-radius: 100%; width:75%; height:75%;"
    } else if (piece.type === "square") {
      shapeStyle = "width:50%; height:50%;";
    }
    return () =>
      div({ style: 'position: relative; width: 100%; height: 100%;',
            onclick: props.onSelect })(
        div({
          style: `${shapeStyle}
                  ${props.selected ? 'border: red 3px solid;' : 'border: gold 2px solid;'}
                    top: 50%;
                    left: 50%;
                    -ms-transform: translate(-50%, -50%);
                    transform: translate(-50%, -50%);
                    position: absolute;
                    background-color: ${piece.team === 'one' ? "black" : "white"};`
        })()
      )
  }
