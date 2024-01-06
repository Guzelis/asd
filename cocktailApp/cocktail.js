const coctailNameFilterElement = document.querySelector("#filter");
const categorySelectElement = document.querySelector("#category");
const glassTypeSelectElement = document.querySelector("#glass-type");
const ingredientsSelectElement = document.querySelector("#ingredients");
const SearchButton = document.querySelector("#search");
const LuckyButton = document.querySelector("#lucky");
const DynamicDrinksElement = document.querySelector(".container-main");

const categoriesArray = [];
const glassArray = [];
const ingredientArray = [];
const DrinksArray = [];

/*//category

fetch(`https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`)
  .then((rez) => rez.json())
  .then((rez) => fillCategorySelect(rez.drinks))
  .catch((error) => console.log(error));

function fillCategorySelect(categories) {
  let dynamicHTML = ``;
  for (const category of categories) {
    dynamicHTML += `<option>${category.strCategory}</option>`;
    categoriesArray.push(category.strCategory);
  }
  categorySelectElement.innerHTML = dynamicHTML;
}

//glass-type

fetch(`https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list`)
  .then((rez) => rez.json())
  .then((rez) => fillGlassTypeSelect(rez.drinks))
  .catch((error) => console.log(error));

function fillGlassTypeSelect(glasses) {
  let dynamicHTML = ``;
  for (const glass of glasses) {
    dynamicHTML += `<option>${glass.strGlass}</option>`;
    glassArray.push(glass.strGlass);
  }
  glassTypeSelectElement.innerHTML = dynamicHTML;
}

//ingredients

fetch(`https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list`)
  .then((rez) => rez.json())
  .then((rez) => fillIngredientsSelect(rez.drinks))
  .catch((error) => console.log(error));

function fillIngredientsSelect(ingredients) {
  let dynamicHTML = ``;
  for (const ingredient of ingredients) {
    dynamicHTML += `<option>${ingredient.strIngredient1}</option>`;
    ingredientArray.push(ingredient.strIngredient1);
  }
  ingredientsSelectElement.innerHTML = dynamicHTML;
}
*/

async function fillSelectElements() {
  //category
  await fetch(`https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`)
    .then((rez) => rez.json())
    .then((rez) => {
      fillSelects(rez.drinks, categorySelectElement, "strCategory");
      categoriesArray.push(...rez.drinks.map((value) => value.strCategory));
    })
    .catch((error) => console.log(error));

  //glass-type
  await fetch(`https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list`)
    .then((rez) => rez.json())
    .then((rez) => {
      fillSelects(rez.drinks, glassTypeSelectElement, "strGlass");
      glassArray.push(...rez.drinks.map((value) => value.strGlass));
    })
    .catch((error) => console.log(error));

  //ingredient
  await fetch(`https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list`)
    .then((rez) => rez.json())
    .then((rez) => {
      fillSelects(rez.drinks, ingredientsSelectElement, "strIngredient1");
      ingredientArray.push(...rez.drinks.map((value) => value.strIngredient1));
    })
    .catch((error) => console.log(error));
}

function fillSelects(properties, selectElement, strFieldName) {
  let dynamicHTML = ``;
  for (property of properties) {
    dynamicHTML += `<option>${property[strFieldName]}</option>`;
  }
  selectElement.innerHTML += dynamicHTML;
}

async function getAllDrinks() {
  for (const category of categoriesArray) {
    let dynamicURL = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category.replaceAll(
      " ",
      "_"
    )}`;
    const response = await fetch(dynamicURL);
    const answerFromServer = await response.json();
    for (const drink of answerFromServer.drinks) {
      DrinksArray.push(drink);
    }
  }
}

function generateDrinksHTML(drinks) {
  let dynamicHTML = ``;
  for (let drink of drinks) {
    dynamicHTML += `<div class="drink">
      <img src="${drink.strDrinkThumb}" alt="drink" />
      <h2 class="title">${drink.strDrink}</h2>
    </div>`;
  }
  DynamicDrinksElement.innerHTML = dynamicHTML;
}

async function initialization() {
  await fillSelectElements(); ///select filling
  await getAllDrinks(); /// getting all drinks
  generateDrinksHTML(DrinksArray);
}
initialization();
