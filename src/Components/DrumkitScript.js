import React from 'react'
import DrumkitKey from './DrumkitKey'
import { useEffect } from "react"

import L1 from '../sounds/list 1/l1.mp3'
import L2 from '../sounds/list 1/l2.mp3'
import L3 from '../sounds/list 1/l3.mp3'
import L4 from '../sounds/list 1/l4.mp3'
import L5 from '../sounds/list 1/l5.mp3'
import L6 from '../sounds/list 1/l6.mp3'
import L7 from '../sounds/list 1/l7.mp3'
import L8 from '../sounds/list 1/l8.mp3'
import L9 from '../sounds/list 1/l9.mp3'
import L10 from '../sounds/list 1/l10.wav'

import Clap from '../sounds/clap.wav'
import Hihat from '../sounds/clap.wav'
import Kick from '../sounds/clap.wav'
import OpenHet from '../sounds/clap.wav'
import Boom from '../sounds/clap.wav'
import Ride from '../sounds/clap.wav'
import Snare from '../sounds/clap.wav'
import Tom from '../sounds/clap.wav'
import Tink from '../sounds/clap.wav'

import L21 from '../sounds/list 2/2l1.wav'
import L22 from '../sounds/list 2/2l2.wav'
import L23 from '../sounds/list 2/2l3.wav'
import L24 from '../sounds/list 2/2l4.wav'
import L25 from '../sounds/list 2/2l5.wav'
import L26 from '../sounds/list 2/2l6.wav'
import L27 from '../sounds/list 2/2l7.wav'
import DrumkitAudio from './DrumkitAudio'

const DrumkitScript = () => {
  useEffect(() => {
    window.addEventListener('keydown', playSound)
  }, [])
  function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    console.log(audio, key)

    if (!audio) return;
    audio.currentTime = 0;
    audio.play()
    key.classList.add('playing')
  }
  function removeTransition(e) {
    console.log(e.target)
    if (e.propertyName !== 'transform') return
    e.target.classList.remove('playing')
  }
  return (
    <>
      <div className="keys">
        <DrumkitKey dataKey={81} alfa={"Q"} onTransitionEnd={removeTransition} />
        <DrumkitAudio dataKey={81} music={L1}  ></DrumkitAudio>
        <DrumkitKey dataKey={87} alfa={"w"} onTransitionEnd={removeTransition} />
        <DrumkitAudio dataKey={87} music={L2}  ></DrumkitAudio>
        <DrumkitKey dataKey={69} alfa={"E"} onTransitionEnd={removeTransition} />
        <DrumkitAudio dataKey={69} music={L3}  ></DrumkitAudio>
        <DrumkitKey dataKey={82} alfa={"R"} onTransitionEnd={removeTransition} />
        <DrumkitAudio dataKey={82} music={L4}  ></DrumkitAudio>
        <DrumkitKey dataKey={84} alfa={"T"} onTransitionEnd={removeTransition} />
        <DrumkitAudio dataKey={84} music={L5}  ></DrumkitAudio>
        <DrumkitKey dataKey={89} alfa={"Y"} onTransitionEnd={removeTransition} />
        <DrumkitAudio dataKey={89} music={L6}  ></DrumkitAudio>
        <DrumkitKey dataKey={85} alfa={"U"} onTransitionEnd={removeTransition} />
        <DrumkitAudio dataKey={85} music={L7}  ></DrumkitAudio>
        <DrumkitKey dataKey={73} alfa={"I"} onTransitionEnd={removeTransition} />
        <DrumkitAudio dataKey={73} music={L8}  ></DrumkitAudio>
        <DrumkitKey dataKey={79} alfa={"O"} onTransitionEnd={removeTransition} />
        <DrumkitAudio dataKey={79} music={L9}  ></DrumkitAudio>
        <DrumkitKey dataKey={80} alfa={"P"} onTransitionEnd={removeTransition} />
        <DrumkitAudio dataKey={80} music={L10}  ></DrumkitAudio>
      </div>
      <div className="keys">
        <DrumkitKey dataKey={65} alfa={"A"} onTransitionEnd={removeTransition} />
        <DrumkitAudio dataKey={65} music={Clap}  ></DrumkitAudio>
        <DrumkitKey dataKey={83} alfa={"S"} onTransitionEnd={removeTransition} />
        <DrumkitAudio dataKey={83} music={Hihat} ></DrumkitAudio>
        <DrumkitKey dataKey={68} alfa={"D"} onTransitionEnd={removeTransition} />
        <DrumkitAudio dataKey={68} music={Kick}  ></DrumkitAudio>
        <DrumkitKey dataKey={70} alfa={"F"} onTransitionEnd={removeTransition} />
        <DrumkitAudio dataKey={70} music={OpenHet}  ></DrumkitAudio>
        <DrumkitKey dataKey={71} alfa={"G"} onTransitionEnd={removeTransition} />
        <DrumkitAudio dataKey={71} music={Ride}  ></DrumkitAudio>
        <DrumkitKey dataKey={72} alfa={"H"} onTransitionEnd={removeTransition} />
        <DrumkitAudio dataKey={72} music={Boom} ></DrumkitAudio>
        <DrumkitKey dataKey={74} alfa={"J"} onTransitionEnd={removeTransition} />
        <DrumkitAudio dataKey={74} music={Snare}   ></DrumkitAudio>
        <DrumkitKey dataKey={75} alfa={"K"} onTransitionEnd={removeTransition} />
        <DrumkitAudio dataKey={75} music={Tom} ></DrumkitAudio>
        <DrumkitKey dataKey={76} alfa={"L"} onTransitionEnd={removeTransition} />
        <DrumkitAudio dataKey={76} music={Tink}  ></DrumkitAudio>
      </div>
      <div className="keys">
        <DrumkitKey dataKey={90} alfa={"Z"} onTransitionEnd={removeTransition} />
        <DrumkitAudio dataKey={90} music={L21}  ></DrumkitAudio>
        <DrumkitKey dataKey={88} alfa={"X"} onTransitionEnd={removeTransition} />
        <DrumkitAudio dataKey={88} music={L22}  ></DrumkitAudio>
        <DrumkitKey dataKey={67} alfa={"C"} onTransitionEnd={removeTransition} />
        <DrumkitAudio dataKey={67} music={L23}  ></DrumkitAudio>
        <DrumkitKey dataKey={86} alfa={"V"} onTransitionEnd={removeTransition} />
        <DrumkitAudio dataKey={86} music={L24}  ></DrumkitAudio>
        <DrumkitKey dataKey={66} alfa={"B"} onTransitionEnd={removeTransition} />
        <DrumkitAudio dataKey={66} music={L25}  ></DrumkitAudio>
        <DrumkitKey dataKey={78} alfa={"N"} onTransitionEnd={removeTransition} />
        <DrumkitAudio dataKey={78} music={L26}  ></DrumkitAudio>
        <DrumkitKey dataKey={77} alfa={"M"} onTransitionEnd={removeTransition} />
        <DrumkitAudio dataKey={77} music={L27}  ></DrumkitAudio>
      </div>
    </>
  )
}

export default DrumkitScript

