async function getListMeals() {

    const query = new URLSearchParams(window.location.search).get('category')

    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${query}`)

    const list = await response.json()
    console.log(list)

    const meal = document.querySelector('#listMeals')
    let content = ''

    list.meals.forEach(meals => {
        content += `
            <li class="recipeContent">
                <a href="meal.html?id=${meals.idMeal}">
                <h3>${meals.strMeal}</h3>
                <img src=${meals.strMealThumb}>
            </li>`
    })

    meal.innerHTML = content
}

getListMeals();