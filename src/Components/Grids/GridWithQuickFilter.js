import React from 'react';
import { AgGridReact } from 'ag-grid-react'

const columnDefsFromJSON = require('../../../data/columnDefs.json')
const rowDataFromJSON = require('../../../data/rowData.json')

let gridApi;

const onInputCallback = (evt) => {
  gridApi.setQuickFilter(evt.target.value);
}

const onGridReadyCallback = (params) => {
  gridApi = params.api
}

const GridInfo = () => (
  <>
    <h2>Data Grid with quick filter</h2>
    <p>
      This quick filter searches across all the rows and filters based on the matches.
    </p>
    <p>
      <input type="text" onInput={onInputCallback} />
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

const GridWithQuickFilter = {
  key: 'gridWithQuickFilter',
  displayName: 'Grid With Quick Filter',
  exampleBlocks: [
    {
      info: <GridInfo />,
      grid: <DataGrid />,
    },
  ],
}

export default GridWithQuickFilter
