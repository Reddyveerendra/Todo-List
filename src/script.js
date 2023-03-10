function script() {
    const script = document.createElement("script");
    const scriptleft = `
    var editor=false;
    var edit_Value;
    function menu() {
        const menu = document.getElementById("menu");
        const div = document.createElement("div");
        div.style = "flex-direction: column; display: flex; background: lemonchiffon; border: 2px solid red; gap: 8px;"
        const label = document.createElement("label");
        label.textContent = "Enter Project Name";
        const input1 = document.createElement("input");
        input1.style = "width: 80px;";
        input1.id = "inputName";
        input1.type = "text";
        const input2 = document.createElement("input");
        input2.type = "button";
        input2.value = "submit";
        if(editor==true){
            input1.value=edit_Value;
        }
        input2.setAttribute("onclick", "newProject()");
        div.appendChild(label);
        div.appendChild(input1);
        div.appendChild(input2);
        menu.appendChild(div);
    }
    function newProject(){
        const a=document.getElementById("inputName").value;
        if(a!=""){
            if(editor==true){
                localStorage.setItem(a,"");
                Delete(edit_Value);
                editor=false;
            }
            else{
                localStorage.setItem(a,"");
            }
                location.reload();
        }
    }
    for(let key in localStorage) {
        if (!localStorage.hasOwnProperty(key)) {
            continue;
        }
        project_list(key);
  }
    function project_list(a) {
        const div = document.createElement("div");
        const div2 = document.createElement("div");
        const b1 = document.createElement("input");
        const b2 = document.createElement("input");
        b1.setAttribute("type", "button");
        b2.setAttribute("type", "button");
        b1.value = "Edit";
        b2.value = "Delete";
        div2.appendChild(b1);
        div2.appendChild(b2);
        div2.style = "display:flex;";
        b1.id = a;
        b2.id = a;
        const p = document.createElement('p');
        p.classList = a + "p";
        p.id = a;
        b1.setAttribute("onclick", "Edit(id)");
        b2.setAttribute("onclick", "Delete(id)");
        p.style = "margin: 0;width: 100%;height: inherit;padding: px;text-align: center;padding: 0px;"
        const d = document.getElementById('projects');
        p.textContent = a;
        div.appendChild(p);
        div.appendChild(div2);
        d.appendChild(div);
        div.id = a;
        const c="."+a+"p";
        div.style = 'padding: 2px;background-color: lightskyblue;margin: 6px;border: 5px solid red;display: flex;flex-direction: column;align-items: center;';
        center = document.querySelector(c);
        center.addEventListener('click', (e) => { stater = true; obj = e.target.id; tasksAdders(obj) });
        const menu =document.getElementById("menu");
        while (menu.firstChild) {
            menu.removeChild(menu.lastChild);
        }
    }
    function Delete(e){
        localStorage.removeItem(e);
        location.reload();
    }
    function Edit(e){
        editor=true;
        edit_Value=e;
        menu();
    }
    `;
    const scriptright = `
    function tasks(e){
        const main=document.getElementById("taskadd");
        const div = document.createElement("div");
        div.style="height: auto; width: auto; flex-direction: column; display: flex; background: lemonchiffon; border: 2px solid red;"
        const label1 = document.createElement("label");
        const label2 = document.createElement("label");
        label1.textContent="Enter Task Name";
        label2.textContent="Enter Task priority";
        const select = document.createElement("select");
        select.style="height: auto; width: 124px; flex-direction: column; display: flex; border: 2px solid red;"
        const option1 = document.createElement("option");
        const t1 = document.createTextNode("HIGH");
        option1.appendChild(t1);
        option1.value="HIGH";
        const option2 = document.createElement("option");
        const t2 = document.createTextNode("MEDIUM");
        option2.appendChild(t2);
        option2.value="MEDIUM";
        const option3 = document.createElement("option");
        const t3 = document.createTextNode("LOW");
        option3.appendChild(t3);
        option3.value="LOW";
        select.appendChild(option1);
        select.appendChild(option2);
        select.appendChild(option3);
        const input=document.createElement("input");
        input.style="width: 80px;";
        input.type="text";
        input.id="inp";
        select.id="sel";
        const label3 = document.createElement("label");
        label3.textContent="Please Enter Due Date";
        const input2=document.createElement("input");
        input2.type="date"
        input2.id="due";
        const button=document.createElement("input");
        button.type="button";
        button.value="submit";
        button.setAttribute("onclick","newtask()")
        div.appendChild(label1);
        div.appendChild(input);
        div.appendChild(label2);
        div.appendChild(select);
        div.appendChild(label3);
        div.appendChild(input2);
        div.appendChild(button);
        div.id=obj+"win";
        main.appendChild(div);
        stater=false;
        let item=document.getElementById("taskslist");
        while (item.firstChild) {
            item.removeChild(item.lastChild);
        }
        const s=localStorage[obj];
        const arr=s.split(",");
        for(let i=0;i<arr.length;i++){
            let sample=arr[i].split("|");
            let input=sample[0];
            let select=sample[1];
            let due=sample[2];
            const div=projectTask(input,select,due);
            item.appendChild(div);
        }
    }
    var stater=false;
    var obj="";
    function tasksAdders(obj){
        if(stater==true){
            tasks(obj);
        }
        else{
            alert("select project first");
        }
    }
    var Statement=true;
    function newtask() {
        const input=document.getElementById("inp").value;
        const select=document.getElementById("sel").value;
        const due=document.getElementById("due").value;
        const New=input+"|"+select+"|"+due;
        const a=localStorage;
        const b=Object.values(a);
        let t=[];
        for(let i=0;i<b.length;i++){
            const s=b[i].split(",");
            t=t.concat(s);
        }
        if(t.indexOf(New)!=-1){
            alert("task already exits");
            return;
        }
        console.log(t)
        const old=localStorage[obj];
        if(old!=""){
            localStorage[obj]=old+","+New;
        }
        else{
            localStorage[obj]=New;
        }
        let item=document.getElementById("taskslist");
        while (item.firstChild) {
            item.removeChild(item.lastChild);
        }
        const s=localStorage[obj];
        const arr=s.split(",");
        console.log(arr)
        for(let i=0;i<arr.length;i++){
            let sample=arr[i].split("|");
            let input=sample[0];
            let select=sample[1];
            let due=sample[2];
            const div=projectTask(input,select,due);
            item.appendChild(div);
        }
        const wins=document.getElementById("taskadd");
            wins.removeChild(wins.lastChild);
    }
    function projectTask(input,select,due){
        const p3=document.createElement("p");
        const p1=document.createElement("p");
        const p2=document.createElement("p");
        const div=document.createElement("div");
        const div2=document.createElement("div");
        p1.textContent="Task"+" : "+input;
        p2.textContent="Task priority"+" : "+select;
        p3.textContent="Due Date"+" : "+due
        div2.style="display:flex;";
        const button =document.createElement("input");
        button.value="uncompleted";
        button.id=input;
        div.id=input;
        button.type="button";
        div2.appendChild(p1);
        button.setAttribute("onclick","changeStatement(id)");
        div.appendChild(div2);
        div.appendChild(p2);
        div.appendChild(p3);
        div.appendChild(button);
        div.style="margin: 6px;padding: 2px; background-color: lightskyblue; display: flex; flex-direction: column; align-items: center; width:170px;"
        if(select=="HIGH"){
            div.style.border="5px solid red";
        }
        else if(select=="LOW"){
            div.style.border="5px solid green";
        }
        else{
            div.style.border="5px solid Orange";
        }
        return div;
    }
    function changeStatement(e){
        console.log(e)
        const button=document.getElementById(e);
        if(Statement==true){
            button.style.textDecoration="line-through";
            button.lastElementChild.value="completed";
            Statement=false;
        }
        else{
            button.style.textDecoration="none";
            button.lastElementChild.value="uncompleted";
            Statement=true;
        }
    }
    function all(){
        let item=document.getElementById("taskslist");
        while (item.firstChild) {
            item.removeChild(item.lastChild);
        }
        const a=localStorage;
        const b=Object.values(a);
        for(let i=0;i<b.length;i++){
            const s=b[i];
            const arr=s.split(",");
            for(let i=0;i<arr.length;i++){
            let sample=arr[i].split("|");
            let input=sample[0];
            let select=sample[1];
            let due=sample[2];
            const div=projectTask(input,select,due);
            item.appendChild(div);
        }
        }
    }
    `;
    script.textContent = `
    console.log("hi i am working");
    ${scriptleft}
    ${scriptright}
    `
    var arr = [];
    return script;
}
export { script };