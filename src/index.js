import { header } from "./header";
import { footer } from "./footer";
import { main } from "./main";
const body = document.querySelector("body");
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
        const button = document.createElement("button");
        button.textContent = "submit";
        name.setAttribute("type", "text");
        const label = document.createElement("label");
        label.textContent = "enter project name";
        name.style = "width:80px;"
        data.style = "height: 100px;flex-direction: column;width: 124px;display: flex;align-self: auto;border: 2px solid red; gap:20px;";
        data.appendChild(label);
        data.appendChild(name);
        data.appendChild(button);
        div.appendChild(data);
    }
}
console.log(items);
items.forEach(item => item.addEventListener("click", handleclick));