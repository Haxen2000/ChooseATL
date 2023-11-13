import { useEffect, useRef } from "react";
import { gsap } from 'gsap';
import './intro.css';
import { ReactComponent as AtlImg } from '../../assets/img/atl.svg';
import AtlWYBCirImg from '../../assets/img/atlwyb-circle.svg';
import AtlWYBImg from '../../assets/img/atlwyb-noatl.svg';


function IntroAnimation () {
  const introSectionRef = useRef();
  const videoRef = useRef();

  useEffect(() => {
    const animationTime = 5;
    const screenWidth = window.outerWidth;
    const widthHeight = screenWidth > 1024 ? 400 : 200;
    const backgroundSize = screenWidth > 1024 ? 600 : 400;
    const baseX = screenWidth > 1024 ? -200 : -100;
    const moveX = {
      small: baseX / 4,
      // left: baseX - baseX * 1.4,
      left: screenWidth > 1024 ? -625 : -325,
      // right: baseX + baseX * -1.5,
      right: screenWidth > 1024 ? 125 : 25,
      start: baseX,
    };
  
    const baseY = screenWidth > 1024 ? 100 : 50;
    const moveY = {
      top: baseY * 2 / 3,
      bottom: baseY * 4 / 3,
      start: baseY,
    }
    const delayTime = 2;
    const repeat = 0; // -1 for infinite
    const repeatDelay = 1;
    const ease = 'power1.inOut';
    const gsapProps = {
      duration: animationTime,
      repeat: repeat,
      repeatDelay: repeatDelay,
      ease: ease,
      delay: delayTime,
    }

    let ctx = gsap.context(() => {
      gsap.to('.c1', { // blue
        keyframes: {
          '0%': { 
            left: moveX.start,
            top: moveY.start,
            width: widthHeight,
            height: widthHeight,
            backgroundSize: backgroundSize,
            zIndex: 10,
          },
          '25%': {
            left: moveX.left + 65,
            top: moveY.start,
            width: widthHeight * 1.25,
            height: widthHeight * 1.25,
            backgroundSize: backgroundSize * 1.25,
            zIndex: 11,
          },
          '37.5%': {
            left: moveX.start,
            top: moveY.start,
            width: widthHeight * 1.5,
            height: widthHeight * 1.5,
            backgroundSize: backgroundSize * 1.5,
            zIndex: 20,
          },
          '50%': {
            left: moveX.right - 50,
            top: moveY.start,
            width: widthHeight * 1.25,
            height: widthHeight * 1.25,
            backgroundSize: backgroundSize * 1.25,
            zIndex: 12,
          },
          '62.5%': {
            left: moveX.right,
            top: moveY.start,
            width: widthHeight,
            height: widthHeight ,
            backgroundSize: backgroundSize,
            zIndex: 7,
          },
          '75%': {
            left: moveX.right - 50,
            top: moveY.start,
            width: widthHeight * .75,
            height: widthHeight * .75,
            backgroundSize: backgroundSize * .75,
            zIndex: 6,
          },
          '100%': {
            left: moveX.start,
            top: moveY.start,
            width: widthHeight,
            height: widthHeight ,
            backgroundSize: backgroundSize,
            backgroundPositionY: 0,
            zIndex: 12,
          },
          easeEach: 'none',
        },
        ...gsapProps
      });
      gsap.to('.c2', { // crimson
        keyframes: {
          '0%': { 
            left: moveX.start,
            top: moveY.start,
            width: widthHeight,
            height: widthHeight,
            backgroundSize: backgroundSize,
            zIndex: 9,
          },
          '25%': {
            left: moveX.right - 50,
            top: moveY.bottom,
            width: widthHeight * 1.25,
            height: widthHeight * 1.25,
            backgroundSize: backgroundSize * 1.25,
            zIndex: 10,
          },
          '50%': {
            left: moveX.start + 25,
            top: moveY.top,
            width: widthHeight * .5,
            height: widthHeight * .5,
            backgroundSize: backgroundSize * .5,
            zIndex: 7,
          },
          '75%': {
            left: moveX.left,
            top: moveY.bottom,
            width: widthHeight * 1.25,
            height: widthHeight * 1.25,
            backgroundSize: backgroundSize * 1.25,
            zIndex: 10,
          },
          '100%': {
            left: moveX.start,
            top: moveY.start,
            width: widthHeight,
            height: widthHeight,
            backgroundSize: backgroundSize,
            zIndex: 9,
          },
          easeEach: 'none',
        },
        ...gsapProps
      });
      gsap.to('.c3', { // gold
        keyframes: {
          '0%': { 
            left: moveX.start,
            top: moveY.start,
            width: widthHeight,
            height: widthHeight,
            backgroundSize: backgroundSize,
            zIndex: 8,
          },
          '25%': {
            left: moveX.right,
            top: moveY.bottom + widthHeight * .5,
            width: widthHeight * 1.25,
            height: widthHeight * 1.25,
            backgroundSize: backgroundSize * 1.25,
            zIndex: 8,
            ease: 'power2.out',
          },
          '50%': {
            left: moveX.start + widthHeight * .25,
            top: moveY.bottom * 2,
            width: widthHeight * .5,
            height: widthHeight * .5,
            backgroundSize: backgroundSize * .5,
            zIndex: 5,
          },
          '75%': {
            left: moveX.left - widthHeight * .25,
            top: moveY.bottom,
            width: widthHeight * 1.25,
            height: widthHeight * 1.25,
            backgroundSize: backgroundSize * 1.25,
            zIndex: 8,
          },
          '100%': {
            left: moveX.start,
            top: moveY.start,
            width: widthHeight,
            height: widthHeight,
            backgroundSize: backgroundSize,
            zIndex: 7,
          },
          easeEach: 'none',
        },
        duration: animationTime * .95,
        repeat: repeat,
        delay: animationTime * .05 + delayTime,
        repeatDelay: repeatDelay + animationTime * .05,
        ease: ease,
      });
      gsap.to('.c4', { // hotpink
        keyframes: {
          '0%': { 
            left: moveX.start,
            top: moveY.start,
            width: widthHeight,
            height: widthHeight,
            backgroundSizeX: backgroundSize * 4 / 3,
            zIndex: 7,
          },
          '25%': {
            left: moveX.right - widthHeight / 2,
            top: moveY.top - widthHeight / 2,
            width: widthHeight * 1.25,
            height: widthHeight * 1.25,
            backgroundSizeX: backgroundSize * 1.25 * 4 / 3,
            zIndex: 8,
            ease: 'power2.out',
          },
          '50%': {
            left: moveX.start + widthHeight / 4,
            top: moveY.top - widthHeight / 4,
            width: widthHeight * .75,
            height: widthHeight * .75,
            backgroundSize: backgroundSize * .75 * 4 / 3,
            zIndex: 6,
          },
          '75%': {
            left: moveX.left,
            top: moveY.top - widthHeight / 2,
            width: widthHeight * 1.25,
            height: widthHeight * 1.25,
            backgroundSize: backgroundSize * 1.25 * 4 / 3,
            zIndex: 9,
          },
          '100%': {
            left: moveX.start,
            top: moveY.start,
            width: widthHeight,
            height: widthHeight,
            backgroundSize: backgroundSize * 4 / 3,
            zIndex: 8,
          },
          easeEach: 'none',
        },
        ...gsapProps
      });
      gsap.to('.c5', { // limegreen
        keyframes: {
          '0%': { 
            left: moveX.start,
            top: moveY.start,
            width: widthHeight,
            height: widthHeight,
            backgroundSize: backgroundSize * 4 / 3,
            zIndex: 7,
          },
          '25%': {
            left: moveX.left,
            top: moveY.top - 50,
            width: widthHeight * 1.25,
            height: widthHeight * 1.25,
            backgroundSize: backgroundSize * 1.25 * 4 / 3,
            zIndex: 10,
            ease: 'power2.out',
          },
          '50%': {
            left: moveX.start,
            top: moveY.top,
            width: widthHeight * 1.5,
            height: widthHeight * 1.5,
            backgroundSize: backgroundSize * 1.5 * 4 / 3,
            zIndex: 12,
          },
          '75%': {
            left: moveX.right,
            top: moveY.top,
            width: widthHeight * 1.25,
            height: widthHeight * 1.25,
            backgroundSize: backgroundSize * 1.25 * 4 / 3,
            zIndex: 10,
          },
          '100%': {
            left: moveX.start,
            top: moveY.start,
            width: widthHeight,
            height: widthHeight,
            backgroundSize: backgroundSize * 4 / 3,
            zIndex: 7,
          },
          easeEach: 'none',
        },
        ...gsapProps
      });
      gsap.to('.c6', { // maroon
        keyframes: {
          '0%': {
            left: moveX.start,
            top: moveY.start,
            width: widthHeight,
            height: widthHeight,
            backgroundSize: backgroundSize,
            zIndex: 6,
          },
          '25%': {
            left: moveX.right - 70,
            top: moveY.start + 15,
            width: widthHeight * .77,
            height: widthHeight * .77,
            backgroundSize: backgroundSize * .77,
            zIndex: 3,
          },
          '40%': {
            left: moveX.start + 25,
            top: moveY.start + 25,
            width: widthHeight * .5,
            height: widthHeight * .5,
            backgroundSize: backgroundSize * .5,
            zIndex: 5,
          },
          '60%': {
            left: moveX.left + 90,
            top: moveY.start + 15,
            width: widthHeight,
            height: widthHeight,
            backgroundSize: backgroundSize,
            zIndex: 8,
          },
          '70%': {
            left: moveX.left - 25,
            top: moveY.start - 25,
            width: widthHeight * 1.5,
            height: widthHeight * 1.5,
            backgroundSize: backgroundSize * 1.5,
            zIndex: 11,
          },
          '85%': {
            left: moveX.left + 125,
            top: moveY.start - 50,
            width: widthHeight * 1.77,
            height: widthHeight * 1.77,
            backgroundSize: backgroundSize * 1.77,
            zIndex: 11,
          },
          '100%': {
            left: moveX.start,
            top: moveY.start,
            width: widthHeight,
            height: widthHeight,
            backgroundSize: backgroundSize,
            zIndex: 6,
          },
          easeEach: 'none',
        },
        ...gsapProps
      });
      gsap.to('.c7', { // seagreen
        keyframes: {
          '0%': {
            left: moveX.start,
            top: moveY.start,
            width: widthHeight,
            height: widthHeight,
            backgroundSize: backgroundSize,
            zIndex: 6,
          },
          '25%': {
            left: moveX.left + 50,
            top: moveY.bottom + 350,
            width: widthHeight * .75,
            height: widthHeight * .75,
            backgroundSize: backgroundSize * .75,
            zIndex: 6,
          },
          '40%': {
            left: moveX.left + 150,
            top: moveY.bottom + 100,
            width: widthHeight * 1.25,
            height: widthHeight * 1.25,
            backgroundSize: backgroundSize * 1.25,
            zIndex: 11,
          },
          '62%': {
            left: moveX.start - 25,
            top: moveY.bottom + 100,
            width: widthHeight * 1.5,
            height: widthHeight * 1.5,
            backgroundSize: backgroundSize * 1.5,
            zIndex: 20,
          },
          '85%': {
            left: moveX.right,
            top: moveY.bottom + 150,
            width: widthHeight * 1.25,
            height: widthHeight * 1.25,
            backgroundSize: backgroundSize * 1.25,
            zIndex: 10,
          },
          '100%': {
            left: moveX.start,
            top: moveY.start,
            width: widthHeight,
            height: widthHeight,
            backgroundSize: backgroundSize,
            zIndex: 6,
          },
          easeEach: 'none',
        },
        ...gsapProps
      });
      gsap.to('.c8', { // turquoise 
        keyframes: {
          '0%': { 
            left: moveX.start,
            top: moveY.start,
            width: widthHeight,
            height: widthHeight,
            backgroundSize: backgroundSize * 2 / 3,
            zIndex: 9,
          },
          '25%': {
            left: moveX.left - 50,
            top: moveY.top - 200,
            width: widthHeight * .75,
            height: widthHeight * .75,
            backgroundSize: backgroundSize * .75 * 2 / 3,
            zIndex: 9,
          },
          '50%': {
            left: moveX.start - 50,
            top: moveY.top,
            width: widthHeight,
            height: widthHeight,
            backgroundSize: backgroundSize * 2 / 3,
            zIndex: 7,
          },
          '75%': {
            left: moveX.right + 50,
            top: moveY.top - 200,
            width: widthHeight * .75,
            height: widthHeight * .75,
            backgroundSize: backgroundSize * .75 * 2 / 3,
            zIndex: 10,
          },
          '100%': {
            left: moveX.start,
            top: moveY.start,
            width: widthHeight,
            height: widthHeight,
            backgroundSize: backgroundSize * 2 / 3,
            zIndex: 9,
          },
          easeEach: 'none',
        },
        ...gsapProps
      });
      gsap.to('.atl-wyb-cir', {
        keyframes: {
          '0%': { opacity: 1 },
          '10%': { opacity: 0 },
        },
        ...gsapProps
      });
      gsap.to('.atl-wyb, .atl_logo', {
        onStart:() => {
          document.querySelector('.square-move .atl_logo').style.left = screenWidth / 2 - 168;
        },
        keyframes: {
          '0': { opacity: 0 },
          '98%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        ...gsapProps
      });

      gsap.to('.c1', {
        top: 20,
        left: -600,
        width: 1200,
        height: 600,
        backgroundSize: 1200 * 1.39468,
        backgroundPositionX: '-113px',
        backgroundPositionY: '-147.079px',
        borderRadius: 25,
        delay: animationTime + delayTime * 2,
        duration: 2
      });

      gsap.to('.atl-wyb', {
        opacity: 0,
        delay: animationTime + delayTime * 2,
        duration: 2,
      });

      gsap.to('.atl_logo', {
        top: 13,
        left: 62,
        color: '#e12d2d',
        // opacity: 0,
        delay: animationTime + delayTime * 2,
        duration: 2,
        onComplete: () => {
          document.querySelectorAll('.scrolly-telling-container, .nav, .play, footer, .scroll-story').forEach((e) => {
            e.classList.remove('hidden');
          });
          document.querySelectorAll('.square-move .atl_logo, .circle:not(.c1, .play)').forEach((e) => {
            e.classList.add('hidden');
          });
          document.body.classList.add('ofauto');
        }
      });

      gsap.to('.arrow-down', {
        keyframes: {
          '33%': {
            y: -10,
            ease: ease,
          },
          '66%': {
            y: 0,
            ease: 'Bounce.easeOut',
          },
        },
        duration: 3,
        repeat: -1,
      })
    }, introSectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className='section flex' ref={introSectionRef}>
      <div style={{ height: '120vh' }}>
        <div style={{ height: '800px', position: 'sticky', top: '100px' }}>
          <div className='flex square-move o-hidden'>
            <div className='circle c1'></div>
            <div className='circle c2'></div>
            <div className='circle c3'></div>
            <div className='circle c4'></div>
            <div className='circle c5'></div>
            <div className='circle c6'></div>
            <div className='circle c7'></div>
            <div className='circle c8'></div>
            <img src={AtlWYBCirImg} alt='Atlanta - Where You Belong' className='atl-wyb-cir' />
            <img src={AtlWYBImg} alt='Atlanta - Where You Belong' className='atl-wyb' />
            <AtlImg />
            <div className='circle play flex align-center hidden' onClick={() => {
              const video = document.querySelector('video');
              video.classList.remove('hidden');
              document.querySelector('.c1').classList.add('hidden');
              video.play();
            }}>
              <span>Play Video</span>
              <div className='arrow-right' />
            </div>
            <video width='1200' height='600' controls className='hidden absolute' ref={videoRef}>
              <source src='https://atl-assets.s3.amazonaws.com/video/RoughCut04a_231108.mp4' type='video/mp4' />
            </video>
          </div>
          <div className='absolute scroll-story job hidden'>
            <div className='arrow-down' />
            <span>Scroll for the story</span>
            <div className='arrow-down' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default IntroAnimation;