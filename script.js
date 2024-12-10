const BASE_URL="https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json"

const dropdowns=document.querySelectorAll(".dropdown select");

for(let select of dropdowns){
     for(currcode in countryList){
let newOptions=document.createElement("option");
     newOptions.innerText=currcode;
     newOptions.value=currcode
if(select.name==="from" && currcode==="USD"){
     newOptions.selected="selected";
}else if (select.name==="to" && currcode === "INR") {
     newOptions.selected="selected"
}

     select.append(newOptions);

     }
}


















// const hyy=async()=>{
//      let url=await fetch("https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies");
//      let respo=await url.json();
//      console.log(respo);
     

// }    3 
// hyy();