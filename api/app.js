const url =  "https://catfact.ninja/fact";
let btn = document.querySelector(".btn");
let para = document.querySelector(".para");
const getFacts = async ()=>{
    console.log("getting data");
    let response = await fetch(url);
    let data =await  response.json();
    console.log(data);
    para.innerText = data.fact;
}

btn.addEventListener("click" , getFacts);

getFacts();

