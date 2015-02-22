var boutonAfficher = document.getElementById('afficher');
var boutonMasquer = document.getElementById('masquer');
var secret = document.getElementById('secret');

function afficher () {
    secret.style.display = "block";
}

function masquer () {
    secret.style.display = "none";
}

boutonAfficher.onclick = afficher;
boutonMasquer.onclick = masquer;