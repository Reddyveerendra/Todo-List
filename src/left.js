import { lefttop } from "./left-top"

function left() {
    const left = document.createElement("div");
    const down = document.createElement("div");
    down.id = "projects";
    left.appendChild(lefttop());
    left.appendChild(down);
    return left;
}
export { left }