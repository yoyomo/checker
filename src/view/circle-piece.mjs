//@flow
/*::
import {View} from 'muvjs/muv-dom';
*/
import { div } from "muvjs/muv-dom";


export const CirclePiece /*: (props: {team: boolean}) => View */
= props => () => 
div({style: 'position: relative; width: 100%; height: 100%;'})(
div({
    style: `border-radius: 100%; width:75%; height:75%;   
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
     position: absolute;
    border: gold 2px solid;
    background-color: ${props.team ? "black" : "white"};`
})()
)