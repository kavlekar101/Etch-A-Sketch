const container = document.querySelector("#container");

let total = 16;
let num = 1 / total * 100;
const div = document.createElement("div");
div.classList.add('row');
div.style.cssText = 'height:' + num + '%; width: 100%'; 
for (let j = 0; j < total * total; j++) {
    const divCol = document.createElement("div");
    divCol.classList.add('col');
    divCol.style.cssText = 'height: 100%; width: '+ num +'%; + border: 5px;'; 
    div.appendChild(divCol);
}
container.appendChild(div);