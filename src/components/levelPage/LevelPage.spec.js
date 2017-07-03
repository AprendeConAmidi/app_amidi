import React from 'react';
import {shallow} from 'enzyme';
import * as UtilStub from '../../api/StubApi/UtilStubApi';
import {LevelPage} from "./LevelPage";


describe("<LevelPage/>", () =>{
  it("should render question", function () {
    let questionsStub = UtilStub.getQuestionFor("Pastoreo y Cereal 2");
    let wrapper = shallow(<LevelPage/>);
    wrapper.setProps({ questionsLevel: [questionsStub]});
    let questionStatement = wrapper.find("h4");
    let groupAnswer = wrapper.find("li");

    expect(questionStatement.text()).toBe(questionsStub.question);
    for(let index in questionsStub.answers){
      expect(groupAnswer.at(index).text()).toBe(questionsStub.answers[index]);
    }
    expect(questionStatement.length).toBe(1);
    expect(groupAnswer.length).toBe(questionsStub.answers.length);
  });

  it("when currentQuestion is empty render <div></div>", function () {
    let wrapper = shallow(<LevelPage/>);

    expect(wrapper.length).toBe(1);
    expect(wrapper.find("div").length).toBe(1);
  });
});
