function footer() {
    const footer = document.createElement("footer");
    footer.style = "text-align: center; color: black; background-color: steelblue";
    const a = document.createElement("a");
    a.href = "https://github.com/Reddyveerendra";
    a.style = "color: black; font-size: larger;";
    a.textContent = "Created by Reddy Veerendra";
    footer.appendChild(a);
    return footer;
}
export { footer };