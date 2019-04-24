import React from "react";

import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });

import Login from "./Login";

const props = {
  form: { getFieldDecorator: () => jest.fn() }
};

describe("Login", () => {
  it("should render correctly", () => {
    const wrapper = shallow(<Login {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});
