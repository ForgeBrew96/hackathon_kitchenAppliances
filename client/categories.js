const categoryContainer = document.getElementById('categoryContainer')

const getCategories = async () => {
    try {
        let response = await axios.get('mongodb+srv://your-database-url/categories')
        const categoriesData = response.data.categories

        categoryContainer.innerHTML = ''

        if (categoriesData && categoriesData.length > 0) {
            categoriesData.forEach(category => {
                const categoryDiv = document.createElement('div')
                categoryDiv.className = 'category-card'

                const nameElement = document.createElement('h2')
                nameElement.innerHTML = category.name

                categoryDiv.appendChild(nameElement)
                categoryContainer.appendChild(categoryDiv)
            })
        } else {
            categoryContainer.innerHTML = 'No categories found.'
        }
    } catch (error) {
        console.error('Error fetching categories data:', error)
        categoryContainer.innerHTML = 'An error occurred while fetching categories data.'
    }
}

window.onload = getCategories
