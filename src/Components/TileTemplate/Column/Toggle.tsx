import styled from "styled-components";
import { selectValue } from '../../../Redux/Slices/TileSlice'
import { useSelector } from 'react-redux';

interface OuterContainer {
  count: number
  toggled: boolean
  tileId: number
  outerWidth: number
  size: number
}

interface Props {
  count: number
  toggled: boolean
  tileId: number
  size: number
  outerWidth: number
}

const ToggleOuterContainer = styled.div<OuterContainer>`
  position: relative;
  width: ${props => props.outerWidth + 'px'};
  height: ${props => props.size + 'px'};
  border-radius: 50px;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.15);
  background-color: ${props => props.count === props.tileId && props.toggled === true ? '#fcfcfc' : '#b6b6b64d'};
  overflow: hidden;
  cursor: pointer;
  transition: all 0.2s ease;
  margin: .5rem;
`;

const ToggleInnerContainer = styled.div<Props>`
  width: ${props => props.size + 'px'};
  height: ${props => props.size + 'px'};
  border-radius: 50%;
  background-color: white;
  box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.4);
  position: absolute;
  left: ${props => props.count === props.tileId && props.toggled === true ? `${props.outerWidth - props.size}px` : '0'};
  transition: all 0.2s ease;
  cursor: pointer;
`;

const Slider: React.FC<Props> = ({ toggled, tileId, size }) => {
  let outerWidth = 25
  const count = useSelector(selectValue)

  return (
    <div className="ToggleDiv">
      <ToggleOuterContainer outerWidth={outerWidth} size={size} toggled={toggled} tileId={tileId} count={count} >
        <ToggleInnerContainer outerWidth={outerWidth} size={size} toggled={toggled} tileId={tileId} count={count} />
      </ToggleOuterContainer>
    </div>
  );
}

export default Slider;