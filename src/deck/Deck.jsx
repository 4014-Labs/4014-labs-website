import React, { useEffect, useRef, useState } from 'react';
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

function ImageComparison({ original, originalAlt, edits }) {
  const [frontEdit, setFrontEdit] = useState(0);
  const cardStep = `${43.8 / Math.max(edits.length - 1, 1)}%`;

  return (
    <div className="comparison" aria-label="Original image and edited versions">
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
          Agents combine computer vision with generated GPU programs to precisely transform original media—without
          arbitrary code execution or generative AI.
        </p>
      </Slide>

      <Slide id="fitness" number={3} eyebrow="Fitness" className="media-slide">
        <h2>Precise tracking, frame by frame.</h2>
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
        <h2>Vibe-code the edit. Preserve the original.</h2>
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
        <h2>Describe the effect. Apply it precisely.</h2>
        <ImageComparison
          original="/deck/blake_image/original.jpeg"
          originalAlt="Original portrait"
          edits={blakeImageEdits}
        />
      </Slide>

      <Slide id="image-editing-2" number={6} eyebrow="Image editing" className="comparison-slide media-slide">
        <h2>Describe the effect. Apply it precisely.</h2>
        <ImageComparison
          original="/deck/paul_image/original.jpeg"
          originalAlt="Original outdoor photograph"
          edits={paulImageEdits}
        />
      </Slide>

      <Slide id="idea" number={7} eyebrow="Idea">
        <div className="two-column">
          <div>
            <h2>Try Idea.</h2>
            <p className="statement">Our consumer agent app powered by the 4014 Labs sandbox.</p>
          </div>
          <MediaPlaceholder className="qr-placeholder">TestFlight QR code</MediaPlaceholder>
        </div>
      </Slide>

      <Slide id="tutorial" number={8} eyebrow="How it works" className="closing-slide">
        <h2>Choose. Describe. Create.</h2>
        <div className="tutorial-grid">
          {['Choose an image or video', 'Describe what you want', 'Preview, refine, and export'].map((step, index) => (
            <article key={step}>
              <MediaPlaceholder>App screenshot</MediaPlaceholder>
              <p><span>{index + 1}.</span> {step}</p>
            </article>
          ))}
        </div>
        <p className="closing-line">The next billion AI-edited images and videos won’t look AI-generated.</p>
      </Slide>
    </main>
  );
}
