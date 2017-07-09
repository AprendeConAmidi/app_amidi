import React from 'react';
import {shallow} from 'enzyme';
import {serverQuestionStub}  from "../../api/StubApi/ServerApiStub";
import {Link} from "react-router";
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

    categories.forEach((category) => {
      let levelContainer = wrapper.find({id: category});
      expect(levelContainer.length).toBe(1);
    });
  });


  it("a new user can play in the level one", function () {
    let firstCategory = "Pastoreo y Cereal 1";
    let secondCategory = "Pastoreo y Cereal 2";

    let wrapper = shallow(<PageSelector questions={serverQuestionStub.questions}/>);
    let linkCategoryAllowed = findContainsTagWithText(wrapper.find(Link),firstCategory,"h4");
    let linkCategoryNotAllowed = findContainsTagWithText(wrapper.find(Link),secondCategory,"h4");

    expect(linkCategoryAllowed.hasClass("disabled-category")).toBe(false);
    expect(linkCategoryNotAllowed.hasClass("disabled-category")).toBe(true);
  });


  function findContainsTagWithText(wrapper,answer,tag) {
    let listAnswer = wrapper.find(tag);

    for(let i = 0;i < listAnswer.length; i++){
      if(listAnswer.at(i).text() === answer){
        return wrapper.at(i);
      }
    }
  }


});
