import React from 'react';
import {shallow} from 'enzyme';
import {serverQuestionStub}  from "../../api/StubApi/ServerApiStub";
import {PageSelector} from "./PageSelector";


describe("<PageSelector />", () => {
  it("each LevelPage in its level", function () {
    let levels  = [];
    serverQuestionStub.questions.forEach((question) =>{
      if(levels.indexOf(question.level) === -1) {
        levels.push(question.level);
      }
    });

    let wrapper = shallow(<PageSelector questions={serverQuestionStub.questions}/>);
    let levelPageItem = wrapper.find({id: 'levelsMount'});
    expect(levelPageItem.children().length).toBe(levels.length);
  });

  it("render LevelPage item for category", function () {
    let categories  = [];
    serverQuestionStub.questions.forEach((question) =>{
      if(categories.indexOf(question.category) === -1) {
        categories.push(question.category);
      }
    });

    let wrapper = shallow(<PageSelector questions={serverQuestionStub.questions}/>);
    console.log(wrapper.debug());

    categories.forEach((category) => {
      let levelContainer = wrapper.find({id: category});
      expect(levelContainer.length).toBe(1);
    });
  });


});
