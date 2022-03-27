//input boxes
let nineTime = document.getElementById("nineTime");
const tenTime = document.getElementById("tenTime");
const elevenTime = document.getElementById("elevenTime");
const noonTime = document.getElementById("noonTime");
const oneTime = document.getElementById("oneTime");
const twoTime = document.getElementById("twoTime");
const threeTime = document.getElementById("threeTime");
const fourTime = document.getElementById("fourTime");
const fiveTime = document.getElementById("fiveTime");

//sumbit buttons
const nineBtn = document.querySelector(".nineSave");
const tenBtn = document.querySelector(".tenSave");
const elevenBtn = document.querySelector(".elevenSave");
const noonBtn = document.querySelector(".noonSave");
const oneBtn = document.querySelector(".oneSave");
const twoBtn = document.querySelector(".twoSave");
const threeBtn = document.querySelector(".threeSave");
const fourBtn = document.querySelector(".fourSave");
const fiveBtn = document.querySelector(".fiveSave");

// getting P in header to add date to
const currentDay = document.getElementById("currentDay");


// function to save items typed into timeblocks to local storage

function setTask () {

    nineBtn.addEventListener("click", function() {
        localStorage.setItem('nineInput', nineTime.value)
    });

    tenBtn.addEventListener("click", function() {
        localStorage.setItem('tenInput', tenTime.value)
    });

    elevenBtn.addEventListener("click", function() {
        localStorage.setItem('elevenInput', elevenTime.value)
    });

    noonBtn.addEventListener("click", function() {
        localStorage.setItem('noonInput', noonTime.value)
    });

    oneBtn.addEventListener("click", function() {
        localStorage.setItem('oneInput', oneTime.value)
    });

    twoBtn.addEventListener("click", function() {
        localStorage.setItem('twoInput', twoTime.value)
    });

    threeBtn.addEventListener("click", function() {
        localStorage.setItem('threeInput', threeTime.value)
    });

    fourBtn.addEventListener("click", function() {
        localStorage.setItem('fourInput', fourTime.value)
    });

    fiveBtn.addEventListener("click", function() {
        localStorage.setItem('fiveInput', fiveTime.value)
    });
};

//function to get saved items from local storage to time blocks
function getTask () {

    nineTime.value =  localStorage.getItem("nineInput");
    tenTime.value =  localStorage.getItem("tenInput");
    elevenTime.value =  localStorage.getItem("elevenInput");
    noonTime.value =  localStorage.getItem("noonInput");
    oneTime.value =  localStorage.getItem("oneInput");
    twoTime.value =  localStorage.getItem("twoInput");
    threeTime.value =  localStorage.getItem("threeInput");
    fourTime.value =  localStorage.getItem("fourInput");
    fiveTime.value =  localStorage.getItem("fiveInput");
}

//function to add current date and time to header 

function dayAndTime () {

    currentDay.textContent = moment().format("MMMM Do YYYY, h:mm:ss"); 

    setInterval(dayAndTime, 1000);
}

//adding hour values to each timeblock and checking if current time is before or after

function timeCheck() {

    currentHour = moment().format("HH")
    
    
    let nineTimestamp = ("09");

    if (nineTimestamp === currentHour) {
        nineTime.style.backgroundColor = ("#d3d3d3");
    } else if (nineTimestamp < currentHour){
        nineTime.style.backgroundColor = ("#ff6961");
    } else {
        nineTime.style.backgroundColor = ("#77dd77");
    };

    let tenTimestamp = ("10");

    if (tenTimestamp === currentHour) {
        tenTime.style.backgroundColor = ("#d3d3d3");
    } else if (tenTimestamp < currentHour){
        tenTime.style.backgroundColor = ("#ff6961");
    } else {
        tenTime.style.backgroundColor = ("#77dd77");
    };

    let elevenTimestamp = ("11");

    if (elevenTimestamp === currentHour) {
        elevenTime.style.backgroundColor = ("#d3d3d3");
    } else if (elevenTimestamp < currentHour){
        elevenTime.style.backgroundColor = ("#ff6961");
    } else {
        elevenTime.style.backgroundColor = ("#77dd77");
    };

    let noonTimestamp = ("12");

    if (noonTimestamp === currentHour) {
        noonTime.style.backgroundColor = ("#d3d3d3");
    } else if (noonTimestamp < currentHour){
        noonTime.style.backgroundColor = ("#ff6961");
    } else {
        noonTime.style.backgroundColor = ("#77dd77");
    };

    let oneTimestamp = ("13");

    if (oneTimestamp === currentHour) {
        oneTime.style.backgroundColor = ("#d3d3d3");
    } else if (oneTimestamp < currentHour){
        oneTime.style.backgroundColor = ("#ff6961");
    } else {
        oneTime.style.backgroundColor = ("#77dd77");
    };

    let twoTimestamp = ("14");

    if (twoTimestamp === currentHour) {
        twoTime.style.backgroundColor = ("#d3d3d3");
    } else if (twoTimestamp < currentHour){
        twoTime.style.backgroundColor = ("#ff6961");
    } else {
        twoTime.style.backgroundColor = ("#77dd77");
    };

    let threeTimestamp = ("15");

    if (threeTimestamp === currentHour) {
        threeTime.style.backgroundColor = ("#d3d3d3");
    } else if (threeTimestamp < currentHour){
        threeTime.style.backgroundColor = ("#ff6961");
    } else {
        threeTime.style.backgroundColor = ("#77dd77");
    };

    let fourTimestamp = ("16");

    if (fourTimestamp === currentHour) {
        fourTime.style.backgroundColor = ("#d3d3d3");
    } else if (fourTimestamp < currentHour){
        fourTime.style.backgroundColor = ("#ff6961");
    } else {
        fourTime.style.backgroundColor = ("#77dd77");
    };

    let fiveTimestamp = ("17");

    if (fiveTimestamp === currentHour) {
        fiveTime.style.backgroundColor = ("#d3d3d3");
    } else if (fiveTimestamp < currentHour){
        fiveTime.style.backgroundColor = ("#ff6961");
    } else {
        fiveTime.style.backgroundColor = ("#77dd77");
    };

}

function init() {
    getTask();
    setTask();
    dayAndTime();
    timeCheck();
}

init();