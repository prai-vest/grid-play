import React from 'react';
import cloneDeep from 'clone-deep'
import gridVmoneWrapper from './gridVmoneWrapper'

const columnDefsFromJSON = require('../../../data/columnDefs.json')


const GridInfo = () => (
  <>
    <h2>Data Grid with pinned Columns</h2>
    <p>
      The first two columns of the table are pinned so that they're always visible.
    </p>
  </>
)

const newColumnDefs = cloneDeep(columnDefsFromJSON)
newColumnDefs[0].pinned = 'left'
newColumnDefs[0].width = 160
newColumnDefs[1].pinned = 'left'
newColumnDefs[1].width = 130


const GridWithPinnedColumn = gridVmoneWrapper(
  {
    key: 'GridWithPinnedColumn',
    displayName: 'Grid With Pinned Columns',
    GridInfo,
    columnDefs: newColumnDefs,
    lockPinned: true,
  },
)

export default GridWithPinnedColumn
