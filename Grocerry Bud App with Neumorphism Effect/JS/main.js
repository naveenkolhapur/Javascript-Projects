//Define
let inputform = document.querySelector("#input-form");

//Fetching Items
inputform.addEventListener('submit', function(event){
    event.preventDefault();
    let inputtext = document.querySelector("#textbox");
    let task = inputtext.value.trim();

    if(task === ""){
        alert("Please Enter Any Item!!");
    }
    else{
        //get Items from Local Storage
        let tasklist = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')):[];
        tasklist.unshift(task);
        //set Items to Local Storage
        localStorage.setItem('tasks', JSON.stringify(tasklist));
    }
    displaytask();
});

//display items
let displaytask = () => {
    let listgroup = document.querySelector("#list-group");
    let tasklist = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')):[];
    if(tasklist.length !== 0){
        let eachlist = '';
        for (let task of tasklist)
        eachlist += `<li id="list-group-item" class="list"><span>${task}</span><button class="close"><i class="fa fa-times-circle" aria-hidden="true"></i></button></li>`;
        listgroup.innerHTML= eachlist;  
    }
};
displaytask();

//remove items 
let listgroup = document.querySelector("#list-group");
listgroup.addEventListener('click', function(e){
    let targetelement = e.target;
    if (targetelement.classList.contains('fa-times-circle')){
        let actaualel = targetelement.parentElement.parentElement;
        let selectedtext = actaualel.innerText;
        // get items from local storage
        let tasklist = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')):[];
        tasklist = tasklist.filter(function(task){
            return task.trim() !== selectedtext.trim();
        });
        //set Items to Local Storage
        localStorage.setItem('tasks', JSON.stringify(tasklist));
        displaytask();
        location.reload();
    } 
 });

// clear all 
let clearbtn = document.querySelector("#clrbtn");
clearbtn.addEventListener('click', function(event){
    let tasklist = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')):[];
    localStorage.clear(tasklist);
    location.reload();
});

  
