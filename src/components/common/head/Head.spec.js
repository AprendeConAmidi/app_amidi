import React from 'react';
import {shallow} from 'enzyme';
import {Head} from "./Head";

describe("<HeadConnect />", () => {
  it("when isTurnMusic start in false, isMusic is false", function () {
    let wrapper = shallow(<Head isTurnOnMusic={false} isMenu={false} actions={{}}/>);
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
