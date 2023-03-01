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
export { newProject };


`function newProject() {
    const a = document.getElementById('inputName').value;
    if (a !== '') {
        const p = document.createElement('p');
        p.classList = 'project';
        p.id = a;
        const div = document.getElementById('center');
        p.textContent = document.getElementById('inputName').value;
        div.appendChild(p);
        p.style = 'margin: 0%;padding: 11px;background-color: lightskyblue;margin: 10px;border: 7px solid red;';
        while (projects.firstChild) {
            projects.removeChild(projects.lastChild);
        }
        center = document.querySelector(a);
        console.log(centers);
        center.addEventListener('click', (e) => { console.log(e.target.id) });
    }
}`