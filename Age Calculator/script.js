/*SUMMERY */

// input box upare click jouthi bi  kale date value select haba , then calculate buuton re click kale age calculate haba , value below paragraph re show kariba.
// 1) input box ku select kale , disabled future date
// 2) btn ku select kale
// 3)paragraph select
// 4) Calculate age function nele
// 5) btn upare event listener add kale to calculate age;
// 6) to extract particular day use getDate function











let userInput = document.getElementById("date");

let disableFutureDate = new Date().toISOString().split("T")[0];
userInput.setAttribute("max",disableFutureDate)

let button = document.querySelector("#btn")
let paragraph = document.querySelector("#msg")


function calculateAge(){
    let birthDate = new Date(userInput.value);

    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth();
    let y1 = birthDate.getFullYear();

    let today = new Date();

    let d2 = today.getDate();
    let m2 = today.getMonth();
    let y2 = today.getFullYear();

    let d3 ,m3,y3;

    y3 = y2-y1;

    if(m2>=m1){
        m3 = m2-m1;
    }
    else{
        y3--;
        m3 = 12 + m2 -m1;
    }

    if(d2>d1){
        d3 = d2 - d1;
    }
    else{
        m3--;
        d3 = getDaysInMonth(y1 ,m1 ) + d2 - d1 ;
    }

    if(m3< 0){
        m3 = 11;
        y3--;
    }
   paragraph.innerHTML = `You are <span>${y3}</span> years ,<span>${m3}</span> months and <span>${d3}</span> days old`;
    

  
}
function getDaysInMonth(year,month){
    return new Date(year,month, 0).getDate();
}

button.addEventListener("click" , ()=>{
    calculateAge();
})