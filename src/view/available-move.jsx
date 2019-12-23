//@flow
/*::
import {View} from 'muvjs/muv-dom';
*/
import React from 'react';

/*::
interface AvailableMoveProps {
  onSelect: () => void,
  key: string
}
*/
export const AvailableMove /*: AvailableMoveProps => () => View */
  = props => {
    return (
      <div
        key={props.key}
        style={{ position: 'relative', width: '100%', height: '100%' }}
        onClick={props.onSelect}>
        <div
          style={{
            borderRadius: '100%', width: '75%', height: '75%',
            border: 'gold 2px dotted',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            position: 'absolute',
            backgroundColor: 'transparent'
          }}>

        </div>
      </div>
    )
  }