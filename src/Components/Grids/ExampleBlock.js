import React from 'react'

const ExampleBlock = ({ info, grid, height = '100%' }) => (
  <div className="example" style={{ height }}>
    {info}
    <div
      className="ag-theme-balham"
      style={{
        height: 'calc(100% - 78px)',
        width: '100%',
      }}
    >
      {grid}
    </div>
  </div>
)

export default ExampleBlock
