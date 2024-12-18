

let count = 0

function increment(){
    count += 1;
document.getElementById("count-el").textContent = count;
    
}

function decrement(){
    count -= 1;
    document.getElementById("count-el").textContent = count;
    
}
function toZero(){
    count = 0;
    document.getElementById("count-el").textContent = count
}

let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el")

function saveEntries(){

    let countStr = count + " - "
    saveEl.textContent += countStr
}

let name ="Christian"
let greeting = "Welcome to board"

let welcomeEl = document.getElementById("welcome-el")

welcomeEl.innerText= greeting + " " + name
welcomeEl.textContent += "🌟" 

function reset (){
    document.getElementById("save-el").textContent = "Previous entries:"
}