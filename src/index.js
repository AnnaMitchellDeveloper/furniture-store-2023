function openStoreCountdown(){
  const openStoreDay = new Date('April 4, 2024 19:37');
  const currentDay = new Date();
  const difference = openStoreDay - currentDay;

  const msInSecond = 1000;
  const msInMinute = 60 * 1000;
  const msInHour = 60 * 60 * 1000;
  const msInDay = 24 * 60 * 60 * 1000;

  const displayDay = Math.floor(difference/msInDay);
  document.querySelector('.days').textContent = displayDay;
  const displayHour = Math.floor((difference%msInDay)/msInHour);
  document.querySelector('.hours').textContent = displayHour;
  const displayMinute = Math.floor((difference%msInHour)/msInMinute);
  document.querySelector('.minutes').textContent = displayMinute;
  const displaySecond = Math.floor((difference%msInMinute)/msInSecond);
  document.querySelector('.seconds').textContent = displaySecond;
  if(difference <= 0){
    document.querySelector('.days').textContent = 0;
    document.querySelector('.hours').textContent = 0;
    document.querySelector('.minutes').textContent = 0;
    document.querySelector('.seconds').textContent = 0;
    clearInterval(timerID);
    openStoreMoment();
  }
}
let timerID = setInterval(openStoreCountdown, 1000);

function openStoreMoment() {
  const heading = document.querySelector("h1");
  heading.textContent = "We are opened! Welcome!";
  heading.classList.add("open-store-moment");
}
let playButton = document.querySelector("#myButton");
playButton.addEventListener("click", function(){
  document.querySelector("#myAudio").play();
})


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
