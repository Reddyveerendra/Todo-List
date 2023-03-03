import { newtask } from "./newtask";
function right() {
    const right = document.createElement("div");
    const righttop = document.createElement("div");
    const rightdown = document.createElement("div");
    rightdown.id = "taskadd";
    rightdown.style = "display:grid; grid-template-columns: 1fr 1fr 1fr; gap:20px;"
    righttop.id = "taskslist";
    righttop.style = "display:grid;grid-template-columns:1fr 1fr 1fr 1fr;"
    right.style = "border:1px solid black; padding:4%;";
    right.id = "right";
    const script = document.createElement("script");
    script.textContent = `function tasks(e){
        const main=document.getElementById("taskadd");
        console.log(e);
        const div = document.createElement("div");
        div.style="height: 100px; width: 124px; flex-direction: column; display: flex; background: lemonchiffon; border: 2px solid red;"
        const label1 = document.createElement("label");
        const label2 = document.createElement("label");
        label1.textContent="Enter Task Name";
        label2.textContent="Enter Task priority";
        const select = document.createElement("select");
        select.style="height: 100px; width: 124px; flex-direction: column; display: flex; border: 2px solid red;"
        const option1 = document.createElement("option");
        const t1 = document.createTextNode("HIGH");
        option1.appendChild(t1);
        option1.value="HIGH";
        const option2 = document.createElement("option");
        const t2 = document.createTextNode("MEDIUM");
        option2.appendChild(t2);
        option2.value="MEDIUM";
        const option3 = document.createElement("option");
        const t3 = document.createTextNode("LOW");
        option3.appendChild(t3);
        option3.value="LOW";
        select.appendChild(option1);
        select.appendChild(option2);
        select.appendChild(option3);
        const input=document.createElement("input");
        input.style="width: 80px;";
        input.type="text";
        input.id="inp";
        select.id="sel";
        const button=document.createElement("input");
        button.type="button";
        button.value="submit";
        button.setAttribute("onclick","newtask()")
        div.appendChild(label1);
        div.appendChild(input);
        div.appendChild(label2);
        div.appendChild(select);
        div.appendChild(button);
        div.id=obj+"win";
        main.appendChild(div);
        alert(obj)
        stater=false;
    }
    var stater=false;
    var obj="";
    function tasksAdders(obj){
        if(stater==true){
            tasks(obj);
        }
        else{
            alert("select project first");
        }
    }
    var Statement=true;
    function newtask() {
        alert(obj+"win");
        const input=document.getElementById("inp").value;
        const select=document.getElementById("sel").value;
        console.log(input,select);
        const p1=document.createElement("p");
        const p2=document.createElement("p");
        const div=document.createElement("div");
        const div2=document.createElement("div");
        p1.textContent="Task"+" : "+input;
        p2.textContent="Task priority"+" : "+select;
        div2.style="display:flex;";
        const button =document.createElement("input");
        button.value="uncompleted";
        button.id=input;
        button.type="button";
        div2.appendChild(p1);
        button.setAttribute("onclick","changeStatement(id)");
        div.appendChild(div2);
        div.appendChild(p2);
        div.appendChild(button);
        p1.style="border:1px solid brown;"
        p2.style="border:1px solid brown;"
        div.style="padding: 2px; background-color: lightskyblue; margin: 6px; border: 5px solid red; display: flex; flex-direction: column; align-items: center; width:170px;"
        const item=document.getElementById("taskslist");
        item.appendChild(div)
        const wins=document.getElementById("taskadd");
            wins.removeChild(wins.lastChild);
    }
    function changeStatement(e){
        console.log(e)
        const button=document.getElementById(e);
        if(Statement==true){
            button.value="completed";
            Statement=false;
        }
        else{
            button.value="uncompleted";
            Statement=true;
        }
    }
    `;
    right.appendChild(righttop);
    right.appendChild(rightdown);
    right.appendChild(script);
    return right;

}
export { right };