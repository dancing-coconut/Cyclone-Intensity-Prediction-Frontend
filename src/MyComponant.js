import { useState } from 'react';
import { animated, useSpring } from '@react-spring/web';

export default function MyComponent() {
 const [isButtonClicked, setIsButtonClicked] = useState(false);

 const { x } = useSpring({
    from: { x: 0 },
    to: { x: isButtonClicked ? -100 : 0 },
 });

 const { x: xHidden } = useSpring({
    from: { x: 0 },
    to: { x: isButtonClicked ? 100 : 0 },
 });

 return (
    <div style={{ position: 'relative', width: '200px', height: '200px' }}>
      <animated.div style={{ position: 'absolute', backgroundColor:'red', transform: x.interpolate((x) => `translate3d(${x}%,0,0)`), zIndex: 1 }}>TEST Box</animated.div>
      <animated.div style={{ position: 'absolute', backgroundColor:'green', transform: xHidden.interpolate((x) => `translate3d(${x}%,0,0)`), zIndex: 0 }}>TEST Box</animated.div>
      <button style={{position:'absolute', top:'4vh'}} onClick={() => setIsButtonClicked(!isButtonClicked)}>Toggle</button>
    </div>
 );
}
