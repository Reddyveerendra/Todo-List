
function scriptforproject() {
    const text = `function newProject(){
    const a = document.getElementById('inputName').value;
    if (a !== '') {
        const p = document.createElement('p');
        p.classList = 'project';
        p.id = a;
        
        const div = document.getElementById('center');
        p.textContent = document.getElementById('inputName').value;
        div.appendChild(p);
        p.style = 'margin: 0%;padding: 11px;background-color: lightskyblue;margin: 10px;border: 7px solid red;';
        center = document.getElementById(a);
        console.log(center);
        console.log(a);
        center.addEventListener('click', (e) => { alert(e.target.id) });
        while (projects.firstChild) {
            projects.removeChild(projects.lastChild);
        }
    }}`
    return text;
}
export { scriptforproject };