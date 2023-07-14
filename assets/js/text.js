const textElement = document.getElementById('text');
const text = 'Here s a little song I wrote
You might want to sing it note for note
Don t worry, be happy '
In every life we have some trouble…';
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
