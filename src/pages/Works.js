import React, { useEffect, useMemo, useRef, useState } from 'react';
import '../styles/Works.css';
import '../styles/About.css';
import Navbar from '../components/Navbar/Navbar';
import bgImage from '../media/photo/bg_image.jpeg';
const defaultPoster = '/uploads/thumb.jpg';

const Works = () => {
  const [loader, setLoader] = useState(true)
  const videoRefs = useRef([]);
  const overlayRef = useRef(null);
  const overlayVideoRef = useRef(null);

  const worksData = useMemo(() => {
    const reels = [
      { title: 'Dabur Reel 1', brand: 'Dabur', director: 'Social Reel', video: '/uploads/Dabur/reel4-1.mp4', thumbnail: defaultPoster, type: 'reel' },
      { title: 'Dabur Reel 2', brand: 'Dabur', director: 'Social Reel', video: '/uploads/Dabur/reel4-2.mp4', thumbnail: defaultPoster, type: 'reel' },
      { title: 'Dabur Reel 3', brand: 'Dabur', director: 'Social Reel', video: '/uploads/Dabur/reel4-3.mp4', thumbnail: defaultPoster, type: 'reel' },
      { title: 'Dabur Reel 4', brand: 'Dabur', director: 'Social Reel', video: '/uploads/Dabur/reel4-4.mp4', thumbnail: defaultPoster, type: 'reel' },
      { title: 'Dabur Reel 5', brand: 'Dabur', director: 'Social Reel', video: '/uploads/Dabur/reel4-5.mp4', thumbnail: defaultPoster, type: 'reel' },

      { title: 'Danube Reel 1', brand: 'Danube', director: 'Brand Reel', video: '/uploads/Danube/reel2-1.mp4', thumbnail: defaultPoster, type: 'reel' },
      { title: 'Danube Reel 2', brand: 'Danube', director: 'Brand Reel', video: '/uploads/Danube/reel2-2.mp4', thumbnail: defaultPoster, type: 'reel' },
      { title: 'Danube Reel 3', brand: 'Danube', director: 'Brand Reel', video: '/uploads/Danube/reel2-3.mp4', thumbnail: defaultPoster, type: 'reel' },
      { title: 'Danube Reel 4', brand: 'Danube', director: 'Brand Reel', video: '/uploads/Danube/reel2-4.mp4', thumbnail: defaultPoster, type: 'reel' },
      { title: 'Danube Reel 5', brand: 'Danube', director: 'Brand Reel', video: '/uploads/Danube/reel2-5.mp4', thumbnail: defaultPoster, type: 'reel' },
      { title: 'Danube Reel 6', brand: 'Danube', director: 'Brand Reel', video: '/uploads/Danube/reel2-6.mp4', thumbnail: defaultPoster, type: 'reel' },
      { title: 'Danube Reel 7', brand: 'Danube', director: 'Brand Reel', video: '/uploads/Danube/reel2-7.mp4', thumbnail: defaultPoster, type: 'reel' },
      { title: 'Danube Reel 8', brand: 'Danube', director: 'Brand Reel', video: '/uploads/Danube/reel2-8.mp4', thumbnail: defaultPoster, type: 'reel' },
      { title: 'Danube Reel 9', brand: 'Danube', director: 'Brand Reel', video: '/uploads/Danube/reel2-9.mp4', thumbnail: defaultPoster, type: 'reel' },
      { title: 'Danube Reel 10', brand: 'Danube', director: 'Brand Reel', video: '/uploads/Danube/reel2-10.mp4', thumbnail: defaultPoster, type: 'reel' },
      { title: 'Danube Reel 11', brand: 'Danube', director: 'Brand Reel', video: '/uploads/Danube/reel2-11.mp4', thumbnail: defaultPoster, type: 'reel' },
      { title: 'Danube Reel 12', brand: 'Danube', director: 'Brand Reel', video: '/uploads/Danube/reel2-12.mp4', thumbnail: defaultPoster, type: 'reel' },
      { title: 'Danube Reel 13', brand: 'Danube', director: 'Brand Reel', video: '/uploads/Danube/reel2-13.mp4', thumbnail: defaultPoster, type: 'reel' },
      { title: 'Danube Reel 14', brand: 'Danube', director: 'Brand Reel', video: '/uploads/Danube/reel2-14.mp4', thumbnail: defaultPoster, type: 'reel' },
      { title: 'Danube Reel 15', brand: 'Danube', director: 'Brand Reel', video: '/uploads/Danube/reel2-15.mp4', thumbnail: defaultPoster, type: 'reel' },

      { title: 'Happy Planet Reel 1', brand: 'Happy Planet', director: 'Product Reel', video: '/uploads/Happy%20planet/reel3-1.mp4', thumbnail: defaultPoster, type: 'reel' },
      { title: 'Happy Planet Reel 2', brand: 'Happy Planet', director: 'Product Reel', video: '/uploads/Happy%20planet/reel3-2.mp4', thumbnail: defaultPoster, type: 'reel' },
      { title: 'Happy Planet Reel 3', brand: 'Happy Planet', director: 'Product Reel', video: '/uploads/Happy%20planet/reel3-3.mp4', thumbnail: defaultPoster, type: 'reel' },
      { title: 'Happy Planet Reel 4', brand: 'Happy Planet', director: 'Product Reel', video: '/uploads/Happy%20planet/reel3-4.mp4', thumbnail: defaultPoster, type: 'reel' },
      { title: 'Happy Planet Reel 5', brand: 'Happy Planet', director: 'Product Reel', video: '/uploads/Happy%20planet/reel3-5.mp4', thumbnail: defaultPoster, type: 'reel' },
      { title: 'Happy Planet Reel 6', brand: 'Happy Planet', director: 'Product Reel', video: '/uploads/Happy%20planet/reel3-6.mp4', thumbnail: defaultPoster, type: 'reel' },
      { title: 'Happy Planet Reel 7', brand: 'Happy Planet', director: 'Product Reel', video: '/uploads/Happy%20planet/reel3-7.mp4', thumbnail: defaultPoster, type: 'reel' },
      { title: 'Happy Planet Reel 8', brand: 'Happy Planet', director: 'Product Reel', video: '/uploads/Happy%20planet/reel3-8.mp4', thumbnail: defaultPoster, type: 'reel' },
      { title: 'Happy Planet Reel 9', brand: 'Happy Planet', director: 'Product Reel', video: '/uploads/Happy%20planet/reel3-9.mp4', thumbnail: defaultPoster, type: 'reel' },
      { title: 'Happy Planet Reel 10', brand: 'Happy Planet', director: 'Product Reel', video: '/uploads/Happy%20planet/reel3-10.mp4', thumbnail: defaultPoster, type: 'reel' },
      { title: 'Happy Planet Reel 11', brand: 'Happy Planet', director: 'Product Reel', video: '/uploads/Happy%20planet/reel3-11.mp4', thumbnail: defaultPoster, type: 'reel' },
      { title: 'Happy Planet Reel 12', brand: 'Happy Planet', director: 'Product Reel', video: '/uploads/Happy%20planet/reel3-12.mp4', thumbnail: defaultPoster, type: 'reel' },
      { title: 'Happy Planet Reel 13', brand: 'Happy Planet', director: 'Product Reel', video: '/uploads/Happy%20planet/reel3-13.mp4', thumbnail: defaultPoster, type: 'reel' },
      { title: 'Happy Planet Reel 14', brand: 'Happy Planet', director: 'Product Reel', video: '/uploads/Happy%20planet/reel3-14.mp4', thumbnail: defaultPoster, type: 'reel' },

      { title: 'Yesmadam Reel 1', brand: 'Yesmadam', director: 'Creative Reel', video: '/uploads/Yesmadam/reel_1.mp4', thumbnail: defaultPoster, type: 'reel' },
      { title: 'Yesmadam Reel 2', brand: 'Yesmadam', director: 'Creative Reel', video: '/uploads/Yesmadam/reel_2.mp4', thumbnail: defaultPoster, type: 'reel' },
      { title: 'Yesmadam Reel 3', brand: 'Yesmadam', director: 'Creative Reel', video: '/uploads/Yesmadam/reel_3.mp4', thumbnail: defaultPoster, type: 'reel' },
      { title: 'Yesmadam Reel 4', brand: 'Yesmadam', director: 'Creative Reel', video: '/uploads/Yesmadam/reel_4.mp4', thumbnail: defaultPoster, type: 'reel' },
      { title: 'Yesmadam Reel 5', brand: 'Yesmadam', director: 'Creative Reel', video: '/uploads/Yesmadam/reel_5.mp4', thumbnail: defaultPoster, type: 'reel' },
      { title: 'Yesmadam Reel 6', brand: 'Yesmadam', director: 'Creative Reel', video: '/uploads/Yesmadam/reel_6.mp4', thumbnail: defaultPoster, type: 'reel' },
      { title: 'Yesmadam Reel 7', brand: 'Yesmadam', director: 'Creative Reel', video: '/uploads/Yesmadam/reel_7.mp4', thumbnail: defaultPoster, type: 'reel' },
      { title: 'Yesmadam Reel 8', brand: 'Yesmadam', director: 'Creative Reel', video: '/uploads/Yesmadam/reel_8.mp4', thumbnail: defaultPoster, type: 'reel' },
      { title: 'Yesmadam Reel 9', brand: 'Yesmadam', director: 'Creative Reel', video: '/uploads/Yesmadam/reel_9.mp4', thumbnail: defaultPoster, type: 'reel' },
      { title: 'Yesmadam Reel 10', brand: 'Yesmadam', director: 'Creative Reel', video: '/uploads/Yesmadam/reel_10.mp4', thumbnail: defaultPoster, type: 'reel' },
      { title: 'Yesmadam Reel 11', brand: 'Yesmadam', director: 'Creative Reel', video: '/uploads/Yesmadam/reel_11.mp4', thumbnail: defaultPoster, type: 'reel' },
      { title: 'Yesmadam Reel 12', brand: 'Yesmadam', director: 'Creative Reel', video: '/uploads/Yesmadam/reel_12.mp4', thumbnail: defaultPoster, type: 'reel' },
      { title: 'Yesmadam Reel 13', brand: 'Yesmadam', director: 'Creative Reel', video: '/uploads/Yesmadam/reel_13.mp4', thumbnail: defaultPoster, type: 'reel' },
      { title: 'Yesmadam Reel 14', brand: 'Yesmadam', director: 'Creative Reel', video: '/uploads/Yesmadam/reel_14.mp4', thumbnail: defaultPoster, type: 'reel' }
    ];

    const youtube = [
      { title: 'YouTube Video 1', brand: 'YouTube', director: 'Landscape Video', video: '/uploads/youtube%20vedio/v-1.mp4', thumbnail: defaultPoster, type: 'youtube' },
      { title: 'YouTube Video 2', brand: 'YouTube', director: 'Landscape Video', video: '/uploads/youtube%20vedio/v-2.mp4', thumbnail: defaultPoster, type: 'youtube' },
      { title: 'YouTube Video 3', brand: 'YouTube', director: 'Landscape Video', video: '/uploads/youtube%20vedio/v-3.mp4', thumbnail: defaultPoster, type: 'youtube' },
      { title: 'YouTube Video 4', brand: 'YouTube', director: 'Landscape Video', video: '/uploads/youtube%20vedio/v-4.mp4', thumbnail: defaultPoster, type: 'youtube' },
      { title: 'YouTube Video 5', brand: 'YouTube', director: 'Landscape Video', video: '/uploads/youtube%20vedio/v-5.mp4', thumbnail: defaultPoster, type: 'youtube' },
      { title: 'YouTube Video 6', brand: 'YouTube', director: 'Landscape Video', video: '/uploads/youtube%20vedio/v-6.mp4', thumbnail: defaultPoster, type: 'youtube' },
      { title: 'YouTube Video 7', brand: 'YouTube', director: 'Landscape Video', video: '/uploads/youtube%20vedio/v-7.mp4', thumbnail: defaultPoster, type: 'youtube' },
      { title: 'YouTube Video 8', brand: 'YouTube', director: 'Landscape Video', video: '/uploads/youtube%20vedio/v-8.mp4', thumbnail: defaultPoster, type: 'youtube' }
    ];

    const combined = [];
    for (let i = 0; i < reels.length; i += 6) {
      combined.push(...reels.slice(i, i + 6));
      const insertYoutube = youtube[Math.floor(i / 6)];
      if (insertYoutube) combined.push(insertYoutube);
    }

    combined.push(...youtube.slice(Math.ceil(reels.length / 6)));

    return combined;
  }, []);

  useEffect(() => {
    document.documentElement.classList.remove('stopScroll', 'overflow', 'fadeOut');
    document.body.style.overflow = '';
  }, []);

  const closeOverlay = () => {
    const overlay = overlayRef.current;
    const overlayVideo = overlayVideoRef.current;
    if (!overlay || !overlayVideo) return;

    overlay.classList.remove('open');
    overlayVideo.pause();
    overlayVideo.removeAttribute('src');
    overlayVideo.load();
  };

  const openOverlay = (src) => {
    const overlay = overlayRef.current;
    const overlayVideo = overlayVideoRef.current;
    if (!overlay || !overlayVideo || !src) return;

    overlayVideo.src = src;
    overlay.classList.add('open');
    overlayVideo.play().catch(() => { });
  };

  const handleMouseEnter = (index) => {
    const wrapper = videoRefs.current[index];
    const video = wrapper?.querySelector?.('video');
    const src = worksData[index]?.video;
    if (!wrapper || !video || !src) return;

    if (!video.getAttribute('src')) {
      video.setAttribute('src', src);
      video.load();
    }
    wrapper.classList.add('is-playing');
    video.play().catch(() => { });
  };

  const handleMouseLeave = (index) => {
    const wrapper = videoRefs.current[index];
    const video = wrapper?.querySelector?.('video');
    if (!wrapper || !video) return;

    wrapper.classList.remove('is-playing');
    video.pause();
    if (video.getAttribute('src')) {
      video.removeAttribute('src');
      video.load();
    }
  };

  useEffect(() => {
    const overlay = overlayRef.current;

    const handleOverlayClick = (e) => {
      if (e.target === overlay) closeOverlay();
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeOverlay();
    };

    overlay?.addEventListener('click', handleOverlayClick);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      overlay?.removeEventListener('click', handleOverlayClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const BoltLogo = () => (
    <svg className="video__logo" viewBox="0 0 131.4 101" xmlns="http://www.w3.org/2000/svg">
      <path className="st0" d="M94.4,26.6c-2-2-4.7-3.2-7.6-3.2h-42.1c-3,0-5.7,1.2-7.6,3.2-2,2-3.2,4.7-3.2,7.6v32.5c0,3,1.2,5.7,3.2,7.6,2,2,4.7,3.2,7.6,3.2h42.1c3,0,5.7-1.2,7.6-3.2,2-2,3.2-4.7,3.2-7.6v-32.5c0-3-1.2-5.7-3.2-7.6ZM74.9,32.1h2c.8,0,1.5.7,1.5,1.5s-.7,1.5-1.5,1.5h-2c-.8,0-1.5-.7-1.5-1.5s.7-1.5,1.5-1.5ZM44.4,32.1h2c.8,0,1.5.7,1.5,1.5s-.7,1.5-1.5,1.5h-2c-.8,0-1.5-.7-1.5-1.5s.7-1.5,1.5-1.5ZM46.5,68.8h-2c-.8,0-1.5-.7-1.5-1.5s.7-1.5,1.5-1.5h2c.8,0,1.5.7,1.5,1.5s-.7,1.5-1.5,1.5ZM54.6,32.1h2c.8,0,1.5.7,1.5,1.5s-.7,1.5-1.5,1.5h-2c-.8,0-1.5-.7-1.5-1.5s.7-1.5,1.5-1.5ZM56.6,68.8h-2c-.8,0-1.5-.7-1.5-1.5s.7-1.5,1.5-1.5h2c.8,0,1.5.7,1.5,1.5s-.7,1.5-1.5,1.5ZM65.7,62.8c-.4,0-1.7-5.9-2.2-6.9-2-3.7-6.7-4-10.2-5.2,3.4-1.2,7.5-1.4,9.7-4.6,1.7-2.4,1.4-5.3,2.7-7.8,1.2,3.2,1.3,7.4,4.4,9.6,2.3,1.7,4.6,1.6,7.1,2.3.4.1.8.1.9.7-2.8.9-6.3,1.1-8.5,3.2-2.4,2.2-2.6,5.9-3.8,8.8h-.1ZM76.9,68.8h-2c-.8,0-1.5-.7-1.5-1.5s.7-1.5,1.5-1.5h2c.8,0,1.5.7,1.5,1.5s-.7,1.5-1.5,1.5ZM85,32.1h2c.8,0,1.5.7,1.5,1.5s-.7,1.5-1.5,1.5h-2c-.8,0-1.5-.7-1.5-1.5s.7-1.5,1.5-1.5ZM87,68.8h-2c-.8,0-1.5-.7-1.5-1.5s.7-1.5,1.5-1.5h2c.8,0,1.5.7,1.5,1.5s-.7,1.5-1.5,1.5Z"></path>
    </svg>
  );

  useEffect(() => {
    setTimeout(() => {
      setLoader(false)
    }, 0)
  }, [])

  if (loader) {
    return (
      <div className="loader-container">
        <div className="loader">Loading</div>
      </div>
    )
  }

  return (
    <>
      <Navbar />

      <main className="page-wrap withSiteNav" style={{ background: "#0a0a0a" }}>
        <section className="category__container">
          <section className="aboutHeaderBlock" data-scroll-inview="" data-show-mouse="" data-mouse-color="white">
            <div className="videoWrapper sparkMask">
              <div className="innerImage">
                <picture>
                  <source className="lazy lazySrcSet"
                    src={bgImage}
                    sizes="(max-width: 580px) 400px, 800px" />
                  <img className="lazy"
                    src={bgImage}
                    width="800" height="496" alt="" />
                </picture>
              </div>
            </div>
            <div className="innerWrapper">
              <div className="aboutTitleWrapper left" data-scroll="">
                <h2 className="aboutTitleLeft bigTitle replaceFont" style={{ color: "#E8601A" }} data-anim-blur="" data-letters="" data-words="">
                  <span><strong>OUR</strong></span>
                </h2>
                <div className="aboutLine"></div>
                <div className="aboutPictureLeft" data-scroll=""></div>
              </div>
              <div className="aboutTitleWrapper right" data-scroll="">
                <div className="aboutLine"></div>
                <h2 className="aboutTitleRight bigTitle replaceFont workTitle" data-anim-blur="" data-letters="" data-words="">
                  <span>Works</span>
                </h2>
                <div className="aboutPictureRight" data-scroll=""></div>
              </div>
            </div>
          </section>

          <section className="category__gallery" style={{ margin: 0 }}>
            {worksData.map((work, index) => (
              <div
                key={index}
                ref={el => videoRefs.current[index] = el}
                className={`grid__item__wrapper ${work.type === 'youtube' ? 'youtube' : 'reel'}`}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
                onDoubleClick={(e) => {
                  e.preventDefault();
                  openOverlay(work.video);
                }}
              >
                <div className="grid__item__video__wrapper">
                  <video
                    className="grid__item__video"
                    muted
                    loop
                    playsInline
                    preload="none"
                  ></video>
                  <img
                    className="grid__item__video__poster"
                    src={work.thumbnail}
                    alt={work.title}
                  />
                  <div className={`grid__item__text__wrapper ${work.type === 'youtube' ? 'full' : 'double'}`}>
                    <div className="grid__item__text__title__wrapper">
                      <h3>{work.title}</h3>
                      <p>{work.brand}</p>
                    </div>
                    <div className="grid__item__text__category__wrapper">
                      <BoltLogo />
                      <p className="grid__item__text__category__text">{work.director}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </section>

          <div className="category__top">
            <div
              className="top__wrapper"
              role="button"
              onClick={scrollToTop}
              aria-label="Go to top"
            >
              <p className="top__text">Go to top</p>
            </div>
          </div>
        </section>
      </main>

      <div id="video-overlay" ref={overlayRef}>
        <button className="close-btn" type="button" aria-label="Close" onClick={closeOverlay}>&times;</button>
        <video id="overlay-video" ref={overlayVideoRef} controls playsInline></video>
      </div>
    </>
  );
};

export default Works;
