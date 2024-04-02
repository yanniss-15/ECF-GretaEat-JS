async function getRandomRecipes() {

    const response = await fetch("https://www.themealdb.com/api/json/v1/1/random.php")

    const recipeDetail = await response.json()
    /*Je demande une recette générée au hasard par l'API Free Meal*/

    console.log(recipeDetail)

    let ingredients = ''

    for (let i = 1; i <= 20; i++) {
            ingredients += recipeDetail.meals[0][`strMeasure${i}`] + ' ' + recipeDetail.meals[0][`strIngredient${i}`] + ' '
    }

    const content = `
    <h3>Nom : </h3>${(recipeDetail.meals[0].strMeal)}
    <br>
    <h3>Catégorie :</h3> ${(recipeDetail.meals[0].strCategory)}
    <br>
    <h3>Origine : </h3> ${(recipeDetail.meals[0].strArea)}
    <br>
    <h3>Ingrédients :</h3> ${(ingredients)}
    <br>
    <h3>Instructions :</h3> ${(recipeDetail.meals[0].strInstructions)}
    <br>
    <h3>Résultat :</h3> 
    <br>
    <img src =${(recipeDetail.meals[0].strMealThumb)}>
    `

    console.log(content)
    /*Je met en forme la recette récupérée sous-format :
    "Nom :"
    "Catégorie :"
    "Ingrédients :"
    "Instructions :""
    "Résultat : img"
    */

    const randomRecipeContent = document.querySelector('#recipeDetails')
    /*Je sélectionne la balise <article></article> avec l'id "#recipeDetails"*/

    randomRecipeContent.innerHTML = content

}

getRandomRecipes()