 display=document.getElementById("display");
let timer=null;
let startTime=0;
let elapsedTime=0
let isRunning=false;

function start(){
 if(!isRunning){
    isRunning=true;
    startTime = Date.now()-elapsedTime;
    timer=setInterval(update,10);

 }
} 
function stop(){
    if(isRunning){
        isRunning=false;
        clearInterval(timer);
        elapsedTime=Date.now()-startTime;
     }
} 
function reset(){
    clearInterval(timer);
    startTime=0;
    elapsedTime=0
    isRunning=false;
    display.textContent='00:00:00:00'
} 
function update(){

    const currentTime= Date.now();
    elapsedTime=currentTime-startTime;
    let hours=Math.floor(elapsedTime/(1000*60*60));
    let minutes=Math.floor(elapsedTime/(1000*60)%60);
    let seconds=Math.floor(elapsedTime/(1000)%60);
    let milliseconds=Math.floor(elapsedTime%1000/10);

    hours=String(hours).padStart(2,"0");
    minutes=String(minutes).padStart(2,"0");
    seconds=String(seconds).padStart(2,"0");
    milliseconds=String(milliseconds).padStart(2,"0");

    display.textContent=`${hours}:${minutes}:${seconds}:${milliseconds}`
    
 }

// import React, {useState} from 'react';

// export default function todolist(){
//     const [tasks, setTasks]= useState([]);
//     const [newTask, setNewTask]= useState("");
//     function handleInputChanges(event){
//         const text=event.target.value;
//         setNewTask(text);

//     }

//     function addTask(){
//         setTasks(pre=>[...pre,tasks]);

//     }

//     function deleteTask(index){

//     }

//     function moveUp(index){

//     }

//     function moveDown(index){
        
//     }
//     return <div className="to-do-list">
//         <h1>TO DO List</h1>
//         <div >
//             <input
//                 type="text"
//                 placeholder="Enter the task..."
//                 value={newTask}
//                 onChange={handleInputChanges}

//             /><button className="add-button" onClick={addTask}>add</button>
//         </div>
//         <ol>{tasks.map(task=> <li> tasks</li>)}</ol>
//     </div>
// }