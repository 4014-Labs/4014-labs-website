import React from 'react';
import logo from './assets/logowhite.svg';
import './App.styles.css';

const capabilities = [
  {
    title: 'Upload a photo or video',
    body: 'Start with a clip or image from your camera roll, desktop, or phone and tell Idea what effect you want.',
  },
  {
    title: 'Analyze visual media',
    body: 'Ask Idea what is in a clip, identify objects, inspect frames, or decide which effect fits the shot.',
  },
  {
    title: 'Track objects',
    body: 'Attach masks, highlights, glows, or selective treatments to subjects and objects as they move through video.',
  },
  {
    title: 'Apply shader effects',
    body: 'Use real shader effects like bloom, glow, color separation, film grain, blur, trails, and light leaks.',
  },
  {
    title: 'Color grade the shot',
    body: 'Ask for warmer skin tones, punchier contrast, night-club lighting, softer highlights, or a cleaner cinematic grade.',
  },
  {
    title: 'Save and share',
    body: 'Preview the finished effect, download it, or save edited videos to Photos on iPhone.',
  },
];

const examples = [
  {
    label: 'Track the subject',
    prompt: 'Track the person and add a soft glow that follows them.',
  },
  {
    label: 'Color grade',
    prompt: 'Make this video feel warmer, sharper, and more cinematic.',
  },
  {
    label: 'Add bloom',
    prompt: 'Add subtle bloom to the bright areas without washing out the faces.',
  },
  {
    label: 'Motion effect',
    prompt: 'Add a light trail to the moving object and keep the background clean.',
  },
];

const steps = ['Upload', 'Ask', 'Edit', 'Preview', 'Save'];

const useCases = [
  'Add TikTok- and Instagram-ready effects without opening a timeline editor.',
  'Track a person, product, hand, ball, car, or object and apply effects around it.',
  'Color grade clips for warmer skin, punchier contrast, cleaner shadows, or cinematic light.',
  'Add subtle effects like bloom, glow, film grain, blur, halation, trails, and chromatic separation.',
];

const bobbieFeatures = [
  'Build custom shader-based video-editing flows on the same runtime behind Idea.',
  'Run local CLI jobs for media experiments, harnesses, and tool chains.',
  'Use public release binaries for macOS Apple Silicon and Linux x86_64.',
];

