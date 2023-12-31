//1. Gauname visas šunų veisles
//2. Atvaizduoti veisles select elemente per funkciją
//3. Sukurti šuns nuotraukų atvaizdavimo funkciją (atvaizduojama pagal veislę)
//3.1 Susikurti dinamini URL, tam kad kreiptis į šuns veislės nuotraukas
//3.2 Kreipiames i serveri pagal dinaminį URL, norint gauti šuns veislės nuotraukas
//3.3 Kai gauname atsakymą dinamiškai generuoti HTML kodą. (dinaminis kodas yra generuojamas pagal gauta nuotraukų masyvą)
//3.4 Sugeneruotą kodą atvaizduoti tame elemente, kuriame norime kad atsirastų nuotraukos.
//4. Pridėti event listeneri selectui, kuris keis nuotraukas pagal veislę.

const breedSelectElement = document.querySelector(`#breeds`);
const dynamicAlbumElement = document.querySelector(`#photo`);
const breedsArray = [];

fetch(`https://dog.ceo/api/breeds/list/all`)
  .then((answ) => answ.json())
  .then((answ) => parseAllBreeds(answ.message)); //2

function parseAllBreeds(breeds) {
  //2
  let dynamicHTML = ``;

  for (let breed in breeds) {
    // breed - veisles pavadinimas
    // masyve esančios reikšmės - sub-veislė
    const subBreeds = breeds[breed];
    if (subBreeds.length === 0) {
      dynamicHTML += `<option>${breed}</option>`;
      breedsArray.push(breed);
    } else {
      for (let subBreed of subBreeds) {
        dynamicHTML += `<option>${subBreed} ${breed}</option>`;
        breedsArray.push(`${subBreed} ${breed}`);
      }
    }
  }
  parseDogImages(breedsArray[4]);
  breedSelectElement.innerHTML = dynamicHTML;
}

function parseDogImages(breed) {
  let dynamicURL = generateDynamicDogPhotosURL(breed); //3.1
  fetch(dynamicURL) ///3.2
    .then((response) => response.json())
    .then((response) => genarateDynamicDogPhotos(response.message)); //3.3
}

function generateDynamicDogPhotosURL(breed) {
  //3.1
  let breedSplitted = breed.split(` `);
  let breedSplittedReversed = breedSplitted.reverse();
  let finalBreed = breedSplittedReversed.join(`/`);
  //let finalBreed = breed.split(" ").reverse().join("/");
  //return `https://dog.ceo/api/breed/${finalBreed}/images`;
  let fullURL = `https://dog.ceo/api/breed/${finalBreed}/images`;
  return fullURL;
}

function genarateDynamicDogPhotos(photosArray) {
  //3.4
  let dynamicHTML = ``;
  for (let photo of photosArray) {
    dynamicHTML += `<div class="col-4 mx-auto">
        <img
          src="${photo}"
          alt="dog" style="width: 100%;"
        />
      </div>`;
  }
  dynamicAlbumElement.innerHTML = dynamicHTML;
}

//4
breedSelectElement.addEventListener(`change`, () => {
  parseDogImages(breedSelectElement.value);
});
