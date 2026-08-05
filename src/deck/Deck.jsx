import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import logo from '../assets/logowhite.svg';

const slides = [
  'cover',
  'breakthrough',
  'fitness',
  'video-editing',
  'image-editing',
  'image-editing-2',
  'idea',
  'tutorial',
];

const blakeImageEdits = [
  { id: 'halftone-rgb', label: 'Halftone RGB split', src: '/deck/blake_image/halftone_rgb_split.jpeg' },
  { id: 'chromatic-aberration', label: 'Chromatic aberration', src: '/deck/blake_image/chromatic_aberration.jpeg' },
  { id: 'fine-grain', label: 'Fine grain poster', src: '/deck/blake_image/finegrain.jpeg' },
  { id: 'shirt-replace', label: 'Textured region replacement', src: '/deck/blake_image/shirt_replace.jpeg' },
  { id: 'halftone-dots', label: 'Halftone dots', src: '/deck/blake_image/halftonedots.jpeg' },
];

const paulImageEdits = [
  { id: 'color-grade', label: 'Color grade', src: '/deck/paul_image/color_grade.jpeg' },
  { id: 'color-grade-bloom', label: 'Color grade and bloom', src: '/deck/paul_image/color_grade_and_bloom.jpeg' },
  { id: 'targeted-hue-swap', label: 'Targeted hue swap', src: '/deck/paul_image/targeted_hue_swap.jpeg' },
  { id: 'zoom-distortion', label: 'Zoom distortion', src: '/deck/paul_image/zoom_distortion.jpeg' },
  {
    id: 'background-iridescence',
    label: 'Targeted background iridescence',
    src: '/deck/paul_image/targeted_background_iridescence.jpeg',
  },
];

function MediaPlaceholder({ children, className = '' }) {
  return <div className={`media-placeholder ${className}`}>{children}</div>;
}

function FinalWalkthrough() {
  const [activeScreen, setActiveScreen] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isManual, setIsManual] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const phoneRef = useRef(null);
  const touchStartX = useRef(null);
  const screens = [
    { src: '/deck/howto/howto1.jpeg', caption: 'Upload media. Describe the effect.' },
    { src: '/deck/howto/howto2.jpeg', caption: 'Review the agent’s response.' },
    { src: '/deck/howto/howto3.jpeg', caption: 'View media in fullscreen.' },
    { src: '/deck/howto/howto4.jpeg', caption: 'Long-press a message or result to reply.' },
    { src: '/deck/howto/howto5.jpeg', caption: 'Refine the effect.' },
    { src: '/deck/howto/howto6.jpeg', caption: 'Apply the same effect to new media.' },
  ];
  const screenCount = screens.length;

  useEffect(() => {
    const slide = phoneRef.current?.closest('.deck-slide');
    if (!slide) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.intersectionRatio >= 0.6),
      { threshold: 0.6 },
    );

    observer.observe(slide);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!isVisible || isPaused || isManual || isGalleryOpen || reducedMotion || activeScreen >= screenCount - 1) return undefined;

    const timer = window.setTimeout(() => setActiveScreen((current) => current + 1), 3000);
    return () => window.clearTimeout(timer);
  }, [activeScreen, isGalleryOpen, isManual, isPaused, isVisible, screenCount]);

  useEffect(() => {
    if (!isGalleryOpen) return undefined;

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setIsGalleryOpen(false);
    };

    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [isGalleryOpen]);

  const advanceScreen = () => {
    setIsManual(true);
    setActiveScreen((current) => (current + 1) % screenCount);
  };

  const chooseScreen = (index) => {
    setIsManual(true);
    setActiveScreen(index);
  };

  const chooseStep = (index) => {
    chooseScreen(index);
    if (window.matchMedia('(max-aspect-ratio: 4 / 5)').matches) setIsGalleryOpen(true);
  };

  const moveGallery = (direction) => {
    setActiveScreen((current) => (current + direction + screenCount) % screenCount);
  };

  const handleTouchEnd = (event) => {
    if (touchStartX.current === null) return;
    const distance = event.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(distance) > 45) moveGallery(distance < 0 ? 1 : -1);
  };

  return (
    <div
      className="walkthrough-shell"
      aria-label="Interactive Idea app walkthrough"
      onBlur={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      ref={phoneRef}
    >
      <nav className="walkthrough-steps" aria-label="Choose an app screen">
        {screens.map((screen, index) => (
          <button
            className={activeScreen === index ? 'is-active' : ''}
            key={screen.src}
            onClick={() => chooseStep(index)}
            type="button"
          >
            <span>{index + 1}</span>
            {screen.caption}
          </button>
        ))}
      </nav>
      <button
        className="walkthrough-phone"
        onClick={advanceScreen}
        type="button"
        aria-label={`App screen ${activeScreen + 1} of ${screenCount}. Show next screen.`}
      >
        <span className="walkthrough-speaker" aria-hidden="true" />
        <img src={screens[activeScreen].src} alt={screens[activeScreen].caption} draggable="false" />
      </button>
      <p className="walkthrough-thesis">
        The future of the internet won’t be a billion new AI-coded apps and websites. It will be a trillion
        AI-coded videos and images.
      </p>
      {isGalleryOpen && createPortal(
        <div
          className="mobile-gallery"
          onTouchStart={(event) => { touchStartX.current = event.touches[0].clientX; }}
          onTouchEnd={handleTouchEnd}
          role="dialog"
          aria-modal="true"
          aria-label="Idea app walkthrough gallery"
        >
          <button className="mobile-gallery-close" onClick={() => setIsGalleryOpen(false)} type="button" aria-label="Close gallery">×</button>
          <button className="mobile-gallery-zone is-previous" onClick={() => moveGallery(-1)} type="button" aria-label="Previous screenshot" />
          <img src={screens[activeScreen].src} alt={screens[activeScreen].caption} draggable="false" />
          <button className="mobile-gallery-zone is-next" onClick={() => moveGallery(1)} type="button" aria-label="Next screenshot" />
          <div className="mobile-gallery-caption">
            <span>{activeScreen + 1} / {screenCount}</span>
            <p>{screens[activeScreen].caption}</p>
          </div>
        </div>,
        document.body,
      )}
    </div>
  );
}

