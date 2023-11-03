import './section2.css';
import * as Scrollytelling from '@bsmnt/scrollytelling';
import img1 from '../../assets/img/02e08baea97db281f6074e0d29fcf2e1.jpg';
import img2 from '../../assets/img/3fca7212215a599416cd2d027a97dfff.jpg';
import img3 from '../../assets/img/e60fb9599768963379a081f719323db0.jpg';
import img4 from '../../assets/img/a8e83971a57f346a3689af5290781653.jpg';
import img5 from '../../assets/img/3166464d7cd087180df03cd3da1b18f5.jpg';
import img6 from '../../assets/img/3ac4f47ae1a062ba8627b7ef8e599296.jpg';

function Section2 () {
  const images = [img1, img2, img3, img4, img5, img6];
  const imgHolders = [];
  for (let i = 0; i < 6; i++) {
    imgHolders.push(
      <div className='ani-relative o-hidden relative' style={{ top: -439 * i }}>
        <Scrollytelling.Animation tween={{ start: 100 / 6 * (i), end: (i === 0 ? 0 : 100 / 6 * (i + 1)), from: { top: 440 } }}>
          <img src={images[i]} alt='alt' style={{
            width: '604px',
            height: '435px',
            borderRadius: '26px',
            position: 'relative',
          }} />
        </Scrollytelling.Animation>
      </div>
    );
  }

  return (
    <Scrollytelling.Root>
      <section className='section section2 flex'>
        <Scrollytelling.Pin
          childHeight={'700px'}
          pinSpacerHeight={'4500px'}
          top={100}
        >
          <div className='card'>
            <div className='column flex align-center'>
              <div className='text-container flex flex-wrap'>
                <Scrollytelling.Animation tween={{ start: 40, end: 50, to: { opacity: 0 } }}>
                  <span className='job'>Yes, it's a bustling job market complete with Fortune 500 corporations, startup incubators, world-leading financial tech, and nonstop film and TV production.</span>
                </Scrollytelling.Animation>
                <Scrollytelling.Animation tween={{ start: 40, end: 50, from: { top: 1440 } }}>
                  <span className='job'>But it's also serene, walkable neighborhoods. It's six major sports teams and their rabid fan bases. But it's also the lifetime bonds formed within cycling clubs, softball teams, and improv troupes.</span>
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
  )
}
      
export default Section2;