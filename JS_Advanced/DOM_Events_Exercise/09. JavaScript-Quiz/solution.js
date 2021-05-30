// JUDGE 50 PTS :(

function solve() {    
  [qOne, qTwo, qThree] = document.querySelectorAll('section');
  const questions = [qOne, qTwo, qThree];
  [qOneCorrect, qOneFalse] = questions[0].querySelectorAll('.answer-text');
  [qTwoFalse, qTwoCorrect] = questions[1].querySelectorAll('.answer-text');
  [qThreeCorrect, qThreeFalse] = questions[2].querySelectorAll('.answer-text');

  questions[0].addEventListener('click', questionOne)
  questions[1].addEventListener('click', questionTwo)
  questions[2].addEventListener('click', questionThree)

  let answers = 0;

  function questionOne(ev) {

    if (ev.target === qOneCorrect || ev.target === qOneFalse) {

      if (ev.target.textContent === qOneCorrect.textContent) {
        answers++;
      }
      questions[0].style.display = 'none';
      questions[1].style.display = 'block';
    }
  }

  function questionTwo(ev) {

    if (ev.target === qTwoFalse || ev.target === qTwoCorrect) {

      if (ev.target.textContent === qTwoCorrect.textContent) {
        answers++;
      }
      questions[1].style.display = 'none';
      questions[2].style.display = 'block';
    }
  }

  function questionThree(ev) {

    if (ev.target === qThreeCorrect || ev.target === qThreeFalse) {

      if (ev.target.textContent === qThreeCorrect.textContent) {
        answers++;
      }

      questions[2].style.display = 'none';
      let result = '';

      if (answers === 3) {
        result = 'You are recognized as top JavaScript fan!'
      } else {
        result = `You have ${answers} right answers.`
      }
      const hOne = document.querySelector('#results').children[0].children[0];
      document.querySelector('#results').style.display = 'block';
      hOne.textContent = result;
    }
  }
}
