function calculate(){


  var dd= document.getElementById("dd").value;
  var mm= document.getElementById("mm").value;
  var cc= document.getElementById("cc").value;
  var yy= document.getElementById("yy").value;
  //var gender= document.getElementById("id-5").value;
  var maleAkanaNames=["-Kwasi", "-Kwadwo", "-Kwabena", "-Kwaku", " -Yaw", "-kofi", "Kwame"]
  var femaleAkanaNames=["-akosua", "-Adwoa", "-Abenaa", "-Akua", "-Yaa", "-Afua", "ama"]
  
  if(cc >= 19 && cc<= 20){
  
  let yourDayOfWeek = Math.round((((cc/4) -2*cc-1) + ((5*yy/4)) + ((26*(mm+1)/10)) + dd )%7)
  
  console.log(yourDayOfWeek)
  }
  }
  
  
