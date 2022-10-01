

   
  /*Simple Interest Formula = 
  p*r*t/100*/
     
    btn.addEventListener("click", () => {
        /*Get input values to the variables */
      let p = parseInt(document.getElementById('principal').value);
      let r = document.getElementById('rate').value;
      let t = document.getElementById('time').value;
      let btn = document.getElementById('btn');
       
      var interest = (p*r*t)/100;
       
      document.getElementById('interest').innerHTML = interest;
       
      var plusInterest = p + interest;
      document.getElementById('plus').innerHTML = plusInterest;
       
    })
     
