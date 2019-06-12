import React, { Component } from "react";
import axios from "axios";
import { get } from "lodash";
import { Form, message, Icon } from "antd";
import moment from "moment";

import Stock from "./Stock";

class StockContainer extends Component {
  state = { stockList: [] };

  componentDidMount() {
    this.getStockList();
  }

  getStockList = () => {
    axios.get("/stock").then(res => this.setState({ stockList: res.data }));
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        axios
          .post("stock", { ...values })
          .then(res => {
            message.success(
              `Stock ${get(res, ["data", "name"], "")} successfully saved.`,
              3
            );

            this.getStockList();
          })
          .catch(() => message.error("Error.", 3));
      }
    });
  };

  handleSearch = () => {
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err && values.prodCode) {
        axios
          .get(`/stock/${values.prodCode}`)
          .then(res => {
            console.log("res", res);
            this.setState({ stockList: res.data });
          })
          .catch(() => message.error("Error.", 3));
      }
    });
  };

  deleteStock = id => {
    axios.delete(`/stock/${id}`).then(res => {
      message.success(
        `Stock ${get(res, ["data", "prodCode"], "")} successfully deleted.`,
        3
      );
      this.getStockList();
    });
  };

  render() {
    const { form } = this.props,
      { stockList } = this.state;

    const columns = [
      {
        title: "Código do Produto",
        dataIndex: "prodCode",
        key: "prodCode"
      },
      {
        title: "Quantidade",
        dataIndex: "unit",
        key: "unit"
      },
      {
        title: "Data",
        dataIndex: "date",
        key: "date",
        render: date => moment(date).format("DD/MM/YYYY")
      },
      {
        dataIndex: "_id",
        key: "_id",
        render: _id => (
          <Icon
            type="delete"
            style={{ cursor: "pointer" }}
            onClick={() => this.deleteStock(_id)}
          />
        )
      }
    ];

    return (
      <Stock
        form={form}
        columns={columns}
        stockList={stockList}
        handleSubmit={this.handleSubmit}
        handleSearch={this.handleSearch}
      />
    );
  }
}

export default Form.create()(StockContainer);
