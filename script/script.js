function() {

    let century=document.getElementById(cc).nodeValue
    let year=document.getElementById(yy)
    let month=document.getElementById(mm)
    let day=document.getElementById(dd)

    if(month <1 && month > 12){
        document.getElementById("output").innerHTML="input a correct month"
   } else if(dd< 0 && dd >31){document.getElementById("output").innerHTML="input a valid day of the month"
}



}
