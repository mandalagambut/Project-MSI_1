// Proteksi Role

const role =
localStorage.getItem("role");

if(role !== "mahasiswa"){

    window.location.href =
    "../../index.html";

}

// Load Theme + User

window.onload = function(){

    const theme =
    localStorage.getItem("theme");

    if(theme === "dark"){

        document.body.classList.add(
            "dark-mode"
        );

    }

    const nama =
    localStorage.getItem(
        "namaMahasiswa"
    );

    if(nama){

        document.getElementById(
            "namaMahasiswa"
        ).innerText = nama;

    }

}

// Dark Mode

function toggleTheme(){

    document.body.classList.toggle(
        "dark-mode"
    );

    if(
        document.body.classList.contains(
            "dark-mode"
        )
    ){

        localStorage.setItem(
            "theme",
            "dark"
        );

    }else{

        localStorage.setItem(
            "theme",
            "light"
        );

    }

}

const role =
localStorage.getItem("role");

if(role !== "mahasiswa"){

    window.location.href =
    "../../index.html";

}

// Logout

function logout(){

    localStorage.removeItem("role");

    localStorage.removeItem("namaMahasiswa");

    localStorage.removeItem("nimMahasiswa");

    window.location.replace(
        "../../index.html"
    );

}