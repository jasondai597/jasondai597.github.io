function validate() 
{
     if( document.getElementById('firstname').value.length == 0 ) {
          alert( "Please print your first name!" );
     }

     if( document.getElementById('lastname').value.length == 0 ) {
          alert( "Please print your last name!" );
     }

     if( document.getElementById("emailaddress").value.length == 0 ) {
          alert( "Please enter your Email!" );
}


function foo()
{
     var myField = document.getElementById('MyField');
     alert("value = " + myField);
}
}
