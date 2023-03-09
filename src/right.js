function right() {
    const right = document.createElement("div");
    right.id = "right";
    const righttop = document.createElement("div");
    const rightdown = document.createElement("div");
    rightdown.id = "taskadd";
    rightdown.style = "display:grid; grid-template-columns: 1fr 1fr 1fr; gap:20px;"
    righttop.id = "taskslist";
    righttop.style = "display:grid;grid-template-columns:1fr 1fr 1fr 1fr;"
    right.style = "border:1px solid black; padding:4%;";
    right.id = "right";
    right.appendChild(righttop);
    right.appendChild(rightdown);
    return right;
}
export { right };