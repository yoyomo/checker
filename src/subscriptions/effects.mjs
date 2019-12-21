//@flow

/*::
import type {Model} from '../model/model'

type SaveToServer = {
  type: 'save-to-server',
  model: Model
}

export type Effect = SaveToServer
*/

export const saveToServer /*: Model => SaveToServer */
= model => {
  return {
    type: 'save-to-server',
    model
  }
}