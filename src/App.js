import './App.css';
import * as Scrollytelling from '@bsmnt/scrollytelling';
import img5 from './assets/img/ac8c1be75ebcccbd92c43d1511d267e3.jpg';
import img6 from './assets/img/4ad255d5c81ceb123336519ea6a3a8c7.jpg';
import { ReactComponent as AtlImg } from './assets/img/atl.svg';
import IntroAnimation from './sections/intro/intro-animation';
import Section1 from './sections/section1-part-of-this-place/section1';
import Section2 from './sections/section2-text-img-scrolling/section2';
import { useEffect, useRef } from "react";
import { gsap } from 'gsap';

function App() {
  const introSectionRef = useRef();

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.set(".masker", { scale: 1, transformOrigin: "center" });
      gsap.to('.test', {
        top: -100,
        width: 1200,
        height: 700,
        borderRadius: 25,
        duration: 5
      });
      gsap.to('.masker', {
        scale: 2.16,
        duration: 5
      });

    }, introSectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="App">
      <Scrollytelling.Root>
        <section className='section flex' ref={introSectionRef}>
          <Scrollytelling.Pin
            childHeight={'655px'}
            pinSpacerHeight={'3500px'}
            top={200}
          >
            <div className='circle-text-change-anim flex'>
              <div className='img-container relative'>
                <div className='test relative' />
              </div>
              <svg id="demo" class='absolute' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 700" width="1200" height="700">
                <defs>
                <clipPath id="theClipPath">
                  <circle class="masker" cx="600" cy="378" r='277' width="1500" height="500" fill="red" />
                </clipPath>  
                </defs> 
                <foreignObject x="0" y="350" width="1200" height="100">
                  <div>
                    <text class='quote'>You see that Atlanta isn't one thing. It's a multitude. And within it, there's a place for you.</text>
                  </div>
                </foreignObject>
                {/* <circle class="masker" cx="600" cy="378" r='277' width="1500" height="500" fill="red" /> */}
                <g clip-path="url(#theClipPath)">
                  <foreignObject x="0" y="350" width="1200" height="100">
                    <div>
                      <text class='quote other'>You see that Atlanta isn't one thing. It's a multitude. And within it, there's a place for you.</text>
                    </div>
                  </foreignObject>
                  </g>
              </svg>
            </div>
          </Scrollytelling.Pin>
        </section>
      </Scrollytelling.Root>
      <div className='nav hidden'>
          <AtlImg />
        </div>
      <IntroAnimation />
      <div className='scrolly-telling-container hidden'>
        <Section1 />
        <Section2 />
        <Scrollytelling.Root>
          <section className='section flex'>
            <div style={{ 'height': '3600px' }}>
              <Scrollytelling.Pin
                childHeight={'655px'}
                pinSpacerHeight={'3500px'}
                top={100}
              >
                <div className='card phoenix-bg text-white'>
                  <div className='column flex align-center'>
                    <div className='text-container flex flex-wrap'>
                      <span className='title'>Numbers Don't Lie</span>
                      <span className='job'>The Metro Atlanta area has a career for you, whatever your field or experience.</span>
                    </div>
                  </div>
                  <div className='column'>
                    <div className='text-container flex flex-wrap'>
                      <div className='data half peach ani-relative o-hidden'>
                        <Scrollytelling.Animation tween={{ start: 0, end: 30, from: { left: 200 } }}>
                          <div className='flex align-end'>
                            <span className='big'>17</span>
                            <span className='small'>Fortune 500 Companies</span>
                          </div>
                        </Scrollytelling.Animation>
                      </div>
                      <div className='data half peach ani-relative o-hidden'>
                        <Scrollytelling.Animation tween={{ start: 20, end: 50, from: { left: 200 } }}>
                          <div className='flex align-end'>
                            <span className='big'>628</span>
                            <span className='small'>Startups</span>
                          </div>
                        </Scrollytelling.Animation>
                      </div>
                      <div className='data peach ani-relative o-hidden'>
                        <Scrollytelling.Animation tween={{ start: 30, end: 70, from: { left: 400 } }}>
                          <div className='flex align-end flex-wrap'>
                            <div>
                              <span className='small'>Nearly</span>
                            </div>
                            <div className='flex align-end'>
                              <span className='big'>$400 Billion</span>
                              <span className='small'>in real GDP</span>
                            </div>
                          </div>
                        </Scrollytelling.Animation>
                      </div>
                      <div className='data peach ani-relative o-hidden'>
                        <Scrollytelling.Animation tween={{ start: 60, end: 100, from: { left: 400 } }}>
                          <div className='flex align-end flex-wrap'>
                            <span className='big'>75%</span>
                            <span className='small'>of Fortune 1000 Companies have a presence here</span>
                          </div>
                        </Scrollytelling.Animation>
                      </div>
                    </div>
                  </div>
                </div>
              </Scrollytelling.Pin>
            </div>
          </section>
        </Scrollytelling.Root>
        <Scrollytelling.Root>
          <section className='section flex'>
            <div style={{ 'height': '1700px' }}>
              <Scrollytelling.Pin
                childHeight={'655px'}
                pinSpacerHeight={'4675px'}
                top={100}
              >
                <div className='card sunny'>
                  <div className='column'>
                    <div className='text-container'>
                      <span className='heading'>METRO ATLANTA CHAMBER MEMBER</span>
                      <h1 className='quote'>“Lorem ipsum dolor sit amet. In quisquam iure rem temporibus repellat et voluptatem amet est sapiente deserunt.”</h1>
                      <span className='name'>Victoria</span>
                      <span className='job'>Network Scheduling Analyst at Delta Air Lines</span>
                    </div>
                  </div>
                  <div className='column'>
                    <div className='img-container' style={{
                      borderRadius: '26px',
                      background: `url(${img5}) no-repeat`,
                      backgroundPosition: '-223.288px 0px',
                      backgroundSize: '162.646% 100%',
                    }} />
                  </div>
                </div>
              </Scrollytelling.Pin>
            </div>
          </section>
        </Scrollytelling.Root>
        <Scrollytelling.Root>
          <section className='section flex'>
            <div style={{ 'height': '1700px' }}>
              <Scrollytelling.Pin
                childHeight={'655px'}
                pinSpacerHeight={'3060px'}
                top={200}
              >
                <div className='card fresh'>
                  <div className='column'>
                    <div className='text-container'>
                      <span className='heading'>METRO ATLANTA CHAMBER MEMBER</span>
                      <h1 className='quote'>“Lorem ipsum dolor sit amet. In quisquam iure rem temporibus repellat et voluptatem amet est sapiente deserunt.”</h1>
                      <span className='name'>Souhail</span>
                      <span className='job'>New Product Development - Concepts Manager at UPS</span>
                    </div>
                  </div>
                  <div className='column'>
                  <div className='img-container' style={{
                      borderRadius: '26px',
                      background: `url(${img6}) no-repeat`,
                      backgroundPosition: '-340.029px -136px',
                      backgroundSize: '196.416% 120.763%',
                    }} />
                  </div>
                </div>
              </Scrollytelling.Pin>
            </div>
          </section>
        </Scrollytelling.Root>
        <Scrollytelling.Root>
          <section className='section flex'>
            <div style={{ 'height': '1700px', marginBottom: '400px' }}>
              <Scrollytelling.Pin
                childHeight={'655px'}
                pinSpacerHeight={'1460px'}
                top={300}
              >
                <div className='card peach'>
                  <div className='column'>
                    <div className='text-container'>
                      <span className='heading'>METRO ATLANTA CHAMBER MEMBER</span>
                      <h1 className='quote'>“Lorem ipsum dolor sit amet. In quisquam iure rem temporibus repellat et voluptatem amet est sapiente deserunt.”</h1>
                      <span className='name'>Another</span>
                      <span className='job'>Title of Job at Company</span>
                    </div>
                  </div>
                  <div className='column'>
                  <div className='img-container' style={{
                      borderRadius: '26px',
                      background: `url(${img5}) no-repeat`,
                      backgroundPosition: '-223.288px 0px',
                      backgroundSize: '162.646% 100%',
                    }} />
                  </div>
                </div>
              </Scrollytelling.Pin>
            </div>
          </section>
        </Scrollytelling.Root>
      </div>
    </div>
  );
}

export default App;
