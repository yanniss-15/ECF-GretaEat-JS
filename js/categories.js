async function getCategories() {
    
    const response = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php")

    const list = await response.json()
    console.log(list)
    
    const categoriesList = document.querySelector('#categories')
    let content = ''

    list.categories.forEach(category => {
        content += `
            <li>
                <a href="category.html?category=${category.strCategory}">
                <h3>${category.strCategory}</h3>
                <img src=${category.strCategoryThumb}>
            </li>`
    })

    categoriesList.innerHTML = content
}

getCategories();