function getFirstLetter() {

    const letters = document.querySelectorAll('.alphabet p')
    
    letters.forEach(letter => {
        letter.addEventListener('click', selectedLetter)
    })
    
}

async function selectedLetter (e) {
    const letter = e.target.textContent
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)

    const list = await response.json()
    console.log(list)

    const results = document.querySelector('#results')
    results.innerHTML = ""

    list.meals.forEach(meals => {
        results.innerHTML += `
            <li class="liste">
                <a href="meal.html?id=${meals.idMeal}">
                <h3>${meals.strMeal}</h3>
                <img src=${meals.strMealThumb}>
            </li>`
    })
}

getFirstLetter();