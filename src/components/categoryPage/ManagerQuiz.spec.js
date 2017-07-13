import * as UtilStub from "../../api/StubApi/UtilStubApi";
import {serverContentStub} from "../../api/StubApi/ServerApiStub";
import ManagerQuiz from './ManagerQuiz';


describe("ManagerQuizShould", () => {
  let managerQuiz = new ManagerQuiz();

  it('filter question for category',async () =>{
    let category = "Pastoreo y Cereal 2";

    const questionsFilter =
      managerQuiz.filterForLevel(category, serverContentStub.questions);

    const actualQuestion = questionsFilter[0];
    expect(actualQuestion.category).toEqual(UtilStub.getQuestionFor(category).category);
  });

  it("return only 10 questions", async () =>{
    let category = "Pastoreo y Cereal 2";

    const questionsFilter =
      managerQuiz.filterForLevel(category, serverContentStub.questions);

    const actualQuestions = questionsFilter;
    expect(actualQuestions.length).toBe(10);
  });

  it("return random questions", async () =>{
    let category = "Pastoreo y Cereal 2";

    const questionsFilter =
      managerQuiz.filterForLevel(category, serverContentStub.questions);

    let isOrder = isOrderQuestions(questionsFilter);

    expect(isOrder).not.toBeTruthy();
  });

  it("IsContainCategory return falso when not contain", function () {
    let category ={
      name: "Pastoreo y Cereal 1",
      level: "1"
    };
    let categoriesComplete = [
      {
      name: "Pastoreo y Cereal 2",
      level: "2"
      }
    ];
    let isContain = managerQuiz.isContainCategory(categoriesComplete,category);
    expect(isContain).toBe(false);
  });

  it("IsContainCategory return falso when is undefined", function () {
    let isContain = managerQuiz.isContainCategory();
    expect(isContain).toBe(false);
  });


  it("IsContainCategory return true when contain", function () {
    let category ={
      name: "Pastoreo y Cereal 1",
      level: "1"
    };
    let categoriesComplete = [
      category,
      {
      name: "Pastoreo y Cereal 2",
      level: "2"
      }
    ];
    let isContain = managerQuiz.isContainCategory(categoriesComplete,category);
    expect(isContain).toBe(true);
  });



});

function isOrderQuestions(questions) {
  let serverStubQuestion = serverContentStub.questions;

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
