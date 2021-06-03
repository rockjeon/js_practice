const dataList = [{
        id: 2,
        name: "곰"
    },
    {
        id: 10,
        name: "사자"
    },
    {
        id: 4,
        name: "토끼"
    },
    {
        id: 29,
        name: "사람"
    },
    {
        id: 3,
        name: "사랑"
    }
];

function updateList() {
    let listHtml = "";

    for(const data of dataList) {
        listHtml += `<li>${data.id}: ${data.name}</li>`;
    }
    document.querySelector(".user_list").innerHTML = listHtml;
}

function sortByAsscending() {
    dataList.sort((a, b) => a.id - b.id);
    updateList();
}

function sortByDescending() {
    dataList.sort((a, b) => b.id - a.id);
    updateList();
}

document.querySelector(".ascending").addEventListener("click", () => {
    sortByAsscending();
});
document.querySelector(".descending").addEventListener("click", () => {
    sortByDescending();
});

sortByAsscending();


