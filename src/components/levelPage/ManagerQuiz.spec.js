import * as UtilStub from "../../api/StubApi/UtilStubApi";
import {serverQuestionStub} from "../../api/StubApi/ServerApiStub";
import ManagerQuiz from './ManagerQuiz';


describe("ManagerQuizShould", () => {
  let managerQuiz = new ManagerQuiz();

  it('filter question for category',async () =>{
    let category = "Pastoreo y Cereal 2";

    const questionsFilter =
      managerQuiz.filterForLevel(category, serverQuestionStub.questions);

    const actualQuestion = questionsFilter[0];
    expect(actualQuestion.category).toEqual(UtilStub.getQuestionFor(category).category);
  });

  it("return only 10 questions", async () =>{
    let category = "Pastoreo y Cereal 2";

    const questionsFilter =
      managerQuiz.filterForLevel(category, serverQuestionStub.questions);

    const actualQuestions = questionsFilter;
    expect(actualQuestions.length).toBe(10);
  });

  it("return random questions", async () =>{
    let category = "Pastoreo y Cereal 2";

    const questionsFilter =
      managerQuiz.filterForLevel(category, serverQuestionStub.questions);

    let isOrder = isOrderQuestions(questionsFilter);

    expect(isOrder).not.toBeTruthy();
  });
});

function isOrderQuestions(questions) {
  let serverStubQuestion = serverQuestionStub.questions;

  let position;
  for(let index in serverStubQuestion) {
    if (serverStubQuestion[index]._id === questions[0]._id) {
      position = index;
    }
  }
  let isOrder;
  for(let index in questions){
    isOrder = serverStubQuestion[parseInt(position) + parseInt(index)]._id === questions[index]._id;
    if(!isOrder){
      return isOrder;
    }
  }
  return true;
}
