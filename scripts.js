// rotate text on intro page
var i = 0;
function rotateText() {
  const text = document.getElementById('rotating-content');
  const textOptions = [
    "all things HTML/CSS/Javascript.",
    "great books.",
    "keeping up to date with web standards.",
    "biking and taking care of my plants. 🌿",
    "translating PSDs into pixel-perfect websites.",
    "practicing yoga and drinking warm coffee. ☕"
  ];

  (i < textOptions.length - 1) ? i++ : i = 0;
  text.textContent = textOptions[i];
};
// rotate text every 2.5 seconds
setInterval(rotateText, 2500);

// display additional content
function showMore() {
  const header = document.querySelector('.header');
  const content = document.querySelector('.content');
  header.classList.add('expanded');
  content.classList.add('expanded');
};

// on clicking 'learn more', expand and display content
const learnMore = document.getElementById('learn-more');
learnMore.addEventListener('click', showMore);
