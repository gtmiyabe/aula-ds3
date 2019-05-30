import React, { Component } from "react";
import { Form } from "antd";
import Stock from "./Stock";

class StockContainer extends Component {
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

    return <Stock form={form} handleSubmit={this.handleSubmit} />;
  }
}

export default Form.create()(StockContainer);
