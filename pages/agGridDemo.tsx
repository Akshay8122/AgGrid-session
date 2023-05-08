import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine-dark.css";
import Image from "next/image";
import agGridpic from "../public/images/agGrid.png";

import { useEffect, useMemo, useState } from "react";
import { Button } from "antd";

function AgGridDemo() {
  const [rowData, setRowData] = useState<[{}]>();

  const defaultColDef = useMemo(
    () => ({
      sortable: true,
      filter: true,
      resizable: true,
      autoSize: true,
      editable: true,
    }),
    []
  );

  const EditButton = () => (
    <div>
      <Button type="default" className="bg-blue-400 text-white w-24">
        Edit
      </Button>
    </div>
  );

  const fetchData = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setRowData(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const columnDefs: any = [
    { field: "id", pinned: "left" },
    { field: "name", width: 350 },
    { field: "username", width: 320 },
    { field: "email", width: 320 },
    { field: "phone", width: 310 },
    { field: "website" },
    {
      field: "Action",
      pinned: "right",
      cellRenderer: EditButton,
    },
  ];

  return (
    <>
      <div
        className="ag-theme-alpine-dark py-2"
        // style={{
        //   height: "70vh",
        // }}
      >
        <Image
          src={agGridpic}
          alt="agGrid"
          width={180}
          height={250}
          className="mx-auto my-10"
        />
        <AgGridReact
          domLayout="autoHeight"
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
        />
      </div>
    </>
  );
}

export default AgGridDemo;
