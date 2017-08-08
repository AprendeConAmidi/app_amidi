import React from 'react';
import {shallow, mount} from 'enzyme';
import {Head} from "./Head";


function getWrapperHeadDefault(isMenu){
  return shallow(<Head isTurnOnMusic={false} isMenu={isMenu} actions={{}}/>);
}

function getWrapperHeadMount(isMenu){
  return mount(<Head isTurnOnMusic={false} isMenu={isMenu} actions={{}}/>);
}

function sidePanelcomponent(wrapper){
  return wrapper.find("#drawer");
}

function getButtonHead(wrapper){
  return wrapper.find('#btn-menu');
}

describe("<HeadConnect />", () => {
  describe("button music", function () {
    it("when isTurnMusic start in false, isMusic is false", function () {
      let wrapper = getWrapperHeadDefault();
      expect(wrapper.state().isMusic).toBe(false);
    });

    it("when isTurnMusic change in false, isMusic is false", function () {
      let wrapper = shallow(<Head isTurnOnMusic={true} isMenu={false} actions={{}}/>);
      let newProps = {
        isMusic: true,
        isTurnOnMusic: false
      };

      wrapper.setProps(newProps);
      expect(wrapper.state().isMusic).toBe(false);
    });

    it("when isMenu is true the button left is Menu", function () {
      let wrapper = shallow(<Head isTurnOnMusic={true} isMenu={true} actions={{}}/>);
      expect(wrapper.find('.btn-menu').length).toBe(1);
      expect(wrapper.find('.angle-left-arrow').length).toBe(0);
    });

    it("when isMenu is true the button left is Arrow", function () {
      let wrapper = shallow(<Head isTurnOnMusic={true} isMenu={false} actions={{}}/>);
      expect(wrapper.find('.btn-menu').length).toBe(0);
      expect(wrapper.find('.angle-left-arrow').length).toBe(1);
    });
  });
  describe("button toogle", function () {
    it("drawer start hidden", function () {
      let wrapper = getWrapperHeadDefault(true);
      let sidePanel = sidePanelcomponent(wrapper);
      expect(sidePanel.hasClass('background-drawer')).toBe(false);
    });

    it("drawer is show when click button ", function () {
      let wrapper = getWrapperHeadMount(true);
      let sidePanel = sidePanelcomponent(wrapper);
      let button = getButtonHead(wrapper);

      button.simulate('click');

      expect(sidePanel.hasClass('background-drawer')).toBe(true);
    });

    it("drawer is hidden when twice click ", function () {
      let wrapper = getWrapperHeadMount(true);
      let sidePanel = sidePanelcomponent(wrapper);
      let button = getButtonHead(wrapper);

      button.simulate('click');
      sidePanel.simulate('click');

      expect(sidePanel.hasClass('background-drawer')).toBe(false);
    });

    it("drawer, the background work ", function () {
      let wrapper = getWrapperHeadMount(true);
      let sidePanel = sidePanelcomponent(wrapper);
      let background = sidePanel.parent();

      background.simulate('click');

      expect(sidePanel.hasClass('background-drawer')).toBe(false);
    });
  });

});
