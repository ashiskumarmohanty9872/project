const passwordBox = document.getElementById("password");
const passwordLength = document.querySelector(".cursor-pointer")
const spanValue = document.querySelector("#value");
const numberAllowed = document.getElementById("numberInput");
const charAllowed = document.getElementById("charInput");




function passwordGenerator(){

    const length = parseInt(passwordLength.value);
    const numberUse = numberAllowed.checked ;
    const charUse = charAllowed.checked;


    let password = "";
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numberUse) {str += "0123456789"; }  
    if(charUse)  { str += "~`!@#$%^&*()[]{}=+-*/"; }
    

    for(let i=0; i< length ; i++){
        let char = Math.floor(Math.random() * str.length + 1);

        password += str.charAt(char);
    }
    passwordBox.value = password;

}

function copyPassword(){

    if(passwordBox.value){
        passwordBox.select();
        document.execCommand("copy");
     

    }
    else{
        alert("please generate a password first");
    }
}

passwordLength.addEventListener("input" ,()=>{
    spanValue.textContent = passwordLength.value;
})



