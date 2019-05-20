import React from 'react';
import { AgGridReact } from 'ag-grid-react'

const columnDefsFromJSON = require('../../../data/columnDefs.json')
const rowDataFromJSON = require('../../../data/rowData.json')

let gridApi;
const PAGE_SIZE = 3

const onInputCallback = (evt) => {
  gridApi.paginationSetPageSize(evt.target.value);
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
      <label htmlFor="page-size">Page Size</label>
      <input id="page-size" type="text" defaultValue={`${PAGE_SIZE}`} onInput={onInputCallback} />
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
    pagination
    paginationPageSize={PAGE_SIZE}
    onGridReady={onGridReadyCallback}
  />
)

const GridWithPagination = {
  key: 'GridWithPagination',
  displayName: 'Grid With Pagination',
  exampleBlocks: [
    {
      info: <GridInfo />,
      grid: <DataGrid />,
      height: '500px',
    },
  ],
}

export default GridWithPagination
