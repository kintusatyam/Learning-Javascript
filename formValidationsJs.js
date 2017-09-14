  function clickonsubmit(){
    
      // DispWin = window.open('','NewWin', 'toolbar=no,status=no,width=300,height=200')
        var a=0;
        var flag=false;
        var nam = document.getElementById("t1").value;
        if(nam=='')
        {
            alert('please enter name ');
            a++;
         }
        var add = document.getElementById("t2").value;
         if(add=='')
         {
            alert('please enter address');
            a++;
         }
        var num = document.getElementById("t3").value;
        if(isNaN(num))
        {
            alert("enter number");
            a++;

         }

        var email = document.getElementById("t4").value;
        var atposition=email.indexOf("@");  
        var dotposition=email.lastIndexOf(".");  
        if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length)
        {  
          alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);  
          a++;  
          }  
        var letters = /^[0-9a-zA-Z]+$/;
        var pwd = document.getElementById("t5").value.match(letters);
        document.write(pwd);
        if(pwd.length<6 )
        {
            alert("Password must be greater than 6 ");
            a++;
         }
        if(a>0){
           return false;
        }
        else{
           message = "<ul><li><b>NAME: </b>" + nam;
                  message += "<li><b>ADDRESS: </b>" + add;
                  message += "<li><b>PHONE: </b>" + num;
                  message += "<li><b>Email: </b>" + email;
                  message += "<li><b>password: </b>" + pwd; + "</ul>";
        
         document.write(message); 
           return true;
        }      

}


function clickonlogin(){


}
