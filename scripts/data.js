/* eslint-disable linebreak-style */
const challenges = {
  challenge1: {
    title: ' Coding Challenge #1',
    question: ' Given an array of a sorted integers; write a javascript function which prints all the odd numbers followed by all the even numbers in ascending order.',
    difficulty: ' Easy',
    expectedtime: ' 15 minutes',
    answer: `
    function order(arr) {
        let temp = new Array(arr.length);
        let j = 0;
        for (let i = 0; i < arr.length; i += 1) {
            if (arr[i]%2 !== 0) { 
                temp[j] = arr[i];
                j += 1;
            }
        }
        for (let i = 0; i < arr.length; i += 1) {
            if (arr[i]%2 === 0) { 
                temp[j] = arr[i];
                j += 1;
            }
        }
        return temp;
    }   
    `,
  },
  challenge2: {
    title: ' Coding Challenge #2',
    question: ' Given an array of integers; write a javascript function which prints all the odd numbers followed by all the even numbers in ascending order.',
    difficulty: ' Moderate',
    expectedtime: ' 20 minutes',
    answer: `
    function order(arr) {
        for (let i = 0; i < arr.length; i += 1) {
            if (arr[i]%2 === 0) { 
                for (let j = i + 1; j < arr.length; j += 1) { 
                    if (arr[j]%2 !== 0) {
                       swap(i, j, arr); 
                       break; 
                    } 
                } 
            } 
        }
        for (let k = 0; k < arr.length/2; k += 1) {
            for (let i = 0; i < arr.length; i += 1) { 
                if (arr[i]%2 === 0 && arr[i] > arr[i+1]) {
                    swap(i, i+1, arr); 
                } 
            }
        }
        return arr; 
    }
    function swap (x,y,a) {
        let temp = a[x];
        a[x] = a[y];
        a[y] = temp;
    }
    `,
  },
  challenge3: {
    title: ' Coding Challenge #3',
    question: ' Given an array of a sorted integers; print all the odd numbers followed by all the even numbers in ascending order.',
    difficulty: ' Hard',
    expectedtime: ' 30 minutes',
    answer: 'N/A',
  },
  challenge4: {
    title: ' Coding Challenge #4',
    question: ' Given an array of a sorted integers; print all the odd numbers followed by all the even numbers in ascending order.',
    difficulty: ' Super Hard',
    expectedtime: ' 60 minutes',
    answer: 'N/A',
  },
};

