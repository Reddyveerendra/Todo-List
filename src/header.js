function header() {
    const header = document.createElement("header");
    const h1 = document.createElement("h1");
    h1.textContent = "☑️ Todo List";
    h1.style = "text-align:center; margin:0px;";
    header.appendChild(h1);
    header.style = "background:steelblue; margin:0px;";
    return header;
}
export { header };