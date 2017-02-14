$(document).ready(function(){
   var email, name, password;
   $("#register").click(function(){
     email=$("#email").val();
     name=$("#name").val();
     password=$("#password").val();
     $.post("http://localhost:3000/register",{name: name, email: email, password: password}, function(data){
       if(data==='done')
         {
           console.log("sent");
         }
     });
   });

   $("#login").click(function(){
     email=$("#emailL").val();
     password=$("#passwordL").val();
     $.post("http://localhost:3000/login",{email: email, password: password}, function(data){
       if(data==='done')
         {
           console.log("sent");
         }
     });
   });
 });
