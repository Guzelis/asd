currentProduct = undefined;
let editMode = false;
const dynamicDataElement = document.getElementById("dynamic-data");
const titleInputElement = document.querySelector("#title");
const priceInputElement = document.querySelector("#price");
const stockInputElement = document.querySelector("#stock");
const brandInputElement = document.querySelector("#brand");
const categoryInputElement = document.querySelector("#category");
const btn = document.getElementById("Submit");

//Atvizdavimas turinio
function getTableContents() {
  let dynamicHTML = ``;

  for (const product of products) {
    dynamicHTML += `<tr>
     <td>${product.id}</td>
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

getTableContents();

/// istrynimas
const deleteProduct = (id) => {
  let elementIndex = products.findIndex((value) => value.id === id);
  products.splice(elementIndex, 1);
  getTableContents();
};

///pridejimas
const createNewRecord = (event) => {
  //prevencija nuo iprastinio elgesio
  event.preventDefault();

  const newProduct = {
    id: products[products.length - 1].id + 1, // pridejimas prie paskutinio
    title: titleInputElement.value,
    price: priceInputElement.value,
    stock: stockInputElement.value,
    brand: brandInputElement.value,
    category: categoryInputElement.value,
  };

  products.push(newProduct);
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
  products[currentProduct].price = priceInputElement.value;
  products[currentProduct].stock = stockInputElement.value;
  products[currentProduct].brand = brandInputElement.value;
  products[currentProduct].category = categoryInputElement.value;

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
}
