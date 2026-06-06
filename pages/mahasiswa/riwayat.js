function toggleTheme(){

    document.body.classList.toggle(
        "dark-mode"
    );

}

function logout(){

    localStorage.clear();

    window.location.href =
    "../../index.html";

}

const searchInput =
document.getElementById(
"searchInput"
);

searchInput.addEventListener(
"keyup",
function(){

let keyword =
this.value.toLowerCase();

let rows =
document.querySelectorAll(
"#historyTable tbody tr"
);

rows.forEach(row => {

let text =
row.textContent.toLowerCase();

row.style.display =
text.includes(keyword)
? ""
: "none";

});

});

document
.getElementById(
"filterStatus"
)
.addEventListener(
"change",
function(){

let status =
this.value;

let rows =
document.querySelectorAll(
"#historyTable tbody tr"
);

rows.forEach(row => {

let cell =
row.cells[4]
.innerText
.trim();

if(
status === "all" ||
cell === status
){

row.style.display = "";

}else{

row.style.display = "none";

}

});

});