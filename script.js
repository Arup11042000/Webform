var row = 1;
var entry = document.getElementById("entry");
entry.addEventListener("click",displayDetails);
function displayDetails(){
    var name = document.getElementById("name").value;
    var dept = document.getElementById("s1").value;
    var email = document.getElementById("email").value;

    if(!name || !dept || !email){
        alert("Please fill all the boxes");
        return;
    }

    var display= document.getElementById("display");

    var newRow =display.insertRow(row);

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);

    cell1.innerHTML = name;
    cell2.innerHTML = dept;
    cell3.innerHTML = email;

    row++;

}