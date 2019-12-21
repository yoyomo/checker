//@flow

/*::
export interface PieceType {
  team: 'one' | 'two',
  type: 'circle' | 'square'
}

export interface Cell {
  dark: boolean,
  piece: PieceType | void
}

export interface Player {
  turn: boolean,
  captures: number
}

export interface Model {
  playerOne: Player,
  playerTwo: Player,
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
  playerOne: { turn: true, captures: 0 },
  playerTwo: { turn: false, captures: 0 },
  rows: initRows(),
  selectedPiecePosition: []
}