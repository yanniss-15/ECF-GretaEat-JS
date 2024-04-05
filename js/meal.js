async function getRecipeById() {

    const query = new URLSearchParams(window.location.search).get('id')
    console.log(query)

    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${query}`)

    const recipeDetailById = await response.json()
    /*Je demande une recette par son id dans l'API Free Meal*/

    console.log(recipeDetailById)

    let ingredients = ''

    for (let i = 1; i <= 20; i++) {
        ingredients += recipeDetailById.meals[0][`strMeasure${i}`] + ' ' + recipeDetailById.meals[0][`strIngredient${i}`] + ' '
    }
    

    const content = `
    <div class="recipe">
    <h3>Nom : </h3>${(recipeDetailById.meals[0].strMeal)}
    <br>
    <h3>Catégorie :</h3> ${(recipeDetailById.meals[0].strCategory)}
    <br>
    <h3>Origine :</h3> ${(recipeDetailById.meals[0].strArea)}
    <br>
    <h3>Ingrédients :</h3> ${(ingredients)}
    <br>
    <h3>Instructions :</h3> ${(recipeDetailById.meals[0].strInstructions)}
    <br>
    <h3>Résultat :</h3> 
    <br>
    <img src =${(recipeDetailById.meals[0].strMealThumb)}>`
    
    console.log(content)

    const idRecipeContent = document.querySelector('#recipeDetailsById')

    idRecipeContent.innerHTML = content
}

getRecipeById()
// Fonction qui va générer la page d'une recette en passant en paramètre d'URL l'id correspondant à la recette.


