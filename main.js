
const navIcon = document.querySelector("#navIcon");

navIcon.addEventListener("click", function (e) {
  e.preventDefault();
  var showhide = document.getElementById("sub");
  if (showhide.style.transform === "translateX(-500%)") { 
    showhide.style.transform = "translateX(0%)"; 
} 
else { showhide.style.transform = "translateX(-500%)"; 
}
});
