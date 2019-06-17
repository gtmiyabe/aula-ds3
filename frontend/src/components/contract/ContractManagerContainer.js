import React, { Component, Fragment } from "react";
import axios from "axios";
import moment from "moment";
import { get, isEmpty } from "lodash";
import { Form, Icon, message } from "antd";

import ContractManager from "./ContractManager";

class ContractManagerContainer extends Component {
  state = { contractList: [] };

  componentDidMount() {
    this.getContractList();
  }

  getContractList = () => {
    axios
      .get("/contract")
      .then(res => this.setState({ contractList: res.data }));
  };

  handleSubmit = e => {
    e.preventDefault();
    const { form, match } = this.props,
      { contractList } = this.state;

    form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        const contractId = get(match, ["params", "contractId"], "");
        if (
          contractId &&
          !isEmpty(contractList) &&
          contractList.find(el => el._id === contractId)
        ) {
          axios
            .put(`/contract/${contractId}`, { contractId, ...values })
            .then(res => {
              message.success(
                `Contract ${get(
                  res,
                  ["data", "sponsorship"],
                  ""
                )} successfully edited.`,
                3
              );

              this.props.form.resetFields();
              this.getContractList();
            })
            .catch(() => message.error("Error.", 3));
        } else {
          axios
            .post("/contract", { ...values })
            .then(res => {
              message.success(
                `Contract ${get(
                  res,
                  ["data", "sponsorship"],
                  ""
                )} successfully saved.`,
                3
              );

              this.props.form.resetFields();
              this.getContractList();
            })
            .catch(() => message.error("Error.", 3));
        }
      }
    });
  };

  deleteContract = id => {
    axios.delete(`/contract/${id}`).then(res => {
      message.success(
        `Contract ${get(
          res,
          ["data", "sponsorship"],
          ""
        )} successfully deleted.`,
        3
      );
      this.getContractList();
    });
  };

  formatValue = (
    value,
    options = {
      style: "currency",
      currency: "BRL",
      maximumFractionDigits: 2
    }
  ) => {
    if (value !== 0 && !value) return null;
    return new Intl.NumberFormat("pt-BR", options).format(value);
  };

  render() {
    const { form, match, history } = this.props,
      { contractList } = this.state,
      contractId = get(match, ["params", "contractId"], ""),
      contract = contractList.find(el => el._id === contractId);

    const columns = [
      {
        title: "Nome do patrocinador/parceiro",
        dataIndex: "sponsorship",
        key: "sponsorship"
      },
      {
        title: "Data de Início",
        dataIndex: "startDate",
        key: "startDate",
        render: startDate => moment(startDate).format("DD/MM/YYYY")
      },
      {
        title: "Data de Fim",
        dataIndex: "endDate",
        key: "endDate",
        render: endDate => moment(endDate).format("DD/MM/YYYY")
      },
      {
        title: "Valor",
        dataIndex: "amount",
        key: "amount",
        render: amount => this.formatValue(amount)
      },
      {
        dataIndex: "_id",
        key: "_id",
        render: _id => (
          <Fragment>
            <Icon
              type="edit"
              style={{ cursor: "pointer", marginRight: 10 }}
              onClick={() => history.push(`/contract/${_id}`)}
            />
            <Icon
              type="delete"
              style={{ cursor: "pointer" }}
              onClick={() => this.deleteContract(_id)}
            />
          </Fragment>
        )
      }
    ];

    return (
      <ContractManager
        form={form}
        contract={contract}
        contractList={contractList}
        columns={columns}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default Form.create()(ContractManagerContainer);
