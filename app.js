const task1 = document.querySelector(".one");
const task2 = document.querySelector(".two");
const task3 = document.querySelector(".three");
const task4 = document.querySelector(".four");
const task5 = document.querySelector(".five");

const searchBar = document.querySelector("#searchBar");
const addBtn = document.querySelector(".addBtn");
const clearBtn = document.querySelector(".clearBtn");

let currentTask = 1; 

addBtn.addEventListener("click", () => {
    if (currentTask === 1) {
        task1.innerHTML = "✦"+searchBar.value;
    } else if (currentTask === 2) {
        task2.innerHTML = "✦"+searchBar.value;
    } else if (currentTask === 3) {
        task3.innerHTML = "✦"+searchBar.value;
    } else if (currentTask === 4) {
        task4.innerHTML = "✦"+searchBar.value;
    } else if (currentTask === 5) {
        task5.innerHTML ="✦"+ searchBar.value;
    }

    currentTask = currentTask < 5 ? currentTask + 1 : 1;
});

clearBtn.addEventListener("click",()=>{
    task1.innerHTML = "";
    task2.innerHTML = "";
    task3.innerHTML = "";
    task4.innerHTML = "";
    task5.innerHTML = "";
    currentTask = 1;
})

const del1 = document.querySelector("#ek");
const del2 = document.querySelector("#do");
const del3 = document.querySelector("#teen");
const del4 = document.querySelector("#char");
const del5 = document.querySelector("#panch");

del1.addEventListener("click",()=>{
    task1.innerHTML = "";
})

del2.addEventListener("click",()=>{
    task2.innerHTML = "";
})

del3.addEventListener("click",()=>{
    task3.innerHTML = "";
})

del4.addEventListener("click",()=>{
    task4.innerHTML = "";
})

del5.addEventListener("click",()=>{
    task5.innerHTML = "";
})


// enter key funtion to add

searchBar.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        {
            if (currentTask === 1) {
                task1.innerHTML = "✦"+searchBar.value;
            } else if (currentTask === 2) {
                task2.innerHTML = "✦"+searchBar.value;
            } else if (currentTask === 3) {
                task3.innerHTML = "✦"+searchBar.value;
            } else if (currentTask === 4) {
                task4.innerHTML = "✦"+searchBar.value;
            } else if (currentTask === 5) {
                task5.innerHTML ="✦"+ searchBar.value;
            }
        
            currentTask = currentTask < 5 ? currentTask + 1 : 1;
        }
    }
});