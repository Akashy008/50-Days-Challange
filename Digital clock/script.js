let displayTime = document.querySelector("#clock")

setInterval(() => {
    let currentTime = new Date ();
    displayTime.innerHTML = currentTime.toLocaleTimeString() 
}, 1000);
