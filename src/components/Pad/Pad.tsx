import {PropsPad} from './Pad.config'
import {PadContainer} from './PadStyle'


const Pad = ({pad, handlePadClick}: PropsPad): JSX.Element => {

  return (
      <PadContainer color={pad.color} padsIsOn={pad.padsIsOn} onClick={()=>handlePadClick(pad.id, pad.padsIsOn)}>
         {pad.name}
      </PadContainer>);

}
export default Pad;

