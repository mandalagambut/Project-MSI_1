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

const photoInput =
document.getElementById(
"photoInput"
);

const profilePreview =
document.getElementById(
"profilePreview"
);

photoInput.addEventListener(
"change",
function(){

const file =
this.files[0];

if(file){

const reader =
new FileReader();

reader.onload =
function(e){

profilePreview.src =
e.target.result;

};

reader.readAsDataURL(file);

}

});