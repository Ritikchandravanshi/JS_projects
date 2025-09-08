//execution context
//"In JavaScript, an execution context is the environment in which a piece of JavaScript code is evaluated and executed. 
//It determines what variables, functions, and objects are accessible, as well as how the code is executed line by line."


// 1. Lexical Scoping (used in JavaScript)

// Definition: Variables are resolved based on where the function was defined, not where it is called.

// The scope chain is created during code writing (compile time), and doesn’t change based on the call location.

// JS always uses lexical scoping.
  
function createToaster(config){
    return function(val){

        let childDiv = document.createElement("div");
        childDiv.textContent = val;
     
        childDiv.className = `inline-block ${config.theme === "dark" ? "bg-gray-800 text-white"  : "bg-gray-100 text-black"}  px-6 py-3 rounded shadow-lg pointer-events-none transition-opacity`;

        document.querySelector(".parent").appendChild(childDiv); 
        if(config.positionX !== "left" ||  config.positionY != "top"){
            document.querySelector(".parent").className +=
            `${config.positionX === "right" ? "right-5" : "left-5"} ${config.positionY === "bottom" ? "bottom-5" : "top-5"}`;
        }

        setTimeout(() =>{
           
         document.querySelector(".parent").removeChild(childDiv);

        } , config.duration * 1000);
    }
}


let toaster = createToaster({

    positionX : "right",
    positionY : "top",
    theme:"dark",
    duration : 3 , 
})

toaster("download done")

setTimeout(() =>{
toaster("hey gaurav accept your request")
} , 2000);


