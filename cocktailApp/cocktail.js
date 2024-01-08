const coctailNameFilterElement = document.querySelector("#filter");
const categorySelectElement = document.querySelector("#category");
const glassTypeSelectElement = document.querySelector("#glass-type");
const ingredientsSelectElement = document.querySelector("#ingredients");
const searchButton = document.querySelector("#search");
const luckyButton = document.querySelector("#lucky");
const dynamicDrinksElement = document.querySelector(".container-main");
const resetButton = document.querySelector("#reset");
const modal = document.querySelector(".modal-bg");
const closeModalButton = document.querySelector(".modal-close-button");
const modalTitle = document.querySelector(".modal-title");
const modalCategory = document.querySelector("#modal-category");
const modalAlco = document.querySelector("#modal-alco");
const modalGlassType = document.querySelector("#modal-glass-type");
const modalIngredients = document.querySelector("#modal-ingredients");
const modalIngredient = document.querySelector(".ingredient");
const modalRecipe = document.querySelector("#modal-recipe");

const categoriesArray = [];
const glassArray = [];
const ingredientArray = [];
const drinksArray = [];
const selectValues = {};

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
  /*//category
  const promise = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`
  );
  const answer = await promise.json();
  fillSelects(answer.drinks, categorySelectElement, "strCategory");
  categoriesArray.push(...answer.drinks.map((value) => value.strCategory));

  //glass-type
  const glassType = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list`
  )
    .then((rez) => rez.json())
    .catch((error) => console.log(error));

  fillSelects(glassType.drinks, glassTypeSelectElement, "strGlass");
  glassArray.push(...glassType.drinks.map((value) => value.strGlass));

  //ingredient
  await fetch(`https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list`)
    .then((rez) => rez.json())
    .then((rez) => {
      fillSelects(rez.drinks, ingredientsSelectElement, "strIngredient1");
      ingredientArray.push(...rez.drinks.map((value) => value.strIngredient1));
    })
    .catch((error) => console.log(error));
    */

  const allURL = [
    "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list",
    "https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list",
    "https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list",
  ];

  const allPromises = allURL.map((url) =>
    fetch(url)
      .then((response) => response.json())
      .catch((error) => console.log(error))
  );

  const allValues = await Promise.all(allPromises);
  const [allCategories, allGlasses, allIngredients] = allValues;

  selectValues.categories = allCategories.drinks.map(
    (categoryObj) => categoryObj.strCategory
  );
  selectValues.glasses = allGlasses.drinks.map((glassObj) => glassObj.strGlass);
  selectValues.ingredients = allIngredients.drinks.map(
    (ingredientsObj) => ingredientsObj.strIngredient1
  );

  fillSelects(allCategories.drinks, categorySelectElement, "strCategory");
  categoriesArray.push(
    ...allCategories.drinks.map((value) => value.strCategory)
  );

  fillSelects(allGlasses.drinks, glassTypeSelectElement, "strGlass");
  glassArray.push(...allGlasses.drinks.map((value) => value.strGlass));

  fillSelects(
    allIngredients.drinks,
    ingredientsSelectElement,
    "strIngredient1"
  );
  ingredientArray.push(
    ...allIngredients.drinks.map((value) => value.strIngredient1)
  );
}

function fillSelects(properties, selectElement, strFieldName) {
  let dynamicHTML = ``;
  for (property of properties) {
    dynamicHTML += `<option>${property[strFieldName]}</option>`;
  }
  selectElement.innerHTML += dynamicHTML;
}

