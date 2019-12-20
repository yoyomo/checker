//@flow
import {reset} from '../update/actions'
/*::
import type {Action} from '../update/actions'
*/

export const ignition /*: ((Action) => void) => void*/
 = dispatch => {
  dispatch(reset())
}