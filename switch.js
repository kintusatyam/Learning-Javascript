var a=100;
var b=100; 
var i=0;

document.write("Switch Statement<br />");
switch(true)
{
    case(a<b) :
      document.write("b grater than a");
      break;
    case(a>b) :
      document.write("a greater then b");
      
      break;
      case (a==b) :
      document.write("a is equal to b");
      break;
      
 }   
document.write("<br /> Break Statement <br />");
while(i<=100){
    if(i==5){
        document.write("value<br />"+i);
        break;
        
    }
    document.write("value<br />"+i);
    i++;
}
document.write("<br />pre increment Statement <br />");
document.write("<br />value of a" + a);
document.write("<br />value of a" + ++a);
document.write("<br />value of a" + a);

document.write("<br /> post increment Statement <br />");
document.write("<br />value of a" + a);
document.write("<br />value of a" + a++);
document.write("<br />value of a" + a);

document.write("<br />pre decrement Statement <br />");
document.write("<br />value of a" + a);
document.write("<br />value of a" + --a);
document.write("<br />value of a" + a);

document.write("<br />post decrement Statement <br />");
document.write("<br />value of a" + a);
document.write("<br />value of a" + a--);
document.write("<br />value of a" + a);





