$(document).ready(function(){
   var email, name, password;
   $("#register").click(function(){
     email=$("#email").val();
     name=$("#name").val();
     password=$("#password").val();
     $.post("http://localhost:3000/register",{name: name, email: email, password: password}, function(data){
         if (data.allow) {
             document.cookie = data.token;
             window.location.href = "home.html";
         }
     });
   });

   $("#login").click(function(){
     email=$("#emailL").val();
     password=$("#passwordL").val();
     $.post("http://localhost:3000/login",{email: email, password: password}, function(data){
         if (data.allow) {
             document.cookie = data.token;
             window.location.href = "home.html";
         } else {
             alert("Login has failed"); //Change to something more appropriate later
         }
     });
   });
 });
