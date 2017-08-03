import React from 'react';
import {shallow} from 'enzyme';
import {serverContentStub}  from "../../api/StubApi/ServerApiStub";
import {Link} from "react-router";
import {PageSelector} from "./PageSelector";


describe("<PageSelector />", () => {
  it("each CategoryPage in its level", function () {
    let levels  = [];
    serverContentStub.categories.forEach((categories) =>{
      if(levels.indexOf(categories.level) === -1) {
        levels.push(categories.level);
      }
    });

    let wrapper = shallow(<PageSelector user={{}} content={serverContentStub} />);
    let levelPageItem = wrapper.find({id: 'levelsMount'});
    expect(levelPageItem.children().length).toBe(levels.length);
  });

  it("render CategoryPage item for category", function () {
    let categories  = serverContentStub.categories;

    let wrapper = shallow(<PageSelector user={{}} content={serverContentStub}/>);

    categories.forEach((category) => {
      let levelContainer = wrapper.find({id: category.name});
      expect(levelContainer.length).toBe(1);
    });
  });

  it("a new user can play in the level one", function () {
    let firstCategory = "Pastoreo y Cereal 1";
    let secondCategory = "Pastoreo y Cereal 2";

    let wrapper = shallow(<PageSelector user={{}} content={serverContentStub}/>);
    let linkCategoryAllowed = findContainsTagWithText(wrapper.find(Link),firstCategory,"h4");
    let linkCategoryNotAllowed = findContainsTagWithText(wrapper.find(Link),secondCategory,"h4");

    expect(linkCategoryAllowed.hasClass("disabled-category")).toBe(false);
    expect(linkCategoryNotAllowed.hasClass("disabled-category")).toBe(true);
  });


  it("user when finish level access to new Level", function () {
    let userStub = {
      categoriesComplete:[{name: "Pastoreo y Cereal 1", level:'1'}]
    };

    let wrapper = shallow(<PageSelector user={userStub} content={serverContentStub}/>);

    let linkCategoryAllowed = findContainsTagWithText(wrapper.find(Link),"Pastoreo y Cereal 1","h4");
    let linkCategoryNewAccess = findContainsTagWithText(wrapper.find(Link),"Pastoreo y Cereal 2","h4");
    let linkCategoryNotAccess = findContainsTagWithText(wrapper.find(Link),"Pastoreo y Cereal 3","h4");
    expect(linkCategoryAllowed.hasClass("disabled-category")).toBe(false);
    expect(linkCategoryNewAccess.hasClass("disabled-category")).toBe(false);
    expect(linkCategoryNotAccess.hasClass("disabled-category")).toBe(true);
  });


});

function findContainsTagWithText(wrapper,answer,tag) {
  let listAnswer = wrapper.find(tag);

  for(let i = 0;i < listAnswer.length; i++){
    if(listAnswer.at(i).text() === answer){
      return wrapper.at(i);
    }
  }
}
