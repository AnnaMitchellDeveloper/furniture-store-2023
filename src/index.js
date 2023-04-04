function openStoreCountdown(){
  const openStoreDay = new Date('December 1, 2023 00:00');
  const currentDay = new Date();
  const difference = openStoreDay - currentDay;

  
}

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
