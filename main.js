function _load () {
    //to-do app
    //10 üres mező van alapértelmezésben checkbox, text-in, remove
    //max element szám
    //for ciklus -> 10 div checkbox, input, remove button
    //add button a végére insertadjacenthtml -> afterend
    //add buttonhoz addeventlistener click-re -> új elem a sorhoz
    //remove button -> queryselectorall 
    //for ciklus -> mindegyikre click eseményt adunk

    let root = document.querySelector("#root");
    let maxElement = 10;
    let listElement = `<div class"listElement">
        <input class= "checkbox" type= "checkbox">
        <input class= "text" type="text">
        <button class="delete">Delete</button>
    </div>`;

    for (let index = 0; index < maxElement; index++) {
        root.insertAdjacentHTML("beforeend", listElement);
    }
    let addButton = root.insertAdjacentHTML("afterend", `<button id="add">+</button>`);

    document.querySelectorAll(".removeBtn");

    for (let index = 0; index < rootArray.length; index++) {
    }
}
window.addEventListener("load", _load);
