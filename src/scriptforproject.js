function scriptforproject() {
    const text = `function newProject(){
    const a = document.getElementById('inputName').value;
    if (a !== '') {
        const div=document.createElement("div");
        const div2=document.createElement("div");
        const b1=document.createElement("input");
        const b2=document.createElement("input");
        b1.setAttribute("type", "button");
        b2.setAttribute("type", "button");
        b1.value="Edit";
        b2.value="Delete";
        div2.appendChild(b1);
        div2.appendChild(b2);
        div2.style="display:flex;";
        b1.id=a;
        b2.id=a;
        const p = document.createElement('p');
        p.classList = 'project';
        p.id = a+"p";
        b1.setAttribute("onclick", "Edit(id)");
        b2.setAttribute("onclick","Delete(id)");
        p.style="margin: 0;width: 100%;height: inherit;padding: px;text-align: center;padding: 0px;"
        const d = document.getElementById('center');
        p.textContent = document.getElementById('inputName').value;
        div.appendChild(p);
        div.appendChild(div2);
        d.appendChild(div);
        div.id=a;
        div.style = 'padding: 2px;background-color: lightskyblue;margin: 6px;border: 5px solid red;display: flex;flex-direction: column;align-items: center;';
        center = document.getElementById(a+"p");
        center.addEventListener('click', (e) => { stater=true;obj=e.target.id ;tasksAdders(obj)});
        while (projects.firstChild) {
            projects.removeChild(projects.lastChild);
        }
    }}`
    return text;
}
export { scriptforproject };