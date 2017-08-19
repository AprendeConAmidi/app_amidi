import React from 'react';
import {shallow} from 'enzyme';
import * as UtilStub from '../../api/StubApi/UtilStubApi';
import {serverContentStub} from '../../api/StubApi/ServerApiStub';
import  * as routesPath from "../../routePaths";
import {CategoryPage} from "./CategoryPage";

describe("<CategoryPage/>", () =>{
  let questionStubStandard = UtilStub.getQuestionFor("Pastoreo y Cereal 2");

  function customShallow(questionsStub){
    return shallow(<CategoryPage questionsCategory={questionsStub} router={{}} user={{}} actions={{}} category={{}}/>);
  }

  it("level start", function () {
    let wrapper = customShallow([questionStubStandard]);
    let questionStatement = wrapper.find("h4");
    let groupAnswer = wrapper.find("li");
    let modal = wrapper.find("#modal");

    expect(questionStatement.text()).toBe(questionStubStandard.question);
    for(let index in questionStubStandard.answers){
      expect(groupAnswer.at(index).text()).toBe(questionStubStandard.answers[index]);
    }
    expect(questionStatement.length).toBe(1);
    expect(groupAnswer.length).toBe(questionStubStandard.answers.length);
    expect(modal.hasClass("hidden")).toBe(true);
  });

  it("when currentQuestion is empty render <div></div>", function () {
    let wrapper = customShallow([undefined]);

    expect(wrapper.length).toBe(1);
    expect(wrapper.find("div").length).toBe(1);
  });

  it("Player answer fail", function () {
    let wrapper = customShallow([questionStubStandard]);
    let answerFail =  getAnswerFailDom(wrapper, questionStubStandard);

    answerFail.simulate('click');

    let modal = wrapper.find("#modal");
    expect(modal.hasClass("hidden")).toBe(false);
    expect(modal.find("h2").text()).toBe("Fallaste");
    expect(modal.find("h3").text()).toBe(questionStubStandard.correctAnswer);
    expect(wrapper.state().isSuccess).toBe(false);
  });

  it("Player answer success", function () {
    let wrapper = customShallow([questionStubStandard]);
    let answerSuccess =  findContainsText(wrapper, questionStubStandard.correctAnswer);

    answerSuccess.simulate('click');

    let modal = wrapper.find("#modal");
    expect(modal.hasClass("hidden")).toBe(false);
    expect(modal.find("h2").text()).toBe("Tu respuesta es correcta");
    expect(modal.find("h3").length).toBe(0);
    expect(wrapper.state().isSuccess).toBe(true);
  });

  it("Player answer fail and continue", function () {
    let questionsStub = UtilStub.getQuestionsFor("Pastoreo y Cereal 2",3);
    let wrapper = customShallow(questionsStub);
    let answerFail =  getAnswerFailDom(wrapper, questionsStub[0]);

    answerFail.simulate('click');
    simulateClickModal(wrapper);

    let modal = wrapper.find("#modal");
    let questionStatement = wrapper.find("h4");
    expect(questionStatement.text()).toBe(questionsStub[1].question);
    expect(modal.hasClass("hidden")).toBe(true);
    expect(wrapper.state().questionsCategory.length).toBe(questionsStub.length);
    expect(wrapper.state().isSuccess).toBe(false);
  });

  it("questionsLevel finish return start", function () {
    let questionsStub = UtilStub.getQuestionsFor("Pastoreo y Cereal 2",2);
    let wrapper = customShallow(questionsStub);
    wrapper.setProps({ questionsLevel: questionsStub});

    let answerFail1 =  getAnswerFailDom(wrapper, questionsStub[0]);
    answerFail1.simulate('click');
    simulateClickModal(wrapper);
    let answerFail2 =  getAnswerFailDom(wrapper, questionsStub[1]);
    answerFail2.simulate('click');
    simulateClickModal(wrapper);

    let questionStatement = wrapper.find("h4");
    expect(questionStatement.text()).toBe(questionsStub[0].question);
  });

  it("Player answer success and continue", function () {
    let questionsStub = UtilStub.getQuestionsFor("Pastoreo y Cereal 2",3);
    let wrapper = customShallow(questionsStub);
    wrapper.setProps({ questionsLevel: questionsStub});
    let answerSuccess =  findContainsText(wrapper, questionStubStandard.correctAnswer);

    answerSuccess.simulate('click');
    simulateClickModal(wrapper);

    let modal = wrapper.find("#modal");
    let questionStatement = wrapper.find("h4");
    expect(questionStatement.text()).toBe(questionsStub[1].question);
    expect(modal.hasClass("hidden")).toBe(true);
    expect(wrapper.state().questionsCategory.length).toBe(questionsStub.length-1);
  });

  it("Player winner level", function () {
    const category = serverContentStub.categories.filter((category) => (category.name === questionStubStandard.category))[0];
    let routeMock = null;
    let propsStub = {
      questionsCategory: [questionStubStandard],
      category : category,
      user:{
        categoriesComplete:[]
      },
      actions:{saveUserAction : () =>0},
      router: {
        push: function (routePath) {
          routeMock = routePath;}
      }};
    let wrapper = shallow(<CategoryPage {...propsStub}/>);

    let answerSuccess =  findContainsText(wrapper, questionStubStandard.correctAnswer);
    answerSuccess.simulate('click');
    simulateClickModal(wrapper);

    expect(routeMock).toBe(routesPath.WINNER);
  });
});

function simulateClickModal(wrapper) {
  let modal = wrapper.find("#modal");
  let buttonNext = modal.find("button");
  buttonNext.simulate('click');
}

function getAnswerFailDom(wrapper, questionStub){
  let answerFail = returnAnswerFail(questionStub);
  let answerFailReact = findContainsText(wrapper, answerFail);
  return answerFailReact;
}

function findContainsText(wrapper, answer) {
  let listAnswer = wrapper.find("li");

  for(let i = 0;i < listAnswer.length; i++){
    if(listAnswer.at(i).text() === answer){
      return listAnswer.at(i);
    }
  }
}

function returnAnswerFail(question) {
  return (question.correctAnswer !== question.answers[0]) ? question.answers[0] : question.answers[1];
}
