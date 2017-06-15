import React from 'react';
import {shallow} from 'enzyme';
import {serverQuestionStub}  from "../../api/StubApi/ServerApiStub";
import {PageSelector} from "./PageSelector";


describe("<PageSelector />", () => {
  it("render LevelPage item for category", function () {
    let categories  = [];
    serverQuestionStub.questions.forEach((question) =>{
      if(categories.indexOf(question.category) === -1) {
        categories.push(question.category)
      }
    });

    let wrapper = shallow(<PageSelector questions={serverQuestionStub.questions}/>);
    console.log(wrapper.debug());
    let levelPageItem = wrapper.find({id: 'itemsLevelPage'});
    expect(levelPageItem.children().length).toBe(categories.length);
  });


});
