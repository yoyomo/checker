//@flow
/*::
import type {Action} from '../update/actions';
import type {Effect} from './effects';
*/

export const subscriptions /*: (Action => void) => Effect => void */
  = dispatch => {

    return effect => {
      switch (effect.type) {
        case "save-to-server":
          // TODO Get cookie
          // TODO PUT if cookie
          // TODO POST if not cookie
          let xhr = new XMLHttpRequest();
          xhr.open('POST', 'http://localhost:3000/sessions');
          xhr.setRequestHeader('Content-Type', 'application/json');
          xhr.onload = result => {
            if(xhr.response){
              const id = JSON.parse(xhr.response).id
              // Set Cookie
            }
          };
          xhr.send(JSON.stringify({ model: effect.model }))

          break;
      }
    }
  }