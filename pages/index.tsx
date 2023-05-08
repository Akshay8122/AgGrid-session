import React from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import App from "./_app";
import AgGridDemo from "./agGridDemo";
const { Header } = Layout;

const Home: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <>
      <Layout className="layout">
        <Header>
          <div
            style={{
              display: "inline",
              color: "white",
            }}
          >
            <h2
              style={{
                marginTop: "-5px",
              }}
            >
              AgGrid-table-demo
            </h2>
          </div>
        </Header>
      </Layout>
      <div>
        <AgGridDemo />
      </div>
    </>
  );
};

export default Home;
