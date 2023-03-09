function down() {
    const down = document.createElement("div");
    const menu = document.createElement("div");
    const projects = document.createElement("div");
    menu.id = "menu";
    projects.id = "projects";
    down.appendChild(projects);
    down.appendChild(menu);
    down.id = "left-down";
    return down;
}
export { down };
