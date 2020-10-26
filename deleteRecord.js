
function deleteRecord(id) {
        let popUp = confirm("Click OK to delete " + records[id]["Full Name"]);
        if (popUp == true) {
                records.splice(id, 1);
        }
        makeTable(records);
}
