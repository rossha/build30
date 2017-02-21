const words = document.querySelectorAll('.item');
let isDown = false;
let startCoords = {};
let shift = {};
let coords;

function startDrag(e) {
  isDown = true;
  this.classList.add('active');

  const wordCoords = this.getBoundingClientRect();
  coords = {
    top: wordCoords.top + (wordCoords.height / 2),
    left: wordCoords.left + (wordCoords.width / 2)
  };

  [shift.left, shift.top] = (this.dataset.top || this.dataset.left) ? [Number(this.dataset.left), Number(this.dataset.top)] : [0,0];
  [startCoords.left, startCoords.top] = [coords.left, coords.top];
}

function drag(e) {
  if(!isDown) return;
  e.preventDefault();

  const word = document.querySelector('.active');
  const [x,y] = [e.pageX, e.pageY];
  const [walkX, walkY] = [(x + shift.left - startCoords.left),(y + shift.top - startCoords.top)]

  word.style.setProperty('transform', `translate(${walkX}px, ${walkY}px)`);
  word.dataset['left'] = walkX;
  word.dataset['top'] = walkY;
}

function stopDrag() {
  isDown = false;
  const word = document.querySelector('.active');
  if(word) {
    word.classList.remove('active');
  }
}

// Event Listeners
// upon mousedown, start dragging the word
words.forEach(word => word.addEventListener('mousedown', startDrag));

// upon mousemove, drag the word
document.addEventListener('mousemove', drag);

// upon mouseup or mouseleave, stop dragging
document.addEventListener('mouseleave', stopDrag);
document.addEventListener('mouseup', stopDrag);
