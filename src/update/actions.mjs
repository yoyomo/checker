//@flow

/*::
import type {Model} from '../model/model';

export interface Reset {
  type: 'reset',
  model: Model | void
}
*/

export const reset /*: (model: Model | void) => Reset */
= model => {
  return {
    type: 'reset',
    model
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
export interface SelectMove {
  type: 'select-move',
  r: number,
  c: number
}
*/

export const selectMove /*: (number, number, boolean | void) => SelectMove */
= (r,c, jump) => {
  return {
    type: 'select-move',
    r,
    c,
    jump
  }
}

/*::
export type Action = Reset
*/