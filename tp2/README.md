# TP2

## Exercice 1 : Les évènements

### Sélection d’un objet
```js
document.body.addEventListener("click", selection2);
```

On a mis en place un listener sur le `body`. Ce listener écoute l'evenement `click` pour lancer la fonction `selection2`.

`currentTarget` réfère l'élément sur lequel est écouté l'évenement. Ici `body`.

`target` réfère l'élément sur lequel s'est passé l'évenement.

### Insertion d’objets

J'ai créé les différents éléments contenus par la `div` ainsi que la `div` grace à la fonction `createElement()`.

Je les ai ensuite ajouté à la `div` grace à la fonction `appendChild()`.

Pour que la sélection ignore la `div` avec l'`id = frameInsert`, j'ai fait une condition sur l'élément et sur le parent 
de l'élément sur lequel se passe l'évement.

Le parent est testé au cas ou l'élément sélectionné serait un des bouton ou le champ texte. 