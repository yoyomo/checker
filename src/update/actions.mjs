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
export interface SelectPiece {
  type: 'select-piece',
  r: number,
  c: number
}
*/

export const selectPiece /*: (number, number) => SelectPiece */
= (r,c) => {
  return {
    type: 'select-piece',
    r,
    c
  }
}

/*::
export type Action = Reset
*/