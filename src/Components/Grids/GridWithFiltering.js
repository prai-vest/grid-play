import React from 'react';
import { AgGridReact } from 'ag-grid-react'
import cloneDeep from 'clone-deep'

const columnDefsFromJSON = require('../../../data/columnDefs.json')
const rowDataFromJSON = require('../../../data/rowData.json')

/* Simple Filter */

const GridInfo1 = () => (
  <>
    <h2>Data Grid Filtering</h2>
    <p>
      Filtering is enabled for the first three columns. When you hover
      over the column header, a bar icon becomes visible which lets you filter.
    </p>
  </>
)

const newColumnDefs = cloneDeep(columnDefsFromJSON)
newColumnDefs[0].filter = true
newColumnDefs[1].filter = true
newColumnDefs[2].filter = true

const DataGrid1 = () => (
  <AgGridReact
    defaultColDef={{
      lockPosition: true,
    }}
    columnDefs={newColumnDefs}
    rowData={rowDataFromJSON}
    domLayout="autoHeight"
  />
)

/* Floating Filter */
const GridInfo2 = () => (
  <>
    <h2>Floating Filters</h2>
    <p>
      Dedicated row for filters.
    </p>
  </>
)

const newColumnDefs2 = cloneDeep(columnDefsFromJSON)
newColumnDefs2[0].filter = true
newColumnDefs2[1].filter = true
newColumnDefs2[2].filter = true

const DataGrid2 = () => (
  <AgGridReact
    defaultColDef={{
      lockPosition: true,
    }}
    columnDefs={newColumnDefs2}
    rowData={rowDataFromJSON}
    domLayout="autoHeight"
    floatingFilter
  />
)


const GridWithFiltering = {
  key: 'gridWithFiltering',
  displayName: 'Grid With Filtering',
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

export default GridWithFiltering
