var table=document.createElement('table');
table.setAttribute('class','table');

var thead=document.createElement('thead');
thead.setAttribute('class','thead');

var tr=document.createElement('tr');

var th1=createthtd('th','FirstName');
var th2=createthtd('th','LastName');
var th3=createthtd('th','Addressline1');
var th4=createthtd('th','Addressline2');
var th5=createthtd('th','Pincode');
var th6=createthtd('th','Gender');
var th7=createthtd('th','Food');
var th8=createthtd('th','State');
var th9=createthtd('th','Country');

tr.append(th1,th2,th3,th4,th5,th6,th7,th8,th9);
thead.append(tr);

var tbody=document.createElement('tbody');
tbody.setAttribute('class','tbody');

var tr=document.createElement('tr');
var td1=createthtd('td','FirstName');
var td2=createthtd('td','LastName');
var td3=createthtd('td','Addressline1');
var td4=createthtd('td','Addressline2');
var td5=createthtd('td','Pincode');
var td6=createthtd('td','Gender');
var td7=createthtd('td','Food');
var td8=createthtd('td','State');
var td9=createthtd('td','Country');

tr.append(td1,td2,td3,td4,td5,td6,td7,td8,td9)
tbody.append(tr);
table.append(thead,tbody);
document.body.append(table);
function createthtd(elementname,value){
    var element=document.createElement(elementname,name);
    element.innerHTML=value;
    return element;

}





