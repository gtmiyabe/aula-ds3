import React from "react";
import styled from "styled-components";
import {
  Form,
  Input,
  InputNumber,
  Button,
  DatePicker,
  Divider,
  Table
} from "antd";

import Main from "../../sharedComponents/Main";

const Report = ({ form, reportList, columns, handleSubmit }) => (
  <Main page="report">
    <Title>Filtrar Relatório</Title>
    <Divider />
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <FormItem label="Matrícula - Início">
          {form.getFieldDecorator("registrationStart")(<SInputNumber />)}
        </FormItem>
        <FormItem label="Matrícula - Fim">
          {form.getFieldDecorator("registrationEnd")(<SInputNumber />)}
        </FormItem>
        <FormItem label="Data de início">
          {form.getFieldDecorator("startDate")(<DatePicker />)}
        </FormItem>{" "}
        <FormItem label="Data de término">
          {form.getFieldDecorator("endDate")(<DatePicker />)}
        </FormItem>
        <FormItem label="Nome do Funcionário">
          {form.getFieldDecorator("employeeName")(<Input />)}
        </FormItem>
        <FormItem label="Número Mínimo de Faltas">
          {form.getFieldDecorator("absenseNumber")(<SInputNumber />)}
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit">
            Buscar
          </Button>
        </FormItem>
      </Form>
    </Wrapper>
    <Title>Relatório</Title>
    <Divider />
    <STable
      rowKey={row => row._id}
      dataSource={reportList}
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

export default Report;
