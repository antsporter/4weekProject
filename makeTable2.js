
function makeTable2(filterbydepartment) {

    let col = [];
    for (let i = 0; i < filterbydepartment.length; i++) {
        for (let key in filterbydepartment[i]) {
            if (col.indexOf(key)=== -1) {
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

    for (let i = 0; i < filterbydepartment.length; i++) {
        tr = table.insertRow(-1);
        for (let j = 0; j < col.length; j++) {
            let tabCell = tr.insertCell(-1);
            tabCell.innerHTML = filterbydepartment[i][col[j]];    
        }
    }

    let divContainer = document.getElementById("showData");
    divContainer.innerHTML = "";
    divContainer.appendChild(table);

  }

