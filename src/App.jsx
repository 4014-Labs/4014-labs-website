import React from 'react';
import logo from './assets/logowhite.svg';
import './App.styles.css';

const capabilities = [
  {
    title: 'Understand the shot',
    body: 'Upload a clip or image and ask Idea what is happening, what objects matter, or which effect fits the scene.',
  },
  {
    title: 'Track what matters',
    body: 'Attach masks, highlights, glows, or selective treatments to a person, product, hand, car, ball, or moving object.',
  },
  {
    title: 'Apply the effect',
    body: 'Ask for bloom, glow, color separation, film grain, blur, trails, light leaks, halation, or a cleaner grade.',
  },
  {
    title: 'Get the finished version',
    body: 'Idea runs the edit in the background, then gives you a video you can preview, download, or save to Photos.',
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
      <div className="iphone-frame">
        <div className="iphone-status">
          <span>9:41</span>
          <div className="iphone-notch"></div>
          <span>5G 92%</span>
        </div>

        <div className="mobile-app-preview">
          <div className="mobile-app-header">
            <strong>Idea</strong>
            <span>editing in background</span>
          </div>

          <div className="mobile-video-card source-video-card">
            <video autoPlay muted loop playsInline src="/bench_press.mp4" />
            <div className="video-badge">source clip</div>
          </div>

          <section className="chat-panel">
            <div className="chat-message user-message">
              Track the barbell path.
            </div>
            <div className="chat-message assistant-message">
              I found the subject, applied the shader effect, and kept the background natural.
            </div>
          </section>

          <div className="mobile-video-card finished-video-card">
            <video autoPlay muted loop playsInline src="/bench_press.mp4" />
            <div className="video-action-row">
              <div className="video-badge">finished video</div>
              <button className="save-iphone-button" type="button">Save to iPhone</button>
            </div>
          </div>
          <div className="mobile-chat-input" aria-label="Message input">
            <span>Ask for another edit...</span>
            <button type="button">Send</button>
          </div>
        </div>

        <div className="home-indicator"></div>
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
          <a href="#examples">Examples</a>
          <a href="#bobbie">Bobbie</a>
        </nav>
        <a className="nav-cta" href="https://testflight.apple.com/join/e24NPqDc" target="_blank" rel="noopener noreferrer">
          Try on TestFlight
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
              <a className="primary-button" href="https://testflight.apple.com/join/e24NPqDc" target="_blank" rel="noopener noreferrer">
                Try on TestFlight
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
              Idea does not generate a fake video for you. It makes <strong>you</strong> look better in your actual
              videos. Apply effects to your videos to make you look as good as Instagram models and movie scenes.
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

        <section className="capabilities-section" id="capabilities">
          <div className="section-copy">
            <p className="eyebrow">What Idea does</p>
            <h2>Understand the shot, apply the effect, return the edit.</h2>
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

        <section className="final-cta">
          <h2>Try Idea today.</h2>
          <p>Upload a photo or video and ask Idea for the effect you want.</p>
          <div className="hero-actions">
            <a className="primary-button" href="https://testflight.apple.com/join/e24NPqDc" target="_blank" rel="noopener noreferrer">
              Try on TestFlight
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
            Questions or feedback? Email <span className="email">support@4014labs.com</span>.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
