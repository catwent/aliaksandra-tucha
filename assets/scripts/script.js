document.addEventListener("DOMContentLoaded", () => {
  const imageIDs = [];

  for (let i = 1; i <= 28; i++) {
    imageIDs.push("image" + i);
  }

  // Function to set random position and size for an image
  const setRandomPositionAndSize = (image) => {
    // Set a random max-width for the image
    const randomMaxWidth = Math.floor(6 + Math.random() * 28);
    image.style.maxWidth = randomMaxWidth + "vw";

    // Calculate the random position within the viewport
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    const randomLeft = Math.random() * (viewportWidth - randomMaxWidth);
    const randomTop = Math.random() * (viewportHeight - randomMaxWidth);

    image.style.position = "absolute";
    image.style.left = randomLeft + "px";
    image.style.top = randomTop + "px";

    // Log position for debugging
    console.log(
      `Image ${image.id} - Left: ${randomLeft}px, Top: ${randomTop}px`
    );
  };

  // Loop through all images
  for (let i = 0; i < imageIDs.length; i++) {
    const image = document.getElementById(imageIDs[i]);

    // Initially hide the images
    image.style.display = "none";

    // Set random position and size for each image
    setRandomPositionAndSize(image);

    // Add event listener to trigger image display on mouseover
    image.addEventListener("mouseover", () => {
      image.style.display = "block";
      setTimeout(() => {
        image.style.display = "none";
      }, 10000);
    });
  }
});
