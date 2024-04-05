
function getSearchResult() {
    const submitBttn = document.querySelector('#submitButton')
    // Je sélectionne le bouton "Envoyer".
    submitBttn.addEventListener('click', searchName)
    // Ajoute un évènement qui lance la fonction searchName quand on clique sur le bouton "Envoyer".
}

async function searchName(e) {
    e.preventDefault()

    const searchResult = document.querySelector("#results")
    searchResult.innerHTML = ''
    // Remet la barre de recherche à '' après une recherche lancée.

    const search = document.querySelector("#searchBar").value
    if (search == "") {
        alert("Veuillez saisir une recherche")
        return
    }
    // Si la barre de recherche est vide et que le formulaire est lancé on envoie l'alerte.

    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        const list = await response.json()
        // Envoie d'une requête personnalisée à l'API theMealDB en mettant en paramètre ma variable search qui correspond à la valeur de l'input.

        if (list.meals)
            list.meals.forEach(meals => {
                searchResult.innerHTML += `
                    <div class="resultContent">
                        <a href="meal.html?id=${meals.idMeal}">
                        <h3>${meals.strMeal}</h3>
                        <img src=${meals.strMealThumb}>
                    </div>`
            })
        // Si la valeur saisie dans la barre de recherche correspond à une donnée de l'API, on l'affiche en suivant le format contenu dans la div resultContent. 

        else searchResult.innerHTML = '<p>Aucun résultat</p>'
        // Sinon on affiche "Aucun résultat".

    } catch (error) {
        console.log("Oups, erreur")
    }

}

getSearchResult()
// J'appelle ma fonction getSearchResult() qui appelle elle même la fonction searchName(e).