async function getAllDrinks() {
  const drinksURL = [];
  for (const category of selectValues.categories) {
    let dynamicURL = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category.replaceAll(
      " ",
      "_"
    )}`;
    /*const response = await fetch(dynamicURL);
    const answerFromServer = await response.json();
    for (const drink of answerFromServer.drinks) {
      drinksArray.push(drink);
    }*/
    drinksURL.push(dynamicURL);
  }
  const allPromises = drinksURL.map((url) =>
    fetch(url)
      .then((response) => response.json())
      .catch((error) => console.log(error))
  );
  const allValues = await Promise.all(allPromises);
  allValues.forEach((value) => drinksArray.push(...value.drinks));
}

function generateDrinksHTML(drinks) {
  let dynamicHTML = ``;
  for (let drink of drinks) {
    dynamicHTML += `<div class="drink" onclick="openModal(${drink.idDrink})">
      <img src="${drink.strDrinkThumb}" alt="drink" />
      <h2 class="title">${drink.strDrink}</h2>
    </div>`;
  }
  dynamicDrinksElement.innerHTML = dynamicHTML;
}

async function filter(event) {
  event.preventDefault();

  const searchValue = coctailNameFilterElement.value;
  const category = categorySelectElement.value;
  const glassType = glassTypeSelectElement.value;
  const ingredient = ingredientsSelectElement.value;
  let filteredArray = [...drinksArray];

  if (searchValue) {
    filteredArray = filteredArray.filter((drink) =>
      drink.strDrink.toLowerCase().includes(searchValue.toLowerCase())
    );
  }

  if (category !== "Select cocktail category") {
    const promise = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category.replaceAll(
        " ",
        "_"
      )}`
    );
    const drinksCategory = await promise.json();
    filteredArray = filteredArray.filter((drink) =>
      drinksCategory.drinks.some(
        (drinksCategory) => drink.idDrink === drinksCategory.idDrink
      )
    );
  }

  if (glassType !== "Select glass type") {
    const promise = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=${glassType.replaceAll(
        " ",
        "_"
      )}`
    );
    const drinksGlassType = await promise.json();
    filteredArray = filteredArray.filter((glass) =>
      drinksGlassType.drinks.some(
        (drinksGlassType) => glass.idDrink === drinksGlassType.idDrink
      )
    );
  }

  if (ingredient !== "Select ingredient") {
    const promise = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient.replaceAll(
        " ",
        "_"
      )}`
    );
    const ingredientType = await promise.json();

    filteredArray = filteredArray.filter((ingredient) =>
      ingredientType.drinks.some(
        (ingredientType) => ingredient.idDrink === ingredientType.idDrink
      )
    );
  }
  coctailNameFilterElement.value = "";
  generateDrinksHTML(filteredArray);
}

async function initialization() {
  await fillSelectElements(); ///select filling
  await getAllDrinks(); /// getting all drinks
  generateDrinksHTML(drinksArray); ///HTML
  searchButton.onclick = filter;

  closeModalButton.onclick = closeModal;
  luckyButton.onclick = openModalRandom;
}

async function openModalRandom(event) {
  event.preventDefault();
  modal.style.display = "flex";
  const promise = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/random.php`
  );
  const response = await promise.json();
  console.log(response);
  const drink = response.drinks[0];
  console.log(drink);
  document.querySelector(".modal-img").src = drink.strDrinkThumb;
  modalTitle.innerHTML = drink.strDrink;
  modalCategory.innerHTML = drink.strCategory;
  modalAlco.innerHTML = drink.strAlcoholic;
  modalGlassType.innerHTML = drink.strGlass;
  modalRecipe.innerHTML = drink.strInstructions;
}

async function openModal(id) {
  modal.style.display = "flex";
  const promise = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
  );

  const response = await promise.json();
  const drink = response.drinks[0];

  document.querySelector(".modal-img").src = drink.strDrinkThumb;
  modalTitle.innerHTML = drink.strDrink;
  modalCategory.innerHTML = drink.strCategory;
  modalAlco.innerHTML = drink.strAlcoholic;
  modalGlassType.innerHTML = drink.strGlass;
  modalRecipe.innerHTML = drink.strInstructions;

  let dynamicHTML = ``;
  const ingredients = [];

  for (let i = 1; i < 16; i++) {
    const ingr = drink[`strIngredient${i}`];
    const meas = drink[`strMeasure${i}`];
    console.log(drink);
    ///console.log(ingr);
    //console.log(meas);
    console.log(ingredients);
    if (ingr && meas) {
      ingredients.push(`${ingr}: ${meas}`);
      dynamicHTML += `<p><b>${ingr}</b>: <span>${meas}</span></p>`;
    } else break;
  }
  modalIngredients.innerHTML = dynamicHTML;
}

function closeModal() {
  modal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

initialization();
