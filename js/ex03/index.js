var body = document.getElementById('body');

var couleurs = ['#F2C249', '#E6772E', '#4DB3B3', '#E64A45', '#3D4C53', '#FFFFFF'];

var index = 0;

function changeCouleur () {
    index = index + 1;
    if (index >= couleurs.length) {
        index = 0;
    }
    body.style.backgroundColor = couleurs[index];
}

body.onclick = changeCouleur;