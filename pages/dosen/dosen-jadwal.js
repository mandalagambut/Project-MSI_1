function finishConsultation(button){

    const card =
    button.closest(".schedule-card");

    card.style.opacity = "0.6";

    button.innerText = "Selesai ✓";

    button.disabled = true;

    alert(
        "Konsultasi berhasil diselesaikan"
    );

}