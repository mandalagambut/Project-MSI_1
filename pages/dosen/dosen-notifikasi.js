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