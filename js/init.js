$(document).ready(function(){
   var email, name, password;
   $("#register").click(function(){
     email=$("#email").val();
     name=$("#name").val();
     password=$("#password").val();
     $.post("http://localhost:3000/register",{name: name, email: email, password: password}, function(data){
         if (data.allow) {
             //window.location.href = "http://www.google.com";
         } 
     });
   });

   $("#login").click(function(){
     email=$("#emailL").val();
     password=$("#passwordL").val();
     $.post("http://localhost:3000/login",{email: email, password: password}, function(data){
         if (data.allow) {
             window.location.href = "http://www.google.com";
         } else {
             window.location.href = "http://www.bing.com";
         }
     });
   });
 });
