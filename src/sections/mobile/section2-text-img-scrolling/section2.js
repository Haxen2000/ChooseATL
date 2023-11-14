import './section2.css';
import * as Scrollytelling from '@bsmnt/scrollytelling';
import img1 from '../../../assets/img/02e08baea97db281f6074e0d29fcf2e1.jpg';
import img2 from '../../../assets/img/cf58a3f729bd67eb71335d4286b1332b.jpg';
import img3 from '../../../assets/img/e60fb9599768963379a081f719323db0.jpg';
import img4 from '../../../assets/img/d2da87aabefd76d686b160798b68a5ee.jpg';
import img5 from '../../../assets/img/3166464d7cd087180df03cd3da1b18f5.jpg';
import img6 from '../../../assets/img/6b073a100c44d7544535d777d27930e7.jpg';

function Section2 () {
  const images = [img1, img2, img3, img4, img5, img6];
  const imgHolders = [];
  for (let i = 0; i < 6; i++) {
    imgHolders.push(
      <div className='ani-relative o-hidden relative' style={{ top: -254 * i }} key={i}>
        <Scrollytelling.Animation tween={{ start: 100 / 8 * (i), end: (i === 0 ? 0 : 100 / 8 * (i + 1)), from: { top: 255 } }}>
          <img src={images[i]} alt='alt' style={{
            width: '100%',
            height: 'auto',
            borderRadius: '26px',
            position: 'relative',
          }} />
        </Scrollytelling.Animation>
      </div>
    );
  }

  return (
    <>
      <Scrollytelling.Root>
        <section className='section section2-1 flex'>
          <Scrollytelling.Pin
            childHeight={'100vh'}
            pinSpacerHeight={'950vh'}
            top={75}
          >
            <div className='card'>
              <div className='column flex align-center'>
                <div className='text-container flex flex-wrap'>
                  <Scrollytelling.Animation tween={{ start: 40, end: 50, to: { opacity: 0 } }}>
                    <span className='job'>Yes, it's a bustling job market complete with Fortune 500 corporations, startup incubators, world-leading financial tech, and nonstop film and TV production.</span>
                  </Scrollytelling.Animation>
                  <Scrollytelling.Animation tween={{ start: 40, end: 50, from: { top: 240 } }}>
                    <span className='job'>But it's also serene, walkable neighborhoods. It's five major sports teams and their rabid fan bases. But it's also the lifetime bonds formed within cycling clubs, softball teams, and improv troupes.</span>
                  </Scrollytelling.Animation>
                </div>
              </div>
              <div className='column'>
                <div className='img-container'>
                  {imgHolders.map((i) =>  i)}
                </div>
              </div>
            </div>
          </Scrollytelling.Pin>
        </section>
      </Scrollytelling.Root>
      <Scrollytelling.Root>
        <section className='section section2-2 flex'>
          <Scrollytelling.Pin
            childHeight={'700px'}
            pinSpacerHeight={'2000px'}
            top={'35vh'}
          >
            <Scrollytelling.Animation tween={{ start: 0, end: 30, from: { opacity: 0.1 } }}>
              <div className='card'>
                <div className='column flex align-center'>
                  <div className='text-container'>
                    <span className='title'>You're wondering, is Atlanta <span className='phoenix-txt'>right for me?</span></span>
                  </div>
                </div>
                <div className='column flex align-center'>
                  <div className='text-container'>
                    <span className='job'>Because coming here isn't about choosing a job. It's about making a home. And so you dig deeper, and you see the hundreds of thousands of acres of parks and trails. You see the array of neighborhoods, each with its own pace and style. You see the dozens of breweries and distilleries. You see the culture and diversity.</span>
                  </div>
                </div>
              </div>
            </Scrollytelling.Animation>
          </Scrollytelling.Pin>
        </section>
      </Scrollytelling.Root>
    </>
  )
}
      
export default Section2;