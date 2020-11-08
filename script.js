function billcalc() {

  let unit = document.getElementById('unit').value;

  let amount = 0;

    if(unit>0 &&  unit <=60) 
    {
      amount = unit * 7.85;


    } else if (unit >60 && unit <= 90)
    {
      amount = 60*7.85 + ((unit-60) * 10 ) 

    } else if (unit >90 && unit <= 120)
    {
      amount = 60*7.85 + 30*10 + ((unit-90) * 27.75 )

    } else if (unit >120 && unit <= 180)
    {
      amount = 60*7.85 + 30*10 + 30*27.75 + ((unit-120) * 32 )

    } else if (unit >180)
    {
      amount = 60*7.85 + 30*10 + 30*27.75 + 60*32 + ((unit-180) * 45 )
    }


  let charge = 0;


    if(unit>0 &&  unit <=30) 
    {
      charge = 30;


    } else if (unit >30 && unit <= 60)
    {
      charge = 60; 

    } else if (unit >60 && unit <= 90)
    {
      charge = 90;

    } else if (unit >90 && unit <= 180)
    {
      charge = 480;

    } else if (unit >180)
    {
      charge = 540;
    }

        let total = amount + charge;

        let printValue = document.querySelector('.printVal');

        printValue.innerHTML = total.toFixed(2);
}

function clearContent()
{
    document.getElementById("unit").value='';
   
    let clearValue = document.querySelector('.printVal');

    clearValue.innerHTML = "00.00";

}


//Case 1
// Per unit Charge
//0-60 7.85
//61-90 10
//91-120 27.75
//121-180 32
// 181+ 45


//Case 2
// Fixed Charge
//0-30 30
//31-60 60
//61-90 90
//91-180 480
// 181+ 540


//example
//60 - 7.85*60 = 471
//30 - 10*30 = 300
//10 - 27.75*10 = 277.50

//1048.50





