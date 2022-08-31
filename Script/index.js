
//API Data input

function loadFood(food) {

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${food}`;
    fetch(url)
        .then(response => response.json())
        .then(food => displayFood(food.meals))
}
const array = [9435803, 6464, 53423,];

function displayFood(food) {
    const foodContainer = document.getElementById('food-container');
    foodContainer.innerHTML = ``;
    for (const meals of food) {
        // console.log(meals);
        const div = document.createElement('div');
        div.classList.add('col')
        div.innerHTML = `
        <div class="card h-100 shadow">
            <img onclick="imageFunction(${meals.idMeal})" data-bs-toggle="modal" href="#exampleModalToggle" role="button" src="${meals.strMealThumb}" class="card-img-top h-75" alt="...">
            <div class="card-body">
                <h4 class="card-title fw-bold">${meals.strMeal}</h4>
                <p class="card-text">${meals.strInstructions.slice(0, 137)}</p>
            </div>
        </div>
        `
        foodContainer.appendChild(div);
    }

}


const imageFunction = (data) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${data}`
    fetch(url)
        .then(response => response.json())
        .then(food => foodData(food.meals))

    const detalisSection = document.getElementById('food-details')
    detalisSection.innerHTML = '';
    function foodData(data) {
        for (const foodData of data) {
            console.log(foodData.strMeal);
            const div = document.createElement('div')
            div.innerHTML = `
           <h1>Food Name: ${foodData.strMeal}</h1>
            `
            detalisSection.appendChild(div)
        }

    }
}

const searchButton = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    loadFood(searchText);
}

loadFood('a')