import React, { useState } from "react";
import { PaginationProps, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { fakeData } from "../../fakeData";
import { Pagination } from "antd";

const App = () => {
  const [current, setCurrent] = useState(3);
  const [intialData, setInitialData] = useState(fakeData);

  const handleTableChange: PaginationProps["onChange"] = (page) => {
    console.log(page);
    setCurrent(page);
  };

  const data: any = [];
  for (let i = 0; i < 10; i++) {
    data.push({
      key: i,
      name: `Edrward ${i}`,
      age: 32,
      address: `London Park no. ${i}`,
    });
  }

  return (
    <div
      style={{
        marginTop: "50px",
      }}
    >
      <h2
        style={{
          textAlign: "center",
        }}
      >
        Action Tracker Data
      </h2>
      <Table
        columns={intialData}
        scroll={{ x: 900, y: 500 }}
        dataSource={data}
        // @ts-ignore
        onChange={handleTableChange}
      />
      <Pagination current={current} onChange={handleTableChange} total={5} />
    </div>
  );
};

export default App;
