document.querySelector("header .icon-menu").onclick = function () {
  document.querySelector("header .menu").classList.add("show-menu");
  document.querySelector("header .black").classList.add("opacity");
}

document.querySelector("header .menu .close").onclick = function () {
  document.querySelector("header .menu").classList.remove("show-menu");
  document.querySelector("header .black").classList.remove("opacity");
}

let imgIndex = 0;

let imgsOnTheFlyArray = document.querySelectorAll(".slider .on-the-fly > img");

function changeImg(num) {
  imgIndex += num;
  if (imgIndex == -1) {
    imgIndex = 3;
  } else if (imgIndex == 4) {
    imgIndex = 0;
  }
  for (i = 0; i < imgsOnTheFlyArray.length; i++) {
    imgsOnTheFlyArray[i].classList.remove("opacity-img");
  }
  imgsOnTheFlyArray[imgIndex].classList.add("opacity-img");
}

let openImg = function (num) {
  imgIndex = num;
  document.querySelector(".landing .slider .on-the-fly").style.display = "flex";
  document.querySelector(".landing .black").classList.add("opacity");
}

document.querySelector(".landing .slider .on-the-fly .controls > img").onclick = function () {
  document.querySelector(".landing .slider .on-the-fly").style.display = "none";
  document.querySelector(".landing .black").classList.remove("opacity");
}

function chooseImg(num) {
  for (i = 0; i < document.querySelectorAll(".landing .slider .current-img img").length; i++) {
    document.querySelectorAll(".landing .slider .current-img img")[i].classList.remove("active-img");
  };
  document.querySelectorAll(".landing .slider .current-img img")[num].classList.add("active-img");
  for (i = 0; i < document.querySelectorAll(".landing .slider .imgs img").length; i++) {
    document.querySelectorAll(".landing .slider .imgs img")[i].classList.remove("active-thumbnail");
  };
  document.querySelectorAll(".landing .slider .imgs img")[num].classList.add("active-thumbnail");
}

let countProducts = 0;

document.querySelector(".landing .information .add-cart .number img:last-of-type").onclick = function () {
  if (countProducts != 999) {
    countProducts += 1;
  }
  document.querySelector(".landing .information .add-cart .number p").textContent = `${countProducts}`
}

document.querySelector(".landing .information .add-cart .number img:first-of-type").onclick = function () {
  if (countProducts != 0) {
    countProducts -= 1;
  }
  document.querySelector(".landing .information .add-cart .number p").textContent = `${countProducts}`
}

document.querySelector("header .left-header .cart img").onclick = function () {
  document.querySelector("header .left-header .cart .checkout").classList.toggle("active-cart");
};

let countOrders = 0;

if (document.querySelectorAll("header .left-header .cart .checkout .cart-orders .not-empty .orders div").length == 0) {
  document.querySelector("header .left-header .cart .checkout .cart-orders .not-empty").style.display = "none";
} else {
  document.querySelector("header .left-header .cart .checkout .cart-orders .empty").style.display = "none";
}

document.querySelector(".landing .information .add-cart .add").onclick = function () {
  if (document.querySelector(".landing .information .add-cart .number p").textContent != 0) {
    let div = document.createElement("div");
    let img = document.createElement("img");
    img.setAttribute("src", `${document.querySelector(".landing .slider .imgs img:first-of-type").getAttribute("src")}`);
    let text = document.createElement("div");
    text.classList.add("text");
    let title = document.createElement("div");
    title.classList.add("title")
    let titleText = document.createTextNode(`${document.querySelector(".landing .information .title > h1").textContent}`);
    title.appendChild(titleText);
    let price = document.createElement("div");
    price.classList.add("price");
    let priceText = document.createTextNode(`${document.querySelector(".landing .information .price .offer .after-discount").textContent} x ${countProducts}`);
    price.appendChild(priceText);
    let priceSpan = document.createElement("span");
    let priceSpanText = document.createTextNode(`$${(+(document.querySelector(".landing .information .price .offer .after-discount span").textContent)*+countProducts).toFixed(2)}`);
    priceSpan.appendChild(priceSpanText);
    price.appendChild(priceSpan);
    text.appendChild(title);
    text.appendChild(price);
    let delImg = document.createElement("img");
    delImg.setAttribute("src", "imgs/icon-delete.svg");
    delImg.addEventListener("click", function () {
      delImg.parentElement.style.display = "none";
      countOrders -= 1;
  
      if (countOrders == 0) {
        document.querySelector("header .left-header .cart .checkout .cart-orders .not-empty").style.display = "none";
        document.querySelector("header .left-header .cart .checkout .cart-orders .empty").style.display = "block";
        document.querySelector("header .left-header .cart .num-of-orders").style.display = "none";
      } else {
        document.querySelector("header .left-header .cart .checkout .cart-orders .empty").style.display = "none";
        document.querySelector("header .left-header .cart .checkout .cart-orders .not-empty").style.display = "block";
        document.querySelector("header .left-header .cart .num-of-orders").style.display = "flex";
      }
    
      document.querySelector("header .left-header .cart .num-of-orders").textContent = countOrders;
    })
    div.appendChild(img);
    div.appendChild(text);
    div.appendChild(delImg);
  
    document.querySelector("header .left-header .cart .checkout .cart-orders .not-empty .orders").prepend(div);
    
    countOrders += 1;
  
    if (countOrders == 0) {
      document.querySelector("header .left-header .cart .checkout .cart-orders .not-empty").style.display = "none";
      document.querySelector("header .left-header .cart .checkout .cart-orders .empty").style.display = "block";
      document.querySelector("header .left-header .cart .num-of-orders").style.display = "none";
    } else {
      document.querySelector("header .left-header .cart .checkout .cart-orders .empty").style.display = "none";
      document.querySelector("header .left-header .cart .checkout .cart-orders .not-empty").style.display = "block";
      document.querySelector("header .left-header .cart .num-of-orders").style.display = "flex";
    }
  
    document.querySelector("header .left-header .cart .num-of-orders").textContent = countOrders;
  }
}