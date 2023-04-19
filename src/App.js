import { useEffect } from "react"
import "./App.css"
function App() {

  useEffect(() => {
    window.addEventListener('keydown', playSound)
  }, [])

  function playSound(e) {
    const audio = document.querySelector(`audio[data-key = '${e.keyCode}']`)
    const key = document.querySelector(`.key[data-key = '${e.keyCode}']`)

    if (!audio) return;
    audio.currentTime = 0;
    audio.play()
    console.log({ audio, key })
    key.classList.add('playing', 'border-color')
  }

  function removeTransition(e) {
    console.log(e.target)
    if (e.propertyName !== 'transform') return
    e.target.classList.remove('playing', 'border-color')
  }

  return (
    <div className='center'>
      <div className="keys">
        <div data-key="81" className="key" onTransitionEnd={removeTransition}>
          <kbd>Q</kbd>
          <span className="sound">clap</span>
        </div>
        <div data-key="87" className="key" onTransitionEnd={removeTransition}>
          <kbd>W</kbd>
          <span className="sound">hihat</span>
        </div>
        <div data-key="69" className="key" onTransitionEnd={removeTransition}>
          <kbd>E</kbd>
          <span className="sound">kick</span>
        </div>
        <div data-key="82" className="key" onTransitionEnd={removeTransition}>
          <kbd>R</kbd>
          <span className="sound">openhat</span>
        </div>
        <div data-key="84" className="key" onTransitionEnd={removeTransition}>
          <kbd>T</kbd>
          <span className="sound">boom</span>
        </div>
        <div data-key="89" className="key" onTransitionEnd={removeTransition}>
          <kbd>Y</kbd>
          <span className="sound">ride</span>
        </div>
        <div data-key="85" className="key" onTransitionEnd={removeTransition}>
          <kbd>U</kbd>
          <span className="sound">snare</span>
        </div>
        <div data-key="73" className="key" onTransitionEnd={removeTransition}>
          <kbd>I</kbd>
          <span className="sound">tom</span>
        </div>
        <div data-key="79" className="key" onTransitionEnd={removeTransition}>
          <kbd>O</kbd>
          <span className="sound">tink</span>
        </div>
        <div data-key="80" className="key" onTransitionEnd={removeTransition}>
          <kbd>P</kbd>
          <span className="sound">tink</span>
        </div>

      </div>

      <div className="keys">

        <div data-key="65" className="key" onTransitionEnd={removeTransition}>
          <kbd>A</kbd>
          <span className="sound">clap</span>
        </div>
        <div data-key="83" className="key" onTransitionEnd={removeTransition}>
          <kbd>S</kbd>
          <span className="sound">hihat</span>
        </div>
        <div data-key="68" className="key" onTransitionEnd={removeTransition}>
          <kbd>D</kbd>
          <span className="sound">kick</span>
        </div>
        <div data-key="70" className="key" onTransitionEnd={removeTransition}>
          <kbd>F</kbd>
          <span className="sound">openhat</span>
        </div>
        <div data-key="71" className="key" onTransitionEnd={removeTransition}>
          <kbd>G</kbd>
          <span className="sound">boom</span>
        </div>
        <div data-key="72" className="key" onTransitionEnd={removeTransition}>
          <kbd>H</kbd>
          <span className="sound">ride</span>
        </div>
        <div data-key="74" className="key" onTransitionEnd={removeTransition}>
          <kbd>J</kbd>
          <span className="sound">snare</span>
        </div>
        <div data-key="75" className="key" onTransitionEnd={removeTransition}>
          <kbd>K</kbd>
          <span className="sound">tom</span>
        </div>
        <div data-key="76" className="key" onTransitionEnd={removeTransition}>
          <kbd>L</kbd>
          <span className="sound">tink</span>
        </div>

      </div>

      <div className="keys">

        <div data-key="90" className="key" onTransitionEnd={removeTransition}>
          <kbd>Z</kbd>
          <span className="sound">clap</span>
        </div>
        <div data-key="88" className="key" onTransitionEnd={removeTransition}>
          <kbd>X</kbd>
          <span className="sound">hihat</span>
        </div>
        <div data-key="67" className="key" onTransitionEnd={removeTransition}>
          <kbd>C</kbd>
          <span className="sound">kick</span>
        </div>
        <div data-key="86" className="key" onTransitionEnd={removeTransition}>
          <kbd>V</kbd>
          <span className="sound">openhat</span>
        </div>
        <div data-key="66" className="key" onTransitionEnd={removeTransition}>
          <kbd>B</kbd>
          <span className="sound">boom</span>
        </div>
        <div data-key="78" className="key" onTransitionEnd={removeTransition}>
          <kbd>N</kbd>
          <span className="sound">ride</span>
        </div>
        <div data-key="77" className="key" onTransitionEnd={removeTransition}>
          <kbd>M</kbd>
          <span className="sound">snare</span>
        </div>
      </div>

      <audio data-key="81" src="./sounds/list 1/l1.mp3"></audio>
      <audio data-key="87" src="./sounds/list 1/l2.mp3"></audio>
      <audio data-key="69" src="./sounds/list 1/l3.mp3"></audio>
      <audio data-key="82" src="./sounds/list 1/l4.mp3"></audio>
      <audio data-key="84" src="./sounds/list 1/l5.mp3"></audio>
      <audio data-key="89" src="./sounds/list 1/l6.mp3"></audio>
      <audio data-key="85" src="./sounds/list 1/l7.mp3"></audio>
      <audio data-key="73" src="./sounds/list 1/l8.mp3"></audio>
      <audio data-key="79" src="./sounds/list 1/l9.mp3"></audio>
      <audio data-key="80" src="./sounds/list 1/l10.wav"></audio>


      <audio data-key="65" src="./sounds/clap.wav"></audio>
      <audio data-key="83" src="./sounds/hihat.wav"></audio>
      <audio data-key="68" src="./sounds/kick.wav"></audio>
      <audio data-key="70" src="./sounds/openhat.wav"></audio>
      <audio data-key="71" src="./sounds/boom.wav"></audio>
      <audio data-key="72" src="./sounds/ride.wav"></audio>
      <audio data-key="74" src="./sounds/snare.wav"></audio>
      <audio data-key="75" src="./sounds/tom.wav"></audio>
      <audio data-key="76" src="./sounds/tink.wav"></audio>

      <audio data-key="90" src="./sounds/list 2/2l1.wav"></audio>
      <audio data-key="88" src="./sounds/list 2/2l2.wav"></audio>
      <audio data-key="67" src="./sounds/list 2/2l3.wav"></audio>
      <audio data-key="86" src="./sounds/list 2/2l4.wav"></audio>
      <audio data-key="66" src="./sounds/list 2/2l5.wav"></audio>
      <audio data-key="78" src="./sounds/list 2/2l6.wav"></audio>
      <audio data-key="77" src="./sounds/list 2/2l7.wav"></audio>
    </div>
  )
}

export default App;
