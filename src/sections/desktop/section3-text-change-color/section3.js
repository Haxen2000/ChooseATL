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
          childHeight={'800px'}
          pinSpacerHeight={'4000px'}
          top={100}
        >
          <div className='circle-text-change-anim flex'>
            <div className='img-container relative'>
              <Scrollytelling.Animation tween={{ start: 0, end: 100, to: {
                top: 0, 
                width: 1200,
                height: 600,
                borderRadius: 25,
                backgroundSize: '129.943% 162.037%',
                backgroundPosition: '-100px -190px',
                onComplete: () => {
                  document.querySelector('.scroll-story').classList.add('hidden');
                }
              } }}>
                <div className='img-holder relative' />
              </Scrollytelling.Animation>
            </div>
            <svg className='svg-mask absolute' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600" width="1200" height="600">
              <defs>
                <clipPath id="theClipPath">
                  <Scrollytelling.Animation tween={{ start: 0, end: 100, to: { 
                    width: 1200,
                    height: 600,
                    rx: 25,
                    y: -100,
                    x: -323
                  } }}>
                <rect className="masker" x="323" y="100" rx='277' width="554" height="554" fill="rgba(255,0,0,.8)" />
                  </Scrollytelling.Animation>
                </clipPath>
              </defs> 
              <foreignObject x="150" y="350" width="900" height="180">
                <div>
                  <span className='quote'>You see that Atlanta isn't one thing.<br/>It's a multitude.<br/>
                    {/* <Scrollytelling.Animation tween={{ start: 40, end: 100, from: { width: 0, padding: 0 } }}>
                      <div className='anim-text-holder'>
                        <span className='anim-text peach'>Find your place in 2024.</span>
                      </div>
                    </Scrollytelling.Animation> */}
                  </span>
                </div>
              </foreignObject>
              {/* <Scrollytelling.Animation tween={{ start: 0, end: 100, to: { 
                width: 1200,
                height: 600,
                rx: 25,
                y: -100,
                x: -323
              } }}>
                <rect className="masker" x="323" y="100" rx='277' width="554" height="554" fill="rgba(255,0,0,.8)" />
              </Scrollytelling.Animation> */}
              <g clipPath="url(#theClipPath)">
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