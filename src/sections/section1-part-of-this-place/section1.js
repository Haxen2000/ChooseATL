import './section1.css';
import * as Scrollytelling from '@bsmnt/scrollytelling';

function Section1 () {
  return (
    <Scrollytelling.Root>
      <section className='section section1 flex'>
        <Scrollytelling.Pin
          childHeight={'700px'}
          pinSpacerHeight={'4500px'}
          top={100}
        >
          <div className='card'>
            <div className='column'>
              <div className='img-container'>
                <div className='ani-relative o-hidden'>
                  <Scrollytelling.Animation tween={{ start: 0, end: 33, to: { left: -50 } }}>
                    <div className='img img1' />
                  </Scrollytelling.Animation>
                </div>
                <div className='ani-relative o-hidden img2-holder'>
                  <Scrollytelling.Animation tween={{ start: 33, end: 66, to: { left: 180 } }}>
                    <div className='img img2' />
                  </Scrollytelling.Animation>
                </div>
                <div className='ani-relative o-hidden img3-holder'>
                  <Scrollytelling.Animation tween={{ start: 66, end: 100, to: { left: 20 } }}>
                    <div className='img img3' />
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
  )
}

export default Section1;
