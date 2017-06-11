import React from 'react';
import {shallow} from 'enzyme'
import * as UtilStub from '../../api/StubApi/UtilStubApi';
import {LevelPage} from "./LevelPage";


describe("<LevelPage/>", () =>{
  let questionsStub;
  let wrapper;

  beforeEach(function () {
    questionsStub = UtilStub.getQuestionsFor("Pastoreo y Cereal 2");

    wrapper = shallow(<LevelPage questions={questionsStub} />);
  });

  it("render question", function () {
    let questionStatement = wrapper.find("h4");
    let groupAnswer = wrapper.find("li");

    expect(questionStatement.text()).toBe(questionsStub[0].question);
    for(let index in questionsStub[0].answers){
      expect(groupAnswer.at(index).text()).toBe(questionsStub[0].answers[index]);
    }
    expect(questionStatement.length).toBe(1);
    expect(groupAnswer.length).toBe(questionsStub[0].answers.length);
  });

});
