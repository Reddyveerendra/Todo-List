function right() {
    const right = document.createElement("div");
    const righttop = document.createElement("div");
    const rightdown = document.createElement("div");
    rightdown.id = "taskadd";
    rightdown.style = "display:grid; grid-template-columns: 1fr 1fr 1fr; gap:20px;"
    righttop.id = "taskslist";
    right.style = "border:1px solid black; padding:4%;";
    right.id = "right";
    const script = document.createElement("script");
    script.textContent = `function tasks(e){
        const main=document.getElementById("taskadd");
        console.log(e);
        const div = document.createElement("div");
        div.style="height: 100px; width: 124px; flex-direction: column; display: flex; background: lemonchiffon; border: 2px solid red; gap: 20px;"
        const label = document.createElement("label");
        label.textContent="Enter Task Name";
        const input=document.createElement("input");
        input.style="width: 80px;";
        input.type="text";
        const button=document.createElement("input");
        button.type="button";
        button.value="submit";
        div.appendChild(label);
        div.appendChild(input);
        div.appendChild(button);
        main.appendChild(div);
    }
    `;
    right.appendChild(righttop);
    right.appendChild(rightdown);
    right.appendChild(script);
    return right;

}
export { right };