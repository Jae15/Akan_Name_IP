function calculate(){

  var dd= document.getElementById("dd").value;
  var mm= document.getElementById("mm").value;
  var cc= document.getElementById("cc").value;
  var yy= document.getElementById("yy").value;
  var gender= document.getElementById("Gender").value;
  var maleAkanNames=[" Kwasi", " Kwadwo", " Kwabena", " Kwaku", " Yaw", " Kofi", " Kwame"]
  var femaleAkanNames=[" Akosua", " Adwoa", " Abenaa", " Akua", " Yaa", " Afua", " Ama"]
  
  if(cc >= 19 && cc<= 20){
  
  let yourDayOfWeek = Math.round((((cc/4) -2*cc-1) + ((5*yy/4)) + ((26*(mm+1)/10)) + dd )%7)
  
  console.log(yourDayOfWeek)
  }
  if(yourDayOfWeek === 1){
    if(gender == male)
          console.log("your Akan name is" +maleAkanNames[0])
    }
    else if( gender == female){
    console.log("your Akan name is" + femaleAkanaNames[0])
    }
    else{
      console.log("No Akan Name for you")
    }
  }


//    if(yourDayOfWeek === 2){
//     if(gender == male){
//           console.log("your Akan name is" +maleAkanaNames[1])
//     }
//     else if( gender == female){
//     console.log("your Akan name is" +femaleAkanaNames[1])
//     }
//     else{
//       console.log("your Akan name is")
//     }
//   }
//  else if(yourDayOfWeek === 3){
    
//     if(gender == male){
//           console.log("your Akan name is" +maleAkanaNames[2])
//     }
//     else if( gender == female){
//     console.log("Your Akan name is" +femaleAkanaNames[2])
//     }
//     else{
//       console.log("No Akan Name for you")
//     }
//   }
//   else if(yourDayOfWeek  ===4){
    
//     if(gender == male){
//           console.log("Your Akan name is" +maleAkanaNames[3])
//     }
//     else if( gender == female){
//     console.log("Your Akan name is" +femaleAkanaNames[3])
//     }
//     else{
//       console.log("No Akan Name for you")
//     }
//   }
//   else if(yourDayOfWeek === 5){
    
//     if(gender == male){
//           console.log("Your Akan name is" +maleAkanaNames[4])
//     }
//     else if( gender == female){
//     console.log("Your Akan name is" +femaleAkanaNames[4])
//     }
//     else{
//       console.log("No Akan Name for you")
//     }
//   }
//   else if(yourDayOfWeek  === 6){
   
//     if(gender == male){
//           console.log("Your Akan name is" +maleAkanaNames[5])
//     }
//    else if( gender == female){
//     console.log("Your Akan name is" +femaleAkanaNames[5])
//     }
//     else{
//       console.log("No Akan Name for you")
//     }
//   }
//  else if(yourDayOfWeek === 7){
  
//     if(gender == male){
//           console.log("Your Akan name is" +maleAkanaNames[6])
//     }
//     else if( gender == female){
//     console.log("Your Akan name is" +femaleAkanaNames[6])
//     }
//     else{
//       console.log("No Akan Name for you")
//     }
//   }
// else{
//   console.log("wrong calculation")
// }
//     // console.log("you proceed")
//   }
//   else{
//     console.log("input a valid century")
//   }
// ;
// }
// calculate()
//   }

  
  
