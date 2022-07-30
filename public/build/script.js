import { productsData } from "./products.js";
const productContainer = document.querySelector(".product-container");
const filters = [...document.querySelectorAll(".filter")];
const tickBtns = [...document.querySelectorAll(".tick")];
const btnsSort = [...document.querySelectorAll(".btn-sort")];
const categories = [...document.querySelectorAll(".category")];
const itemsFooter = [...document.querySelectorAll(".item-footer")];

class Ui {
  //show product
  ShowProduct() {
    let productList = "";

    productsData.forEach((product) => {
      productList += `<div class="watch-apple bg-white p-2  rounded-xl shadow-sm" data-id=${product.id}>
          <div
            class="bg-slate-200 flex justify-center items-center rounded-lg relative"
          >
            <div
              class="bg-gray-300 w-7 h-7 md:w-8 md:h-8 absolute top-1 right-1 flex justify-center items-center rounded-full md:m-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-4 md:w-5 fill-orange-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div class="w-16 py-2 md:w-20 xl:w-28">
              <img src=${product.imageUrl} alt="watch" />
            </div>
          </div>
          <!-- product discription -->
          <div class="flex flex-col gap-3 mt-3">
            <div class="flex justify-between items-center px-1">
              <div class="color-appel text-xs text-slate-800 flex">
                <span class="text-sm md:text-base" >Color</span>
                <div class="flex justify-center items-center w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 rounded-full bg-blue-400 border-2 border-white cursor-pointer hover:ring-1 hover:ring-blue-400 "
                data-color="red"
              >
              <svg xmlns="http://www.w3.org/2000/svg" class="md:h-3 md:w-3 fill-white" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
              </div>


              </div>
              <div class="flex items-center gap-0 relative">
                <div
                  class="btn-color w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 rounded-full bg-red-400 border-2 border-white absolute right-0 md:right-0 cursor-pointer hover:ring-1   md:hover:ring-2 hover:ring-red-400 hover:z-50"
                  data-color="red"
                ></div>
                <div
                  class="btn-color w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 rounded-full bg-purple-400 border-2 border-white absolute right-2 md:right-3 cursor-pointhover:ring-1   md:hover:ring-2 hover:ring-purple-400 hover:z-50"
                  data-color="purple"
                ></div>
                <div
                  class="btn-color w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 rounded-full bg-blue-400 border-2 border-white absolute right-4 md:right-6 cursor-pointerhover:ring-1   md:hover:ring-2 hover:ring-blue-400 hover:z-50"
                  data-color="blue"
                ></div>
                <div
                  class="btn-color w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 rounded-full bg-green-400 border-2 border-white absolute right-6 md:right-9 cursor-pointehover:ring-1   md:hover:ring-2 hover:ring-green-400 hover:z-50"
                  data-color="green"
                ></div>
              </div>
            </div>
            <h2 class="text-xs font-medium text-slate-900 md:text-sm xl:text-base">
            ${product.name}
            </h2>
            <span class="text-center text-xs  font-medium text-orange-700 md:text-sm   xl:text-base"
              >${product.price}</span
            >
            <hr />
            <span class="text-orange-600 py-2 md:text-base  rounded-lg font-bold text-sm text-center cursor-pointer hover:text-orange-50 hover:bg-orange-600"
              >See more</span
            >
          </div>
          </div>`;
    });
    productContainer.innerHTML = productList;
  }

  //select color of product
  SelectedColor() {
    const btnsColor = document.querySelectorAll(".btn-color");

    btnsColor.forEach((product) => {
      product.addEventListener("click", (e) => {
        const color = e.target.dataset.color;
        e.target.parentElement.previousElementSibling.innerHTML = `<span class="text-sm md:text-base">Color</span>`;
        e.target.parentElement.previousElementSibling.innerHTML += `<div
      class="flex justify-center items-center w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 rounded-full bg-${color}-400 border-2 border-white cursor-pointer hover:ring-1 hover:ring-${color}-400 "
      data-color="red"
    >
    <svg xmlns="http://www.w3.org/2000/svg" class="md:h-3 md:w-3 fill-white" viewBox="0 0 20 20" fill="currentColor">
    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
  </svg>
    </div>`;
      });
    });
  }


  // filter on product
  ShowFilters() {
    filters.forEach((filter) => {
      filter.addEventListener("click", () => {
        if (filter.nextElementSibling.classList.contains("flex")) {
          filter.nextElementSibling.classList.remove("flex", "opacity-100");
          filter.nextElementSibling.classList.add("hidden", "opacity-0");
          filter.firstElementChild.firstElementChild.classList.remove(
            "text-orange-600"
          );
          filter.firstElementChild.lastElementChild.classList.remove(
            "stroke-orange-600",
            "rotate-180"
          );
        } else {
          filter.nextElementSibling.classList.add("flex", "opacity-100");
          filter.nextElementSibling.classList.remove("hidden", "opacity-0");
          filter.firstElementChild.firstElementChild.classList.add(
            "text-orange-600"
          );
          filter.firstElementChild.lastElementChild.classList.add(
            "stroke-orange-600",
            "rotate-180"
          );
        }
      });
    });
  }

  // check of each option
  tickOption() {
    tickBtns.forEach((tickbtn) => {
      tickbtn.addEventListener("click", (e) => {
        if (e.target.classList.contains("border-gray-300")) {
          e.target.classList.remove(
            "border-gray-300",
            "hover:ring-gray-300",
            "hover:bg-gray-300"
          );
          e.target.classList.add(
            "border-white",
            "ring-1",
            "ring-orange-600",
            "bg-orange-600"
          );
        } else {
          e.target.classList.add(
            "border-gray-300",
            "hover:ring-gray-300",
            "hover:bg-gray-300"
          );
          e.target.classList.remove(
            "border-white",
            "ring-1",
            "ring-orange-600",
            "bg-orange-600"
          );
        }
      });
    });
  }

  //sorting
  selectBtnSort() {
    btnsSort.forEach((btn) => {
      btn.addEventListener("click", () => {
        btnsSort.forEach((btn) => {
          btn.classList.remove("text-slate-800");
          btn.classList.add("text-gray-300");
          btn.lastElementChild.classList.add("hidden");
        });
        btn.classList.remove("text-gray-300");
        btn.classList.add("text-slate-800");
        btn.lastElementChild.classList.remove("hidden");
      });
    });
  }
  //chose category
  category() {
    categories.forEach((category) => {
      category.addEventListener("click", () => {
        categories.forEach((category) => {
          category.lastElementChild.classList.remove("text-slate-800");
          category.lastElementChild.classList.add("text-gray-300");

          category.firstElementChild.classList.remove("stroke-slate-800");
          category.firstElementChild.classList.add("stroke-gray-300");
        });
        category.lastElementChild.classList.add("text-slate-800");
        category.lastElementChild.classList.remove("text-gray-300");

        category.firstElementChild.classList.add("stroke-slate-800");
        category.firstElementChild.classList.remove("stroke-gray-300");
      });
    });
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
}

document.addEventListener("DOMContentLoaded", () => {
  const ui = new Ui();
  ui.ShowProduct();
  ui.SelectedColor();
  ui.ShowFilters();
  ui.tickOption();
  ui.selectBtnSort();
  ui.category();
  ui.ShowItemFooter();
});
