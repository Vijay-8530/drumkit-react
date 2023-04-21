import React from 'react'

const DrumkitAudio = (props) => {
    return (
        <div>
            <audio data-key={props.dataKey} src={props.music}></audio>
        </div>
    )
}

export default DrumkitAudio
