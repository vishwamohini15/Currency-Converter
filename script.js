const BASE_URL="https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies"

// "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";
// - https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/{date}/{endpoint}
// + https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@{date}/v1/{endpoint}
// -----https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json

const dropdowns=document.querySelectorAll(".dropdown select");
const btn=document.querySelector("form button")
const fromcurr=document.querySelector(".from select")
const tocurr=document.querySelector(".to select")
let  msg=document.querySelector(".msg")



for (const select of dropdowns) {
     for (currcode  in countryList) {
          // console.log(code);
          let newoption=document.createElement("option");
          newoption.innerText=currcode;
          newoption.value=currcode;
          if (select.name === "from" && currcode === "USD") {
               newoption.selected="selected";
          }else if (select.name === "to" && currcode === "INR") {
               newoption.selected="selected";
          }
          select.append(newoption);
     }  
     select.addEventListener("change", (evnt)=>{
          updateFlag(evnt.target);
     })
     
}


const updateExchangeRate = async()=>{
     let amount=document.querySelector(".amount input");
let amutvalue=amount.value;
console.log(amutvalue);
if (amutvalue===" " && amutvalue<=1) {
     alert("please type valid value");
}
// console.log(fromcurr.value,tocurr.value);
// const URL=`${BASE_URL}/${fromcurr.value.toLowerCase()}/${tocurr.value.toLowerCase()}.json`;
const URL=`${BASE_URL}/${fromcurr.value.toLowerCase()}.json`;

let response=await fetch(URL);
console.log(response);

let data=await response.json();
let rate=data[fromcurr.value.toLowerCase()][tocurr.value.toLowerCase()];
console.log(rate);
console.log(amount);

let finalAmount= amutvalue*rate;
msg.innerText= `${amutvalue} ${fromcurr.value} = ${finalAmount.toFixed(2)} ${tocurr.value}`

}

const updateFlag=(element)=>{
     // console.log(Element);
     let currCode = element.value;
     let countryCode = countryList[currCode];
     let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
     let img = element.parentElement.querySelector("img");
     img.src = newSrc;
}
   
btn.addEventListener("click", (event)=> {
event.preventDefault();

updateExchangeRate();
})

window.addEventListener("load", ()=>{
     updateExchangeRate()
})











// const hyy=async()=>{
//      let url=await fetch("https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies");
//      let respo=await url.json();
//      console.log(respo);
     

// }    3 
// hyy();