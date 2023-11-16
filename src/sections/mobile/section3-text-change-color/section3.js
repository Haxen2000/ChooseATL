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
          <div className='circle-text-change-anim flex flex-wrap relative'>
            <div className='img-container relative'>
              <Scrollytelling.Animation tween={{ start: 0, end: 70, to: {
                onComplete: () => {
                  document.querySelector('.mobile-container .scroll-story').classList.add('hidden');
                }
              } }}>
                <div className='img-holder relative' />
              </Scrollytelling.Animation>
            </div>
            <div className='text-container absolute'>
              <span className='quote other'>You see that Atlanta isn't one thing.<br/>It's a multitude.<br/>
                <div className='anim-text-holder'>
                  <span className='anim-text peach'>Find your place in 2024.</span>
                </div>
              </span>
            </div>
          </div>
        </Scrollytelling.Pin>
      </section>
    </Scrollytelling.Root>
  );
}
        
export default Section3;