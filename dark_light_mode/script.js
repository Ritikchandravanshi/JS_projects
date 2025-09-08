let btn = document.querySelector("button");
let darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

function applyTheme(){
     if(darkModeMediaQuery.matches){
        document.body.classList.remove("light-theme");
        document.body.classList.add("dark-theme");
     }else{
         document.body.classList.remove("dark-theme");
         document.body.classList.add("light-theme");
     }
}

darkModeMediaQuery.addEventListener("change" , applyTheme);

//ab ye load hone p automatic mode apply  hoga
applyTheme();

//manual toggle button
btn.addEventListener("click" , ()=>{
    if(document.body.classList.contains("light-theme")){
        document.body.classList.remove("light-theme");
        document.body.classList.add("dark-theme");
    }else{
        document.body.classList.remove("dark-theme");
        document.body.classList.add("light-theme");
    }
})


/************************through local storage  */


