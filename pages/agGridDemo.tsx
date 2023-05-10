import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine-dark.css";
// import "ag-grid-enterprise";
import Image from "next/image";
import agGridpic from "../public/images/agGrid.png";

import { useCallback, useEffect, useMemo, useState } from "react";
import { Button } from "antd";

function AgGridDemo() {
  const [rowData, setRowData] = useState<[{}]>();

  const fetchData = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setRowData(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const defaultColDef = useMemo(
    () => ({
      sortable: true,
      filter: true,
      resizable: true,
      autoSize: true,
      editable: true,
      // floatingFilter: true,
    }),
    []
  );

  const cellClickedListener = useCallback((params: any) => {
    const data = params.data;
    console.log(data);
  }, []);

  const userNameCellRules = {
    "name-bret": (params: { value: string }) => params.value == "Bret",
    "name-antonette": (params: { value: string }) =>
      params.value == "Antonette",
    "name-samantha": (params: { value: string }) => params.value == "Samantha",
    "name-karianne": (params: { value: string }) => params.value == "Karianne",
    "name-kamren": (params: { value: string }) => params.value == "Kamren",
  };

  const columnDefs: any = [
    {
      field: "id",
      pinned: "left",
      checkboxSelection: true,
      headerCheckboxSelection: true,
    },
    { field: "name", width: 350, enableRowGroup: true },
    { field: "username", width: 320, cellClassRules: userNameCellRules },
    {
      field: "email",
      width: 320,
      // hide: true,
    },
    { field: "phone", width: 310 },
    { field: "website" },
    { field: "phone", width: 310 },
    { field: "website" },
    {
      field: "Action",
      pinned: "right",
      editable: false,
      filter: false,
      cellRenderer: (params: any) => (
        <div>
          <Button
            type="default"
            className="bg-blue-400 text-white w-24"
            onClick={() =>
              setRowData((prev: any) =>
                prev.filter((data: any) => params.data.id !== data.id)
              )
            }
          >
            Delete
          </Button>
        </div>
      ),
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
          rowGroupPanelShow="always"
          domLayout="autoHeight"
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          rowSelection="multiple"
          animateRows={true}
          // pagination={true}
          // paginationPageSize={5}
          sideBar={"columns"}
          onCellValueChanged={cellClickedListener}
        />
      </div>
    </>
  );
}

export default AgGridDemo;
