import { header } from "./header";
import { footer } from "./footer";
import { main } from "./main";
import { script } from "./script";
const body = document.querySelector(".content");
const html = document.querySelector("html");
body.style = "display:grid; grid-template-rows:1fr 11fr 1fr;display: grid;grid-template-rows: 1fr 9fr 1fr;height: 100vh;margin: 0px;";
body.appendChild(header());
body.appendChild(main());
body.appendChild(footer());
body.appendChild(script());
const items = document.querySelectorAll(".items");
function taskFinder(e) {
    if (e.target.id == "addProject") {
        menu();
    }
    else {
        all();
    }

}
items.forEach(item => item.addEventListener("click", taskFinder));