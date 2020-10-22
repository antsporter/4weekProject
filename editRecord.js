
function editRecord(id) {
        document.getElementById("addNI").style.visibility="visible";
        document.getElementById("addName").style.visibility="visible";
        document.getElementById("addPhone").style.visibility="visible";
        document.getElementById("addAdd").style.visibility="visible";
        document.getElementById("addDep").style.visibility="visible";
        document.getElementById("saveChanges").style.visibility="visible";


        document.getElementById("addNI").value = records[id]["NI Number"];
        document.getElementById("addName").value = records[id]["Full Name"];
        document.getElementById("addPhone").value = records[id]["Phone Number"];
        document.getElementById("addAdd").value = records[id].Address;
        document.getElementById("addDep").value = records[id].Department;
}

function confirmEdit(id) {
    records.push(
        {"NI Number" : document.getElementById("addNI").value,
        "Full Name" : document.getElementById("addName").value,
        "Phone Number" : document.getElementById("addPhone").value,
        "Address" : document.getElementById("addAdd").value,
        "Department" : document.getElementById("addDep").value}
        );

        records.splice(id, 1);
        makeTable(records);

        document.getElementById("addNI").style.visibility="hidden";
        document.getElementById("addName").style.visibility="hidden";
        document.getElementById("addPhone").style.visibility="hidden";
        document.getElementById("addAdd").style.visibility="hidden";
        document.getElementById("addDep").style.visibility="hidden";
        document.getElementById("saveChanges").style.visibility="hidden";
        document.getElementById("addNI").value="";
        document.getElementById("addName").value="";
        document.getElementById("addPhone").value="";
        document.getElementById("addAdd").value="";
        document.getElementById("addDep").value="";
    }