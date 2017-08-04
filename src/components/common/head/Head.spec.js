import React from 'react';
import {shallow} from 'enzyme';
import {Head} from "./Head";

describe("<Head />", () => {
  it("when isTurnMusic start in false, isMusic is false", function () {
    let wrapper = shallow(<Head isTurnOnMusic={false} actions={{}}/>);
    expect(wrapper.state().isMusic).toBe(false);
  });

  it("when isTurnMusic change in false, isMusic is false", function () {
    let wrapper = shallow(<Head isTurnOnMusic={true} actions={{}}/>);
    let newProps = {
      isMusic: true,
      isTurnOnMusic: false
    };

    wrapper.setProps(newProps);
    expect(wrapper.state().isMusic).toBe(false);
  });

});
