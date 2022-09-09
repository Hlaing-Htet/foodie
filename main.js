import "./style.scss";
import Typed from "typed.js";
import ScrollReveal from "scrollreveal";
import "waypoints/lib/noframework.waypoints";
import * as bootstrap from "bootstrap";
var options = {
  strings: ["Food ...", "Drink ..."],
  typeSpeed: 40,
  backDelay: 3000,
  backSpeed: 40,
  loop: true,
};

var typed = new Typed(".element", options);

let toDown = {
  distance: "50px",
  origin: "top",
  interval: 300,
  duration: 800,
};

ScrollReveal().reveal(".to-down", toDown);

let toRight = {
  distance: "50px",
  origin: "left",
  interval: 300,
  duration: 800,
};

ScrollReveal().reveal(".to-right", toRight);

let toLeft = {
  distance: "50px",
  origin: "right",
  interval: 300,
  duration: 800,
};

ScrollReveal().reveal(".to-left", toLeft);

function navContorl(elSelector, curSelector, offset) {
  new Waypoint({
    element: document.getElementById(elSelector),
    handler: function (direction) {
      let oldNavLink = document.querySelector(".nav-link.active");
      if (oldNavLink != null) {
        oldNavLink.classList.remove("active");
      }

      let currentNavLink = document.querySelector(`[href="#${curSelector}"]`);
      currentNavLink.classList.add("active");
    },
    offset: offset,
  });
}
navContorl("home-content", "home", "20%");
navContorl("about", "about", "20%");
navContorl("services", "services", "20%");
navContorl("menu", "menu", "20%");
navContorl("contact", "contact", "80%");

let menulists = [
  {
    id: 1,
    img: "./public/img/plate1.png",
    title: "Barbecue Salad",
    description: "Sepcial Delicious Dish",
    price: 22.2,
    currency: "$",
  },
  {
    id: 2,
    img: "./public/img/plate2.png",
    title: "Salad With Fish",
    description: "Sepcial Delicious Dish",
    price: 30.4,
    currency: "$",
  },
  {
    id: 3,
    img: "./public/img/plate3.png",
    title: "Spinach Salad",
    description: "Sepcial Delicious Dish",
    price: 50,
    currency: "$",
  },
];
let menuRow = document.getElementById("menuRow");

menulists.forEach((menulist) => {
  let div = document.createElement("div");
  div.classList.add("col-8", "col-md-4", "col-lg-2");
  div.innerHTML = `
            <div class="card plate-card mb-5">
              <img
                src="${menulist.img}"
                alt=""
                class="w-75 d-block mx-auto my-4 card-img"
              />
              <div class="card-body">
                <p class="fw-bold">${menulist.title}</p>
                <p class="text-black-50 small">${menulist.description}</p>
                <div class="d-flex justify-content-between align-items-center">
                  <p class="mb-0">$ ${menulist.price}</p>
                  <button class="btn btn-primary">
                    <i class="bi bi-cart-plus"></i>
                  </button>
                </div>
              </div>
            </div>
  `;
  menuRow.append(div);
});
