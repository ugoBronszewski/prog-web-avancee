function init() {
    defTitre1()
    defTitre2()
    defTitre4()
    datemodif()
    // majHorloge1()
    majHorloge2()
    majGrafH()

    let colorInput = document.getElementById('colorInput')
    colorInput.addEventListener('keyup', () => {
        const regexp = /[^\d]/gi
        let colorInputRegExpMatches = colorInput.value.match(regexp)

        if (colorInputRegExpMatches !== null && colorInputRegExpMatches.length > 0) {
            colorInput.className = 'rouge'
        } else if (colorInput.value !== '' && colorInputRegExpMatches === null) {
            colorInput.className = 'vert'
        } else if (colorInput.value === '') {
            colorInput.className = 'blanc'
        }
    })

    nav()
}

function defTitre(title) {
    document.title = title
}

function defTitre1() {
    defTitre(document.getElementById('titre').innerText)
}

function defTitre2() {
    let h2 = document.getElementsByTagName('h2')

    if (h2.length === 0) {
        defTitre3()
    } else {
        defTitre(h2[h2.length - 1].innerText)
    }
}

function defTitre3() {
    defTitre('Bronszewski Ugo')
}

function defTitre4() {
    let hList = document.getElementsByClassName('firstOrLast')

    if (hList.length === 0) {
        defTitre3()
    } else {
        if (hList.length % 2 === 0) {
            defTitre(hList[0].innerText)
        } else if (hList.length % 2 !== 0) {
            defTitre(hList[hList.length - 1].innerText)
        }
    }
}

function inverseTexte(method) {
    let p1      = document.getElementsByTagName('p')[0],
        p2      = document.getElementsByTagName('p')[1],
        p1Temp

    switch(method) {
        case 'innerText' :
            p1Temp  = document.getElementsByTagName('p')[0].innerText
            p1.innerText = p2.innerText
            p2.innerText = p1Temp
            break

        case 'innerHTML' :
            p1Temp  = document.getElementsByTagName('p')[0].innerHTML
            p1.innerHTML = p2.innerHTML
            p2.innerHTML = p1Temp
            break

        case 'outerText' :
            p1Temp  = document.getElementsByTagName('p')[0].outerText
            p1.outerText = p2.outerText
            p2.outerText = p1Temp
            break

        case 'outerHTML' :
            p1Temp  = document.getElementsByTagName('p')[0].outerHTML
            p1.outerHTML = p2.outerHTML
            p2.outerHTML = p1Temp
            break

        case 'textContent' :
            p1Temp  = document.getElementsByTagName('p')[0].textContent
            p1.textContent = p2.textContent
            p2.textContent = p1Temp
            break
    }
}

function datemodif() {
    let authors = document.querySelectorAll('meta[name="author"]')
    document.getElementById('date_modif').innerText = 'Dernière modification le ' + getDate(new Date()) + ' par ' + authors[authors.length - 1].getAttribute('content')
}

function getDate(date) {
    let days = ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche'],
        mounth = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'aout', 'septembre', 'octobre', 'novembre', 'décembre']

    return days[date.getDay()] + ' ' + date.getDate() + ' ' + mounth[date.getMonth()]
}

function majNbJours() {
    let finish = new Date('2020-05-06'),
        actual = new Date(),
        mounth = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'aout', 'septembre', 'octobre', 'novembre', 'décembre'],
        result = document.getElementById('isIn'),
        days

    if (actual !== finish) {
        days = Math.floor((finish - actual) / 1000 / 3600 / 24)
        if (days < 0) {
            result.innerText = 'La date est passée.'
        } else {
            result.innerText = 'Il reste ' + days + ' jour' + ((days === 0) ? '' : 's') + ' avant le ' + finish.getDate() + ' ' + mounth[finish.getMonth()] + ' ' + finish.getFullYear()
        }
    } else {
        result.innerText = 'C\'est aujourd\'hui !'
    }
}

function getHour() {
    let date, hours, minutes, secondes

    date = new Date()

    hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
    minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
    secondes = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()

    return [hours, minutes, secondes]
}

function horloge(id) {
    let date = getHour()
    // console.log(date)
    document.getElementById('horloge').innerText = date[0] + ':' + date[1] + ':' + date[2]
}

function majHorloge1() {
    setInterval(horloge, 1000, 'horloge1')
}

function majHorloge2() {
    setTimeout(majHorloge1, 0)
}

function majGrafH() {
    let horloge = document.getElementById('grafHorloge'),
        date, hours, minutes, secondes

    setInterval(() => {
        horloge.innerHTML = ''
        date = getHour()

        hours = date[0].toString().split('')
        minutes = date[1].toString().split('')
        secondes = date[2].toString().split('')

        hours.forEach((h) => {
            horloge.innerHTML += '<img src="images/' + h + '.gif" />'
        })

        horloge.innerHTML += '<span style="display: inline-block; width: 10px"></span>'

        minutes.forEach((m) => {
            horloge.innerHTML += '<img src="images/' + m + '.gif" />'
        })

        horloge.innerHTML += '<span style="display: inline-block; width: 10px"></span>'

        secondes.forEach((s) => {
            horloge.innerHTML += '<img src="images/' + s + '.gif" />'
        })
    }, 1000)
}

function nav() {
    let navTitles = document.getElementsByClassName('nav-block-title-link')

    Array.prototype.forEach.call(navTitles, el => {
        let titleContent = el.innerHTML
        el.innerHTML = '<img src="images/plus.gif">' + titleContent

        el.addEventListener('click', (e) => {
            e.preventDefault()

            let navToToggle = document.querySelector(el.hash)

            if (navToToggle.style.display === 'none') {
                navToToggle.style.display = 'block'
                el.innerHTML = '<img src="images/minus.gif">' + titleContent
            } else {
                navToToggle.style.display = 'none'
                el.innerHTML = '<img src="images/plus.gif">' + titleContent
            }
        })
    })
}