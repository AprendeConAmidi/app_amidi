import {serverQuestionStub} from "./ServerApiStub";

export function isStubContainQuestion(question){
  let isContain;
  for(let index in serverQuestionStub.questions){
    isContain = question === serverQuestionStub.questions[index];
    if(isContain){return isContain;}
  }
}

export function getQuestionFor(category){
  return serverQuestionStub.questions.filter((question) => question.category === category)[0];
}

export function getQuestionsFor(category, n = 10){
  return serverQuestionStub.questions.filter((question) => question.category === category).slice(0,n);
}
