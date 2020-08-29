// Show cart
// we target the button #cart-info and then the cart, which also attach a eventlistener to, which och click toggles show-cart(this is a css element!)
(function(){
  const cartInfo = document.getElementById('cart-info');
  const cart = document.getElementById('cart');

  cartInfo.addEventListener('click', function(){
    // toggles showcart on and off JS just decides it lol
    cart.classList.toggle("show-cart");
  })
})();

// local reviews data
const reviews = [
  {
    id: 1,
    name: "Jackie Chan",
    job: "Trained Athlete 1",
    // img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    img: "./img/jackie.jpg",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quo eius recusandae officia voluptas sint deserunt dicta nihil namomnis",
  },
  {
    id: 2,
    name: "Donnie Yen",
    job: "Trained Athlete 2",
    img: "./img/donny.jpg",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quo eius recusandae officia voluptas sint deserunt dicta nihil namomnis. Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "Jet Li",
    job: "Trained Athlete 3",
    img: "./img/jet.jpg",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quo eius recusandae officia voluptas sint deserunt dicta nihil namomnis?",
  },
  {
    id: 4,
    name: "Max Zhang",
    job: "Trained Athlete 4",
    img: "./img/max.jpg",
    text:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quo eius recusandae officia voluptas sint deserunt dicta nihil namomnis.",
  },
];

// select items by ID
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");
// select items by Class
const prevBtn = document.querySelector(".prev-btn")
const nextBtn = document.querySelector(".next-btn")
// set starting item - global var
let = currentItem = 0;
// load initial item
window.addEventListener("DOMContentLoaded", function () {
  showPerson();
});
// show person based on item
function showPerson() {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}
// show next person
nextBtn.addEventListener("click", function () {
  // if we reach the last item in our item array, then reset current item to zero (start from from first picture)
  currentItem++; 
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
// show prev person
prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});
