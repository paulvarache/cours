Exercice 1
==================================================

Le but de l'exercice va être de créer une page web racontant l'histoire d'un film, ou d'une série. Pour que la page ne gâche pas la fin du film/série, avant le poitn important de l'histoire, il y aura deux boutons. Un premier bouton "Afficher" qui affichera la suite. Un second bouton "Masquer" qui permettra de masquer la fin de l'histoire une fois celle-ci affichée.

Résultat attendu:

![](https://raw.githubusercontent.com/paulvarache/cours/master/js/ex01/demo01.gif)


###Connaissances nécessaires
- Sélectionner un élément HTML
- Afficher, masquer un élément HTML
- Détecter le clic sur un bouton

####Sélectionner un élément HTML

Pour séléctionner un élément HTML en javascript, on peut utiliser la fonction `getElementById` de la variable `document`. En lui donnant l'`id` de l'élément à selectionner, cette fonction permet ensuite de pouvoir modifier TOUTES les propriétés de cet élément.

*Exemple:*

```html
    ...
    <img id="photo" src="images/photo.png" />
    ...
```

```js
    var photo = document.getElementById('photo');
```

####Afficher, masquer un élément HTML

Pour afficher ou bien masquer un élément HTML, on va modifier une de ses propriétés CSS: display. Si `display` vaut `none`, l'élément ne sera pas visible, par contre si il vaut `block`, il le sera.

Pour changer une propriété CSS en javascript, on accède à l'attribut `style`.

*Exemple: *

```js
    // La variable photo contient un élément que j'ai récupéré précemment
    photo.style.width = "50px";     // Equivaut à un 'width: 50px' en CSS
    photo.style.height = "50px";    // Equivaut à un 'height: 50px' en CSS
    photo.style.display = "block";  // Equivaut à un 'display: block' en CSS
```


####Détecter le clic sur un bouton

Pour détecter le clic sur un bouton (ou n'importe quel élément HTML), il suffit d'affecter une fonction à l'attribut `onclick` de cet élément.


*Exemple: *

```html
    ...
    <button id="monBouton">Bouton</button>
    ...
```

```js
    // Récupération du bouton
    var bouton = document.getElementById('monBouton');
    // Définition d'une fonction à éxecuter lors du clic
    function clic () {
        console.log('Clic detecté');
    }
    // Affectation de la fonction au clic du bouton
    bouton.onclick = clic;       // Ici on donne le nom de la fonction
```
