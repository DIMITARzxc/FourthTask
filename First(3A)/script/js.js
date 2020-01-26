"use strict"
    document.getElementById("buttonRun").addEventListener("click", function() {
    document.getElementById('input').lastChild.remove();
    let rowsNumber = document.getElementById('rowsInput').value;
    let columnsNumber = document.getElementById('columnsInput').value;
    let table = document.createElement('table');
    for (let i = 1; i <= rowsNumber; i++) {
        let tr = document.createElement('tr');

        for (let j = 1; j <= columnsNumber; j++) {
            let td = document.createElement('td');
            td.classList.add("colored");
            let text = document.createTextNode(i + ' ' + j);
            td.appendChild(text);
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    document.getElementById('input').appendChild(table);
    let cells = table.getElementsByTagName('td');
    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener('click', function() {
            if (this.style.backgroundColor == "") {
                this.style.backgroundColor = "yellow";
            } else {
                this.style.backgroundColor = "";
            }
        });
    }
});