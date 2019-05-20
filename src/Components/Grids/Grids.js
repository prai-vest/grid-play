import SimpleDataGrid from './SimpleDataGrid'
import SimpleGridVmone from './SimpleGridVmone'
import GridWithSorting from './GridWithSorting'
import GridWithMovableColumns from './GridWithMovableColumns'
import GridWithFiltering from './GridWithFiltering'
import GridWithQuickFilter from './GridWithQuickFilter'
import GridwithResizableColumns from './GridWithResizableColumns'
import GridWithSelection from './GridWithSelection'
import GridWithRowDragging from './GridWithRowDragging'
import GridWithPinnedColumn from './GridWithPinnedColumn'
import GridWithColumnGroups from './GridWithColumnGroups'
import GridWithRowGroups from './GridWithRowGroups'
import GridWithPagination from './GridWithPagination'
import GridWithExporting from './GridWithExporting'


const GridsAsObject = {
  [SimpleDataGrid.key]: SimpleDataGrid,
  [SimpleGridVmone.key]: SimpleGridVmone,
  [GridWithSorting.key]: GridWithSorting,
  [GridWithMovableColumns.key]: GridWithMovableColumns,
  [GridWithFiltering.key]: GridWithFiltering,
  [GridWithQuickFilter.key]: GridWithQuickFilter,
  [GridwithResizableColumns.key]: GridwithResizableColumns,
  [GridWithSelection.key]: GridWithSelection,
  [GridWithRowDragging.key]: GridWithRowDragging,
  [GridWithPinnedColumn.key]: GridWithPinnedColumn,
  [GridWithColumnGroups.key]: GridWithColumnGroups,
  [GridWithRowGroups.key]: GridWithRowGroups,
  [GridWithPagination.key]: GridWithPagination,
  [GridWithExporting.key]: GridWithExporting,
}

const GridsAsArray = []

Object.keys(GridsAsObject).forEach(key => (
  GridsAsArray.push(GridsAsObject[key])
))

export { GridsAsObject, GridsAsArray }
