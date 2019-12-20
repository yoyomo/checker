import { div } from "muvjs/muv-dom";

export const CheckerBoard = dispatch => {
    const n = 8;
    let rows = [];

    let colored = false;
    for (let c = 0; c < n; c++) {

        let row = [];
        for (let i = 0; i < n; i++) {
            row.push(colored);
            colored = !colored;
        }
        rows.push(row)
        colored = !colored;
    }

    return model =>
        div({style: "width: 100%; height 100%; display: flex; flex-direction: column"})(
            rows.map(row =>
                div({style: `display: flex;
                flex-direction: row`})(
                    row.map(cel => {
                        return div({
                            style: `width: 75px; height: 75px;
                     background-color: ${cel ? "black" : "white"};`
                        })()
                    })
                )
            ))
}