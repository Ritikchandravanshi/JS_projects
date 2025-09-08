let prg = document.querySelector("#progress");
let mb = document.querySelector("#leftText"); 
let per = document.querySelector("#percent");

let seconds = 4;           // total time in seconds
let totalSize = 4.8;       // MB
let dnwPercent = 0;        // %
let downloadedMB = 0;      // MB

// har tick ka time
let intervalTime = (seconds * 1000) / 100; 
let speed = totalSize / 100; // per % kitna MB

let seting = setInterval(() => {
    dnwPercent++;
    downloadedMB += speed;
    // if(dnwPercent == 50){
    //       document.querySelector("h1").style.display = "none";
    //     clearInterval(seting);
    // }

    if (dnwPercent >= 100) {
        dnwPercent = 100;
        downloadedMB = totalSize;
        document.querySelector("h1").textContent = "Download successful 🥳🥳";
        clearInterval(seting);
    }

    prg.style.width = dnwPercent + "%";
    prg.textContent = `${dnwPercent}%`;
    per.textContent = `${dnwPercent}%`;
    mb.textContent = `${downloadedMB.toFixed(1)} of ${totalSize} MB`;

}, intervalTime);
