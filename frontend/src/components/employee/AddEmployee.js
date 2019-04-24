import React from "react";
import styled from "styled-components";

import Main from "../../sharedComponents/Main";
import { Form, Input, Button, DatePicker } from "antd";

const AddEmployee = ({
  form,
  handleSubmit,
  handleConfirmBlur,
  compareToFirstPassword,
  validateToNextPassword
}) => (
  <Main>
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
  </Main>
);

const FormItem = styled(Form.Item)`
  width: 400px;
`;

const Wrapper = styled.div`
  width: 600px;
`;

export default AddEmployee;
