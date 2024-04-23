// functions
export const updateCount = () => {
    totalCount.innerText = countListTotal();
    doneCount.innerText = countDoneListTotal();
}

export const countDoneListTotal = () => {
    return document.querySelectorAll(".list .list-check-box:checked").length;
}

export const countListTotal = () => {
    return document.querySelectorAll(".list").length;
}

export const createList = (input) => {
  const list = listTemplate.content.cloneNode(true);
  const listText = list.querySelector(".list-text");
  listText.innerText = input;

  return list;
};