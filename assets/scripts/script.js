const trigger1 = document.getElementById("trigger1");
const trigger2 = document.getElementById("trigger2");
const trigger3 = document.getElementById("trigger3");
const trigger4 = document.getElementById("trigger4");
const trigger5 = document.getElementById("trigger5");
const trigger6 = document.getElementById("trigger6");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const image4 = document.getElementById("image4");
const image5 = document.getElementById("image5");
const image6 = document.getElementById("image6");

trigger1.addEventListener("mouseover", () => {
  image1.style.display = "block";
  setTimeout(() => {
    image1.style.display = "none";
  }, 10000);
});

trigger2.addEventListener("mouseover", () => {
  image2.style.display = "block";
  setTimeout(() => {
    image2.style.display = "none";
  }, 10000);
});

trigger3.addEventListener("mouseover", () => {
  image3.style.display = "block";
  setTimeout(() => {
    image3.style.display = "none";
  }, 10000);
});

trigger4.addEventListener("mouseover", () => {
  image4.style.display = "block";
  setTimeout(() => {
    image4.style.display = "none";
  }, 10000);
});

trigger5.addEventListener("mouseover", () => {
  image5.style.display = "block";
  setTimeout(() => {
    image5.style.display = "none";
  }, 10000);
});

trigger6.addEventListener("mouseover", () => {
  image6.style.display = "block";
  setTimeout(() => {
    image6.style.display = "none";
  }, 10000);
});
