const menu = [
     {
          id: 1,
          image: "image/breakfast.jpg",
          title: "Oatmeal",
          category: "Breakfast",
          price: "$12",
          desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur quo similique explicabo consectetur iure molestias.",
     },
     {
          id: 2,
          image: "image/lunch.jpg",
          title: "PanCake",
          category: "Lunch",
          price: "$1.5",
          desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur quo similique explicabo consectetur iure molestias.",
     },
     {
          id: 3,
          image: "image/breakfast1.jpg",
          title: "Fruits",
          category: "Breakfast",
          price: "$31.25",
          desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur quo similique explicabo consectetur iure molestias.",
     },
     {
          id: 4,
          image: "image/lunch1.jpg",
          title: "PanCake",
          category: "Lunch",
          price: "$20.4",
          desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur quo similique explicabo consectetur iure molestias.",
     },
     {
          id: 5,
          image: "image/dinner.webp",
          title: "PanCake",
          category: "Dinner",
          price: "$12.5",
          desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur quo similique explicabo consectetur iure molestias.",
     },
     {
          id: 6,
          image: "image/drink.jpg",
          title: "Strawberry Milk-Shake",
          category: "Drink",
          price: "$30.5",
          desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur quo similique explicabo consectetur iure molestias.",
     },
]

const clientCard = [
     {
          image: "image/person.1.png",
          name: "Bruce Hardy",
          job: "paypal inc.",
          info: "When, while lovely valley teems with vapour around meand meridian sun strikes",
     },
     {
          image: "image/person.2.png",
          name: "Mark Smith",
          job: "Google Inc.",
          info: "When, while lovely valley teems with vapour around meand meridian sun strikes the upper impenetrable .",
     },
     {
          image: "image/person.3.png",
          name: "Mark Smith",
          job: "Google Inc.",
          info: "When, while lovely valley teems with vapour around meand meridian sun strikes the upper impenetrable .",
     },
     {
          image: "image/person.4.png",
          name: "Vera Duncan",
          job: "Amazon Inc.",
          info: "When, while lovely valley teems with vapour around meand meridian sun strikes the upper impenetrable .",
     },
]

const container = document.getElementById('card-container');
const btnContainer = document.getElementById("btn-container");
const cardContainer = document.querySelector(".client-info");
const menuBtn = document.getElementById("menu");
const menuContainer = document.querySelector(".menu-container");
const closeBtn = document.getElementById("close");

//start

const para = document.querySelectorAll(".lorem")
const lineBreak = document.querySelectorAll(".line-break");
const qusContainer = document.querySelectorAll(".add-text");
const faqContainer = document.querySelector(".faq-page");
//


function displayMenu() {
     menuContainer.classList.toggle("block");
}

function closeMenu() {
     menuContainer.classList.toggle("block");
}

closeBtn.addEventListener("click", closeMenu);
menuBtn.addEventListener("click", displayMenu);


function displayFunction(menuItem) {
     container.innerHTML = '';
   
     menuItem.forEach((item) => {
       let article = document.createElement("article");
       article.classList.add("card");
       article.innerHTML = `
         <img src=${item.image} alt="choco-image" class="card-image">
         <div class="card-info">
           <ul class="title-list">
             <h2 class="title">${item.title}</h2>
             <h3 class="price">${item.price}</h3>
           </ul>
           <h4 class="para">${item.desc}</h4>
         </div>`
   
       container.append(article);
     });
   }
   

function cardFunction(){
     clientCard.forEach((item) => {
          cardContainer.innerHTML += `
          <article class="card-div">
               <img src=${item.image} alt="image" class="image-1">
               <div class="client-card">
                    <ul class="client-list">
                         <h2>${item.name}</h2>
                         <p>${item.job}</p>
                    </ul>
               <p class="client-para">${item.info}</p>
               <li>
               <i class="fa-solid fa-star"></i>         
               <i class="fa-solid fa-star"></i>         
               <i class="fa-solid fa-star"></i>         
               <i class="fa-solid fa-star"></i>         
               <i class="fa-solid fa-star"></i> 
               </li>        
               </div>
          </article>`
     });
}

function displayBtn(){
             let btns = menu.reduce((values,item) => {
          if(!values.includes(item.category)){
               values.push(item.category);
          }
             return values;
        }, ["All"]);
        
        btns.forEach((category) => {
                    btnContainer.innerHTML += `
                    <button data-id=${category} class="btn">${category}</button>
                    `
               });
             const buttons = document.querySelectorAll(".btn");
          
             buttons.forEach((btn) => {
                btn.addEventListener("click", (e) => {
                    let category = e.currentTarget.dataset.id;

                    let result = menu.filter((item) =>  item.category == category);
                    console.log(result);
                    
                    if(category == 'All'){
                         displayFunction(menu);
                    }else {
                         displayFunction(result);
                    }
                })
             })
     
     
}

window.addEventListener("DOMContentLoaded", () => {
     displayFunction(menu);
     displayBtn();
     cardFunction(); 
}
);

//start = 2hr58min
const question = document.querySelectorAll(".qus-list");
const answer = document.querySelectorAll(".show-container");
const addBtn = document.querySelectorAll(".addBtn");

question.forEach((qus, index) => {
     qus.addEventListener("click", () => {
         addBtn.forEach((btn, btnIndex) => {
             if (index === btnIndex) {
                 answer[index].classList.toggle("block");
             } else {
                 answer[btnIndex].classList.remove("block");
             }
         });
     });
 });
 //3hr 42min