function ImageComparison({ original, originalAlt, edits }) {
  const [frontEdit, setFrontEdit] = useState(0);
  const [showMobileOriginal, setShowMobileOriginal] = useState(false);
  const [isMobileFullscreen, setIsMobileFullscreen] = useState(false);
  const holdTimerRef = useRef(null);
  const pointerStartRef = useRef(null);
  const swipeStartXRef = useRef(null);
  const suppressClickRef = useRef(false);
  const cardStep = `${43.8 / Math.max(edits.length - 1, 1)}%`;

  const moveEdit = (direction) => {
    setShowMobileOriginal(false);
    setFrontEdit((current) => (current + direction + edits.length) % edits.length);
  };

  const startCompare = (event) => {
    suppressClickRef.current = false;
    pointerStartRef.current = { x: event.clientX, y: event.clientY };
    holdTimerRef.current = window.setTimeout(() => {
      suppressClickRef.current = true;
      setShowMobileOriginal(true);
    }, 180);
  };

  const moveCompare = (event) => {
    if (!pointerStartRef.current) return;
    const moved = Math.hypot(event.clientX - pointerStartRef.current.x, event.clientY - pointerStartRef.current.y);
    if (moved > 8) window.clearTimeout(holdTimerRef.current);
  };

  const endCompare = () => {
    window.clearTimeout(holdTimerRef.current);
    pointerStartRef.current = null;
    setShowMobileOriginal(false);
  };

  const handleSwipeEnd = (event) => {
    if (swipeStartXRef.current === null) return;
    const distance = event.changedTouches[0].clientX - swipeStartXRef.current;
    swipeStartXRef.current = null;
    if (Math.abs(distance) > 45) {
      suppressClickRef.current = true;
      moveEdit(distance < 0 ? 1 : -1);
    }
  };

  const openFullscreen = () => {
    if (suppressClickRef.current) {
      suppressClickRef.current = false;
      return;
    }
    setIsMobileFullscreen(true);
  };

  return (
    <>
    <div className="comparison desktop-comparison" aria-label="Original image and edited versions">
      <div className="comparison-panel original-panel">
        <span className="media-label">Original</span>
        <div className="comparison-image-frame">
          <img className="comparison-image" src={original} alt={originalAlt} draggable="false" />
        </div>
      </div>

      <div className="comparison-panel edits-panel">
        <div className="comparison-heading">
          <span className="media-label">Edited versions</span>
          <span className="comparison-count">Hover a card</span>
        </div>

        <div className="edit-stack">
          {edits.map((edit, index) => (
            <button
              className={`edit-card ${frontEdit === index ? 'is-front' : ''}`}
              key={edit.id}
              onClick={() => setFrontEdit(index)}
              onFocus={() => setFrontEdit(index)}
              onMouseEnter={() => setFrontEdit(index)}
              style={{ '--card-index': index, '--card-count': edits.length, '--card-step': cardStep }}
              type="button"
            >
              <img className="comparison-image" src={edit.src} alt={edit.label} draggable="false" />
              <span>{edit.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
    <div className="mobile-comparison" aria-label="Swipe through edited versions and hold to compare with the original">
      <button
        className="mobile-comparison-main"
        onClick={openFullscreen}
        onPointerDown={startCompare}
        onPointerMove={moveCompare}
        onPointerUp={endCompare}
        onPointerCancel={endCompare}
        onPointerLeave={endCompare}
        onTouchStart={(event) => { swipeStartXRef.current = event.touches[0].clientX; }}
        onTouchEnd={handleSwipeEnd}
        type="button"
      >
        <img src={showMobileOriginal ? original : edits[frontEdit].src} alt={showMobileOriginal ? originalAlt : edits[frontEdit].label} draggable="false" />
        <span>{showMobileOriginal ? 'Original' : edits[frontEdit].label}</span>
      </button>
      <button className="mobile-original-thumb" onClick={() => setShowMobileOriginal((current) => !current)} type="button">
        <img src={original} alt={originalAlt} draggable="false" />
        <span>Original</span>
      </button>
      <div className="mobile-edit-dots" aria-label="Choose an edited version">
        {edits.map((edit, index) => (
          <button className={frontEdit === index ? 'is-active' : ''} key={edit.id} onClick={() => { setFrontEdit(index); setShowMobileOriginal(false); }} type="button" aria-label={edit.label} />
        ))}
      </div>
    </div>
    {isMobileFullscreen && createPortal(
      <div className="image-mobile-gallery" role="dialog" aria-modal="true" aria-label="Image comparison gallery">
        <button className="image-mobile-gallery-close" onClick={() => setIsMobileFullscreen(false)} type="button" aria-label="Close gallery">×</button>
        <button
          className="image-mobile-gallery-media"
          onPointerDown={startCompare}
          onPointerMove={moveCompare}
          onPointerUp={endCompare}
          onPointerCancel={endCompare}
          onTouchStart={(event) => { swipeStartXRef.current = event.touches[0].clientX; }}
          onTouchEnd={handleSwipeEnd}
          type="button"
        >
          <img src={showMobileOriginal ? original : edits[frontEdit].src} alt={showMobileOriginal ? originalAlt : edits[frontEdit].label} draggable="false" />
        </button>
        <p>{showMobileOriginal ? 'Original' : edits[frontEdit].label}</p>
      </div>,
      document.body,
    )}
    </>
  );
}

function Slide({ id, number, eyebrow, children, className = '' }) {
  return (
    <section className={`deck-slide ${className}`} id={id} data-slide-index={number - 1}>
      <div className="slide-canvas">
        <div className="slide-meta">
          <span>{eyebrow}</span>
          <span>{String(number).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}</span>
        </div>
        <div className="slide-content">{children}</div>
      </div>
    </section>
  );
}

export default function Deck() {
  const deckRef = useRef(null);

  useEffect(() => {
    const target = window.location.hash && document.querySelector(window.location.hash);
    if (!target) return undefined;

    const frame = window.requestAnimationFrame(() => target.scrollIntoView());
    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!['ArrowDown', 'ArrowUp', 'PageDown', 'PageUp'].includes(event.key)) return;

      const deck = deckRef.current;
      if (!deck) return;

      event.preventDefault();
      const current = Math.round(deck.scrollTop / deck.clientHeight);
      const direction = event.key === 'ArrowDown' || event.key === 'PageDown' ? 1 : -1;
      const next = Math.max(0, Math.min(slides.length - 1, current + direction));
      deck.children[next]?.scrollIntoView({ behavior: 'smooth' });
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <main className="deck" ref={deckRef}>
      <Slide id="cover" number={1} eyebrow="" className="cover-slide">
        <img className="cover-logo" src={logo} alt="4014 Labs" />
        <h1>4014 Labs</h1>
        <p className="cover-subtitle">Code sandbox for fitness, video editing, and image editing.</p>
      </Slide>

      <Slide id="breakthrough" number={2} eyebrow="The breakthrough">
        <h2>We discovered a new way to sandbox AI agents.</h2>
        <p className="statement">
          Instead of sandboxing an entire computer, we sandbox programmable visual capabilities.
        </p>
        <p>
          LLM agent writes code and calls GPU-accelerated computer-vision tools to precisely transform media in our
          sandbox, without arbitrary code execution or generative video/image models.
        </p>
        <div className="breakthrough-claims" aria-label="Key advantages">
          <div>
            <strong>Up to 10,000× cheaper than generative AI video</strong>
          </div>
          <div>
            <strong>Indistinguishable from human video editing</strong>
          </div>
        </div>
      </Slide>

      <Slide id="fitness" number={3} eyebrow="Fitness" className="media-slide">
        <h2>Pixel-perfect computer vision tracking without arbitrary code execution</h2>
        <video
          className="deck-video wide-media"
          autoPlay
          controls
          controlsList="nodownload noplaybackrate"
          disablePictureInPicture
          loop
          muted
          onContextMenu={(event) => event.preventDefault()}
          playsInline
          preload="metadata"
          src="/deck/fitness.mp4"
        >
          Your browser does not support embedded video.
        </video>
      </Slide>

      <Slide id="video-editing" number={4} eyebrow="Video editing" className="media-slide">
        <h2>Vibe-code any effect. Iterate non-destructively.</h2>
        <video
          className="deck-video wide-media"
          autoPlay
          controls
          controlsList="nodownload noplaybackrate"
          disablePictureInPicture
          loop
          muted
          onContextMenu={(event) => event.preventDefault()}
          playsInline
          preload="metadata"
          src="/deck/videoediting.mp4"
        >
          Your browser does not support embedded video.
        </video>
      </Slide>

      <Slide id="image-editing" number={5} eyebrow="Image editing" className="comparison-slide media-slide">
        <h2>Agent-written effects that no preset filter can offer.</h2>
        <ImageComparison
          original="/deck/blake_image/original.jpeg"
          originalAlt="Original portrait"
          edits={blakeImageEdits}
        />
      </Slide>

      <Slide id="image-editing-2" number={6} eyebrow="Image editing" className="comparison-slide media-slide">
        <h2>AI editing that even people who hate AI slop would use.</h2>
        <ImageComparison
          original="/deck/paul_image/original.jpeg"
          originalAlt="Original outdoor photograph"
          edits={paulImageEdits}
        />
      </Slide>

      <Slide id="idea" number={7} eyebrow="Consumer agent app">
        <div className="two-column">
          <div>
            <h2>Try Idea.</h2>
            <p className="statement">Our consumer agent app powered by the 4014 Labs sandbox.</p>
          </div>
          <div className="idea-download">
            <a href="https://testflight.apple.com/join/e24NPqDc" target="_blank" rel="noopener noreferrer">
              <img className="idea-app-icon" src="/app-icon-light.png" alt="Download Idea through TestFlight" />
            </a>
            <a
              className="testflight-url"
              href="https://testflight.apple.com/join/e24NPqDc"
              target="_blank"
              rel="noopener noreferrer"
            >
              testflight.apple.com/join/e24NPqDc
            </a>
          </div>
        </div>
      </Slide>

      <Slide id="tutorial" number={8} eyebrow="How to use" className="closing-slide">
        <FinalWalkthrough />
      </Slide>
    </main>
  );
}
