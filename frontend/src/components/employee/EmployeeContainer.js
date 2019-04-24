import React, { Component } from "react";
import { Form } from "antd";
import AddEmployee from "./AddEmployee";

class EmployeeContainer extends Component {
  state = { confirmDirty: false };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log("values test submit: ", values);
      }
    });
  };

  handleConfirmBlur = e => {
    const { value } = e.target;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue("password")) {
      callback("Senhas não conferem!");
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const { form } = this.props,
      { confirmDirty } = this.state;
    if (value && confirmDirty) {
      form.validateFields(["confirm"], { force: true });
    }
    callback();
  };

  render() {
    const { form } = this.props;

    return (
      <AddEmployee
        form={form}
        handleSubmit={this.handleSubmit}
        handleConfirmBlur={this.handleConfirmBlur}
        compareToFirstPassword={this.compareToFirstPassword}
        validateToNextPassword={this.validateToNextPassword}
      />
    );
  }
}

export default Form.create()(EmployeeContainer);
