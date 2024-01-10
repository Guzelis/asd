if (!localStorage.getItem("products")) {
  localStorage.setItem("products", JSON.stringify([]));
}

let editMode = false;
let products = JSON.parse(localStorage.getItem("products"));
let currentId = 1;
let currentProduct;

const dynamicDataElement = document.getElementById("dynamic-data");
const titleInputElement = document.querySelector("#title");
const priceInputElement = document.querySelector("#price");
const stockInputElement = document.querySelector("#stock");
const brandInputElement = document.querySelector("#brand");
const categoryInputElement = document.querySelector("#category");
const btn = document.getElementById("Submit");
const photoImputElement = document.querySelector("#img-url");
const discountImputElement = document.querySelector("#discount");
const ratingImputElement = document.querySelector("#rating");
const descriptionImputElement = document.querySelector("#description");
const modalElement = document.querySelector("#productInfo");

//Atvizdavimas turinio
function getTableContents() {
  let dynamicHTML = ``;

  for (const product of products) {
    dynamicHTML += `<tr>
     <td onclick="showModal(${product.id})">${product.id}</td>
     <td>${product.title}</td>
     <td>${product.price}</td>
     <td>${product.stock}</td>
     <td>${product.brand}</td>
     <td>${product.category}</td>
     <td><button class="btn  btn-danger" onclick="deleteProduct(${product.id})">Istrinti</button>
     <button class="btn btn-success" onclick="setEdit(${product.id})">Atnaujinti</button></td>
   </tr>`;
  }

  dynamicDataElement.innerHTML = dynamicHTML;
}

const showModal = (id) => {
  let elementIndex = products.findIndex((value) => value.id === id);
  const product = products[elementIndex];
  modalElement.showModal();
};

getTableContents();

/// istrynimas
const deleteProduct = (id) => {
  let elementIndex = products.findIndex((value) => value.id === id);
  products.splice(elementIndex, 1);
  getTableContents();
  localStorage.setItem("products", JSON.stringify(products));
};

///pridejimas
const createNewRecord = (event) => {
  //prevencija nuo iprastinio elgesio
  event.preventDefault();

  const newProduct = {
    id: currentId,
    //id: products[products.length - 1].id + 1, // pridejimas prie paskutinio
    title: titleInputElement.value,
    price: +priceInputElement.value,
    stock: +stockInputElement.value,
    brand: brandInputElement.value,
    category: categoryInputElement.value,
    description: descriptionImputElement.value,
    thumbnail: photoImputElement.value,
    discountPercentage: +discountImputElement.value,
    rating: +ratingImputElement.value,
  };
  currentId++;
  products.push(newProduct);
  localStorage.setItem("products", JSON.stringify(products));
  getTableContents();
  reset();
};
btn.onclick = createNewRecord;

/// Updeitinimas

function setEdit(id) {
  let elementIndex = products.findIndex((value) => value.id === id);
  const product = products[elementIndex];
  titleInputElement.value = product.title;
  priceInputElement.value = product.price;
  stockInputElement.value = product.stock;
  brandInputElement.value = product.brand;
  categoryInputElement.value = product.category;
  photoImputElement.value = product.thumbnail;
  discountImputElement.value = product.discountPercentage;
  ratingImputElement.value = product.rating;
  descriptionImputElement.value = product.description;

  localStorage.setItem("products", JSON.stringify(products));
  editMode = true;
  currentProduct = elementIndex;
  btn.innerHTML = "Atnaujinti";
  btn.classList.add("btn-success");
  btn.classList.remove("btn-primary");
  btn.onclick = updateProduct;
}

function updateProduct(event) {
  event.preventDefault();
  products[currentProduct].title = titleInputElement.value;
  products[currentProduct].price = +priceInputElement.value;
  products[currentProduct].stock = +stockInputElement.value;
  products[currentProduct].brand = brandInputElement.value;
  products[currentProduct].category = categoryInputElement.value;
  products[currentProduct].thumbnail = photoImputElement.value;
  products[currentProduct].rating = +ratingImputElement.value;
  products[currentProduct].description = descriptionImputElement.value;
  products[currentProduct].discountPercentage = +discountImputElement.value;

  getTableContents();

  btn.onclick = createNewRecord;
  btn.innerHTML = "Submit";
  btn.classList.add("btn-primary");
  btn.classList.remove("btn-success");
  editMode = false;
  currentProduct = undefined;
  reset();
}

function reset() {
  titleInputElement.value = "";
  priceInputElement.value = "";
  stockInputElement.value = "";
  brandInputElement.value = "";
  categoryInputElement.value = "";
  descriptionImputElement.value = "";
  ratingImputElement.value = "";
  photoImputElement.value = "";
  discountImputElement.value = "";
}
