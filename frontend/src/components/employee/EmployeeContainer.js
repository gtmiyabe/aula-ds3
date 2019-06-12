import React, { Component } from "react";
import axios from "axios";
import { get } from "lodash";
import { Form, Icon, message } from "antd";

import AddEmployee from "./AddEmployee";

class EmployeeContainer extends Component {
  state = { confirmDirty: false, employeeList: [] };

  componentDidMount() {
    this.getEmployees();
  }

  getEmployees = () => {
    axios
      .get("/employee")
      .then(res => this.setState({ employeeList: res.data }));
  };

  deleteEmployee = id => {
    axios.delete(`/employee/${id}`).then(res => {
      message.success(
        `Employee ${get(res, ["data", "name"], "")} successfully deleted.`,
        3
      );
      this.getEmployees();
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        // const loading = message.loading("Saving employee", 0);
        axios
          .post("/employee", { ...values })
          .then(res => {
            message.success(
              `Employee ${get(res, ["data", "name"], "")} successfully saved.`,
              3
            );

            this.getEmployees();
          })
          .catch(() => message.error("Error.", 3));
        // .finally(() => loading());
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
    const { form } = this.props,
      { employeeList } = this.state;

    const columns = [
      {
        title: "Name",
        dataIndex: "name",
        key: "name"
      },
      {
        title: "E-mail",
        dataIndex: "email",
        key: "email"
      },
      {
        title: "Departamento",
        dataIndex: "department",
        key: "department"
      },
      {
        title: "Cargo",
        dataIndex: "role",
        key: "role"
      },
      {
        dataIndex: "_id",
        key: "_id",
        render: _id => (
          <Icon
            type="delete"
            style={{ cursor: "pointer" }}
            onClick={() => this.deleteEmployee(_id)}
          />
        )
      }
    ];

    return (
      <AddEmployee
        form={form}
        columns={columns}
        employeeList={employeeList}
        handleSubmit={this.handleSubmit}
        handleConfirmBlur={this.handleConfirmBlur}
        compareToFirstPassword={this.compareToFirstPassword}
        validateToNextPassword={this.validateToNextPassword}
      />
    );
  }
}

export default Form.create()(EmployeeContainer);
