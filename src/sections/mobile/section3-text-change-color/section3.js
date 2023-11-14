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
          childHeight={'110vh'}
          pinSpacerHeight={'4000px'}
          top={200}
        >
          <div className='circle-text-change-anim flex'>
            <div className='img-container relative'>
              <Scrollytelling.Animation tween={{ start: 0, end: 100, to: {
                width: '80vw',
                height: '80vw',
                borderRadius: 25,
                backgroundSize: '272% 135.2%',
                backgroundPosition: '-350px -100px',
                onComplete: () => {
                  document.querySelector('.mobile-container .scroll-story').classList.add('hidden');
                }
              } }}>
                <div className='img-holder relative' />
              </Scrollytelling.Animation>
            </div>
            <svg className='svg-mask absolute' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600" width="100vw" height="600">
              <defs>
                <clipPath id="theClipPathMobile">
                  <Scrollytelling.Animation tween={{ start: 0, end: 100, to: { 
                    width: 960,
                    height: 960,
                    rx: 240,
                    y: 0,
                    x: -180
                  } }}>
                <rect className="masker" x="300" y="-340" rx='300' width="600" height="600" fill="rgba(255,0,0,.8)" />
                  </Scrollytelling.Animation>
                </clipPath>
              </defs> 
              <foreignObject x="150" y="350" width="900" height="180">
                <div>
                  <span className='quote'>You see that Atlanta isn't one thing.<br/>It's a multitude.<br/>
                  </span>
                </div>
              </foreignObject>
              {/* <Scrollytelling.Animation tween={{ start: 0, end: 100, to: { 
                width: 960,
                height: 960,
                rx: 240,
                y: 0,
                x: -180
              } }}>
                <rect className="masker" x="300" y="-340" rx='300' width="600" height="600" fill="rgba(255,0,0,.8)" />
              </Scrollytelling.Animation> */}
              <g clipPath="url(#theClipPathMobile)">
                <foreignObject x="150" y="350" width="900" height="180">
                  <div>
                    <span className='quote other'>You see that Atlanta isn't one thing.<br/>It's a multitude.<br/>
                      <Scrollytelling.Animation tween={{ start: 40, end: 100, from: { width: 0, padding: 0 } }}>
                        <div className='anim-text-holder'>
                          <span className='anim-text peach'>Find your place in 2024.</span>
                        </div>
                      </Scrollytelling.Animation>
                    </span>
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