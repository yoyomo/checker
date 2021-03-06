//@flow
/*::
import type {Action} from '../update/actions';
import type {Effect} from './effects';
*/

import {getCookie, setCookie} from './utils/cookies';
import {makeRequest} from './utils/ajax';
import {reset} from '../update/actions';

export const subscriptions /*: (Action => void) => Effect => void */
  = dispatch => {

    const serverUrl = process.env.APP_URL || 'http://localhost:3000';
    const sessionsUrl = serverUrl + '/sessions'

    let sessionId = getCookie("session_id");
    if (sessionId) {
      makeRequest('GET', sessionsUrl + '/' + sessionId, {}, xhr => {
        const newModel = JSON.parse(xhr.response)[0].model;
        dispatch(reset(newModel));
      });
    }

    return effect => {
      switch (effect.type) {
        case "save-to-server":
          let method = 'POST';
          let url = sessionsUrl;
          if (sessionId) {
            method = 'PUT';
            url += '/' + sessionId;
          }

          makeRequest(method, url, { model: effect.model }, xhr => {
            if (!sessionId) {
              sessionId = JSON.parse(xhr.response).id
              setCookie("session_id", sessionId);
            }
          })

          break;
      }
    }
  }