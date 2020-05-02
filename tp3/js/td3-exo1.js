/*<![CDATA[*/

console.log("Chargement...");

const grille = new Array(3)
let divs

function init(){
	let i, j, k = 0
	console.log("Initialisation...")
	let div = document.getElementById("jeu")
	div.addEventListener("click", selection)

	for(i = 0; i < grille.length; i++){
		grille[i] = new Array(3)
	}

	divs = document.querySelectorAll(".case")

	for (i = 0; i < grille.length; i++) {
		for (j = 0; j < grille[i].length; j++) {
			grille[i][j] = divs[k].classList.contains('vide') ? 'empty' : divs[k].textContent
			k++
		}
	}

	console.log(grille)
}

function selection(event){
	let el = event.target,
		i, j,
		currentDiv, empty
		neighbors = []

	for (i = 0; i < grille.length; i++) {
		for (j = 0; j < grille[i].length; j++) {
			if (grille[i][j] === el.textContent) {
				neighbors.push([i, j, el.textContent])
				if (i - 1 >= 0) {
					neighbors.push([i-1, j, grille[i-1][j]])
				}

				if (j + 1 <= grille[i].length - 1) {
					neighbors.push([i, j+1, grille[i][j+1]])
				}

				if (i + 1 <= grille.length - 1) {
					neighbors.push([i+1, j, grille[i+1][j]])
				}

				if (j - 1 >= 0) {
					neighbors.push([i, j-1, grille[i][j-1]])
				}
			}
		}
	}

	for (i in neighbors) {
		if (neighbors[i][2] === 'empty') {
			console.log('empty!')
			grille[neighbors[i][0]][neighbors[i][1]] = neighbors[0][2]
			grille[neighbors[0][0]][neighbors[0][1]] = 'empty'

			for (j in divs) {
				if (divs[j].textContent === el.textContent) {
					currentDiv = divs[j]
				}
			}

			empty = document.querySelectorAll(".vide")

			empty[0].classList.toggle('vide')
			empty[0].firstChild.innerText = neighbors[0][2]

			currentDiv.classList.toggle('vide')
			currentDiv.firstChild.innerHTML = '&nbsp;'
		}
	}

	console.log(neighbors)
	console.log(grille)
}
/*]]>*/