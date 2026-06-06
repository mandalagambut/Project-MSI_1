function toggleTheme(){

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        localStorage.setItem("theme","dark");
    }else{
        localStorage.setItem("theme","light");
    }

}

window.onload = function(){

    const theme = localStorage.getItem("theme");

    if(theme === "dark"){
        document.body.classList.add("dark-mode");
    }

}

const role =
localStorage.getItem("role");

if(role !== "admin"){

    window.location.href =
    "../../index.html";

}

function logout(){

    localStorage.removeItem("role");

    localStorage.removeItem("namaAdmin");

    localStorage.removeItem("nipAdmin");

    window.location.replace(
        "../../index.html"
    );

}

