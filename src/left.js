import { top } from "./left-top";
import { down } from "./left-down";
function left() {
    const left = document.createElement("div");
    left.id = "left";
    left.style = "display:grid; gap:10px;border-right-style: solid;";
    left.appendChild(top())
    left.appendChild(down())
    return left;
}
export { left };