function js_style(e) {
    let button1 = document.getElementById("button1").value;
    document.querySelector("body").style.backgroundColor = button1;
}

function addItems(e) {
    let newText = document.getElementById("button2").value;
    const newListItem = document.createElement("li");
    document.getElementById("nnm").append(newListItem);
    newListItem.innerText = newText;
}



