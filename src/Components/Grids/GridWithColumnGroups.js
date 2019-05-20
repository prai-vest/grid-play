import React from 'react';
import cloneDeep from 'clone-deep'
import gridVmoneWrapper from './gridVmoneWrapper'

const columnDefsFromJSON = require('../../../data/columnDefs.json')

const colDefs = cloneDeep(columnDefsFromJSON)
const groupingDefs = colDefs.slice(0, 3)
const regularColDefs = colDefs.slice(3)
regularColDefs.unshift({
  headerName: 'Account Details',
  children: groupingDefs,
})

const GridInfo = () => (
  <>
    <h2>Grid with Column Groups</h2>
    <p>The first three column have been grouped into a single column group.</p>
  </>
)

const GridWithColumnGroups = gridVmoneWrapper(
  {
    key: 'GridWithColumnGroups',
    displayName: 'Grid With Movable Columns',
    GridInfo,
    defaultColDef: {
      lockposition: false,
    },
    columnDefs: regularColDefs,
  },
)

export default GridWithColumnGroups
