import React from 'react';
import cloneDeep from 'clone-deep'
import gridVmoneWrapper from './gridVmoneWrapper'

const columnDefsFromJSON = require('../../../data/columnDefs.json')


const GridInfo = () => (
  <>
    <h2>Data Grid Row Dragging</h2>
    <p>
      Use the handle present in the first column to drag the rows freely.
    </p>
  </>
)

const newColumnDefs = cloneDeep(columnDefsFromJSON)
newColumnDefs[0].rowDrag = true


const GridWithRowDragging = gridVmoneWrapper(
  {
    key: 'GridWithRowDragging',
    displayName: 'Grid With Row Dragging',
    GridInfo,
    rowDragManaged: true,
    columnDefs: newColumnDefs,
  },
)

export default GridWithRowDragging
