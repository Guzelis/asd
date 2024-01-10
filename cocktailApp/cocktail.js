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
const letterFilter = document.querySelector(".letters");
const letter = document.querySelector(".letters > a");

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
    dynamicHTML += `<div class="drink" onclick="openModal(false, event, ${drink.idDrink})">
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
    localStorage.setItem("category", category);
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
    localStorage.setItem("glass", glassType);
    localStorage.getItem("glass");
    generateDrinksHTML(drinksArray);

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
    localStorage.setItem("ingredient", ingredient);
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

  generateDrinksHTML(filteredArray);
}

async function initialization() {
  await fillSelectElements(); ///select filling
  await getAllDrinks(); /// getting all drinks
  generateDrinksHTML(drinksArray); ///HTML
  generateLettersHTML();
  localStorage.getItem("glass");
}

// async function openModalRandom(event) {
//   event.preventDefault();
//   modal.style.display = "flex";
//   const promise = await fetch(
//     `https://www.thecocktaildb.com/api/json/v1/1/random.php`
//   );
//   const response = await promise.json();

//   const drink = response.drinks[0];
//   console.log(drink);
//   document.querySelector(".modal-img").src = drink.strDrinkThumb;
//   modalTitle.innerHTML = drink.strDrink;
//   modalCategory.innerHTML = drink.strCategory;
//   modalAlco.innerHTML = drink.strAlcoholic;
//   modalGlassType.innerHTML = drink.strGlass;
//   modalRecipe.innerHTML = drink.strInstructions;
// }

async function openModal(isRandom, event, id) {
  event.preventDefault();
  modal.style.display = "flex";
  let promise;
  if (!isRandom) {
    promise = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    );
  } else {
    promise = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/random.php`
    );
  }

  const response = await promise.json();
  const drink = response.drinks[0];

  document.querySelector(".modal-img").src = drink.strDrinkThumb;
  modalTitle.innerHTML = drink.strDrink;
  modalCategory.innerHTML = drink.strCategory;
  modalAlco.innerHTML = drink.strAlcoholic;
  modalGlassType.innerHTML = drink.strGlass;
  modalRecipe.innerHTML = drink.strInstructions;

  let dynamicHTML = ``;
  for (let i = 1; i < 16; i++) {
    const ingr = drink[`strIngredient${i}`];
    const meas = drink[`strMeasure${i}`];

    if (ingr && meas) {
      dynamicHTML += `<p><b>${ingr}</b>: <span>${meas}</span></p>`;
    } else break;
  }
  modalIngredients.innerHTML = dynamicHTML;
  modalAlco.onclick = async function () {
    await filterByAlcohol(drink.strAlcoholic);
  };
}

async function filterByAlcohol(strAlcoholic) {
  closeModal();
  const filterAlco = strAlcoholic.replaceAll(" ", "_");
  const promise = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${filterAlco}`
  );
  const answer = await promise.json();
  generateDrinksHTML(answer.drinks);
}

function generateLettersHTML() {
  const alpha = Array.from(Array(26)).map((e, i) => i + 65);
  const alphabet = alpha.map((x) => String.fromCharCode(x));
  let dynamicHTML = ``;
  for (let letter of alphabet) {
    dynamicHTML += `<a href="#" onclick="filterByLetter(event)">${letter}</a>`;
  }
  letterFilter.innerHTML = dynamicHTML;

  // // const letterLinks = document.querySelectorAll(".letters > a");
  // // letterLinks.forEach((link) => {
  // //   link.addEventListener("click", async (event) => {
  // //     event.preventDefault();
  // //     await filterByLetter(event);
  // //   });
  // });
}

async function filterByLetter(event) {
  event.preventDefault();
  const letter = event.target.innerHTML.toLowerCase();
  const promise = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`
  ).catch((error) => console.log(error));
  const answer = await promise.json();
  generateDrinksHTML(answer.drinks);
}

function closeModal() {
  modal.style.display = "none";
}

window.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    modal.style.display = "none";
  }
});

window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

function reset() {
  document.querySelector("#category").selectedIndex = 0;
  document.querySelector("#glass-type").selectedIndex = 0;
  document.querySelector("#ingredients").selectedIndex = 0;
  document.querySelector("#filter").value = "";
  location.reload();
  return false;
}

searchButton.onclick = filter;
closeModalButton.onclick = closeModal;
luckyButton.onclick = (event) => openModal(true, event);
resetButton.onclick = reset;

initialization();
