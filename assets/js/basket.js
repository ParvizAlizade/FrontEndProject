


document.addEventListener("DOMContentLoaded", function () {
    let basketstr = localStorage.getItem("basket");
    let basket = JSON.parse(basketstr);

    if (!basket || !basket.length) {
        localStorage.setItem("basket", JSON.stringify([]));
    } else {
        ShowProductCount(basket);
        ShowTotalPrice(basket);
    }
});

let buttons = document.querySelectorAll(".button");

buttons.forEach((btn) => {
    btn.addEventListener("click", function () {

        let basket = JSON.parse(localStorage.getItem("basket"));
        if (!basket) {
            localStorage.setItem("basket", JSON.stringify([]));
            basket = JSON.parse(localStorage.getItem("basket"));
        }
        let product = GetProductsData(this);
        let sameid = basket.find((pro) => {
            return pro.id == product.id;
        });
        if (!sameid) {
            basket.push(product);
        } else {
            sameid.count++;
        }
        ShowTotalPrice(basket);
        ShowProductCount(basket);
        let basketstr = JSON.stringify(basket);
        localStorage.setItem("basket", basketstr);
    });
});

function GetProductsData(product) {
    let parent = product.parentElement.parentElement;
    let title = parent.querySelector(".card-title").innerText;
    let src = parent.querySelector(".card-img-top").src;
    let id = parent.getAttribute("data-id");
    let price = parent.querySelector(".card-text span").innerText;
    result = { title, src, id, price, count: 1 };
    return result;
}

let cart = document.querySelectorAll(".cart-icon");
let ul = document.querySelectorAll(".box_basket");
let ulparent = document.querySelectorAll(".box");
cart.forEach((crt) => {
    crt.addEventListener("click", function (product) {
        ulparent.forEach((ule) => {
            ule.classList.add("active");
        });
        let basket = JSON.parse(localStorage.getItem("basket"));

        ul.forEach((ll) => {
            ll.innerHTML = "";
        });

        basket.forEach((baskets) => {
            let html =
                ` 
            <li style="position:relative;cursor: pointer; margin-top:20px" id="${baskets.id}"> 
            <div class="d-flex"> 
            <div style="width:50px; height:50px" class="cart_image"> 
             <img style="width:100%; height:100%" src="${baskets.src}" alt=""> 
             </div> 
            <div class="info "> 
            <span class=" ms-2" >${baskets.count}</span> 
            <span class="me-1 ms-2">x</span> 
            <span>${baskets.title}</span> 
            <p style="border-bottom:0">${baskets.price}</p> 
            </div> 
             </div> 
             <div>  
            </div> 
            <div style="position:absolute;top:10px;right:0px" class="del_btn" > 
            <i style="font-size:20px;margin-right:10px" class="fa-solid fa-trash"></i>
            </div> 
            <hr style="margin:0px">

            </li> 
            `;
            ul.forEach((ll) => {
                ll.innerHTML += html;
            });
        });
        let delbtn = document.querySelectorAll(".del_btn");

        delbtn.forEach((btn) => {
            btn.addEventListener("click", function () {
                let li = this.parentElement;
                let id = li.getAttribute("id");
                basket = basket.filter((dev) => dev.id != id);
                li.remove();
                ShowTotalPrice(basket);
                ShowProductCount(basket);

                localStorage.setItem("basket", JSON.stringify(basket));

            });
        });

    });
});

function ShowTotalPrice(basket) {
    let totals = document.querySelectorAll(".total");

    totals.forEach((tt) => {
        tt.innerText = basket.reduce((total, product) => {
            return Math.trunc((total += parseInt(product.price) * product.count));
        }, 0);
    });
}

function ShowProductCount(basket) {
    let basketCount = document.querySelectorAll(".total_count");
    basketCount.forEach((dvc) => {
        dvc.innerText = basket.reduce((total, product) => {
            return Math.trunc((total += product.count));
        }, 0);
    });
}