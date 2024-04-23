// handler

import { createList, updateCount } from "./functions.js";

export const checkList = (e) => {
    const listText = e.target.nextElementSibling;
    listText.classList.toggle("line-through");
    const list = e.target.closest(".list");
    console.log(list);
    list.classList.toggle("scale-90")
    updateCount();
}

export const deleteList = (e) => {
    const list = e.target.closest(".list");
    if(confirm("Are you sure to delete?")){
        list.remove();
        updateCount();
    }
}

export const editList = (e) => {
    const list = e.target.closest(".list");
    const listText = list.querySelector(".list-text")

    const input = document.createElement("input");
    input.className = "border border--teal-400 w-[150px] h-[40px] outline-none px-2";

    listText.after(input);
    input.value = listText.innerText;
    input.focus();
    
    listText.classList.toggle("hidden");

    input.addEventListener("blur" , updateList)
}

export const updateList = (e) => {
    const list = e.target.closest(".list");
    const listText = list.querySelector(".list-text")
    const currentValue = e.target.value;

    listText.innerText = currentValue;

    listText.classList.toggle("hidden");

    e.target.remove();
} 


// handler

export const listHandler = (e) => {
    if(e.target.classList.contains("list-del-btn")){
        deleteList(e)
    }
    else if(e.target.classList.contains("list-edit-btn")){
        editList(e);
    }
    else if(e.target.classList.contains("list-check-box")){
        checkList(e);
    }
}



export const addList = () => {
    listGroup.prepend(createList(textInput.value));
    textInput.value = null
    updateCount();
}