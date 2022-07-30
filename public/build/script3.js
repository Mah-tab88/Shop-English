const itemsFooter = [...document.querySelectorAll(".item-footer")];
let btnsRemove = [...document.querySelectorAll(".btn-remove")];
const listProduct = document.querySelector(".list-product");
const sectionPrice = document.querySelector(".section-price");
const btnsPlus = document.querySelectorAll(".btn-plus");
const btnsMinus = document.querySelectorAll(".btn-minus");
const finalPrice = document.querySelector(".final-price");
const totalPrice = document.querySelector(".total-price");
const priceOff = document.querySelector(".price-off");
const btnSale = document.querySelector(".btn-sale");

class Shopping {
  //remove product
  removeProduct() {
    btnsRemove.forEach((btnRemove) => {
      btnRemove.addEventListener("click", (e) => {
        // update add to cart section
        btnRemove.parentElement.parentElement.parentElement.parentElement.remove();
        this.updateCart();

        btnsRemove = [...document.querySelectorAll(".btn-remove")];
        if (btnsRemove.length == 0) {
          listProduct.innerText =
            "There is not any product in your Shopping Cart";
          sectionPrice.remove();
        }
      });
    });
  }

  //increase product
  increaseProduct() {
    btnsPlus.forEach((btnPlus) => {
      btnPlus.addEventListener("click", () => {
        btnPlus.previousElementSibling.innerText =
          Number(btnPlus.previousElementSibling.innerText) + 1;
        this.updateCart();
      });
    });
  }

  //deacrease product
  decreaseProduct() {
    btnsMinus.forEach((btnMinus) => {
      btnMinus.addEventListener("click", () => {
        if (Number(btnMinus.nextElementSibling.innerText) > 1) {
          btnMinus.nextElementSibling.innerText =
            Number(btnMinus.nextElementSibling.innerText) - 1;

          //update cart
          this.updateCart();
        } else {
          btnMinus.parentElement.parentElement.parentElement.parentElement.remove();
          this.updateCart();

          btnsRemove = [...document.querySelectorAll(".btn-remove")];
          if (btnsRemove.length == 0) {
            listProduct.innerText =
              "There is not any product in your Shopping Cart";
            sectionPrice.remove();
          }
        }
      });
    });
  }
  //update cart
  updateCart() {
    let totalPriceOfSgopping = 0;
    let numberOfAllProducts = 0;
    let numberOfProducts = "";
    const priceProducts = [...document.querySelectorAll(".price-product")];
    priceProducts.forEach((priceProduct) => {
      numberOfProducts =
        priceProduct.parentElement.nextElementSibling.firstElementChild
          .nextElementSibling.innerText;

      numberOfAllProducts += Number(numberOfProducts);

      totalPriceOfSgopping +=
        Number(priceProduct.innerText) * Number(numberOfProducts);
    });

    totalPrice.innerText = totalPriceOfSgopping;
    if (priceOff.innerText != "0.00") {
      priceOff.innerText = Number(numberOfAllProducts) * 5;
      finalPrice.innerText =
        Number(totalPrice.innerText) - Number(priceOff.innerText);
    } else {
      finalPrice.innerText =
        Number(totalPrice.innerText) - Number(priceOff.innerText);
    }
  }

  // footer
  ShowItemFooter() {
    itemsFooter.forEach((item) => {
      item.addEventListener("click", () => {
        itemsFooter.forEach((item) => {
          item.firstElementChild.firstElementChild.classList.remove(
            "fill-slate-800"
          );
          item.firstElementChild.firstElementChild.classList.add(
            "fill-gray-400"
          );

          item.lastElementChild.classList.add("hidden");
        });
        item.firstElementChild.firstElementChild.classList.remove(
          "fill-gray-400"
        );
        item.firstElementChild.firstElementChild.classList.add(
          "fill-slate-800"
        );
        item.lastElementChild.classList.remove("hidden");
      });
    });
  }

  sale() {
    btnSale.addEventListener("click", () => {
      if (btnSale.nextElementSibling.value == "1a2b3x") {
        const quantityOfProduct = [
          ...document.querySelectorAll(".quantity-product"),
        ];

        let totalQuantity = 0;
        quantityOfProduct.forEach((product) => {
          totalQuantity += Number(product.innerText);
        });
        priceOff.innerText = totalQuantity * 5;

        finalPrice.innerText =
          Number(totalPrice.innerText) - Number(priceOff.innerText);
      } else {
        btnSale.nextElementSibling.value = "Invalid";
      }
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const shopping = new Shopping();

  shopping.ShowItemFooter();
  shopping.removeProduct();
  shopping.increaseProduct();
  shopping.decreaseProduct();
  shopping.sale();
});
