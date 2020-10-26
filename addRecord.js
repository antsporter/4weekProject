
function addRecord() {
    document.getElementById("addNI").style.visibility="visible";
    document.getElementById("addName").style.visibility="visible";
    document.getElementById("addPhone").style.visibility="visible";
    document.getElementById("addAdd").style.visibility="visible";
    document.getElementById("addDep").style.visibility="visible";
    document.getElementById("confAdd").style.visibility="visible";

    confAdd = document.createElement("input");
    confAdd.type="button";
    confAdd.value = "Confirm New Employee";
    confAdd.onclick=()=> confirmAdd();
    let newButton = document.getElementById("confAdd");
    newButton.innerHTML = "";
    newButton.appendChild(confAdd);
  }
  
  function confirmAdd() {
    let popUp = confirm("Click OK to add " + document.getElementById("addName").value);
    if (popUp == true) {
      records.push(
        {"NI Number" : document.getElementById("addNI").value,
        "Full Name" : document.getElementById("addName").value,
        "Phone Number" : document.getElementById("addPhone").value,
        "Address" : document.getElementById("addAdd").value,
        "Department" : document.getElementById("addDep").value}
        );
    }
        
    makeTable(records);
    
    document.getElementById("addNI").value="";
    document.getElementById("addName").value="";
    document.getElementById("addPhone").value="";
    document.getElementById("addAdd").value="";
    document.getElementById("addDep").value="";

    document.getElementById("addNI").style.visibility="hidden";
    document.getElementById("addName").style.visibility="hidden";
    document.getElementById("addPhone").style.visibility="hidden";
    document.getElementById("addAdd").style.visibility="hidden";
    document.getElementById("addDep").style.visibility="hidden";
    document.getElementById("confAdd").style.visibility="hidden";

  }