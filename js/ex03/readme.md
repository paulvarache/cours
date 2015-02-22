Exercice 3
==================================================

Le but de l'exercice va être de créer une page web dont la couleur de fond change à chaque fois que l'on clique.

Résultat attendu:

![](https://raw.githubusercontent.com/paulvarache/cours/master/js/ex03/demo01.gif)


###Connaissances nécessaires
- Sélectionner un élément HTML √
- Détecter le clic sur un bouton √
- Changer la couleur de fond d'un élément
- Accéder à un élément d'une liste

####Changer la couleur de fond d'un élément

Comme à chaque fois que l'on veut changer l'esthétisme d'un élément en javascript, on va modifier une propriété du `style` de cet élément. La propriété à changer cette fois ci et `backgroundColor`

*Exemple: *

```css
    .fondRouge {
        background-color: red;
    }
```

```html
    ...
    <div id="aChanger" class="fondRouge"></div>
    ...
```

```js
    var aChanger = document.getElementById('aChanger');
    aChanger.style.backgroundColor = "blue"; // le fond sera maintenant bleu
```

####Accéder à un élément d'une liste

Une liste en javascript se déclare de cette manière:

```js
    var liste = ['element1', 'element2', 'element3'];
```

Chaque élément de cette liste va avoir un index. Pour 'element1' ce sera 0, pour 'element2' ce sera 1, etc...

On peut récupérer un élément de cette liste grâce à son index que l'on donne entre crochets. Si je veux le Deuxième élément je fait:

```js
    // On considère que ma liste est déja déclarée
    var deuxieme = liste[1]; // Ici on met '1' car le compte commence à 0
```

##Fonctionnement

Attention, pour que cela fonctionne, il faut que les éléments html et body ai une hauteur de 100% et une largeur de 100%:

```css
    html, body {
        width: 100%;
        height: 100%;
    }
```

Tout d'abord on récupère le seul élément dont on va avoir besoin
- L'élément body

Ensuite on déclare une liste contenant des couleurs comme celle ci par exemple:

```js
    var couleurs = ['#F2C249', '#E6772E', '#4DB3B3', '#E64A45', '#3D4C53', '#FFFFFF'];

```
Il nous faut aussi une variable qui va garder l'index de la couleur actuelement utilisée. Elle sera initialisée à 0 et augmentée de 1 à chaque clic.

On déclare une fonction qui sera executée à chaque clic. Cette fonction augmentera d'abord l'index de la couleur actuelle (passant ainsi à la couleur suivante). puis changera la couleur de fond de l'élément body.

Etat initial

```
index ==> 0 ==> #F2C249
          1 ==> #E6772E
          ...
```

Lorsque l'on clique, on augmente l'index, passant ainsi à la couleur suivante

```
          0 ==> #F2C249
index ==> 1 ==> #E6772E
          ...
```

Attention, il faut aussi que lorsque l'on arrive à la fin de la liste on recommence au début. Pour cela, il faut vérifier après avoir augmenté l'index que celui-ci soit bien inférieur à la taille de la liste. Si il est supérieur ou bien égal, on le repassra alors à 0

Lorsque je clique, si on est au bout de la liste

```
          ...
          4 ==> ##3D4C53
index ==> 5 ==> #FFFFFF
```

On remet index à 0 pour revenir à cet état: 

```
index ==> 0 ==> #F2C249
          1 ==> #E6772E
          ...
```

Bien sur il ne faut pas oublier d'associer la fonction avec le clic sur l'élément body.

####Bonus

Pour avoir un bel effet de transition, ajouter ceci au css du body:

```css
    -webkit-transition: background-color linear 300ms;
    transition: background-color linear 300ms;
``
