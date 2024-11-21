let btn = document.getElementById("btn-display");
let list = document.getElementById("archive-list");

function GetArchive() {
    return null;
}

function ReadArchive() {
    let archive = GetArchive();

    window.alert("Reading Archive");
}

btn.addEventListener("click", ReadArchive)