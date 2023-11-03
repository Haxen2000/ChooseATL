import './App.css';
import * as Scrollytelling from '@bsmnt/scrollytelling';
import img1 from './assets/img/0e3c4cfea33874c54366a8990fd6cf65.jpg';
import img2 from './assets/img/30bab58d3cee68e66b5a7202d53285d4.jpg';
import img3 from './assets/img/c5ec34283809bb508544f5a74acc9ab4.jpg';
import img4 from './assets/img/02e08baea97db281f6074e0d29fcf2e1.jpg';
import img5 from './assets/img/ac8c1be75ebcccbd92c43d1511d267e3.jpg';
import img6 from './assets/img/4ad255d5c81ceb123336519ea6a3a8c7.jpg';
import img7 from './assets/img/a8e83971a57f346a3689af5290781653.jpg';
import atl_img from './assets/img/atl.svg';
import IntroAnimation from './sections/intro/intro-animation';

function App() {
  return (
    <div className="App">
      <Scrollytelling.Root>
        <IntroAnimation />
      </Scrollytelling.Root>
      <Scrollytelling.Root>
        <section className='section flex'>
          <Scrollytelling.Pin
            childHeight={'700px'}
            pinSpacerHeight={'4500px'}
            top={100}
          >
            <div className='card' style={{ height: 'auto' }}>
              <div className='column'>
                <div className='img-container' style={{ height: 'auto' }}> { /* flex flex-wrap */ }
                  <div className='ani-relative o-hidden'>
                    <Scrollytelling.Animation tween={{ start: 0, end: 33, to: { left: -50 } }}>
                      <div style={{
                        backgroundImage: `url(${img1})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        width: '332px',
                        'height': '362px',
                        borderRadius: '26px',
                        'left': '650px',
                        'position': 'relative'
                        }} />
                    </Scrollytelling.Animation>
                  </div>
                  <div className='ani-relative o-hidden' style={{ marginTop: '-200px' }}>
                    <Scrollytelling.Animation tween={{ start: 33, end: 66, to: { left: 300 } }}>
                      <div style={{
                        backgroundImage: `url(${img2})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: '-145.913px -79.681px',
                        backgroundSize: '211.931% 127.306%',
                        width: '292px',
                        'height': '298px',
                        borderRadius: '26px',
                        'left': '650px',
                        'position': 'relative',
                    
                        }} />
                    </Scrollytelling.Animation>
                  </div>
                  <div className='ani-relative o-hidden' style={{ marginTop: '-50px' }}>
                    <Scrollytelling.Animation tween={{ start: 66, end: 100, to: { left: 100 } }}>
                      <div style={{
                        backgroundImage: `url(${img3})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: '-86.068px -10.243px',
                        backgroundSize: '163.78% 110.581%',
                        width: '292px',
                        'height': '259px',
                        borderRadius: '26px',
                        'left': '650px',
                        'position': 'relative',
                        }} />
                    </Scrollytelling.Animation>
                  </div>
                </div>
              </div>
              <div className='column flex align-center'>
                <div className='text-container flex flex-wrap'>
                  <span className='job' style={{ marginBottom: 20 }}>Everyone comes in with their own idea of what Atlanta is.</span>
                  <span className='title'>But when you live here—when you're <span className='blue-skies'>part of this place</span>—you know Atlanta isn't any <span className='phoenix-txt'>one thing.</span></span>
                </div>
              </div>
            </div>
          </Scrollytelling.Pin>
        </section>
      </Scrollytelling.Root>
      <Scrollytelling.Root>
        <section className='section flex'>
          <Scrollytelling.Pin
            childHeight={'700px'}
            pinSpacerHeight={'4500px'}
            top={100}
          >
            <div className='card' style={{ height: 'auto' }}>
              <div className='column flex align-center'>
                <div className='text-container flex flex-wrap'>
                  <span className='job'>Yes, it's a bustling job market complete with Fortune 500 corporations, startup incubators, world-leading financial tech, and nonstop film and TV production.</span>
                </div>
              </div>
              <div className='column'>
                <div className='img-container' style={{ height: '435px' }}>
                  <div className='ani-relative o-hidden relative' style= {{ top: 0 }}>
                    <Scrollytelling.Animation tween={{ start: 0, end: 33, from: { top: -435 } }}>
                      <img src={img4} alt='alt' style={{
                        width: '604px',
                        'height': '435px',
                        borderRadius: '26px',
                        'position': 'relative'
                        }} />
                    </Scrollytelling.Animation>
                  </div>
                  <div className='ani-relative o-hidden relative' style= {{ top: -440 }}>
                    <Scrollytelling.Animation tween={{ start: 33, end: 66, from: { top: -435 } }}>
                    <img src={img4} alt='alt' style={{
                        width: '604px',
                        'height': '435px',
                        borderRadius: '26px',
                        'position': 'relative'
                        }} />
                    </Scrollytelling.Animation>
                  </div>
                  <div className='ani-relative o-hidden relative' style= {{ top: -880 }}>
                    <Scrollytelling.Animation tween={{ start: 66, end: 100, from: { top: -435 } }}>
                    <img src={img4} alt='alt' style={{
                        width: '604px',
                        'height': '435px',
                        borderRadius: '26px',
                        'position': 'relative'
                        }} />
                    </Scrollytelling.Animation>
                  </div>
                </div>
              </div>
            </div>
          </Scrollytelling.Pin>
        </section>
      </Scrollytelling.Root>
      <Scrollytelling.Root>
        <section className='section flex'>
          <Scrollytelling.Pin
            childHeight={'700px'}
            pinSpacerHeight={'4500px'}
            top={100}
          >
            <div className='card' style={{ height: 'auto' }}>
              <div className='column flex align-center'>
                <div className='text-container flex flex-wrap'>
                  <span className='job'>But it's also serene, walkable neighborhoods. It's six major sports teams and their rabid fan bases. But it's also the lifetime bonds formed within cycling clubs, softball teams, and improv troupes.</span>
                </div>
              </div>
              <div className='column'>
                <div className='img-container' style={{ height: '435px' }}>
                  <div className='ani-relative o-hidden relative' style= {{ top: 0 }}>
                    <Scrollytelling.Animation tween={{ start: 0, end: 33, from: { top: -435 } }}>
                      <img src={img7} alt='alt' style={{
                        width: '604px',
                        'height': '435px',
                        borderRadius: '26px',
                        'position': 'relative'
                        }} />
                    </Scrollytelling.Animation>
                  </div>
                  <div className='ani-relative o-hidden relative' style= {{ top: -440 }}>
                    <Scrollytelling.Animation tween={{ start: 33, end: 66, from: { top: -435 } }}>
                    <img src={img7} alt='alt' style={{
                        width: '604px',
                        'height': '435px',
                        borderRadius: '26px',
                        'position': 'relative'
                        }} />
                    </Scrollytelling.Animation>
                  </div>
                  <div className='ani-relative o-hidden relative' style= {{ top: -880 }}>
                    <Scrollytelling.Animation tween={{ start: 66, end: 100, from: { top: -435 } }}>
                    <img src={img7} alt='alt' style={{
                        width: '604px',
                        'height': '435px',
                        borderRadius: '26px',
                        'position': 'relative'
                        }} />
                    </Scrollytelling.Animation>
                  </div>
                </div>
              </div>
            </div>
          </Scrollytelling.Pin>
        </section>
      </Scrollytelling.Root>
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
  );
}

export default App;
