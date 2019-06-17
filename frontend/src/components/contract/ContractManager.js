import React from "react";
import styled from "styled-components";
import moment from "moment";

import Main from "../../sharedComponents/Main";
import {
  Form,
  Input,
  InputNumber,
  Button,
  DatePicker,
  Divider,
  Table
} from "antd";

const ContractManager = ({
  form,
  contract,
  contractList,
  columns,
  handleSubmit
}) => (
  <Main page="contract">
    <Title>{contract ? "Editar Contrato" : "Adicionar Contrato"}</Title>
    <Divider />
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <FormItem label="Nome do patrocinador/parceiro">
          {form.getFieldDecorator("sponsorship", {
            rules: [{ required: true, message: "Este campo é obrigatório!" }],
            initialValue: contract ? contract.sponsorship : null
          })(<Input />)}
        </FormItem>
        <FormItem label="Data de início do contrato">
          {form.getFieldDecorator("startDate", {
            rules: [{ required: true, message: "Este campo é obrigatório!" }],
            initialValue: contract ? moment(contract.startDate) : null
          })(<DatePicker />)}
        </FormItem>{" "}
        <FormItem label="Data de término do contrato">
          {form.getFieldDecorator("endDate", {
            rules: [{ required: true, message: "Este campo é obrigatório!" }],
            initialValue: contract ? moment(contract.endDate) : null
          })(<DatePicker />)}
        </FormItem>
        <FormItem label="Valor do contrato">
          {form.getFieldDecorator("amount", {
            rules: [{ required: true, message: "Este campo é obrigatório!" }],
            initialValue: contract ? contract.amount : null
          })(<SInputNumber />)}
        </FormItem>
        {/* <FormItem>
          {form.getFieldDecorator("file", {
            initialValue: contract ? contract.file
          })(
            <Upload.Dragger>Upload</Upload.Dragger>
          )}
        </FormItem> */}
        <FormItem label="Cláusulas do contrato">
          {form.getFieldDecorator("contract", {
            rules: [{ required: true, message: "Este campo é obrigatório!" }],
            initialValue: contract ? contract.contract : null
          })(<Input.TextArea />)}
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit">
            {contract ? "Editar" : "Salvar"}
          </Button>
        </FormItem>
      </Form>
    </Wrapper>
    <Title>Lista de Contratos</Title>
    <Divider />
    <STable
      rowKey={row => row._id}
      dataSource={contractList}
      columns={columns}
      pagination={false}
    />
  </Main>
);

const FormItem = styled(Form.Item)`
  width: 400px;
`;

const Wrapper = styled.div`
  width: 600px;
`;

const SInputNumber = styled(InputNumber)`
  width: 400px;
`;

const STable = styled(Table)`
  width: 100%;
`;

const Title = styled.div`
  font-size: 24px;
`;

export default ContractManager;
