//@flow

/*::
export interface Piece {
  team: 'one' | 'two'
}

export interface Cell {
  colored: boolean,
  piece: Piece | void
}

export interface Player {
  turn: boolean
}

export interface Model {
  playerOne: Player,
  playerTwo: Player,
  rows: Cell[][]
} 
*/

export const initialModel /*: Model */ = {
  playerOne: {turn: true},
  playerTwo: {turn: false},
  rows: function(){
    const n = 8;
    let rows = [];
  
    let colored = false;
    for (let c = 0; c < n; c++) {
  
      let row = [];
      for (let r = 0; r < n; r++) {
        let piece = undefined;

        if(c < 3 && colored){
          piece = {team: 'two'};
        } else if(c >= 5 && !colored){
          piece = {team: 'one'};
        }

        const cell = {colored,piece};
        row.push(cell);
        colored = !colored;
      }
      rows.push(row)
      colored = !colored;
    }

    return rows;
  }()
}