let heartCount = 0;

function startHeartRain() {
    const mainContent = document.getElementById("main-content");
    mainContent.innerHTML = "<h1 class='vintage-font'>FELIZ CUMPLEAÑOS PATRICIA</h1>";
    
    heartRainEffect();
    
    setTimeout(() => {
        displayMessagesForPatricia();
    }, 5000);
}

function heartRainEffect() {
    const heartContainer = document.createElement("div");
    heartContainer.style.position = "fixed";
    heartContainer.style.top = 0;
    heartContainer.style.left = 0;
    heartContainer.style.width = "100%";
    heartContainer.style.height = "100%";
    heartContainer.style.pointerEvents = "none";
    document.body.appendChild(heartContainer);

    for (let i = 0; i < 100; i++) {
        const heart = document.createElement("div");
        heart.innerText = "❤️";
        heart.className = "heart-rain";
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.animationDelay = `${Math.random() * 2}s`;
        heart.style.fontSize = `${Math.random() * 2 + 1}em`;
        heartContainer.appendChild(heart);
    }
}

function displayMessagesForPatricia() {
    const mainContent = document.getElementById("main-content");
    mainContent.innerHTML = `
        <div>
            <h2 class="vintage-font">Eres la luz de mi vida, Patricia.</h2>
            <h2 class="vintage-font">Te amo más de lo que las palabras pueden expresar.</h2>
            <h2 class="vintage-font">Cada día contigo es una bendición.</h2>
            <h2 class="vintage-font">Gracias por ser mi compañera, mi amor y mi mejor amiga.</h2>
            <h2 class="vintage-font">Tu sonrisa ilumina mis días y tu amor llena mi corazón.</h2>
        </div>
        <div id="heart-container">
            <div id="heart" onclick="goToCunadita()">❤️</div>
        </div>
    `;
}

function goToCunadita() {
    const mainContent = document.getElementById("main-content");
    mainContent.classList.remove('salmon-bg');
    mainContent.classList.add('yellow-bg');
    mainContent.innerHTML = `
        <div>
            <h1 class="vintage-font">Para mi cuñadita también</h1>
            <h2 class="vintage-font">Feliz cumpleaños cuñadita</h2>
            <h3 class="vintage-font">Eres una persona increíble, y estoy tan feliz de ser parte de tu vida.</h3>
            <h3 class="vintage-font">Gracias por ser una hermana maravillosa y por siempre apoyar a Patricia y a mí.</h3>
            <h3 class="vintage-font">Te deseo un día lleno de alegría y un año lleno de amor.</h3>
        </div>
        <div id="heart-container">
            <div id="heart" onclick="showFinalMessage()">❤️</div>
        </div>
    `;
}

function showFinalMessage() {
    const mainContent = document.getElementById("main-content");
    mainContent.innerHTML = `
        <div id="final-message">
            <h1 class="vintage-font">Te amo Paty</h1>
        </div>
    `;

    document.getElementById("final-message").onclick = () => {
        document.getElementById("final-message").style.fontSize = 
            `${parseInt(document.getElementById("final-message").style.fontSize || 40) + 10}px`;
    };
}
