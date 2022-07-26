/* eslint-disable linebreak-style */
const challenges = {
  challenge1: {
    title: ' Coding Challenge #1',
    question: ' Given an array of a sorted integers; print all the odd numbers followed by all the even numbers in ascending order.',
    difficulty: ' Easy',
    expectedtime: ' 15 minutes',
  },
  challenge2: {
    title: ' Coding Challenge #2',
    question: ' Given an array of a sorted integers; print all the odd numbers followed by all the even numbers in ascending order.',
    difficulty: ' Moderate',
    expectedtime: ' 15 minutes',
  },
  challenge3: {
    title: ' Coding Challenge #3',
    question: ' Given an array of a sorted integers; print all the odd numbers followed by all the even numbers in ascending order.',
    difficulty: ' Hard',
    expectedtime: ' 15 minutes',
  },
  challenge4: {
    title: ' Coding Challenge #4',
    question: ' Given an array of a sorted integers; print all the odd numbers followed by all the even numbers in ascending order.',
    difficulty: ' Super Hard',
    expectedtime: ' 15 minutes',
  },
};

const body = document.querySelector('body');
const cc = document.createElement('section');
cc.id = 'coding-challenges';
cc.className = 'coding-challenges';

function dataLoader() {
  const title = new Array(7);
  const question = new Array(7);
  const difficulty = new Array(7);
  const expectedtime = new Array(7);
  Object.values(challenges).forEach((val, i) => {
    title[i] = val.title;
    question[i] = val.question;
    difficulty[i] = val.difficulty;
    expectedtime[i] = val.expectedtime;
  });
  cc.innerHTML = `
                  <div class="mt-5 d-flex flex-column cc">
                    <h1 class="coding-header d-flex justify-content-center">Coding Challenges</h1>
                    <div class="challenge one mx-2 mt-4">
                        <h2>${title[0]}</h2>
                        <span><mark>${question[0]}</mark></span><br>
                        <label class="fw-bold">Difficulty: </label><span>${difficulty[0]}</span><br>
                        <label class="fw-bold">Expected Completion Time: </label><span>${expectedtime[0]}</span><br>
                        <button type="button" class="sub btn mt-4">Start Challenge</button>
                    </div>
                    <div class="challenge two mx-2 mt-4">
                        <h2>${title[1]}</h2>
                        <span><mark>${question[1]}</mark></span><br>
                        <label class="fw-bold">Difficulty: </label><span>${difficulty[1]}</span><br>
                        <label class="fw-bold">Expected Completion Time: </label><span>${expectedtime[1]}</span><br>
                        <button type="button" class="sub btn mt-4">Start Challenge</button>
                    </div>
                    <div class="challenge three mx-2 mt-4 visually-hidden">
                        <h2>${title[2]}</h2>
                        <span><mark>${question[2]}</mark></span><br>
                        <label class="fw-bold">Difficulty: </label><span>${difficulty[2]}</span><br>
                        <label class="fw-bold">Expected Completion Time: </label><span>${expectedtime[2]}</span><br>
                        <button type="button" class="sub btn mt-4">Start Challenge</button>
                    </div>
                    <div class="challenge four mx-2 mt-4 visually-hidden">
                        <h2>${title[3]}</h2>
                        <span><mark>${question[3]}</mark></span><br>
                        <label class="fw-bold">Difficulty: </label><span>${difficulty[3]}</span><br>
                        <label class="fw-bold">Expected Completion Time: </label><span>${expectedtime[3]}</span><br>
                        <button type="button" class="sub btn mt-4">Start Challenge</button>
                    </div>
                    <button type="button" class="more more-event btn mx-2 mt-4"> <span class="more-event" id="more-text"> MORE </span><img class="more-event more-img" src="images/more-arrow.png" width="24" alt="and more"></button>
                  </div>
                `;
  body.insertBefore(cc, document.getElementsByClassName('about')[0]);
  cc.getBoundingClientRect();
}
window.addEventListener('load', dataLoader);

document.addEventListener('DOMContentLoaded', () => {
  function showMoreOrLess() {
    const moretext = document.getElementById('more-text');
    const three = document.querySelector('.three');
    const four = document.querySelector('.four');
    const moreimg = document.querySelector('.more-img');
    if (moretext.textContent === ' MORE ') {
      three.classList.remove('visually-hidden');
      four.classList.remove('visually-hidden');
      moretext.textContent = ' LESS ';
      moreimg.src = 'images/less-arrow.png';
    } else {
      three.classList.add('visually-hidden');
      four.classList.add('visually-hidden');
      moretext.textContent = ' MORE ';
      moreimg.src = 'images/more-arrow.png';
    }
  }

  body.addEventListener('click', (e) => {
    if (e.target.classList.contains('more-event')) {
      showMoreOrLess();
    }
  });
});