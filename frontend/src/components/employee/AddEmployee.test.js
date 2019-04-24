import React from "react";

import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });

import AddEmployee from "./AddEmployee";

jest.mock("react-router-dom", () => ({
  Link: "Link"
}));

const props = {
  form: { getFieldDecorator: () => jest.fn() },
  handleSubmit: () => jest.fn(),
  handleConfirmBlur: () => jest.fn(),
  compareToFirstPassword: () => jest.fn(),
  validateToNextPassword: () => jest.fn()
};

describe("AddEmployee", () => {
  it("should render correctly", () => {
    const wrapper = shallow(<AddEmployee {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});
