
function filterByDpt() {
    if (document.getElementById("departments").value=="All") {
        makeTable(records);
    }
    if (document.getElementById("departments").value=="IT") {
        let filtRecords = records.filter(function(item){
        return item.Department == "IT";   
        });
        makeTable(filtRecords);
        deleteButton.style.visibility="hidden";
        }
        if (document.getElementById("departments").value=="HR") {
            let filtRecords = records.filter(function(item){
              return item.Department == "HR"; 
            });
            makeTable(filtRecords);
            deleteButton.style.visibility="hidden";
            }
            if (document.getElementById("departments").value=="Sales") {
                let filtRecords = records.filter(function(item){
                  return item.Department == "Sales"; 
                });
                makeTable(filtRecords);
                deleteButton.style.visibility="hidden";
            }
}