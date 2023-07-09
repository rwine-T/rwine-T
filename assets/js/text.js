const textElement = document.getElementById('text');
const text = 'Bonjour, bienvenue sur mon site !';
let index = 0;

function displayText() {
    if (index < text.length) {
        textElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(displayText, 80); // Définit la vitesse de l'affichage ici (en millisecondes)
    } else {
        document.getElementById('enter').style.display = 'block';
    }
}

function redirectToSite() {
    // Rediriger vers votre site ici
    window.location.href = '#accueil';
}

displayText();
