import { lefttop } from "./left-top"

function left() {
    const left = document.createElement("div");
    const down = document.createElement("div");
    const center = document.createElement("div");
    down.id = "projects";
    center.id = "center";
    left.appendChild(lefttop());
    left.appendChild(center)
    left.appendChild(down);
    return left;
}
export { left }