// window.onload = function() {
//     setTimeout(function() {
//       var loader = document.getElementById("loader");
//       loader.style.display = "none";
//     }, 2000); // Delay for 3 seconds (3000 milliseconds)
//   }
  
window.onload = function() {
    setTimeout(function() {
      var loader = document.getElementById("loader");
      loader.style.display = "none";
      var loaderText = document.querySelector("#loader h1");
      loaderText.style.display = "none"; // Hide the h1 tag along with the loader image
    }, 3000); // Delay for 3 seconds (3000 milliseconds)
  }
  