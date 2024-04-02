
function getSearchResult() {
    const submitBttn = document.querySelector('#submitButton')
    /* Je sélectionne le bouton "Envoyer" */
    submitBttn.addEventListener('click', searchName)
    /* J'ajoute un évènement qui lance la fonction searchName quand on clique sur le bouton "Envoyer" */
}
async function searchName(e) {
    e.preventDefault()
    const searchResult = document.querySelector("#results")
    searchResult.innerHTML = ''

    const search = document.querySelector("#searchBar").value
    if (search == "") {
        alert("Veuillez saisir une recherche")
        return
    }

    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        const list = await response.json()
        
        if(list.meals)
            list.meals.forEach(meals => {
                searchResult.innerHTML += `
                    <div class="resultContent">
                        <a href="meal.html?id=${meals.idMeal}">
                        <h3>${meals.strMeal}</h3>
                        <img src=${meals.strMealThumb}>
                    </div>`
            })
        else searchResult.innerHTML = '<p>Aucun résultat</p>'

    } catch(error) {
        console.log("Oups, erreur")
    }

}

getSearchResult()