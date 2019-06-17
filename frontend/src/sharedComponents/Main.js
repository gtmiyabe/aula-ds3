import React from "react";
import { withRouter } from "react-router-dom";
import { Layout, Menu } from "antd";

const { Header, Content, Footer } = Layout;

const Main = ({ children, page, history }) => {
  return (
    <Layout>
      <Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={[page]}
          style={{ lineHeight: "64px" }}
        >
          <Menu.Item key="employee" onClick={() => history.push("/employee")}>
            Funcionario
          </Menu.Item>
          <Menu.Item key="stock" onClick={() => history.push("/stock")}>
            Estoque
          </Menu.Item>
          <Menu.Item key="contract" onClick={() => history.push("/contract")}>
            Contrato
          </Menu.Item>
          <Menu.Item key="report" onClick={() => history.push("/report")}>
            Relatório
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <div style={{ background: "#fff", padding: 24, minHeight: 280 }}>
          {children}
        </div>
      </Content>
      <Footer />
    </Layout>
  );
};

export default withRouter(Main);
