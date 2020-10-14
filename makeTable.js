function makeTable(filterbydepartment) {
    // EXTRACT VALUE FOR HTML HEADER. 
    let col = [];
    for (let i = 0; i < filterbydepartment.length; i++) {
        for (let key in filterbydepartment[i]) {
            if (col.indexOf(key) === -1) {
                col.push(key);
            }
        }
    }
  
    // CREATE DYNAMIC TABLE.
    let table = document.createElement("table");
    // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.
    let tr = table.insertRow(-1);                   // TABLE ROW.
  
    for (let i = 0; i < col.length; i++) {
        let th = document.createElement("th");      // TABLE HEADER.
        th.innerHTML = col[i];
        tr.appendChild(th);
    }
  
    // ADD JSON DATA TO THE TABLE AS ROWS.
    for (let i = 0; i < filterbydepartment.length; i++) {
        tr = table.insertRow(-1);
        for (let j = 0; j < col.length; j++) {
            let tabCell = tr.insertCell(-1);
            tabCell.innerHTML = filterbydepartment[i][col[j]];
        }
    }
  
    // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
    let divContainer = document.getElementById("showData");
    divContainer.innerHTML = "";
    divContainer.appendChild(table);
  }
  
  
  