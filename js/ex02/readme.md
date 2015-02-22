Exercice 2
==================================================

Le but de l'exercice va être de créer un jeu du type "Plus grand ou plus petit". Un nombre aléatoire est choisi entre 0 et 100. Le joueur fait une proposition et la page lui indique si le nombre à trouver est plus petit ou plus grand jusqu'à ce qu'il soit trouvé.

Résultat attendu:

![](https://raw.githubusercontent.com/paulvarache/cours/master/js/ex02/demo01.gif)


###Connaissances nécessaires
- Sélectionner un élément HTML √
- Détecter le clic sur un bouton √
- Générer un nombre aléatoire
- Récupérer la valeur d'un champ
- Mettre à jour le contenu d'un élément HTML

####Générer un nombre aléatoire

Pour cet exercice, nous n'allons pas détailler le fonctionnement. Sachez juste que pour récupérer un nombre entier aléatoire entre 0 et 100 on écrit:

```js
    var alea = Math.floor(Math.random() * 100);
```

####Récupérer la valeur d'un champ

La valeur d'un champ HTML se récupère via son attribut `value`

*Exemple: *

Si j'ai un champ comme suit:

![](https://raw.githubusercontent.com/paulvarache/cours/master/js/ex02/img01.png)

Alors je peux récupérer sa valeur avec:

```js
    // J'ai récupéré le champ HTML précedemment dans la variable 'champ'
    var valeur = champ.value; // valeur vaudra 'Bleu'
```

####Mettre à jour le contenu d'un élément HTML

Pour mettre à jour le contenu d'un élément HTML, on va modifier sa propriété `innerHTML`.

*Exemple: *

```html
    ...
    <div id="conteneur">Je suis normal</div>
    ...
```
```js
    var conteneur = document.getElementById('conteneur');
    conteneur.innerHTML = "J'ai été modifié"; // Va changer le contenu de l'élément
```

Cet exemple remplace le contenu de l'élément, si on veut y ajouter quelque chose on fera:

```js
    conteneur.innerHTML = conteneur.innerHTML + " ajouté après coup"; // On met bout à bout l'ancien contenu de l'élément et ce que l'on veut rajouter 
```

On peut aussi y mettre du HTML, par exemple:

```js
    conteneur.innerHTML = conteneur.innerHTML + "<p>Element 'p' ajouté</p>"; // Ajoute un élémént 'p' au conteneur
```

##Fonctionnement de l'application

Tout d'abbord, on va récupérer les élément dont on a besoin:
- Le champ contenant la proposition
- Le bouton
- La `div` qui va afficher la progression du joueur

Et créer une variable contenant un nombre aléatoire

Ensuite il faut une fonction qui sera éxecutée à chaque fois que le joueur appui sur le bouton.

Cette fonction recupérera la valeur du champ contenant la proposition, puis la comparera au nombre aléatoire.

Si le nombre proposé est plus grand que le nombre aléatoire, on ajoute "Le nombre est plus petit que " suivit du nombre proposé, dans la `div`de progression

Pareillement, si le nombre proposé est cette fois plus petit que le nombre aléatoire, on ajoute "Le nombre est plus grand que " suivit du nombre proposé, dans la `div`de progression

Et finalement si les nombres sont égaux, on ajoute un message indiquant au joueur qu'il a gagné.

Bien sur il ne faut pas oublier d'associer cette fonction au clic sur le bouton.