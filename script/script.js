function calculate(){

  var dd= Number(document.getElementById("dd").value);
  var mm= Number(document.getElementById("mm").value);
  var cc= Number(document.getElementById("cc").value);
  var yy= Number(document.getElementById("yy").value);
  var gender= document.getElementById("Gender").value;
  var maleAkanNames=[" Kwasi", " Kwadwo", " Kwabena", " Kwaku", " Yaw", " Kofi", " Kwame"]
  var femaleAkanNames=[" Akosua", " Adwoa", " Abenaa", " Akua", " Yaa", " Afua", " Ama"]


  var yourDayOfWeek =  Math.abs(Math.round((((cc/4) -2*cc-1) + ((5*yy/4)) + ((26*(mm+1)/10)) + dd )%7));

  console.log(`yourDayOfWeek`, yourDayOfWeek)
  
  if(cc === 19 || cc === 20){
    console.log(`cc`, cc)
    if(yourDayOfWeek === 0) {
      if(gender === 'male') {
        console.log("your Akan name is" +maleAkanNames[yourDayOfWeek])
      }
      if(gender === 'female'){
        console.log("your Akan name is" +femaleAkanNames[yourDayOfWeek])
      }
    }

    if(yourDayOfWeek === 1) {
      if(gender === 'male') {
        console.log("your Akan name is" +maleAkanNames[yourDayOfWeek])
      }
      if(gender === 'female'){
        console.log("your Akan name is" +femaleAkanNames[yourDayOfWeek])
      }
    }

    if(yourDayOfWeek === 2) {
      if(gender === 'male') {
        console.log("your Akan name is" +maleAkanNames[yourDayOfWeek])
      }
      if(gender === 'female'){
        console.log("your Akan name is" +femaleAkanNames[yourDayOfWeek])
      }
    }

    if(yourDayOfWeek === 3) {
      if(gender === 'male') {
        console.log("your Akan name is" +maleAkanNames[yourDayOfWeek])
      }
      if(gender === 'female'){
        console.log("your Akan name is" +femaleAkanNames[yourDayOfWeek])
      }
    }

    if(yourDayOfWeek === 4) {
      if(gender === 'male') {
        console.log("your Akan name is" +maleAkanNames[yourDayOfWeek])
      }
      if(gender === 'female'){
        console.log("your Akan name is" +femaleAkanNames[yourDayOfWeek])
      }
    }
    if(yourDayOfWeek === 5) {
      if(gender === 'male') {
        console.log("your Akan name is" +maleAkanNames[yourDayOfWeek])
      }
      if(gender === 'female'){
        console.log("your Akan name is" +femaleAkanNames[yourDayOfWeek])
      }
      if(yourDayOfWeek === 5) {
        if(gender === 'male') {
          console.log("your Akan name is" +maleAkanNames[yourDayOfWeek])
        }
        if(gender === 'female'){
          console.log("your Akan name is" +femaleAkanNames[yourDayOfWeek])
        }
      }
      
    }

  }

  document.getElementById("output").innerHTML=output;

}
