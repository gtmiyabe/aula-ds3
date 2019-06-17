import React, { Component } from "react";
import axios from "axios";
import moment from "moment";
import { Form, message } from "antd";

import Report from "./Report";

class ReportContainer extends Component {
  state = { reportList: [] };

  componentDidMount() {
    this.getReport();
  }

  getReport = () => {
    axios.get("/report").then(res => this.setState({ reportList: res.data }));
  };

  handleSubmit = e => {
    e.preventDefault();
    const { form } = this.props;

    form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        axios
          .get("report", { ...values })
          .then(() => {
            message.success("Report successfully loaded", 3);

            this.props.form.resetFields();
            this.getReport();
          })
          .catch(() => message.error("Error.", 3));
      }
    });
  };

  render() {
    const { form } = this.props,
      { reportList } = this.state;

    const columns = [
      {
        title: "Setor",
        dataIndex: "sector",
        key: "sector"
      },
      {
        title: "Matrícula",
        dataIndex: "registration",
        key: "registration"
      },
      {
        title: "Nome",
        dataIndex: "employeeName",
        key: "employeeName"
      },
      {
        title: "Data da Falta",
        dataIndex: "absenseNumber",
        key: "absenseNumber",
        render: absenseNumber => moment(absenseNumber).format("DD/MM/YYYY")
      }
    ];

    return (
      <Report
        form={form}
        reportList={reportList}
        columns={columns}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default Form.create()(ReportContainer);
