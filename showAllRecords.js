
function showAllRecords() {

    let records = [ 
      {"NI Number":"ZS502747A", "Full Name": "Chris P Bacon", "Phone Number": "07659-831024", "Address": "123 Elliot Hill", "Department":"IT"},
      {"NI Number":"XS130502B", "Full Name": "Miles A Head", "Phone Number": "07666-616680", "Address": "321 Haha Road", "Department":"Sales"},  
      {"NI Number":"MY034526D", "Full Name": "Rick O'Shea", "Phone Number": "07440-003065", "Address": "64 Zoo Lane", "Department":"HR"},  
      {"NI Number":"AK311470", "Full Name": "Robyn Banks", "Phone Number": "07342-472921", "Address": "324 Langton Ridgeway", "Department":"HR"},  
      {"NI Number":"LY682275B", "Full Name": "Lorne Mowers", "Phone Number": "07822-821023", "Address": "234 Julian Market", "Department":"IT"},  
      {"NI Number":"BK227215B", "Full Name": "Frank N Stein", "Phone Number": "07661-522545", "Address": "12 Springfield Grange", "Department":"Sales"},  
      {"NI Number":"XB363374C", "Full Name": "Hedda Hare", "Phone Number": "07563-758264", "Address": "54 Blackbird Crescent", "Department":"IT"},
      {"NI Number":"MY501327A", "Full Name": "Upton O'Goode", "Phone Number": "07401-414740", "Address": "2 St Margarets Drive", "Department":"IT"},
      {"NI Number":"TT405395B", "Full Name": "Marius Quick", "Phone Number": "07870-297789", "Address": "98 Earl Path", "Department":"IT"},
      {"NI Number":"AZ764036A", "Full Name": "Max E Mumm", "Phone Number": "07872-642897", "Address": "233 Lady Smith Avenue", "Department":"IT"},
      {"NI Number":"ES73841C", "Full Name": "Yul B Allwright", "Phone Number": "07750-872412", "Address": "45 Fountains Broadway", "Department":"Sales"},
      {"NI Number":"WX465470A", "Full Name": "Lori Driver", "Phone Number": "07773-782275", "Address": "65 Burlington Lodge", "Department":"HR"},
      {"NI Number":"AK625470D", "Full Name": "Shirley U-Care", "Phone Number": "07569-060117", "Address": "97 Holderness Drive", "Department":"HR"},
      {"NI Number":"SW098272B", "Full Name": "Felix Cited", "Phone Number": "07394-529507", "Address": "32 Banningham Court", "Department":"Sales"},
      {"NI Number":"OB043941D", "Full Name": "Sandy Beech", "Phone Number": "07958-301691", "Address": "3 Third Mount", "Department":"Sales"}
  ]
    // EXTRACT VALUE FOR HTML HEADER. 
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
