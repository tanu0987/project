
import './counter.css';
import React,{useState} from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger'; 

const Counter = () =>{
    const[counterOn, setCounterOn] = useState(false);
    return (
        <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=> setCounterOn(false)}>
        < div className='start'>
        <div className='container'>
            <div>
                <h2 className='counter-numbers'>20
                {counterOn && <CountUp start={0} end={100} duration={2} delay={0}/>}
                +
                </h2>
                
                <p>project completed</p>
            </div>
            <div>
                <h2 className='counter-numbers'>10
                {counterOn && <CountUp start={0} end={100} duration={2} delay={0}/>}
                +
                </h2>
                <p>Happy Clients</p>
            </div>
            <div>
                <h2 className='counter-numbers'>50
                {counterOn && <CountUp start={0} end={10} duration={2} delay={0}/>}
                +</h2>
                <p>real professional</p>
            </div>
            <div>
                <h2 className='counter-numbers'>30
                {counterOn && <CountUp start={0} end={1} duration={2} delay={0}/>}
                +
                </h2>
                <p>Reviews</p>
            </div>
        </div>
        </div>
        </ScrollTrigger>
       

    );
};
export default Counter;