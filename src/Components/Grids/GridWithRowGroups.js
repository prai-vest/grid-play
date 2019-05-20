import React from 'react';
import cloneDeep from 'clone-deep'
import 'ag-grid-enterprise';
import gridVmoneWrapper from './gridVmoneWrapper'

const columnDefsFromJSON = require('../../../data/columnDefs.json')

const colDefs = cloneDeep(columnDefsFromJSON)
colDefs[1].rowGroup = true

const GridInfo = () => (
  <>
    <h2>Grid with Column Groups</h2>
    <p>Grouped by Sponser Firm</p>
  </>
)

const GridWithRowGroups = gridVmoneWrapper(
  {
    key: 'GridWithRowGroups',
    displayName: 'Grid With Row Groups',
    GridInfo,
    defaultColDef: {
      lockposition: false,
    },
    enableRowGroup: true,
    columnDefs: colDefs,
    groupDefaultExpanded: -1,
  },
)

export default GridWithRowGroups
