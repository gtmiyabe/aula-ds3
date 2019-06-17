import React from "react";
import styled from "styled-components";
import { Form, Divider, Input, Button, DatePicker, Table } from "antd";

import Main from "../../sharedComponents/Main";

const AddEmployee = ({
  form,
  columns,
  employeeList,
  handleSubmit,
  handleConfirmBlur,
  compareToFirstPassword,
  validateToNextPassword
}) => (
  <Main page="employee">
    <Title>Cadastro de Funcionario</Title>
    <Divider />
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <FormItem label="Nome">
          {form.getFieldDecorator("name", {
            rules: [
              {
                required: true,
                message: "Este campo é obrigatório!",
                whitespace: true
              }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem label="E-mail">
          {form.getFieldDecorator("email", {
            rules: [
              {
                type: "email",
                message: "E-mail inválido!"
              },
              {
                required: true,
                message: "Este campo é obrigatório!"
              }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem label="Senha">
          {form.getFieldDecorator("password", {
            rules: [
              {
                required: true,
                message: "Este campo é obrigatório!"
              },
              {
                validator: validateToNextPassword
              }
            ]
          })(<Input type="password" />)}
        </FormItem>
        <FormItem label="Confirmar Senha">
          {form.getFieldDecorator("confirm", {
            rules: [
              {
                required: true,
                message: "Este campo é obrigatório!"
              },
              {
                validator: compareToFirstPassword
              }
            ]
          })(<Input type="password" onBlur={handleConfirmBlur} />)}
        </FormItem>
        <FormItem label="Date de Admissão">
          {form.getFieldDecorator("admissionDate", {
            rules: [
              {
                required: true,
                message: "Este campo é obrigatório!"
              }
            ]
          })(<DatePicker />)}
        </FormItem>
        <FormItem label="Filial">
          {form.getFieldDecorator("branch", {
            rules: [
              {
                required: true,
                message: "Este campo é obrigatório!"
              }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem label="Departamento">
          {form.getFieldDecorator("department", {
            rules: [
              {
                required: true,
                message: "Este campo é obrigatório!"
              }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem label="Cargo">
          {form.getFieldDecorator("role", {
            rules: [
              {
                required: true,
                message: "Este campo é obrigatório!"
              }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem label="CPF">
          {form.getFieldDecorator("cpf", {
            rules: [
              {
                required: true,
                message: "Este campo é obrigatório!"
              }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem label="RG">
          {form.getFieldDecorator("rg")(<Input />)}
        </FormItem>
        <FormItem label="PIS">
          {form.getFieldDecorator("pis")(<Input />)}
        </FormItem>
        <FormItem label="Data de Demissão">
          {form.getFieldDecorator("firedDate")(<DatePicker />)}
        </FormItem>
        <FormItem label="Data de Nascimento">
          {form.getFieldDecorator("bornDate")(<DatePicker />)}
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit">
            Salvar
          </Button>
        </FormItem>
      </Form>
    </Wrapper>
    <Title>Lista de Funcionarios</Title>
    <Divider />
    <STable
      rowKey={row => row._id}
      dataSource={employeeList}
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

const STable = styled(Table)`
  width: 100%;
`;

const Title = styled.div`
  font-size: 24px;
`;

export default AddEmployee;
