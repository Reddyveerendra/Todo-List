import { left } from "./left";
import { right } from "./right";
function main() {
    const main = document.createElement("div");
    main.style = "grid-template-columns: 1fr 3fr;display: grid;background: url(https://raw.githubusercontent.com/Reddyveerendra/Todo-List/main/images/main.png) 0% 0% / cover no-repeat;";
    main.appendChild(left());
    main.appendChild(right());
    return main;
}
export { main };