import React from 'react';
import gridVmoneWrapper from './gridVmoneWrapper'


const GridInfo = () => (
  <>
    <h2>Data Grid Resizable Columns</h2>
    <p>
      Hover your mouse at the edge of the column headers and click and drag
      to resize the columns.
    </p>
  </>
)

const GridWithResizableColumns = gridVmoneWrapper(
  {
    key: 'GridWithResizableColumns',
    displayName: 'Grid With Resizable Columns',
    GridInfo,
    defaultColDef: {
      resizable: true,
    },
    suppressDragLeaveHidesColumns: true,
  },
)


export default GridWithResizableColumns
