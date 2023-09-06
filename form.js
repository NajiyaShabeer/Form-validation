var email = document.getElementById("email");
var password = document.getElementById("pwd");
var phonenumber = document.getElementById("phonenumber");

var error = document.getElementById("error");
var error1 = document.getElementById("error1");
var error2 = document.getElementById("error2");

// if(email.value==""||pwd.value=="")
    //{
    //    alert("fields cannot be empty");
    //    return false;
   // }
   // else {
        //alert("validation is proper");
    //    return true;
   // }
   //if(email.value.trim()=="")
   //{
     //alert("Email cannot be empty");
     //return false;
  // }
  //else if(pwd.value.trim()=="")
 // {
   
  //  alert("password field cannot be blank");
  //  return false;
  // }
 // else if(pwd.value.length<=8)
   //{
  //  alert("password cannot be less than 8 characters");
  //  pwd.style.border="2px solid red";
   // return false;
 //  }
  // else
  // {
   //  return true;
  // }
 // }
   function validate()
   {

   var regexp=/^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
   if(regexp.test(email.value))
   {
    error.innerHTML = " Email is valid";
    error.style.color = "green";
    return true;
   } 
   else
   {
    error.innerHTML = "Email is invalid";
    error.style.color="red";
    return false;

   }
 }
 
 var regexp1=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
 var regexp3=/^((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))$/
  function pwdvalidate()
  {
  
  if(regexp1.test(pwd.value))
  {
    error1.innerHTML="Password is strong";
    error1.style.color="green";
    return true;
  }
  else if(regexp3.test(pwd.value)){
    error1.innerHTML="Password is medium";
    error1.style.color="orange";
    return false;

  }
  else
  {
    error1.innerHTML="Password is weak";
    error1.style.color="red";
    return false;
  }
  }
  
  function phonevalidate()
 {
  var regexp2=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
 
  
  if(regexp2.test(phonenumber.value))
  {
    error2.innerHTML="phone number is valid";
    error2.style.color="green";
    return true;
  }
  else 
  {
   error2.innerHTML="phone number is invalid";
    error2.style.color="red";
   return false;
  }
}

  
  