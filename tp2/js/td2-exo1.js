function initSelection(){
	addForm()
	document.body.addEventListener("click", selection2);
}

let selected = 'undefined'
let selectedWithParent = {
	'target': 'undefined',
	'parent': 'undefined'
}

function selection(event){
	console.log(event.target.tagName);
	var element = event.target;
	element.classList.toggle("pink");
}

function selection2(e) {
	let el = e.target

	if (el.id !== 'frameInsert' && el.parentNode.id !== 'frameInsert') {
		if (selected !== 'undefined' && selected === el) {
			selected.classList.toggle('blue')
			selected = 'undefined'
		} else if (selected !== 'undefined' && selected !== el) {
			selected.classList.toggle('blue')
			selected = el
			selected.classList.toggle('blue')
		} else {
			el.classList.toggle('blue')
			selected = el
		}
	}
}

function selection3(e) {
	let el = e.target

	if (el.id !== 'frameInsert' && el.parentNode.id !== 'frameInsert') {
		if (selectedWithParent.target !== 'undefined' && selectedWithParent.target === el) {
			selectedWithParent.target.classList.toggle('red')
			selectedWithParent.parent.classList.toggle('orange')
			selectedWithParent = {
				'target': 'undefined',
				'parent': 'undefined'
			}
		} else {
			elArray = {
				'target': el,
				'parent': el.parentNode
			}

			if (selectedWithParent.target !== 'undefined' && selectedWithParent.target !== el) {
				selectedWithParent.target.classList.toggle('red')
				selectedWithParent.parent.classList.toggle('orange')

				selectedWithParent = elArray

				selectedWithParent.target.classList.toggle('red')
				selectedWithParent.parent.classList.toggle('orange')
			} else {
				selectedWithParent = elArray

				selectedWithParent.target.classList.toggle('red')
				selectedWithParent.parent.classList.toggle('orange')
			}
		}

		console.log(selectedWithParent)
	}
}

function addForm() {
	let form = document.createElement('div')
	form.setAttribute('id', 'frameInsert')

	let divBtn = document.createElement('input')
	divBtn.setAttribute('type', 'button')
	divBtn.setAttribute('value', 'DIV')
	divBtn.setAttribute('onclick', 'insertB(\'div\')')

	let pBtn = document.createElement('input')
	pBtn.setAttribute('type', 'button')
	pBtn.setAttribute('value', 'P')
	pBtn.setAttribute('onclick', 'insertB(\'p\')')

	let h2Btn = document.createElement('input')
	h2Btn.setAttribute('type', 'button')
	h2Btn.setAttribute('value', 'H2')
	h2Btn.setAttribute('onclick', 'insertB(\'h2\')')

	let input = document.createElement('input')
	input.setAttribute('type', 'text')
	input.setAttribute('id', 'toInsert')
	input.setAttribute('placeholder', 'texte')

	form.appendChild(divBtn)
	form.appendChild(pBtn)
	form.appendChild(h2Btn)
	form.appendChild(input)

	document.body.prepend(form)
}

function insertB(type) {
	let txt = document.getElementById('toInsert').value
	let el = document.createElement(type)

	let elContent = document.createTextNode(txt)

	el.appendChild(elContent)

	selected !== 'undefined' ? selected.parentNode.insertBefore(el, selected) : document.body.insertBefore(el, document.getElementById('frameInsert').nextSibling)
}