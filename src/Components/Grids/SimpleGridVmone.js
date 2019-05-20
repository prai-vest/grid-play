import React from 'react';
import gridVmoneWrapper from './gridVmoneWrapper'

const GridInfo = () => (
  <>
    <h2>Data Grid Vmone</h2>
    <p>This is a data grid displaying data from VMone Account monitor.</p>
  </>
)

const SimpleGridVmone = gridVmoneWrapper(
  {
    key: 'simpleGridVmone',
    displayName: 'Simple Grid Vmone',
    GridInfo,
    defaultColDef: {
      sortable: true,
      lockPosition: true,
    },
  },
)

export default SimpleGridVmone
