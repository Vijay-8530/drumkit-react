import React from 'react'

const DrumkitKey = (props) => {
  return (
    <div>
      <div data-key={props.dataKey} className="key">
        <kbd>{props.alfa}</kbd>
        <span className="sound">clap</span>
      </div>
    </div>
  )
}


export default DrumkitKey
