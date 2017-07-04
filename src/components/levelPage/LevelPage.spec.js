import React from 'react';
import {shallow} from 'enzyme';
import * as UtilStub from '../../api/StubApi/UtilStubApi';
import {LevelPage} from "./LevelPage";


describe("<LevelPage/>", () =>{
  it("level start", function () {
    let questionStub = UtilStub.getQuestionFor("Pastoreo y Cereal 2");
    let wrapper = shallow(<LevelPage/>);
    wrapper.setProps({ questionsLevel: [questionStub]});
    let questionStatement = wrapper.find("h4");
    let groupAnswer = wrapper.find("li");
    let modal = wrapper.find("#modal");

    expect(questionStatement.text()).toBe(questionStub.question);
    for(let index in questionStub.answers){
      expect(groupAnswer.at(index).text()).toBe(questionStub.answers[index]);
    }
    expect(questionStatement.length).toBe(1);
    expect(groupAnswer.length).toBe(questionStub.answers.length);
    expect(modal.hasClass("hidden")).toBe(true)
  });

  it("when currentQuestion is empty render <div></div>", function () {
    let wrapper = shallow(<LevelPage/>);

    expect(wrapper.length).toBe(1);
    expect(wrapper.find("div").length).toBe(1);
  });

  it("Player answer fail", function () {
    let questionStub = UtilStub.getQuestionFor("Pastoreo y Cereal 2");
    let wrapper = shallow(<LevelPage/>);
    wrapper.setProps({ questionsLevel: [questionStub]});
    let answerFail =  getAnswerFailDom(wrapper, questionStub);

    answerFail.simulate('click');

    let modal = wrapper.find("#modal");
    expect(modal.hasClass("hidden")).toBe(false);
    expect(modal.find("h2").text()).toBe("Te equivocaste");
    expect(modal.find("h3").text()).toBe(questionStub.correctAnswer);
  });

  it("Player answer success", function () {
    let questionStub = UtilStub.getQuestionFor("Pastoreo y Cereal 2");
    let wrapper = shallow(<LevelPage/>);
    wrapper.setProps({ questionsLevel: [questionStub]});
    let answerSuccess =  findContainsText(wrapper, questionStub.correctAnswer);

    answerSuccess.simulate('click');

    let modal = wrapper.find("#modal");
    expect(modal.hasClass("hidden")).toBe(false);
    expect(modal.find("h2").text()).toBe("Tu respuesta es correcta");
    expect(modal.find("h3").length).toBe(0);
  });

});

function getAnswerFailDom(wrapper, questionStub){
  let answerFail = returnAnswerFail(questionStub);
  let answerReact = findContainsText(wrapper, answerFail);
  return answerReact;
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
