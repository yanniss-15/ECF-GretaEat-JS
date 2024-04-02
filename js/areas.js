async function getAreasList() {
    
    const response = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list")

    const list = await response.json()
    console.log(list)
    
    const areasList = document.querySelector('#areasResult')
    let content = ''

    list.meals.forEach(meals => {
        content += `
            <div class="area">
                <a href="area.html?a=${meals.strArea}">
                <h3>${meals.strArea}</h3>
            </div>`
    })

    areasList.innerHTML = content
}

getAreasList();

