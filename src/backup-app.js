// selectors

const app = document.querySelector("#app");
const textInput = document.querySelector("#textInput");
const addBtn = document.querySelector("#addBtn");
const doneCount = document.querySelector("#doneCount");
const totalCount = document.querySelector("#totalCount");
const listGroup = document.querySelector("#listGroup");
const listTemplate = document.querySelector("#listTemplate");

// functions
const updateCount = () => {
    totalCount.innerText = countListTotal();
    doneCount.innerText = countDoneListTotal();
}

const countDoneListTotal = () => {
    return document.querySelectorAll(".list .list-check-box:checked").length;
}

const countListTotal = () => {
    return document.querySelectorAll(".list").length;
}

const createList = (input) => {
  const list = listTemplate.content.cloneNode(true);
  const listText = list.querySelector(".list-text");
  listText.innerText = input;

  return list;
};

// handler

const checkList = (e) => {
    const listText = e.target.nextElementSibling;
    listText.classList.toggle("line-through");
    const list = e.target.closest(".list");
    console.log(list);
    list.classList.toggle("scale-90")
    updateCount();
}

const deleteList = (e) => {
    const list = e.target.closest(".list");
    if(confirm("Are you sure to delete?")){
        list.remove();
        updateCount();
    }
}

const editList = (e) => {
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

const updateList = (e) => {
    const list = e.target.closest(".list");
    const listText = list.querySelector(".list-text")
    const currentValue = e.target.value;

    listText.innerText = currentValue;

    listText.classList.toggle("hidden");

    e.target.remove();
} 

const listHandler = (e) => {
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



const addList = () => {
    listGroup.prepend(createList(textInput.value));
    textInput.value = null
    updateCount();
}

// listener

addBtn.addEventListener("click" , addList);

textInput.addEventListener("keyup" , (e) => { e.key === "Enter" && addList() });


listGroup.addEventListener("click" , listHandler)