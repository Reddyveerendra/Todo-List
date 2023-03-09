import { left } from "./left";
import { right } from "./right";
function main() {
    const main = document.createElement("div");
    main.style = "grid-template-columns: 1fr 5fr;display: grid;background: url(https://raw.githubusercontent.com/Reddyveerendra/Todo-List/main/images/main.png); gap:8px;";
    main.appendChild(left());
    main.appendChild(right());
    main.id = "main";
    return main;
}
export { main };