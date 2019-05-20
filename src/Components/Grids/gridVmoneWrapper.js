import React from 'react';
import { AgGridReact } from 'ag-grid-react'

const columnDefsFromJSON = require('../../../data/columnDefs.json')
const rowDataFromJSON = require('../../../data/rowData.json')

const GridVmoneWrapper = ({
  key,
  displayName,
  GridInfo,
  ...otherProps
}) => {
  const DataGrid = () => (
    <AgGridReact
      defaultColDef={{
        lockPosition: true,
      }}
      columnDefs={columnDefsFromJSON}
      rowData={rowDataFromJSON}
      {...otherProps}
    />
  )

  return {
    key,
    displayName,
    exampleBlocks: [
      {
        info: <GridInfo />,
        grid: <DataGrid />,
      },
    ],
  }
}

export default GridVmoneWrapper
