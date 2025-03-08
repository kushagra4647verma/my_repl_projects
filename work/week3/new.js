function deletebtn(index){
    let el=document.getElementById("task"+index);
    el.remove();
}
let cnt=1;

function addtask(){
    let newel=document.createElement("div");
    let val=document.querySelector("input").value;
    newel.setAttribute("id",cnt);
    newel.innerHTML=`<div id="task1">
                <h3>Task:${val}</h3>
            </div>
            <div>
                <button onclick="deletebtn(${cnt})">Delete</button>
            </div>`
    document.querySelector("#mididv").appendChild(newel);
    cnt++;
}

