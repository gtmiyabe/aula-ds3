import React from "react";
import styled from "styled-components";
import {
  Form,
  Input,
  Divider,
  InputNumber,
  Button,
  Table,
  DatePicker
} from "antd";

import Main from "../../sharedComponents/Main";

const Stock = ({ form, columns, stockList, handleSubmit, handleSearch }) => (
  <Main page="stock">
    <Title>Adicionar Item</Title>
    <Divider />
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <FormItem label="Código do Produto">
          {form.getFieldDecorator("prodCode")(
            <Input.Search onSearch={handleSearch} />
          )}
        </FormItem>
        <FormItem label="Quantidade">
          {form.getFieldDecorator("unit")(<SInputNumber />)}
        </FormItem>
        <FormItem label="Total">
          {form.getFieldDecorator("total")(<SInputNumber />)}
        </FormItem>
        <FormItem label="Data">
          {form.getFieldDecorator("date")(<DatePicker />)}
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit">
            Salvar
          </Button>
        </FormItem>
      </Form>
    </Wrapper>
    <Title>Produtos em Estoque</Title>
    <Divider />
    <STable
      rowKey={row => row._id}
      dataSource={stockList}
      columns={columns}
      pagination={false}
    />
  </Main>
);

const FormItem = styled(Form.Item)`
  width: 400px;
`;

const SInputNumber = styled(InputNumber)`
  width: 400px;
`;

const STable = styled(Table)`
  width: 100%;
`;

const Wrapper = styled.div`
  width: 600px;
`;

const Title = styled.div`
  font-size: 24px;
`;

export default Stock;
