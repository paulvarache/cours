var proposition = document.getElementById('proposition');
var bouton = document.getElementById('bouton');
var progression = document.getElementById('progression');
var solution = Math.floor(Math.random() * 100);

function verifier () {
    var nombrePropose = proposition.value;
    if (solution > nombrePropose) {
        progression.innerHTML = progression.innerHTML + "<p>Le nombre est plus grand que " + nombrePropose + "</p>";
    } else if (solution < nombrePropose) {
        progression.innerHTML = progression.innerHTML + "<p>Le nombre est plus petit que " + nombrePropose + "</p>";
    } else {
        progression.innerHTML = progression.innerHTML + "<p>Bravo, vous avez trouvé, le nombre était bien " + solution + "</p>";
    }
}

bouton.onclick = verifier;