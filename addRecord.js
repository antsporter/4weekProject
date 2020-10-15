
function addRecord() {
    document.getElementById("addNI").style.visibility="visible";
    document.getElementById("addName").style.visibility="visible";
    document.getElementById("addPhone").style.visibility="visible";
    document.getElementById("addAdd").style.visibility="visible";
    document.getElementById("addDep").style.visibility="visible";
    document.getElementById("addRecord").style.visibility="visible";
  }
  
  
  function confirmAdd() {
    records.push(
        {"NI Number" : document.getElementById("addNI").value,
        "Full Name" : document.getElementById("addName").value,
        "Phone Number" : document.getElementById("addPhone").value,
        "Address" : document.getElementById("addAdd").value,
        "Department" : document.getElementById("addDep").value}
        );
    
    makeTable(records);
    document.getElementById("addNI").value="";
    document.getElementById("addName").value="";
    document.getElementById("addPhone").value="";
    document.getElementById("addAdd").value="";
    document.getElementById("addDep").value="";

  }