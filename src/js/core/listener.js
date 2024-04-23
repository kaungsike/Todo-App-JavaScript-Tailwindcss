// listener

import { addList, listHandler } from "./handler.js";

const listeners = () => {
    addBtn.addEventListener("click" , addList);

    textInput.addEventListener("keyup" , (e) => { e.key === "Enter" && addList() });

    listGroup.addEventListener("click" , listHandler);
}

export default listeners;