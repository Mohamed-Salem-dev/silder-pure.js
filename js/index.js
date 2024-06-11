let itemImgArray = Array.from(document.querySelectorAll(".item img"));
let lightboxContainer = document.querySelector(".lightbox-container");
let lightboxItem = document.querySelector(".lightbox-item");

let previcon = document.getElementById("prev");
let closeicon = document.getElementById("close");
let nexticon = document.getElementById("next");
let silderArray;

for (let i = 0; i < itemImgArray.length; i++) {
  itemImgArray[i].addEventListener("click", function (e) {
    console.log("Hello");
    lightboxContainer.classList.replace("d-none", "d-flex");

    console.log(e.target.getAttribute("src"));
    let imgSrc = e.target.getAttribute("src");
    lightboxItem.style.backgroundImage = `url(${imgSrc})`;

    silderArray = itemImgArray.indexOf(e.target);
  });
}

// ===================================================
function nextsilder(e) {
  silderArray++;
  //   console.log(silderArray);

  if (silderArray == itemImgArray.length) {
    silderArray = 0;
  }

  let imgSrc = itemImgArray[silderArray].getAttribute("src");
  // console.log(imgSrc);
  lightboxItem.style.backgroundImage = `url(${imgSrc})`;
}

nexticon.addEventListener("click", nextsilder);

// ===================================================

function pervsilder(e) {
  silderArray--;
  // console.log(silderArray);

  if (silderArray < 0) {
    silderArray = itemImgArray.length - 1;
  }

  let imgSrc = itemImgArray[silderArray].getAttribute("src");
  lightboxItem.style.backgroundImage = `url(${imgSrc})`;
}
previcon.addEventListener("click", nextsilder);
// ===================================================
function closesilder() {
  lightboxContainer.classList.replace("d-flex", "d-none");
}
closeicon.addEventListener("click", closesilder);

// closeicon.addEventListener("click", function () {
//   closesilder();
// });

// ===================================================

document.addEventListener("keydown", function (e) {
  if (e.key == "ArrowRight") {
    nextsilder();
  } else if (e.key == "ArrowLeft") {
    pervsilder();
  } else if (e.key == "Escape") {
    closesilder();
  }
});

// ==========================================================
lightboxContainer.addEventListener("click", function (e) {
  e.stopPropagation();
  closesilder();
});

lightboxItem.addEventListener("click", function (e) {
  e.stopPropagation();
});

// ==============================================================================
// slider 2

let imgItem = document.querySelectorAll(".imgItem");
let mainImage = document.getElementById("mainImage");

for (let i = 0; i < imgItem.length; i++) {
  imgItem[i].addEventListener("click", function (e) {
    console.log("Hello");
        var imgSrc = e.target.getAttribute("src");
        mainImage.setAttribute("src", `${imgSrc}`);
  });
}
