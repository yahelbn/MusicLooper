import Pad from '../Pad/Pad';
import {PaletteProps, AudioInterface} from './Palette.config'
import {PadsContainer, PaletteContainer, PalettePlayButton, PaletteTimerLabel, PaletteTimerContainer, PaletteHeader} from './PaletteStyle'
import { BsFillPlayFill ,BsFillPauseFill} from 'react-icons/bs';
import { useState ,useEffect} from 'react';


const Palette = (props: PaletteProps): JSX.Element => {
  const { pads = [] } = props;
  const [ playAll, setPlayAll ]=useState(false);
  const [ soundsStack, setSoundsStack ]=useState(pads)
  const [ waitingSounds, setWaitingSounds ]=useState<AudioInterface[]>([])
  const [ playingSounds, setPlayingSounds ]=useState<AudioInterface[]>([])
  const [seconds, setSeconds] = useState(0);


  //initial render create the first playing sounds "playingSounds" - array 
  useEffect(() => {
    let playing = setsAllThePlayingSounds()
    if(playAll) 
    playAllSounds(playing);
  }, [])

  
  //This useEffect handle the Loop 
  useEffect(() => {
    let interval: any = null;
    if (playAll) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
        if(seconds===8){ 
          reset();
          setPlayingSounds([...playingSounds,...waitingSounds]);
          playAllSounds([...playingSounds,...waitingSounds])
          setWaitingSounds([])
        }
      }, 1000);
    } else if (!playAll && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [playAll, seconds]);

  //Reset functon 
  function reset() {
    setSeconds(0);
  }

//This function play and pause all the sounds
  const playAndPause = (playAll: boolean, playingSounds: AudioInterface[]) => {
    if(playAll) {
      playAllSounds(playingSounds)
     }
     else{
       stopAllSounds(playingSounds)
     }
  }

  //All the songs with padIsOn go inside playingSounds
  const setsAllThePlayingSounds = () => {
    let playing:AudioInterface[] = [];
    soundsStack.map((sound)=> sound.padsIsOn ? playing.push({id:sound.id ,audio : new Audio(sound.sound)}) : null)    
    setPlayingSounds([...playing])
    console.log(playing)
    return playing;
  }

  //Pads that padIsOn=true  play them.
  const playAllSounds = (playing:AudioInterface[]) =>{
    playing.forEach(sound =>  {sound.audio.play(); 
    })
  }

    //Pads that padIsOn=true  plause them.
    const stopAllSounds = (playing:AudioInterface[]) =>{
      playing.forEach(sound =>  {sound.audio.pause();})
    }


  const handlePadClick = (id: number, padIsOn:boolean) => {
    //If the sound is on while clicking on specific pad , we supposed to turn off immediately his sound. 
    //By taking his sound from the "playingSounds"- array  and pause him.
    if(padIsOn){
      playingSounds.forEach((sound,index)=>{
        if(sound.id===id){
          sound.audio.pause()
          playingSounds.splice(index,1)
        }
      })
      setPlayingSounds(playingSounds);
      let objIndex = soundsStack.findIndex((obj => obj.id === id));
      soundsStack[objIndex].padsIsOn = false
      setSoundsStack([...soundsStack]);
      console.log(soundsStack)
  }

  //If the sound is "on" while clicking on specific pad , we supposed to add the sound to stack of "waitingSounds"
    else{
      let objIndex = soundsStack.findIndex((obj => obj.id === id));
      soundsStack[objIndex].padsIsOn = true
      setSoundsStack([...soundsStack]);
      let chosenSound = soundsStack[objIndex];
      let audio :AudioInterface = {id:chosenSound.id, audio: new Audio(chosenSound.sound)};
      setWaitingSounds([{...waitingSounds, ...audio}])
    }
  }

  //Handle click on play and pasue button.
  const handleClickPlayButton = () => {
    setPlayAll(!playAll);
    playAndPause(!playAll,playingSounds)
  }




  return (
          <PaletteContainer>
            <PaletteHeader>Looper</PaletteHeader>
            <PadsContainer>
              {soundsStack.map( (pad)=> <Pad handlePadClick={handlePadClick} pad={pad}/>)}
            </PadsContainer>
            <PalettePlayButton onClick={handleClickPlayButton} playAll={playAll}>
              {playAll ? 
                   <BsFillPauseFill size={40}/> : 
                   <BsFillPlayFill size={40}/>
                }
            </PalettePlayButton>
         <PaletteTimerContainer> 
             <PaletteTimerLabel>00:0{seconds}</PaletteTimerLabel>
         </PaletteTimerContainer>
          </PaletteContainer>);

}
export default Palette;

