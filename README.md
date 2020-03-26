# Welcome to StackEdit!

## Exercice 1 : l'objet Document

### La propriété document.title

#### Quel sera l'évenement qui déclanchera l'appelle de votre fonction ?
La fonction `defTitre()` est appelée par la foction `init()` qui est appelée par l'évenelent `onload` placé sur le `body`.

#### Quelle méthode avez-vous utilisée pour récupérer l’objet représentant votre balise h1 ?
```js
document.getElementById('titre')
```

#### Quelle propriété de l’objet représentant votre balise h1 avez-vous utilisée pour récupérer le texte de celui-ci ?
Pour récupérer le texte de la balise h1, j'ai utilisé la propriété `innerText`.

#### Quelle(s) méthode(s) avez-vous utilisée pour récupérer l’objet représentant votre balise h2 ?
```js
document.getElementsByTagName('h2')
```

#### Comment faire pour connaitre le nombre de balise h2 du document ?
La fonction `getElementByTagName()` retourne un tableau. Pour connaitre le nombre de `h2`, il suffit donc de compter le nombre d'élément dans le tableau grâce à la propriété `length`.

#### Quelle méthode avez-vous utilisée pour récupérer l’objet de votre classe ?
```js
document.getElementsByClassName('firstOrLast')
```

#### Quant est-il avec Internet Explorer ?
Inter quoi????

#### Comment avez-vous déterminé si un nombre est pair ?
Pour savoir si un nombre est pair, il suffit de savoir si 2 est un de ses diviseur en utilisant modulo (`%`).

### Les propriétés innerHTML, innerText, outerHTML, outerText et textContent

#### Quelles différences existe-t-il entre les 5 propriétés de cette section ?

#### Y a-t-il une différence avec Internet Explore, FireFox et d’autres navigateurs à votre disposition concernant ces propriétés ?

### La propriété document.lastModified

#### Comment modifier votre code pour qu’il permette de sélectionner le 1er auteur de la liste ?
On récupère un tableau d'auteur. Dans ce cas, il suffit de prendre le premier élément.

Exemple :
```js
let authors = ['toto', 'titi', 'tutu']
console.log(authors[0]) // toto
```

#### Même question avec le dernier auteur de la liste.
On récupère un tableau d'auteur. Dans ce cas, il suffit de prendre le dernier élément en fonction de la taille du tableau.

Exemple :
```js
let authors = ['toto', 'titi', 'tutu']
console.log(authors[authors.lenght - 1]) // tutu
```

## Exercice 2 : l'objet Date

#### Comment obtenez-vous le nombre de jours ?
On soustrait la date actuelle à la date à venir. On obtient une durée en miliseconde.

Il suffit de diviser ce résultat par 1000 pour avoir des secondes, puis par 3600 pour avoir des heures enfin par 24 pour obtenir des jours. On oublira pas d'arrondir le résultat pour avoir un nombre de jours fini et non décimal.

Exemple : 
```js
days = Math.floor((finish - actual) / 1000 / 3600 / 24)
```

#### Comment faites-vous la mise à jour du texte ?
En modifiant la propriété `innerText`.

### setInterval et setTimeout

#### Laquelle des deux méthodes de window avez-vous utilisé ? Pourquoi
Je vais utiliser la propriété `setInterval` car la fonction `setTimeout` permet de mettre un delais entre le moment où la fonction est appelée et le moment où elle est exécutée.

## Exercice 3 : HTML, CSS et JavaScript

### Champ Texte et Couleur d'arrière-plan

#### Quel évènement avez-vous utilisé ?
J'ai ecouté l'évènement `keyup`.

```js
let colorInput = document.getElementById('colorInput')  
colorInput.addEventListener('keyup', () => {  
  // some code here  
})
```

#### Comment avez-vous fait changer la couleur du champ texte ?
Pour modifier la couleur de l'input, j'ai modifié la classe de l'élément grace à la propriété `className`.

Exemple :
```js
colorInput.className = 'blanc'
```
