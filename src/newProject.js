import { scriptforproject } from "./scriptforproject";
function newProject() {
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
    script.textContent = scriptforproject();
    div.append(script);
    button.setAttribute("onclick", "newProject()");
}
const edit = `function Edit(e){
    const xd=e;
    const remover=document.getElementById(xd);
    remover.remove();
    console.log(e);
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
    name.value=e;
    data.style = "height: 100px;width: 124px;flex-direction: column;display: flex;background: lemonchiffon;border: 2px solid red;gap: 20px;"
    data.appendChild(label);
    data.appendChild(name);
    data.appendChild(button);
    div.appendChild(data);
    button.setAttribute("type", "button");
    const script = document.createElement("script");
    script.textContent = ${scriptforproject()};
    div.append(script);
    button.setAttribute("onclick", "newProject()");
    
}
    function Delete(e){
    const remover=document.getElementById(e);
    remover.remove();
    }`
export { newProject, edit };