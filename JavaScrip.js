document.addEventListener("DOMContentLoaded", () => {
    const inputs = document.querySelectorAll(".input-field");
    const registerBtn = document.querySelectorAll(".button")[0];

    registerBtn.addEventListener("click", () => {
        const name = inputs[0].value.trim();
        const age = inputs[1].value.trim();
        const nickname = inputs[2].value.trim();
        const password = inputs[3].value.trim();

        if (name && age && nickname && password) {
            const playerData = {
                name,
                age,
                nickname,
                password,
                results: [] // vieta, kur glabās spēļu rezultātus
            };

            localStorage.setItem("currentUser", nickname);
            localStorage.setItem(`user_${nickname}`, JSON.stringify(playerData));

            alert("Reģistrācija veiksmīga!");
            window.location.href = "start.html";
        } else {
            alert("Lūdzu, aizpildi visus laukus!");
        }
    });
});