const htmlbody = document.querySelector('.htmlbody');
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
                  <h1 class="coding-header mt-5 d-flex justify-content-center">Coding Challenges</h1>
                  <div class="d-flex flex-column flex-wrap cc">
                    <div class="challenge one mx-2 mt-4">
                        <h2>${title[0]}</h2>
                        <span><mark>${question[0]}</mark></span><br>
                        <label class="fw-bold">Difficulty: </label><span>${difficulty[0]}</span><br>
                        <label class="fw-bold">Expected Completion Time: </label><span>${expectedtime[0]}</span><br>
                        <button type="button" class="sub one btn mt-4">Start Challenge</button>
                    </div>
                    <div class="challenge two mx-2 mt-4">
                        <h2>${title[1]}</h2>
                        <span><mark>${question[1]}</mark></span><br>
                        <label class="fw-bold">Difficulty: </label><span>${difficulty[1]}</span><br>
                        <label class="fw-bold">Expected Completion Time: </label><span>${expectedtime[1]}</span><br>
                        <button type="button" class="sub two btn mt-4">Start Challenge</button>
                    </div>
                    <div class="challenge three mx-2 mt-4">
                        <h2>${title[2]}</h2>
                        <span><mark>${question[2]}</mark></span><br>
                        <label class="fw-bold">Difficulty: </label><span>${difficulty[2]}</span><br>
                        <label class="fw-bold">Expected Completion Time: </label><span>${expectedtime[2]}</span><br>
                        <button type="button" class="sub three btn mt-4">Start Challenge</button>
                    </div>
                    <div class="challenge four mx-2 mt-4">
                        <h2>${title[3]}</h2>
                        <span><mark>${question[3]}</mark></span><br>
                        <label class="fw-bold">Difficulty: </label><span>${difficulty[3]}</span><br>
                        <label class="fw-bold">Expected Completion Time: </label><span>${expectedtime[3]}</span><br>
                        <button type="button" class="sub four btn mt-4">Start Challenge</button>
                    </div>
                    <button type="button" class="more more-event btn mx-2 mt-4"> <span class="more-event" id="more-text"> MORE </span><img class="more-event more-img" src="images/more-arrow.png" width="24" alt="and more"></button>
                  </div>
                `;
  htmlbody.insertBefore(cc, document.getElementsByClassName('about')[0]);
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

  htmlbody.addEventListener('click', (e) => {
    if (e.target.classList.contains('more-event')) {
      showMoreOrLess();
    }
  });

  const sectionModal = document.createElement('section');
  sectionModal.id = 'modal';
  sectionModal.className = 'modal';

  function closeModal() {
    sectionModal.style.display = 'none';
    sectionModal.classList.remove('open');
    htmlbody.style.webkitFilter = 'blur(0)';
  }

  function openModal(index) {
    let title = '';
    let question = '';
    let difficulty = '';
    let expectedtime = '';
    let answer = '';
    const titlearray = new Array(7);
    const questionarray = new Array(7);
    const difficultyarray = new Array(7);
    const expectedtimearray = new Array(7);
    const answerarray = new Array(7);
    Object.values(challenges).forEach((val, i) => {
      titlearray[i] = val.title;
      questionarray[i] = val.question;
      difficultyarray[i] = val.difficulty;
      expectedtimearray[i] = val.expectedtime;
      answerarray[i] = val.answer;
    });
    title = titlearray[index];
    question = questionarray[index];
    difficulty = difficultyarray[index];
    expectedtime = expectedtimearray[index];
    answer = answerarray[index];
    sectionModal.innerHTML = `
                              <div class="inner d-flex">
                                <div class="bgnd"></div>
                                <div class="front">    
                                    <div><img class="btn-close" id="xer" src="images/Disabled.png"></div>
                                    <div class="challenge-detail mx-2 mt-4">
                                        <h2>${title}</h2>
                                        <span><mark>${question}</mark></span><br>
                                        <label class="fw-bold">Difficulty: </label><span>${difficulty}</span><br>
                                        <label class="fw-bold">Expected Completion Time: </label><span>${expectedtime}</span><br>
                                        <button type="button" class="sub ans btn mt-4">Finish Challenge</button>
                                        <p class="answer visually-hidden">${answer}</p>
                                    </div>
                                </div>
                              </div>
                            `;
    document.body.appendChild(sectionModal);
    sectionModal.getBoundingClientRect();
    sectionModal.style.display = 'flex';
    sectionModal.classList.add('open');
    htmlbody.style.webkitFilter = 'blur(2px)';
    const xer = document.querySelector('#xer');
    xer.addEventListener('click', closeModal);
    document.querySelector('.ans').addEventListener('click', () => {
      document.querySelector('.answer').classList.remove('visually-hidden');
    });
  }

  htmlbody.addEventListener('click', (e) => {
    let i = '';
    if (e.target.classList.contains('one') || e.target.classList.contains('two') || e.target.classList.contains('three') || e.target.classList.contains('four')) {
      if (e.target.classList.contains('one')) {
        i = 0;
      } else if (e.target.classList.contains('two')) {
        i = 1;
      } else if (e.target.classList.contains('three')) {
        i = 2;
      } else if (e.target.classList.contains('four')) {
        i = 3;
      }
      openModal(i);
    }
  });
});

document.querySelector('.getstarted').addEventListener('click', () => {
  document.querySelector('#coding-challenges').scrollIntoView({ behavior: 'smooth' });
});
