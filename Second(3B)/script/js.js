"use strict"

function createtable() {
    var row = document.getElementById("row").value;
    var column = document.getElementById("column").value;
    var table = document.getElementsByTagName("table")[0];
    if (table != undefined)
        table.remove();

    let body = document.getElementsByTagName("body");
    let container = document.createElement("div");
    container.id = "container";
    container.addEventListener("click", containerColor);
    body[0].appendChild(container);
    table = document.createElement("table");

    container.appendChild(table);
    for (let i = 0; i < row; i++) {
        let row = document.createElement("tr");
        table.appendChild(row);
        AddRows(column, row);

    }

}
function containerColor(event) {
    let target = event.target;

    if (target.tagName != 'TD')
        return;

        Colorchanger(target);
};
function AddRows(column, row) {

    for (let i = 0; i < column; i++) {
        let column = document.createElement("td");
        row.appendChild(column);

    }
}
function FillContent() {
    let rows = document.getElementsByTagName("tr");
    for (let i = 0; i < rows.length; i++) {
        let columns = rows[i].childNodes;
        for (let j = 0; j < columns.length; j++) {
            columns[j].textContent = "" + (i + 1) + (j + 1);
        }
    }
}
function Colorchanger(target) {

    if (target.style.backgroundColor != "")
        target.style.backgroundColor = "";
    else
        target.style.backgroundColor = "yellow";
}


let button = document.getElementById("run");

button.addEventListener("click", createtable);
button.addEventListener("click", FillContent);