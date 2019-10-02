import {createHashHistory} from "history";

const History = createHashHistory ();

export const Navigate = (url) => {
    History.push(url)
}

export default History;