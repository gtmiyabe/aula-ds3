import React from "react";
import styled from "styled-components";

import Main from "../../sharedComponents/Main";
import { Form, Input, Button } from "antd";

const Stock = ({ form, handleSubmit }) => (
  <Main>
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <FormItem label="Código do Produto">
          {form.getFieldDecorator("code")(<Input />)}
        </FormItem>
        <FormItem label="Palavra Chave">
          {form.getFieldDecorator("keyWord")(<Input />)}
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

export default Stock;
