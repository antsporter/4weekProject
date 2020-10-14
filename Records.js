
function showAllEmp() {

  let records = [ 
    {"ninumber":"ZS502747A", "fullname": "Chris P Bacon", "phone": "07659-831024", "address": "123 Elliot Hill", "department":"IT"},
    {"ninumber":"XS130502B", "fullname": "Miles A Head", "phone": "07666-616680", "address": "321 Haha Road", "department":"Sales"},  
    {"ninumber":"MY034526D", "fullname": "Rick O'Shea", "phone": "07440-003065", "address": "64 Zoo Lane", "department":"HR"},  
    {"ninumber":"AK311470", "fullname": "Robyn Banks", "phone": "07342-472921", "address": "324 Langton Ridgeway", "department":"HR"},  
    {"ninumber":"LY682275B", "fullname": "Lorne Mowers", "phone": "07822-821023", "address": "234 Julian Market", "department":"IT"},  
    {"ninumber":"BK227215B", "fullname": "Frank N Stein", "phone": "07661-522545", "address": "12 Springfield Grange", "department":"Sales"},  
    {"ninumber":"XB363374C", "fullname": "Hedda Hare", "phone": "07563-758264", "address": "54 Blackbird Crescent", "department":"IT"},
    {"ninumber":"MY501327A", "fullname": "Upton O'Goode", "phone": "07401-414740", "address": "2 St Margarets Drive", "department":"IT"},
    {"ninumber":"TT405395B", "fullname": "Marius Quick", "phone": "07870-297789", "address": "98 Earl Path", "department":"IT"},
    {"ninumber":"AZ764036A", "fullname": "Max E Mumm", "phone": "07872-642897", "address": "233 Lady Smith Avenue", "department":"IT"},
    {"ninumber":"ES73841C", "fullname": "Yul B Allwright", "phone": "07750-872412", "address": "45 Fountains Broadway", "department":"Sales"},
    {"ninumber":"WX465470A", "fullname": "Lori Driver", "phone": "07773-782275", "address": "65 Burlington Lodge", "department":"HR"},
    {"ninumber":"AK625470D", "fullname": "Shirley U-Care", "phone": "07569-060117", "address": "97 Holderness Drive", "department":"HR"},
    {"ninumber":"SW098272B", "fullname": "Felix Cited", "phone": "07394-529507", "address": "32 Banningham Court", "department":"Sales"},
    {"ninumber":"OB043941D", "fullname": "Sandy Beech", "phone": "07958-301691", "address": "3 Third Mount", "department":"Sales"}
]

  if (document.getElementById("departments").value=="All") {
  // EXTRACT VALUE FOR HTML HEADER. 
  // ('Book ID', 'Book Name', 'Category' and 'Price')
  let col = [];
  for (let i = 0; i < records.length; i++) {
      for (let key in records[i]) {
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
  for (let i = 0; i < records.length; i++) {

      tr = table.insertRow(-1);

      for (let j = 0; j < col.length; j++) {
          let tabCell = tr.insertCell(-1);
          tabCell.innerHTML = records[i][col[j]];
      }
  }

  // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
  let divContainer = document.getElementById("showData");
  divContainer.innerHTML = "";
  divContainer.appendChild(table);
} 

  if (document.getElementById("departments").value=="IT") {
    let ITemp = records.filter(function(item){
      return item.department == "IT"; 
    });
     
    let col = [];
    for (let i = 0; i < ITemp.length; i++) {
        for (let key in ITemp[i]) {
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
    for (let i = 0; i < ITemp.length; i++) {
  
        tr = table.insertRow(-1);
  
        for (let j = 0; j < col.length; j++) {
            let tabCell = tr.insertCell(-1);
            tabCell.innerHTML = ITemp[i][col[j]];
        }
    }
  
    // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
    let divContainer = document.getElementById("showData");
    divContainer.innerHTML = "";
    divContainer.appendChild(table);
  }
  if (document.getElementById("departments").value=="HR") {
    let ITemp = records.filter(function(item){
      return item.department == "HR"; 
    });
     
    let col = [];
    for (let i = 0; i < ITemp.length; i++) {
        for (let key in ITemp[i]) {
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
    for (let i = 0; i < ITemp.length; i++) {
  
        tr = table.insertRow(-1);
  
        for (let j = 0; j < col.length; j++) {
            let tabCell = tr.insertCell(-1);
            tabCell.innerHTML = ITemp[i][col[j]];
        }
    }
  
    // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
    let divContainer = document.getElementById("showData");
    divContainer.innerHTML = "";
    divContainer.appendChild(table);
  }
  if (document.getElementById("departments").value=="Sales") {
    let ITemp = records.filter(function(item){
      return item.department == "Sales"; 
    });
     
    let col = [];
    for (let i = 0; i < ITemp.length; i++) {
        for (let key in ITemp[i]) {
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
    for (let i = 0; i < ITemp.length; i++) {
  
        tr = table.insertRow(-1);
  
        for (let j = 0; j < col.length; j++) {
            let tabCell = tr.insertCell(-1);
            tabCell.innerHTML = ITemp[i][col[j]];
        }
    }
  
    // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
    let divContainer = document.getElementById("showData");
    divContainer.innerHTML = "";
    divContainer.appendChild(table);
  }
}