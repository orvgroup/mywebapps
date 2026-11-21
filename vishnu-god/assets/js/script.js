document.addEventListener("DOMContentLoaded", () => {
    // Create divine sparkling stars
    const totalStars = 45;

    for (let i = 0; i < totalStars; i++) {
        const star = document.createElement("div");
        star.className = "star";
        star.textContent = "✦";
        star.style.left = Math.random() * 100 + "vw";
        star.style.top = Math.random() * 100 + "vh";
        star.style.fontSize = (Math.random() * 12 + 6) + "px";
        star.style.animationDelay = Math.random() * 4 + "s";
        star.style.animationDuration = (Math.random() * 3 + 2) + "s";
        document.body.appendChild(star);
    }

    // Gentle divine glow
    const god = document.getElementById("vishnu");
    let glow = 12;
    let increasing = true;

    function divineEffect() {
        if (!god) return;

        if (increasing) glow += 0.15;
        else glow -= 0.15;

        if (glow >= 20) increasing = false;
        if (glow <= 10) increasing = true;

        god.style.filter = `drop-shadow(0 0 ${glow}px #ffcc66)`;
        requestAnimationFrame(divineEffect);
    }

    divineEffect();
});