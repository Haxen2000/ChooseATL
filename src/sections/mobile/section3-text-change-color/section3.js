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
          pinSpacerHeight={'3000px'}
          top={'25vh'}
        >
          <div className='circle-text-change-anim flex flex-wrap'>
            <div className='img-container relative'>
              <Scrollytelling.Animation tween={{ start: 0, end: 70, to: {
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
            <Scrollytelling.Animation tween={{ start: 0, end: 70, to: { top: '-80vw' } }}>
              <svg className='svg-mask relative' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600" width="100vw" height="80vw">
                <defs>
                  <clipPath id="theClipPathMobile">
                    <Scrollytelling.Animation tween={{ start: 0, end: 70, to: { 
                      width: 960,
                      height: 960,
                      rx: 240,
                      y: 0,
                      x: -180
                    } }}>
                  <rect className="masker" x="300" y="-180" rx='300' width="600" height="600" fill="rgba(255,0,0,.8)" />
                    </Scrollytelling.Animation>
                  </clipPath>
                </defs> 
                <foreignObject x="150" y="550" width="900" height="180">
                  <div>
                    <span className='quote'>You see that Atlanta isn't one thing.<br/>It's a multitude.<br/>
                    </span>
                  </div>
                </foreignObject>
                {/* <Scrollytelling.Animation tween={{ start: 0, end: 90, to: { 
                  width: 960,
                  height: 960,
                  rx: 240,
                  y: 0,
                  x: -180
                } }}>
                  <rect className="masker" x="300" y="-180" rx='300' width="600" height="600" fill="rgba(255,0,0,.5)" />
                </Scrollytelling.Animation> */}
                <g clipPath="url(#theClipPathMobile)">
                  <foreignObject x="150" y="550" width="900" height="180">
                    <div>
                      <span className='quote other'>You see that Atlanta isn't one thing.<br/>It's a multitude.<br/>
                        <Scrollytelling.Animation tween={{ start: 30, end: 70, from: { width: 0, padding: 0 } }}>
                          <div className='anim-text-holder'>
                            <span className='anim-text peach'>Find your place in 2024.</span>
                          </div>
                        </Scrollytelling.Animation>
                      </span>
                    </div>
                  </foreignObject>
                </g>
              </svg>
            </Scrollytelling.Animation>
            </div>
        </Scrollytelling.Pin>
      </section>
    </Scrollytelling.Root>
  );
}
        
export default Section3;