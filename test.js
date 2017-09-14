confirm("can i confirm ur answer");
 var answer = prompt("Hello kintu");



if (answer == "yes"){
    console.log("Happy to see ur answer");
}
else{
    console.log("hi");
}
alert("Hello world");
document.write("feeling sleepy");
function add(type) {
    //Create an input type dynamically.   
    var element = document.createElement("input");
    //Assign different attributes to the element. 
    element.type = type;
    element.value = type; // Really? You want the default value to be the type string?
    element.name = type; // And the name too?
    element.onclick = function() { // Note this is a function
      alert("blabla");
    };
  
    var foo = document.getElementById("fooBar");
    //Append the element in page (in span).  
    foo.appendChild(element);
  }
  document.getElementById("btnAdd").onclick = function() {
    add("ghost");
  };








/* var Button= document.createElement("Button");
Button.innerHTML("Do something");
var body = document.getElementsByTagName("body")[0];
body.appendChild(Button);
Button.addEventListener("click", function(){
    alert("Did something");
});*/
