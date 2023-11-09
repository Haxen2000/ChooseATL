import './section3.css';
import { useEffect, useRef } from "react";
import * as Scrollytelling from '@bsmnt/scrollytelling';
import { gsap } from 'gsap';

function Section3 () {
  const section3Ref = useRef();

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.set(".masker", { scale: 1, transformOrigin: "center" });
    }, section3Ref);
    return () => ctx.revert();
  }, []);

  return (
    <Scrollytelling.Root>
      <section className='section section3 flex' ref={section3Ref}>
        <Scrollytelling.Pin
          childHeight={'655px'}
          pinSpacerHeight={'4000px'}
          top={200}
        >
          <div className='circle-text-change-anim flex'>
            <div className='img-container relative'>
              <Scrollytelling.Animation tween={{ start: 0, end: 100, to: {
                top: -100, 
                width: 1200,
                height: 700,
                borderRadius: 25,
              } }}>
                <div className='img-holder relative' />
              </Scrollytelling.Animation>
            </div>
            <svg className='svg-mask absolute' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 700" width="1200" height="700">
              <defs>
                <clipPath id="theClipPath">
                  <Scrollytelling.Animation tween={{ start: 0, end: 100, to: { scale: 2.16 } }}>
                    <circle className="masker" cx="600" cy="378" r='277' width="1500" height="500" fill="red" />
                  </Scrollytelling.Animation>
                </clipPath>
              </defs> 
              <foreignObject x="0" y="350" width="1200" height="100">
                <div>
                  <span className='quote'>You see that Atlanta isn't one thing. <br/>It's a multitude. Find your place in 2024.</span>
                </div>
              </foreignObject>
              {/* <circle className="masker" cx="600" cy="378" r='277' width="1500" height="500" fill="red" /> */}
              <g clipPath="url(#theClipPath)">
                <foreignObject x="0" y="350" width="1200" height="100">
                  <div>
                    <span className='quote other'>You see that Atlanta isn't one thing. <br/>It's a multitude. Find your place in 2024.</span>
                  </div>
                </foreignObject>
              </g>
            </svg>
          </div>
        </Scrollytelling.Pin>
      </section>
    </Scrollytelling.Root>
  );
}
        
export default Section3;