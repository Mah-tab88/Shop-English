const reviewSeeMore = document.querySelector(".review-see-more");
const btnAboutItems = document.querySelectorAll(".btn-about-item");
const descAboutItems = [...document.querySelectorAll(".desc-about-item")];
const specificationSeeMore = document.querySelector(".specification-see-more");
const starRate = [...document.querySelectorAll(".star")];
const btnsColor = document.querySelectorAll(".btn-color");
const filters = [...document.querySelectorAll(".filter")];
const tickBtns = [...document.querySelectorAll(".tick")];
const categories = [...document.querySelectorAll(".category")];
const btnAddToCart = document.querySelector(".add-toCart");
const itemsFooter = [...document.querySelectorAll(".item-footer")];

//select category
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

//filter product
filters.forEach((filter) => {
  filter.addEventListener("click", () => {
    if (filter.nextElementSibling.classList.contains("flex")) {
      filter.nextElementSibling.classList.remove("flex");
      filter.nextElementSibling.classList.add("hidden");
      filter.firstElementChild.firstElementChild.classList.remove(
        "text-orange-600"
      );
      filter.firstElementChild.lastElementChild.classList.remove(
        "stroke-orange-600",
        "rotate-180"
      );
    } else {
      filter.nextElementSibling.classList.add("flex");
      filter.nextElementSibling.classList.remove("hidden");
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

//select btn of each specification
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
//see more reviw section
reviewSeeMore.addEventListener("click", (e) => {
  const descText = e.target.parentElement.nextElementSibling;
  if (descText.classList.contains("opacity-0")) {
    descText.classList.remove("opacity-0");
    e.target.innerText = "See less";
    e.target.previousElementSibling.classList.add("rotate-180");
  } else {
    descText.classList.add("opacity-0");
    e.target.innerText = "See More";
    e.target.previousElementSibling.classList.remove("rotate-180");
  }
});

//see more
specificationSeeMore.addEventListener("click", (e) => {
  if (
    e.target.parentElement.previousElementSibling.classList.contains("hidden")
  ) {
    e.target.previousElementSibling.classList.add("rotate-180");
    e.target.innerText = "See less";
    e.target.parentElement.previousElementSibling.classList.remove("hidden");
    e.target.parentElement.previousElementSibling.classList.add("flex");
  } else {
    console.log(e.target);
    e.target.previousElementSibling.classList.remove("rotate-180");
    e.target.innerText = "See more";
    e.target.parentElement.previousElementSibling.classList.add("hidden");
    e.target.parentElement.previousElementSibling.classList.remove("flex");
  }
});
// click to add or remove star
starRate.forEach((star) => {
  star.addEventListener("click", (e) => {
    // console.log();
    const selectedStar = starRate.find(
      (star) => star.dataset.id == e.target.dataset.id
    );

    if (
      selectedStar.dataset.id == 4 &&
      selectedStar.classList.contains("fill-yellow-400")
    ) {
      selectedStar.classList.remove("stroke-yellow-400", "fill-yellow-400");
      selectedStar.classList.add("stroke-gray-500");
    } else if (
      selectedStar.dataset.id == 1 &&
      selectedStar.classList.contains("stroke-gray-500")
    ) {
      selectedStar.classList.add("stroke-yellow-400", "fill-yellow-400");
      selectedStar.classList.remove("stroke-gray-500");
    } else if (
      selectedStar.classList.contains("fill-yellow-400") &&
      selectedStar.parentElement.nextElementSibling.firstElementChild.classList.contains(
        "stroke-gray-500"
      )
    ) {
      selectedStar.classList.remove("stroke-yellow-400", "fill-yellow-400");
      selectedStar.classList.add("stroke-gray-500");
    } else if (
      selectedStar.classList.contains("stroke-gray-500") &&
      selectedStar.parentElement.previousElementSibling.firstElementChild.classList.contains(
        "fill-yellow-400"
      )
    ) {
      selectedStar.classList.add("stroke-yellow-400", "fill-yellow-400");
      selectedStar.classList.remove("stroke-gray-500");
    }
  });
});

//select color for product
btnsColor.forEach((btnColor) => {
  btnColor.addEventListener("click", (e) => {
    // const color = e.target.dataset.color;

    console.log(e.target);
    btnsColor.forEach((item) => {
      item.classList.remove("ring-1", "md:ring-2", "ring-gray-500", "z-50");
      item.innerHTML = "";
    });

    const color = e.target.dataset.color;
    const textColor = "text-" + color + "-400";
    const ringColor = "ring-" + color + "-400";
    e.target.classList.add("ring-1", "md:ring-2", ringColor, "z-50");

    const check = `<svg xmlns="http://www.w3.org/2000/svg" class="md:h-3 md:w-3 fill-white" viewBox="0 0 20 20" fill="currentColor">
    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
  </svg>`;
    e.target.innerHTML = check;
    e.target.parentElement.previousElementSibling.lastElementChild.lastElementChild.innerText =
      color;
    e.target.parentElement.previousElementSibling.lastElementChild.lastElementChild.innerHTML = `<span class=${textColor}>${color}</span>`;
  });
});

// Show description of About Item
btnAboutItems.forEach((item) => {
  item.addEventListener("click", () => {
    //change all btn to unclick
    btnAboutItems.forEach((btn) => {
      btn.classList.remove("bg-white", "text-slate-800", "shadow-md", "ring-1");
      btn.classList.add("text-gray-400", "hover:border-white");
    });
    //change all desc to  hidden
    descAboutItems.forEach((item) => {
      item.classList.add("hidden");
    });
    //add style to clicked btn
    item.classList.add("bg-white", "text-slate-800", "shadow-md");
    item.classList.remove("text-gray-400", "hover:border-white");
    //find desc relelated to clicked btn
    const selectdDesc = descAboutItems.find(
      (desc) => desc.dataset.btn == item.dataset.btn
    );
    //show dec related to clicked btn
    selectdDesc.classList.remove("hidden");
  });
});

//change style of btn add to cart
btnAddToCart.addEventListener("click", (e) => {
  e.target.innerText = "In Cart";
  e.target.classList.remove(
    "hover:ring-offset-2",
    "bg-orange-600",
    "ring-orange-600",
    "px-12"
  );
  e.target.classList.add(
    "bg-orange-100",
    "ring-orange-200",
    "text-gray-600",
    "px-12"
  );
});

// show item footer mobile

itemsFooter.forEach((item) => {
  item.addEventListener("click", () => {
    itemsFooter.forEach((item) => {
      item.firstElementChild.firstElementChild.classList.remove(
        "fill-slate-800"
      );
      item.firstElementChild.firstElementChild.classList.add("fill-gray-400");

      item.lastElementChild.classList.add("hidden");
    });
    item.firstElementChild.firstElementChild.classList.remove("fill-gray-400");
    item.firstElementChild.firstElementChild.classList.add("fill-slate-800");
    item.lastElementChild.classList.remove("hidden");
  });
});
