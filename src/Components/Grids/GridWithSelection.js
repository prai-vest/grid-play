import React from 'react';
import { AgGridReact } from 'ag-grid-react'
import cloneDeep from 'clone-deep'

const columnDefsFromJSON = require('../../../data/columnDefs.json')
const rowDataFromJSON = require('../../../data/rowData.json')


const GridInfo1 = () => (
  <>
    <h2>Data Grid Multi Row Selection</h2>
    <p>
      Click to select row.
      <br />
      Ctrl + Click to select multiple rows.
      <br />
      Shift + Click after selecting a row to select a range of row.
    </p>
  </>
)

const DataGrid1 = () => (
  <AgGridReact
    defaultColDef={{
      lockPosition: true,
    }}
    columnDefs={columnDefsFromJSON}
    rowData={rowDataFromJSON}
    rowSelection="multiple"
    domLayout="autoHeight"
  />
)

const GridInfo2 = () => (
  <>
    <h3>Checkbox for selection</h3>
  </>
)

const newcolDefs = cloneDeep(columnDefsFromJSON)
newcolDefs[0].checkboxSelection = true

const DataGrid2 = () => (
  <AgGridReact
    defaultColDef={{
      lockPosition: true,
    }}
    columnDefs={newcolDefs}
    rowData={rowDataFromJSON}
    rowSelection="multiple"
    domLayout="autoHeight"
  />
)

const GridWithSelection = {
  key: 'GridWithSelection',
  displayName: 'Grid With Selection',
  exampleBlocks: [
    {
      info: <GridInfo1 />,
      grid: <DataGrid1 />,
      height: '450px',
    },
    {
      info: <GridInfo2 />,
      grid: <DataGrid2 />,
      height: '450px',
    },
  ],
}


export default GridWithSelection
