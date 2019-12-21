//@flow

/*::
export type Teams = 'one' | 'two'

export type PieceType = {
  team: 'one' | 'two',
  type: 'circle' | 'square'
}

export type Cell = {
  dark: boolean,
  piece: PieceType | void
}

export type Player = {
  captures: number
}

export type Model = {
  playerOne: Player,
  playerTwo: Player,
  turn: Teams,
  rows: Cell[][],
  selectedPiecePosition: number[]
} 
*/

const initRows = () => {
  const n = 8;
  let rows = [];

  let dark = false;
  for (let c = 0; c < n; c++) {

    let row = [];
    for (let r = 0; r < n; r++) {
      let piece = undefined;

      if (dark) {
        if (c < 3) {
          piece = { team: 'two', type: 'circle' };
        } else if (c >= 5) {
          piece = { team: 'one', type: 'circle' };
        }
      }

      const cell = { dark, piece };
      row.push(cell);
      dark = !dark;
    }
    rows.push(row)
    dark = !dark;
  }

  return rows;
}

export const initialModel /*: Model */ = {
  playerOne: { captures: 0 },
  playerTwo: { captures: 0 },
  turn: 'one',
  rows: initRows(),
  selectedPiecePosition: []
}