import { initialModel } from "../model/model.mjs";

//@flow
/*::
import type {Model} from '../model/model'
import type {Action} from './actions'
*/
export const update /*: Model => Action => {model: Model} */
= model => action => {
  switch(action.type){
    case "reset":
      model = initialModel;
    break;
  }

  return {model}
}