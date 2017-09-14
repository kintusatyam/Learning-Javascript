var value= document.getElementById("pid").innerHTML;
//document.write(value);
document.getElementById("hid").innerHTML = value;

function focusr(){
    document.getElementById("txt1").style.color="#FFAFCC";
    //fovalue.style = "border: dotted 6px red";
    document.getElementById("txt2").style.color="blue";
}
function blurr(){
  document.getElementById("txt1").style.color="green";
    
    document.getElementById("txt2").style.color="#BBFFDD";
}
function Change(){
    var selvalue = document.getElementById("sel").value;
    document.write(selvalue);
}
function clickonbutton(){
    document.write("welcome to pegasys");
}
