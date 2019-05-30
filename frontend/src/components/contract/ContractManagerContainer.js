import React, { Component } from "react";
import { Form } from "antd";
import ContractManager from "./ContractManager";

class ContractManagerContainer extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log("values test submit: ", values);
      }
    });
  };
  render() {
    const { form } = this.props;

    return <ContractManager form={form} handleSubmit={this.handleSubmit} />;
  }
}

export default Form.create()(ContractManagerContainer);