function AppVisual() {
  return (
    <div className="product-visual" aria-label="Idea app preview">
      <div className="browser-frame">
        <div className="browser-toolbar">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="app-preview">
          <aside className="media-rail">
            <div className="asset-tile asset-video">
              <video autoPlay muted loop playsInline src="/bench_press.mp4" />
              <span>source clip</span>
            </div>
            <div className="asset-tile asset-image">
              <div className="image-swatch"></div>
              <span>tracked glow</span>
            </div>
            <div className="asset-tile asset-output">
              <div className="output-lines">
                <i></i>
                <i></i>
                <i></i>
              </div>
              <span>finished video</span>
            </div>
          </aside>

          <section className="chat-panel">
            <div className="chat-message user-message">
              Track the person and add subtle bloom around the highlights.
            </div>
            <div className="chat-message assistant-message">
              I found the subject, applied the shader effect, and kept the background natural.
            </div>
            <div className="tool-result">
              <div>
                <strong>Effect ready</strong>
                <span>preview or save</span>
              </div>
              <button>Preview</button>
            </div>
          </section>
        </div>
      </div>

      <div className="phone-preview" aria-hidden="true">
        <div className="phone-notch"></div>
        <video autoPlay muted loop playsInline src="/bench_press.mp4" />
        <div className="phone-action">Save to Photos</div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="4014 Labs home">
          <img src={logo} alt="" />
          <span>4014 Labs</span>
        </a>
        <nav className="site-nav" aria-label="Main navigation">
          <a href="#capabilities">What it does</a>
          <a href="#how-it-works">How it works</a>
          <a href="#examples">Examples</a>
          <a href="#bobbie">Bobbie</a>
        </nav>
        <a className="nav-cta" href="https://67idea.com" target="_blank" rel="noopener noreferrer">
          Sign up
        </a>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-copy">
            <p className="eyebrow">Shader effects for photos and videos</p>
            <h1>Idea makes your videos look better.</h1>
            <p className="hero-subtitle">
              Upload a clip or image, ask for object tracking, color grading, bloom, glow, motion trails, or subtle
              effects. Idea runs the tedious edit in the background and gives you a result you can preview, save,
              and share.
            </p>
            <div className="hero-actions">
              <a className="primary-button" href="https://67idea.com" target="_blank" rel="noopener noreferrer">
                Sign up
              </a>
              <a className="secondary-button" href="#examples">
                See examples
              </a>
            </div>
          </div>
          <AppVisual />
        </section>

        <section className="ethos-section">
          <div className="section-copy centered">
            <p className="eyebrow">No AI slop</p>
            <h2>Effects should not erase the creator.</h2>
            <p>
              Idea does not invent a fake video for you. It helps process the media you already made. The finished
              result should feel like your clip with better motion, color, light, and polish, not like something
              obviously distorted by generative AI.
            </p>
          </div>
        </section>

        <section className="problem-section section-band">
          <div className="section-copy">
            <p className="eyebrow">Simple by design</p>
            <h2>Drop in a clip. Let Idea handle the edit.</h2>
          </div>
          <div className="problem-copy">
            <p>
              The effects people want for social videos can take hours in Adobe or DaVinci: tracking subjects,
              tuning glow, smoothing motion, grading color, and keeping every frame consistent.
            </p>
            <p>
              Idea works like an agent in the background. Tell it the result you want, step away from the manual
              editing work, and come back to a finished version.
            </p>
          </div>
        </section>

        <section className="overview-section">
          <div className="section-copy centered">
            <p className="eyebrow">Product</p>
            <h2>Idea is a consumer app for video effects.</h2>
            <p>
              Use it to analyze a shot, track what matters, apply high-quality effects, and make clips look more
              polished without spending your night inside a pro editing stack.
            </p>
          </div>
        </section>

        <section className="capabilities-section" id="capabilities">
          <div className="section-copy">
            <p className="eyebrow">What you can do</p>
            <h2>Ask for the effects you actually want.</h2>
          </div>
          <div className="feature-grid">
            {capabilities.map((feature) => (
              <article className="feature-card" key={feature.title}>
                <h3>{feature.title}</h3>
                <p>{feature.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="steps-section section-band" id="how-it-works">
          <div className="section-copy centered">
            <p className="eyebrow">How it works</p>
            <h2>From raw clip to finished effect.</h2>
          </div>
          <div className="steps-list">
            {steps.map((step, index) => (
              <div className="step-card" key={step}>
                <span>{index + 1}</span>
                <strong>{step}</strong>
                <p>
                  {[
                    'Add an image or video from your device.',
                    'Tell Idea what to track, grade, enhance, or analyze.',
                    'Idea applies shader-based edits in the background.',
                    'View the processed result directly in the chat.',
                    'Download it, share it, or save it to Photos.',
                  ][index]}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="examples-section" id="examples">
          <div className="section-copy">
            <p className="eyebrow">Examples</p>
            <h2>Effects you can ask for.</h2>
          </div>
          <div className="example-grid">
            {examples.map((example) => (
              <article className="example-card" key={example.label}>
                <span>{example.label}</span>
                <p>{example.prompt}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="use-cases-section section-band">
          <div className="section-copy">
            <p className="eyebrow">Everyday uses</p>
            <h2>Built for social video effects.</h2>
          </div>
          <div className="use-case-list">
            {useCases.map((useCase) => (
              <p key={useCase}>{useCase}</p>
            ))}
          </div>
        </section>

        <section className="simplicity-section">
          <div className="section-copy centered">
            <p className="eyebrow">Made to feel easy</p>
            <h2>Idea does the heavy lifting.</h2>
            <p>
              Behind the scenes, 4014 Labs handles uploads, media analysis, shader execution, playback, and
              finished files so Idea feels hands-off instead of like another editing app to babysit.
            </p>
          </div>
        </section>

        <section className="bobbie-section section-band" id="bobbie">
          <div className="section-copy">
            <p className="eyebrow">For developers</p>
            <h2>Bobbie is the CLI underneath.</h2>
            <p>
              Idea runs on Bobbie behind the scenes. Developers can use Bobbie separately to build their own
              video-editing workflows.
            </p>
          </div>
          <div className="bobbie-panel">
            <div className="terminal-card" aria-label="Bobbie CLI example">
              <div className="terminal-bar">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <pre>
                <code>{`$ bobbie --help
Shader video tools for custom editing flows

$ bobbie run tracked-bloom ./clip.mp4
rendering shader effect...`}</code>
              </pre>
            </div>
            <div className="bobbie-copy">
              {bobbieFeatures.map((feature) => (
                <p key={feature}>{feature}</p>
              ))}
              <a
                className="secondary-button"
                href="https://github.com/4014-Labs/bobbie-releases"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Bobbie releases
              </a>
            </div>
          </div>
        </section>

        <section className="brand-section">
          <div className="section-copy centered">
            <p className="eyebrow">Why 4014?</p>
            <h2>Different forms, one creative system.</h2>
            <p>
              The name comes from Wittgenstein's Proposition 4.014, a passage about different forms sharing the
              same underlying structure. We see media the same way: prompts, frames, edits, and outputs are
              different views of the same idea.
            </p>
          </div>
        </section>

        <section className="final-cta">
          <h2>Try Idea today.</h2>
          <p>Upload a photo or video and ask Idea for the effect you want.</p>
          <div className="hero-actions">
            <a className="primary-button" href="https://67idea.com" target="_blank" rel="noopener noreferrer">
              Sign up
            </a>
            <a className="secondary-button light" href="#top">
              Back to top
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-content">
          <p className="copyright">{new Date().getFullYear()} 4014 Labs. All rights reserved.</p>
          <p className="contact">
            Questions or feedback? Email <span className="email">blake [at] 4014labs.com</span> and{' '}
            <span className="email">paul [at] 4014labs.com</span>.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
