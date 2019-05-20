import React from 'react';
import { AgGridReact } from 'ag-grid-react'
import cloneDeep from 'clone-deep'

const columnDefsFromJSON = require('../../../data/columnDefsFull.json')
const rowDataFromJSON = require('../../../data/rowDataFull.json')

let gridApi;

const onInputCallback = (evt) => {
  gridApi.setQuickFilter(evt.target.value);
}

const onGridReadyCallback = (params) => {
  gridApi = params.api
}

function enableAggregation(arr) {
  arr.forEach((item) => {
    // find column def
    const colDef = newColumnDefs.find(col => col.headerName === item) // eslint-disable-line no-use-before-define
    colDef.enableValue = true
    colDef.aggFunc = values => values.reduce((prev, next) => prev + parseFloat(next || 0), 0)
    colDef.allowedAggFuncs = ['sum', 'min', 'max']
  })
}

const newColumnDefs = cloneDeep(columnDefsFromJSON)
enableAggregation(['Total Drift', 'Cash Drift', 'Average Sleeve Drift', 'Total Sleeve Drift'])

newColumnDefs[0].filter = 'agTextColumnFilter'


/* custom agg function for Sponsor Program */
newColumnDefs[2].enableValue = true
newColumnDefs[2].aggFunc = (values) => {
  const set = new Set()
  values.forEach((item) => {
    if (item !== '') {
      set.add(item)
    }
  })
  return set.size
}

/* sidebar configuration */
const sideBar = {
  toolPanels: [
      {
          id: 'columns',
          labelDefault: 'Columns',
          labelKey: 'columns',
          iconKey: 'columns',
          toolPanel: 'agColumnsToolPanel',
      },
      {
          id: 'filters',
          labelDefault: 'Filters',
          labelKey: 'filters',
          iconKey: 'filter',
          toolPanel: 'agFiltersToolPanel',
      },
  ],
}
// newColumnDefs[1].cellClassRules = {
//   'rag-amber': 'rowIndex >= 5 && rowIndex < 8',
// }

const GridInfo = () => (
  <>
    <h2>Feature Rich Data Grid Demo </h2>
    <p>
      This is a demo of the grid with a lot of the features turned on.
    </p>
    <p>
      <label>Quick filter</label>
      <input type="text" onInput={onInputCallback} />
    </p>
  </>
)

const DataGrid = () => (
  <AgGridReact
    defaultColDef={{
      sortable: true,
      filter: true,
      resizable: true,
      editable: true,
      enableRowGroup: true,
      enableValue: true,
      enablePivot: true,
    }}
    sideBar={sideBar}
    hiddenByDefault
    columnDefs={newColumnDefs}
    rowData={rowDataFromJSON}
    onGridReady={onGridReadyCallback}
    suppressDragLeaveHidesColumns
    floatingFilter
    pagination
    rowSelection="multiple"
    enableRangeSelection
    rowGroupPanelShow="always"
		paginationPageSize={25}
  />
)

const Demo = {
  key: 'demo',
  displayName: 'Demo',
  exampleBlocks: [
    {
      info: <GridInfo />,
      grid: <DataGrid />,
      height: 'calc(100vh - 150px)',
    },
  ],
}

export default Demo
