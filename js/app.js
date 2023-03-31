baguetteBox.run('.gallery');

const searchBox = document.querySelector("#search");
const captions = document.querySelectorAll(".gallery a");

searchBox.addEventListener("input",function() {
const searchText = searchBox.value.toLowerCase();

captions.forEach(function(caption) {
  const captionText = caption.getAttribute("data-caption").toLowerCase();

  if(captionText.includes(searchText)) {
    caption.style.display = "block";
  } else {
    caption.style.display = "none";
  }
});
});

