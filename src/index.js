import { header } from "./header";
import { footer } from "./footer";
import { main } from "./main";
const body = document.querySelector("body");
body.style = "display:grid; grid-template-rows:1fr 11fr 1fr;display: grid;grid-template-rows: 1fr 9fr 1fr;height: 100vh;margin: 0px; margin:0px;";
body.appendChild(header());
body.appendChild(main());
body.appendChild(footer());