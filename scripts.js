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

const skills = [
  [ "JavaScript", 5 ],
  [ "Node.js", 4 ],
  [ "MySQL", 4 ],
  [ "React", 4 ],
  [ "HTML/CSS", 5 ],
  [ "Adobe Suite", 4 ],
  [ "GIT", 4 ],
  [ "Angular", 3 ],
  [ "JQuery", 5 ],
  [ "UI / Responsive Design", 5 ],
  [ "Cross-Browser Compatibility", 4 ],
  [ "Google Analytics", 4 ]
]

// populate skills
function populateSkills(arr, el) {

  el.innerHTML = arr.map(function(skill) {
    let stars = '';
    let gray_stars = '';

    for(var i=0; i < skill[1]; i++) {
      stars += '&#9733;';
    }

    if(skill[1] < 5) {
      for(var i=0; i < ( 5 - skill[1]); i++) {
        gray_stars += '&#9733;';
      }
    }

    return `
      <li class="skill">
        <span class="skill__name">${skill[0]}</span>
        <span class="skill__stars">${stars}</span><span class="gray">${gray_stars}</span>
      </li>
    `;
  }).join('');
}

const [el, el2, el3] = Array.from(document.querySelectorAll('.skills'));
populateSkills(skills.slice(0,4), el);
populateSkills(skills.slice(4,8), el2);
populateSkills(skills.slice(8), el3);

// display additional content
const displayPortfolio = function(e) {
  const body = document.querySelector('body')
  body.classList.add('expanded');
};

// on clicking 'learn more', expand and display content
const showWork = document.querySelector('#see-my-work');
showWork.addEventListener('click', displayPortfolio, true);
