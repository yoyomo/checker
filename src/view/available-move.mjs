//@flow
/*::
import {View} from 'muvjs/muv-dom';
*/
import { div } from "muvjs/muv-dom";

/*::
interface AvailableMoveProps {
  onSelect: () => void,
  key: string
}
*/
export const AvailableMove /*: AvailableMoveProps => () => View */
 = props => () =>
  div({
    key: props.key,
    style: 'position: relative; width: 100%; height: 100%;',
    onclick: props.onSelect
  })(
    div({
      style: `border-radius: 100%; width:75%; height:75%;
              border: gold 2px dotted;
              top: 50%;
              left: 50%;
              -ms-transform: translate(-50%, -50%);
              transform: translate(-50%, -50%);
              position: absolute;
              background-color: transparent`
    })()
  )