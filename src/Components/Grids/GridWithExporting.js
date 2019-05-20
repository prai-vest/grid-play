import React from 'react';
import { AgGridReact } from 'ag-grid-react'

const columnDefsFromJSON = require('../../../data/columnDefs.json')
const rowDataFromJSON = require('../../../data/rowData.json')

let gridApi;

const onClickCallback = () => {
  gridApi.exportDataAsCsv()
}

const onGridReadyCallback = (params) => {
  gridApi = params.api
}

const GridInfo = () => (
  <>
    <h2>Data Grid Pagination</h2>
    <p>
      Use the input below to set page size;
    </p>
    <p>
      <button type="button" onClick={onClickCallback}>Export to CSV</button>
    </p>
  </>
)

const DataGrid = () => (
  <AgGridReact
    defaultColDef={{
      lockPosition: true,
    }}
    columnDefs={columnDefsFromJSON}
    rowData={rowDataFromJSON}
    onGridReady={onGridReadyCallback}
  />
)

const GridWithExporting = {
  key: 'GridWithExporting',
  displayName: 'Grid With Exporting',
  exampleBlocks: [
    {
      info: <GridInfo />,
      grid: <DataGrid />,
    },
  ],
}

export default GridWithExporting
