//@flow

/*::
export interface Reset {
  type: 'reset'
}
*/

export const reset /*: () => Reset */
= () => {
  return {
    type: 'reset'
  }
}

/*::
export type Action = Reset
*/