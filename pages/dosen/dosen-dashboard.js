// Proteksi Role

const role =
localStorage.getItem("role");

if(role !== "dosen"){

    window.location.href =
    "../../index.html";

}

// Ambil Nama Dosen

window.onload = function(){

    const theme =
    localStorage.getItem("theme");

    if(theme === "dark"){
        document.body.classList.add("dark-mode");
    }

    const nama =
    localStorage.getItem("namaDosen");

    if(nama){

        document.getElementById(
            "namaDosen"
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

// Setujui Konsultasi

function approveConsultation(){

    sendNotification(

        "Konsultasi Disetujui",

        "Permintaan konsultasi telah disetujui.",

        "success"

    );

    alert(
        "Konsultasi berhasil disetujui"
    );

}

// Tolak Konsultasi

function rejectConsultation(){

    sendNotification(

        "Konsultasi Ditolak",

        "Permintaan konsultasi ditolak.",

        "danger"

    );

    alert(
        "Konsultasi berhasil ditolak"
    );

}

// Notifikasi

function sendNotification(
    title,
    message,
    status
){

    const notifications =
    JSON.parse(
        localStorage.getItem(
            "notifications"
        )
    ) || [];

    notifications.unshift({

        title,
        message,
        status,

        time:
        new Date().toLocaleString(
            "id-ID"
        )

    });

    localStorage.setItem(

        "notifications",

        JSON.stringify(
            notifications
        )

    );

}

const role =
localStorage.getItem("role");

if(role !== "dosen"){

    window.location.href =
    "../../index.html";

}

// Logout

function logout(){

    localStorage.removeItem("role");

    localStorage.removeItem("namaDosen");

    localStorage.removeItem("nipDosen");

    window.location.replace(
        "../../index.html"
    );

}