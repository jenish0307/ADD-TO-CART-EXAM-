


const m_data = [
  {
    id: 1,
    product_name: "Camera",
    img: "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-980x653.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, reiciendis",
    price: "$350",
  },
  {
    id: 2,
    product_name: "Headphone" ,
    img: "https://i.pinimg.com/564x/8c/db/e1/8cdbe123010c380e20f264a8fdd57938.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, reiciendis",
    price: "$150",
  },
  {
    id: 3,
    product_name: "Mouse",
    img: "https://i.pinimg.com/564x/80/17/a2/8017a2f48d590c7f2f664198f18230c6.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, reiciendis",
    price: "$250",
  },
  {
    id: 4,
    product_name: "Mobile",
    img: "https://i.pinimg.com/564x/8c/1b/12/8c1b1208fca4933dad3f3916cae2caee.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, reiciendis",
    price: "$250",
  },
  {
    id: 5,
    product_name: "Laptop",
    img: "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/Untitled1569.png",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, reiciendis",
    price: "$1150",
  },
  {
    id: 6,
    product_name: "Tabs",
    img: "https://i.pinimg.com/564x/7c/3c/83/7c3c83c6b48f242524b08fe1a7f00766.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, reiciendis",
    price: "$220",
  },
  {
    id: 7,
    product_name: "Keyboard",
    img: "https://i.pinimg.com/236x/4a/77/2f/4a772f7b4df1435642192c33cb8c9cc9.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, reiciendis",
    price: "$50",
  },
  {
    id: 8,
    product_name: "Macbook",
    img: "https://i.pinimg.com/564x/70/ac/93/70ac9331047949fa63fe80650029b219.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, reiciendis",
    price: "$2500",
  },
  {
    id: 9,
    product_name: "Wire less charging",
    img: "https://i.pinimg.com/564x/b4/68/78/b46878b22592ec105102d26b3d336593.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, reiciendis",
    price: "$20",
  },
  {
    id: 10,
    product_name: "I Watch",
    img: "https://i.pinimg.com/564x/4f/b7/ba/4fb7ba89d8fdbae6ed3a21c977a4d121.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, reiciendis",
    price: "$200",
  },
  {
    id: 11,
    product_name: "Smart Watch",
    img: "https://i.pinimg.com/564x/4f/b7/ba/4fb7ba89d8fdbae6ed3a21c977a4d121.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, reiciendis",
    price: "$150",
  },
  {
    id: 12,
    product_name: "Bag",
    img: "https://codingyaar.com/wp-content/uploads/bag-scaled.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, reiciendis",
    price: "$30",
  },
];

localStorage.setItem("products", JSON.stringify(m_data));

let data = JSON.parse(localStorage.getItem("products")) || [];

function product() {
  // data.clear()
  const card = document.getElementById("card");
  card.innerHTML = "";
  data.map((val, ind) => {
    const div = document.createElement("div");
    div.className = "card_main";
    div.innerHTML = `
        <div class="container m-4">
        <div class="card border-0 rounded-0 shadow" style="width: 18rem;">
          <img src=${val.img} class="card-img-top rounded-0" alt="...">
          <div class="card-body mt-3 mb-3">
            <div class="row">
              <div class="col-10">
                <h4 class="card-title">${val.product_name}</h4>
              </div>
              <div class="col-2">
                <i class="bi bi-bookmark-plus fs-2"></i>
              </div>
            </div>
          </div>
          <div class="row align-items-center text-center g-0">
            <div class="col-4">
              <h5>${val.price}</h5>
            </div>
            <div class="col-8">
            </div>
            <p class="btn btn-dark w-100 p-3 rounded-0 text-warning" onclick ="addcart(${ind})">ADD TO CART</p>
            </div>
        </div>
      </div>`;
    card.appendChild(div);
  });
}
product();

let item = JSON.parse(localStorage.getItem("mycart")) || [];
function addcart(index) {
  console.log("1");
  cart_item = data[index];
  item.push(cart_item);
  localStorage.setItem("mycart", JSON.stringify(item));
  alert("Product added successfully..");
  location.reload();
}
