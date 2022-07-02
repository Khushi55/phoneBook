function OnFormSubmit() {
     if (validate()) {
      AddRow();
        
    }
}
var list1 = [];
var list2 = [];
var list3 = [];
var x = 0;
function AddRow() {
    
    var AddRown = document.getElementById("show");
    var newRow = AddRown.insertRow(AddRown.length);

    list1[x] = document.getElementById("fsname").value;
    list2[x] = document.getElementById("ltname").value;
    list3[x] = document.getElementById("phone").value;

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);

    cell1.innerHTML = list1[x];
    cell2.innerHTML = list2[x];
    cell3.innerHTML = list3[x];
    cell4.innerHTML = `<button onclick="onDelete(this)">Delete</button>`;

    x++;
    }
function onDelete(td) {
     
        row = td.parentElement.parentElement;
        document.getElementById("show").deleteRow(row.rowIndex);

  
}
function clearError(){
    errors=document.getElementsByClassName("formerror");
    for(let item of errors){
        item.innerHTML="";
    }
}
function seterror(id, error){
    element =document.getElementById(id);
    element.getElementsByClassName("formerror")[0].innerHTML = error;
}
function validate(){

        var returnVal = true;
        clearError();
    
        var fsname=document.getElementById("fsname").value;
        if(fsname.length==0){
            seterror("fname"," Please enter your name");
            returnVal=false;
        }
        var ltname=document.getElementById("ltname").value;
        if(ltname.length==0){
            seterror("lname"," Please enter your name");
            returnVal=false;
        }

         var phone=document.getElementById("phone").value;
        if(phone.length<10){
            seterror("fphone","Please enter your 10 digit phone number");
            returnVal=false;
        }

       if(isNaN(phone)){
            seterror("fphone","Please enter numbers only");
            returnVal=false;
        }
        return returnVal;
        
}
