const items = document.querySelectorAll(".item");

items.forEach(function (item) {
  item.addEventListener("mouseover", function () {
    removeFocus();
    item.classList.add("selected-increase");
  });
});
function removeFocus() {
	items.forEach(function(item){
		item.classList.remove("selected-increase");
	})
}
