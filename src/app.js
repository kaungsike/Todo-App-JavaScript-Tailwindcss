// selectors

const app = document.querySelector("#app");
const textInput = document.querySelector("#textInput");
const addBtn = document.querySelector("#addBtn");
const doneCount = document.querySelector("#doneCount");
const totalCount = document.querySelector("#totalCount");
const listGroup = document.querySelector("#listGroup");

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
  const list = document.createElement("div");
  list.className = "list border group  border-teal-400 w-full h-[65px] flex justify-between items-center px-3 text-teal-800 overflow-hidden duration-200 mb-2 hover:scale-105";
  list.innerHTML = `<aside class="flex items-center h-full gap-2">
                        <input type="checkbox" name="check-box"
                            id="check-box"
                            class="list-check-box w-4 h-4 accent-teal-200 outline-none border border-teal-400">
                        <label class="list-text" for="check-box">${input}</label>
                    </aside>
                    <aside
                            class="h-full flex items-center gap-2 translate-x-[115%] group-hover:translate-x-[5%] duration-300">
                        <button
                            class="list-del-btn border border-teal-400 w-[50px] h-[50px] flex items-center justify-center active:scale-90">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24" fill="currentColor"
                                class="w-6 h-6 pointer-events-none">
                                <path fill-rule="evenodd"
                                d="M4.25 12a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75Z"
                                clip-rule="evenodd" />
                                </svg>
                        </button>
                         <button
                            class="list-edit-btn border border-teal-400 w-[50px] h-[50px] flex items-center justify-center active:scale-90">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24" fill="currentColor"
                                class="w-6 h-6 pointer-events-none">
                                <path
                                d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
                                <path
                                d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
                                </svg>
                        </button>
                    </aside>`;

  return list;
};

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


// handler

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