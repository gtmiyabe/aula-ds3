import React from "react";
import styled from "styled-components";

import Main from "../../sharedComponents/Main";
import { Form, Input, InputNumber, Button, DatePicker, Upload } from "antd";

const ContractManager = ({ form, handleSubmit }) => (
  <Main>
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <FormItem label="Nome do patrocinador/parceiro">
          {form.getFieldDecorator("sponsorship")(<Input />)}
        </FormItem>
        <FormItem label="Data de início do contrato">
          {form.getFieldDecorator("startDate")(<DatePicker />)}
        </FormItem>{" "}
        <FormItem label="Data de término do contrato">
          {form.getFieldDecorator("endDate")(<DatePicker />)}
        </FormItem>
        <FormItem label="Valor do contrato">
          {form.getFieldDecorator("amount")(<InputNumber />)}
        </FormItem>
        <FormItem>
          {form.getFieldDecorator("file")(
            <Upload.Dragger>Upload</Upload.Dragger>
          )}
        </FormItem>
        <FormItem label="Cláusulas do contrato">
          {form.getFieldDecorator("contract")(<Input.TextArea />)}
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

export default ContractManager;
