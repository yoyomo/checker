//@flow
/*::
import {View} from 'muvjs/muv-dom';
*/
import { div } from "muvjs/muv-dom";

const Piece /*: (props: {type: "circle" | "square", team: boolean}) => () => View */
  = props => {
    let shapeStyle = "";
    if (props.type === "circle") {
      shapeStyle = "border-radius: 100%; width:75%; height:75%;"
    } else if (props.type === "square") {
      shapeStyle = "width:50%; height:50%;";
    }
    return () =>
      div({ style: 'position: relative; width: 100%; height: 100%;' })(
        div({
          style: `${shapeStyle}
                    top: 50%;
                    left: 50%;
                    -ms-transform: translate(-50%, -50%);
                    transform: translate(-50%, -50%);
                    position: absolute;
                    border: gold 2px solid;
                    background-color: ${props.team ? "black" : "white"};`
        })()
      )
  }

export const CirclePiece /*: ({|team: boolean|}) => () => View */
= props => () => Piece({type: 'circle',...props})()

export const SquarePiece /*: ({|team: boolean|}) => () => View */
  = props => () => Piece({type: 'square',...props})()
