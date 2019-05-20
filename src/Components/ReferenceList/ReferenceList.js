import React from 'react'
import cn from 'classnames'

const asideListTemplate = (
  gridArray,
  currentGridKey,
  asideListClickHandler,
  ) => (gridArray.map((item) => {
  const classes = cn(
    'reference-item',
    {
      active: currentGridKey === item.key,
    },
  )
  return (
    <li
      key={item.key}
      onClick={() => { asideListClickHandler(item.key) }}
      className={classes}
    >
      {item.displayName}
    </li>
    )
}))

const ReferenceList = ({
  asideListClickHandler,
  GridsAsArray,
  currentGridKey,
}) => (
  <ul className="references">
    {asideListTemplate(GridsAsArray, currentGridKey, asideListClickHandler)}
  </ul>
)

export default ReferenceList
