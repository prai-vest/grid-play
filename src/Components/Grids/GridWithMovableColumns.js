import React from 'react';
import gridVmoneWrapper from './gridVmoneWrapper'


const GridInfo = () => (
  <>
    <h2>Movable Grid Columns Vmone</h2>
    <p>All columns can be moved by dragging and dropping them in desired positions.</p>
  </>
)

const GridWithMovableColumn = gridVmoneWrapper(
  {
    key: 'gridWithMovableColumn',
    displayName: 'Grid With Movable Columns',
    GridInfo,
    defaultColDef: {
      lockposition: false,
    },
    suppressDragLeaveHidesColumns: true,
  },
)

export default GridWithMovableColumn
