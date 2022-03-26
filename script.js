//input boxes
const nineTime = document.getElementById("nineTime");
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

    currentDay.textContent = moment(); 


}
// getTask();
// saveTask();
dayAndTime();

console.log(moment());