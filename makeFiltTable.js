
function makeFiltTable(newRecords) {

    let col = [];
    for (let i = 0; i < newRecords.length; i++) {
        for (let key in newRecords[i]) {
            if (col.indexOf(key) === -1) {
                col.push(key);
            }
        }
    }

    table = document.createElement("table");
    table.id = "myTable";

    let tr = table.insertRow(-1);  
                      
    for (let i = 0; i < col.length; i++) {
        let th = document.createElement("th");      
        th.innerHTML = col[i];
        tr.appendChild(th);
    }

    for (let k = 0; k < newRecords.length; k++) {
        tr = table.insertRow(-1);
        for (let j = 0; j < col.length; j++) {
            let tabCell = tr.insertCell(-1);
            tabCell.innerHTML = newRecords[k][col[j]];    
        }
    }

    let divContainer = document.getElementById("showData");
    divContainer.innerHTML = "";
    divContainer.appendChild(table);

  }

