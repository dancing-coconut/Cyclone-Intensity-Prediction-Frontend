import './App.css';
import BG from "./bg.jpg";
import PIC from "./pic.jpg"
import React, { useState, useRef} from 'react';
import { useSpring, animated, useChain } from 'react-spring';
import ReactCardFlip from 'react-card-flip';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function App() {
  const [isClicked, setIsClicked] = useState(false);
  const [flip, setFlip] = useState(false);
  const [reveal, setReveal] = useState(false);

  const refHeader = useRef();
  const refCont1 = useRef();
  const refCont2 = useRef();
  const refCont3 = useRef();
  const refCont4 = useRef();
  const refCont5 = useRef();
  const refCont6 = useRef();
  const refCont7 = useRef();
  const refCont8 = useRef();
  const refCont9 = useRef();
  const refCont10 = useRef();

  
  useChain([refHeader, refCont1, refCont2, refCont3, refCont4, refCont5, refCont6, refCont7, refCont8, refCont9, refCont10], [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], 1000);

  const textAnimation = useSpring({
    from: { transform:"translate(0%,0)" },
    to: { transform: isClicked?"translate(-100%,0)":"translate(0%,0)" },
   });
   
   const boxAnimation = useSpring({
    from: { transform:"translate(0%,0)" },
    to: { transform: isClicked?"translate(-87.5%,0)":"translate(0%,0)" },
   });

   const contentAnimation = useSpring({
    from: { transform:"translate(0%,0)" },
    to: { transform: reveal?"translate(-52.5%,0)":"translate(0%,0)" },
   });

   const listAnimation = useSpring({
    from: { transform:"translate(0%,0)" },
    to: { transform: reveal?"translate(52.5%,0)":"translate(0%,0)" },
   });

   const class1Animation = useSpring({
    from: { transform:"translate(0%,0%)" },
    to: { transform: reveal?"translate(0, 150%)":"translate(0%,0%)" },
   });

   const class2Animation = useSpring({
    from: { transform:"translate(0%,0%)" },
    to: { transform: reveal?"translate(0, 300%)":"translate(0%,0%)" },
   });

   const class3Animation = useSpring({
    from: { transform:"translate(0%,0%)" },
    to: { transform: reveal?"translate(0, 450%)":"translate(0%,0%)" },
   });

   const class4Animation = useSpring({
    from: { transform:"translate(0%,0%)" },
    to: { transform: reveal?"translate(0, 600%)":"translate(0%,0%)" },
   });

   const class5Animation = useSpring({
    from: { transform:"translate(0%,0%)" },
    to: { transform: reveal?"translate(0, 750%)":"translate(0%,0%)" },
   });

   const class6Animation = useSpring({
    from: { transform:"translate(0%,0%)" },
    to: { transform: reveal?"translate(0, 900%)":"translate(0%,0%)" },
   });

   const class7Animation = useSpring({
    from: { transform:"translate(0%,0%)" },
    to: { transform: reveal?"translate(0, 1050%)":"translate(0%,0%)" },
   });

   const class8Animation = useSpring({
    from: { transform:"translate(0%,0%)" },
    to: { transform: reveal?"translate(0, 1200%)":"translate(0%,0%)" },
   });

   const class9Animation = useSpring({
    from: { transform:"translate(0%,0%)" },
    to: { transform: reveal?"translate(0, 1350%)":"translate(0%,0%)" },
   });

   const class10Animation = useSpring({
    from: { transform:"translate(0%,0%)" },
    to: { transform: reveal?"translate(0, 1500%)":"translate(0%,0%)" },
   });
  return (
    <div className="App">
      <animated.div style={textAnimation} className='main-content'>
        <h1 className='heading'>Cyclone<br />Intensity<br />Prediction</h1>
        <button className='main-button' onClick={() => setIsClicked(!isClicked)}>PREDICT NOW</button>
      </animated.div>
      <animated.div style={{...boxAnimation, position: 'absolute', right: "-80vw"}} className="cyclone-content">
        <div className='cyclone-container'>
          <animated.div style={contentAnimation} className='content'>
            <div className='title-content'>
              <IconButton aria-label="delete">
                <ArrowBackIcon onClick={() => {
                  setIsClicked(!isClicked)
                  if(reveal){
                    setReveal(false)
                  }
                }}/>
              </IconButton>
              <h2 className='cyclone-heading'>CYCLONE CAPTURE</h2>
            </div>
            <ReactCardFlip isFlipped={flip} flipDirection='vertical'>
              <div className='front'><img src={BG} className='capture'/></div>
              <div className='back'><img src={PIC} className='capture'/></div>
            </ReactCardFlip>
            <div className='menu'>
              <div className='info'>
                <p className='info-section'>Estimated wind speed</p>
                <p className='info-section'>Estimated Category</p>
              </div>
              <button className='menu-button' onClick={() => setFlip(!flip)}>{flip?"ORIGINAL CAPTURE":"PRE PROCESSED IMAGE"}</button>
              <button className='menu-button' onClick={() => setReveal(!reveal)}>{reveal?"CLOSE":"DVORAK INFO"}</button>
            </div>
          </animated.div>
          <animated.div 
            ref={refHeader} 
            style={listAnimation} 
            className='dvorak-container'>
            <animated.div ref={refCont1} style={class1Animation} className='dvorak-class' id='class1'> </animated.div>
            <animated.div ref={refCont2} style={class2Animation} className='dvorak-class' id='class2'> </animated.div>
            <animated.div ref={refCont3} style={class3Animation} className='dvorak-class' id='class3'> </animated.div>
            <animated.div ref={refCont4} style={class4Animation} className='dvorak-class' id='class4'> </animated.div>
            <animated.div ref={refCont5} style={class5Animation} className='dvorak-class' id='class5'> </animated.div>
            <animated.div ref={refCont6} style={class6Animation} className='dvorak-class' id='class6'> </animated.div>
            <animated.div ref={refCont7} style={class7Animation} className='dvorak-class' id='class7'> </animated.div>
            <animated.div ref={refCont8} style={class8Animation} className='dvorak-class' id='class8'> </animated.div>
            <animated.div ref={refCont9} style={class9Animation} className='dvorak-class' id='class9'> </animated.div>
            <animated.div ref={refCont10} style={class10Animation} className='dvorak-class' id='class10'> </animated.div>
          </animated.div>
        </div>
      </animated.div>
    </div>
  );
}

export default App;
