import React from 'react';
import gridVmoneWrapper from './gridVmoneWrapper'

const GridInfo = () => (
  <>
    <h2>Data Grid Vmone</h2>
    <p>
      All columns are sortable with a single click. It rotates
      from ascending, descending and none.
    </p>
  </>
)

const GridWithSorting = gridVmoneWrapper(
  {
    key: 'gridWithSorting',
    displayName: 'Grid With Sorting',
    GridInfo,
    defaultColDef: {
      sortable: true,
      lockPosition: true,
    },
  },
)

export default GridWithSorting
