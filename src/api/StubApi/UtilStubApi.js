import {serverQuestionStub} from "./ServerApiStub";

export function assertStubContainQuestion(question){
  let isContain;
  for(let index in serverQuestionStub.questions){
    isContain = question === serverQuestionStub.questions[index];
    if(isContain){return isContain;}
  }
}

export function getCuestionFor(category){
  return serverQuestionStub.questions.filter((question) => question.category === category)[0];
}
