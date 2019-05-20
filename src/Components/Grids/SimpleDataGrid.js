
import React from 'react'
import { AgGridReact } from 'ag-grid-react'

import ExampleBlock from './ExampleBlock'

const columnDefs = [{
    headerName: 'Make', field: 'make',
  }, {
    headerName: 'Model', field: 'model',
  }, {
    headerName: 'Price', field: 'price',
  }]

const rowData = [{
    make: 'Toyota', model: 'Celica', price: 35000,
  }, {
    make: 'Ford', model: 'Mondeo', price: 32000,
  }, {
    make: 'Porsche', model: 'Boxter', price: 72000,
  }]

const onGridReadyCallback = (params) => {
  const { api: gridApi } = params
  gridApi.sizeColumnsToFit()
}

const GridInfo = () => (
  <>
    <h2>Simple Data Grid</h2>
    <p>This is a simple data grid, basically a plain table.</p>
  </>
)

const DataGrid = () => (
  <div
    style={{
      height: '500px',
      width: '100%',
    }}
  >
    <AgGridReact
      defaultColDef={{
        lockPosition: true,
      }}
      columnDefs={columnDefs}
      rowData={rowData}
      onGridReady={onGridReadyCallback}
      domLayout="autoHeight"
    />
  </div>
)

const SimpleDataGrid = {
  key: 'simpleDataGrid',
  displayName: 'Simple Data Grid',
  exampleBlocks: [
    {
      info: <GridInfo />,
      grid: <DataGrid />,
    },
  ],
}

export default SimpleDataGrid
