
jQuery(document).ready(function($) {
	tab = $('.tabs h3 a');

	tab.on('click', function(event) {
		event.preventDefault();
		tab.removeClass('active');
		$(this).addClass('active');

		tab_content = $(this).attr('href');
		$('div[id$="tab-content"]').removeClass('active');
		$(tab_content).addClass('active');
	});
});

function clickonsubmit(){
    
      // DispWin = window.open('','NewWin', 'toolbar=no,status=no,width=300,height=200')
        var a=0;
        var flag=false;
        var nam = document.getElementById("user_name").value;
        if(nam=='')
        {
            alert('please enter name ');
            a++;
         }
        /*var add = document.getElementById("t2").value;
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
		 */

        var email = document.getElementById("user_email").value;
        var atposition=email.indexOf("@");  
        var dotposition=email.lastIndexOf(".");  
        if (atposition<1 || dotposition<atposition+2 || dotposition+2>=email.length)
        {  
          alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);  
          a++;  
          }  
        var letters = /^[0-9a-zA-Z]+$/;
        var pwd = document.getElementById("user_pass").value.match(letters);
        if(pwd.length!=1)
        {
            alert("Invalid password ");
            a++;
         }
        if(a>0){
           return false;
        }
        else{
           message = "<ul><li><b>NAME: </b>" + nam;
                  message += "<li><b>Email: </b>" + email;
                  message += "<li><b>password: </b>" + pwd; + "</ul>";
        
         document.write(message); 
           return true;
        }      

}


function clickonlogin(){


}
