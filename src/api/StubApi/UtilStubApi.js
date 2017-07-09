import {serverContentStub} from "./ServerApiStub";

export function isStubContainQuestion(question){
  let isContain;
  for(let index in serverContentStub.questions){
    isContain = question === serverContentStub.questions[index];
    if(isContain){return isContain;}
  }
}

export function getQuestionFor(category){
  return serverContentStub.questions.filter((question) => question.category === category)[0];
}

export function getQuestionsFor(category, n = 10){
  return serverContentStub.questions.filter((question) => question.category === category).slice(0,n);
}
