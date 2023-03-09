function top() {
    const top = document.createElement("div");
    top.id = "left-top";
    const div1 = document.createElement("div");
    const div2 = document.createElement("div");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const add = document.createElement("button");

    add.style = "width: 25px;height: 19px;align-self: center;/* font: icon; *//* text-align: right; */font-size: 15px;align-items: center;";
    add.textContent = "+";
    p1.textContent = "All projects";
    p2.textContent = "Projects";
    p2.style = "margin:0px;"
    div1.appendChild(p1);
    p1.style = "box-shadow: 5px 5px;padding: auto; margin: 0;background:#DAF0F7";
    div2.appendChild(p2);
    div2.style = "display: flex;gap: 1px;box-shadow: 5px 5px; margin: 0; background:#DAF0F7; border-bottom: 1px solid orange;";
    div2.appendChild(add);
    top.appendChild(div1);
    top.appendChild(div2);
    p1.className = "items";
    add.className = "items";
    p1.id = "allProjects";
    p2.className = "items";
    p2.id = "addProject";
    add.id = "addProject";
    top.style =
        `border-bottom: 4px solid orange;display: flex;flex-direction: column;gap: 15px;padding: 15px;align-items: center;`;
    return top;
}
export { top };