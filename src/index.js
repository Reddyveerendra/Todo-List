import { header } from "./header";
import { footer } from "./footer";
import { main } from "./main";
const body = document.querySelector(".content");
body.style = "display:grid; grid-template-rows:1fr 11fr 1fr;display: grid;grid-template-rows: 1fr 9fr 1fr;height: 100vh;margin: 0px; margin:0px;";
body.appendChild(header());
body.appendChild(main());
body.appendChild(footer());
const items = document.querySelectorAll(".items");
function handleclick(e) {
    if (e.target.id == "add") {
        const div = document.querySelector("#projects");
        const data = document.createElement("div");
        const name = document.createElement("input");
        const button = document.createElement("input");
        button.value = "submit";
        name.setAttribute("type", "text");
        const label = document.createElement("label");
        label.textContent = "enter project name";
        name.style = "width:80px;"
        name.id = "inputName";
        data.style = "height: 100px;width: 124px;flex-direction: column;display: flex;background: lemonchiffon;border: 2px solid red;gap: 20px;"
        data.appendChild(label);
        data.appendChild(name);
        data.appendChild(button);
        div.appendChild(data);
        button.setAttribute("type", "button");
        const script = document.createElement("script");
        script.textContent = "function newProject(){const a=document.getElementById('inputName').value;if(a!==''){const p=document.createElement('p');p.classList=`${a}`;p.id='project';const div = document.getElementById('center');p.textContent=document.getElementById('inputName').value;div.appendChild(p);p.style='margin: 0%;padding: 11px;background-color: lightskyblue;margin: 10px;border: 7px solid red;'; while (projects.firstChild) {projects.removeChild(projects.lastChild);}centers = document.querySelectorAll('#project');console.log(centers);backoff=true;centers.forEach(center => {center.addEventListener('click', (e) => {console.log(e.target.className);});})}}"
        div.append(script);
        button.setAttribute("onclick", "newProject()");
    }

}
var backoff = false;
add("sample1");
add("sample2");
function add(a) {
    const p = document.createElement('p'); p.classList = `${a}`; p.id = 'project'; const div = document.getElementById('center'); p.textContent = a; div.appendChild(p); p.style = 'margin: 0%;padding: 11px;background-color: lightskyblue;margin: 10px;border: 7px solid red;';
}
var centers;
centers = document.querySelectorAll("#project");
if (!backoff) {
    centers.forEach(center => { center.addEventListener('click', (e) => { console.log(e.target.className); }); })
}


items.forEach(item => item.addEventListener("click", handleclick));