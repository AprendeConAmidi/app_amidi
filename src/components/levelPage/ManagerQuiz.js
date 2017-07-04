function ManagerQuiz() {

  this.filterForLevel = function(category, allQuestions){
    const NUM_MAX_QUESTION = 10;
    let filterQuestions;
    filterQuestions = allQuestions.filter((question) => question.category === category);
    filterQuestions = sortRandomArray(filterQuestions).slice(0,NUM_MAX_QUESTION);

    return filterQuestions;
  };

  function sortRandomArray(questions){
    let numberLoop = 50;
    for(let i =0; i < numberLoop; i++){
      questions = sortRandom(questions);
    }
    return questions;
  }


  function sortRandom(questions){
    let max = questions.length - 1;
    let min = 0;

    let firstPosition = parseInt(Math.floor(Math.random() * (max - min) + min));
    let secondPosition = parseInt(Math.floor(Math.random() * (max - min) + min));

    let tempQuestion = questions[firstPosition];
    questions[firstPosition] = questions[secondPosition];
    questions[secondPosition] = tempQuestion;

    return questions;
  }

   this.updateQuestionForLevel = function(indexCurrentQuestion,stateLevel){
    let newQuestionLevel = Object.assign([],stateLevel.questionsLevel);
    if(stateLevel.isSuccess){
      newQuestionLevel.splice(indexCurrentQuestion,1)
    }
    return newQuestionLevel;
  }

}

export default ManagerQuiz;
