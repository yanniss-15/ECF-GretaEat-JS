async function getArea() {

    const query = new URLSearchParams(window.location.search).get('a')
    console.log(query)

    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${query}`)

    const list = await response.json()
    console.log(list)

    const area = document.querySelector('#areaContent')
    let content = ''

    list.meals.forEach(meals => {
        content += `
            <div class="recipeContent">
                <a href="meal.html?id=${meals.idMeal}">
                <h3>${meals.strMeal}</h3>
                <img src=${meals.strMealThumb}>
            </div>`
    })

    area.innerHTML = content
}

getArea();