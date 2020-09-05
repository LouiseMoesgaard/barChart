"use strict";

let testArray = [];
addDataPoint();

function setHeight() {
    let bars = document.querySelectorAll(".bar");

    for(let i = 0; i < bars.length; i++){
        bars[i].style.height = (testArray[i]/32)*100 + "%";
    }
}

function addDataPoint() {
    setTimeout( ()=>{
        if(testArray.length <= 39) {
            testArray.push(Math.floor(Math.random() * 33));
            setHeight();
        } else {
            testArray = testArray.slice(1);
            testArray.push(Math.floor(Math.random() * 33));
            setHeight();
        }
        addDataPoint();

    },1000)  
    
}


