
// ex1.js
//Function to accept input from users for ellipsoid calculation
//The event handler function for ellipsoid
   
function calcVolume(){

   var first_axis = document.getElementById("first").value;
   var second_axis= document.getElementById("second").value;
   var third_axis = document.getElementById("third").value;

   document.getElementById("volume").value= Math.round((4/3) * 3.14 * first_axis * second_axis * third_axis);
   
}


function wrong() { 

   var first_axis = document.getElementById("first").value;
   var second_axis= document.getElementById("second").value;
   var third_axis = document.getElementById("third").value;

  if (first_axis < 1 || first_axis > 100 ) {
    alert("Please enter a number between 1 and 100 in first slot");
    return false;
  }
  if (second_axis < 1 || second_axis > 100 ) {
    alert("Please enter a number between 1 and 100 in second slot");
    return false;
  }
  if(third_axis < 1 || third_axis > 100 ) {
     alert("Please enter a number between 1 and 100 in third slot");
     return false;

  } else
   return calcVolume();
   return true;
}



