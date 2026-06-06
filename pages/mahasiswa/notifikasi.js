function markAllRead(){

    const notifications =
    document.querySelectorAll(
        ".notification-card.unread"
    );

    notifications.forEach(item => {

        item.classList.remove(
            "unread"
        );

    });

    alert(
        "Semua notifikasi telah dibaca."
    );

}

function logout(){

    localStorage.clear();

    window.location.href =
    "../../index.html";

}

function toggleTheme(){

    document.body.classList.toggle(
        "dark-mode"
    );

}