document.addEventListener('DOMContentLoaded', initilizegame);
function initilizegame(){
 
    var cmdCalculate = document.getElementById("cmdCalculate");
    cmdCalculate.addEventListener("click", clickListener);
    var cmdClear = document.getElementById("cmdClear");
    cmdClear.addEventListener("click", clickListener2);
   

function clickListener(){
    var body = document.getElementsByClassName("divResults")[0];
    body.innerHTML= "";
    var number=document.getElementById("txtNum");
    var cols=document.getElementById("txtCols");
if(number.value==""){
number.value=20;
}
if(cols.value==""){
    cols.value=2;
}
var primesArr=primeFactorsTo(number.value);
generate_table(number.value, cols.value,primesArr);


}
function clickListener2(){
    var body = document.getElementsByClassName("divResults")[0];
    body.innerHTML= "";
}
function primeFactorsTo(max)
{
    var store  = [], i, j, primes = [];
    for (i = 2; i <= max; ++i) 
    {
        if (!store [i]) 
          {
            primes.push(i);
            for (j = i << 1; j <= max; j += i) 
            {
                store[j] = true;
            }
        }
    }
    return primes;
}

function generate_table(number, cols, primesArr) {
    // get the reference for the body
    var body = document.getElementsByClassName("divResults")[0];
  
    // creates a <table> element and a <tbody> element
    var tbl = document.createElement("table");
    var tblBody = document.createElement("tbody");
  
    // creating all cells
    let index=2;
    var  indexNotEqual=0; //checks if index equal to number that the user put
    for (var i = 0; i <(number/cols); i++) {
      // creates a table row
      var row = document.createElement("tr");
  
      for (var j = 0; j < cols; j++) {
        // Create a <td> element and a text node, make the text
        // node the contents of the <td>, and put the <td> at
        // the end of the table row
        if (index<=number && indexNotEqual==0){
        var cell = document.createElement("td");
        var cellText = document.createTextNode(index);
        cell.style.background="grey";
        for(var p=0; p<primesArr.length; p++){
            if (index===primesArr[p])
            cell.style.background="yellow";
        }
        
        cell.appendChild(cellText);
        row.appendChild(cell);
        if(index<number){
            index++;
        }
        else {indexNotEqual=1}
      }
    }
  
      // add the row to the end of the table body
      tblBody.appendChild(row);
     
    }
  
    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    // appends <table> into <body>
    body.appendChild(tbl);
    // sets the border attribute of tbl to 2;
    tbl.setAttribute("border", "2");
  }


}