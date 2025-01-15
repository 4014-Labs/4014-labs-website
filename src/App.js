import React from 'react';
import { TwitterTweetEmbed, TwitterFollowButton } from 'react-twitter-embed';

import logo from './logo.svg';
import wittgensteinImg from './Wittgenstein.png';
import barpathaiLogo from './barpathai-logo.jpeg';
import benchPressVideo from './bench_press.mp4';  // Import video
import squatVideo from './squat.mp4';            // Import video

function App() {
  return (
    <div className="App">
      <style>{`
        /* RESET & BASE STYLES */
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html, body {
          background-color: #fafafa;
          color: #333;
          font-family: 'Helvetica Neue', Arial, sans-serif;
          line-height: 1.6;
        }

        .App {
          text-align: center;
          margin: 0;
          padding: 0;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        /* -------------- HEADER -------------- */
        .App-header {
          background-color: #fff; /* simpler background */
          border-bottom: 1px solid #ddd; /* subtle bottom border */
          padding: 2rem;
          color: #333;
        }

        .Placeholder-logo {
          height: 80px;
          margin-bottom: 1rem;
          animation: floatLogo 4s ease-in-out infinite alternate;
        }

        @keyframes floatLogo {
          from {
            transform: translateY(0px);
          }
          to {
            transform: translateY(-15px);
          }
        }

        .company-title {
          font-size: 2.4rem;
          margin: 0.5rem 0;
          color: #0c3b8c;
          text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
        }

        .company-motto {
          font-size: 1.1rem;
          font-style: italic;
          margin: 0;
          color: #777; 
        }

        /* -------------- MAIN CONTENT -------------- */
        .main-content {
          margin: 2rem auto;
          max-width: 800px;
          text-align: left;
          padding: 0 1rem;
          flex: 1; /* let main content grow */
        }

        /* Wittgenstein Quote Section (originally in main) */
        .quote-section {
          margin-bottom: 2rem;
          text-align: center;
        }
        .wittgenstein-image {
          max-width: 80%;
          height: auto;
          display: block;
          margin: 0 auto 1rem;
          border: 1px solid #ddd;
          border-radius: 4px;
        }
        .quote-attribution {
          font-size: 0.9rem;
          font-style: italic;
          margin-top: 0.5rem;
          color: #555;
        }

        .company-blurb p {
          margin-bottom: 1rem;
          color: #444;
        }

        /* -------------- BAR PATH AI SECTION -------------- */
        .bar-path-ai {
          margin: 2rem 0;
          text-align: center;
        }
        .bar-path-ai h2 {
          margin-bottom: 1rem;
          font-size: 1.6rem;
          color: #0c3b8c;
        }
        .bar-path-ai p {
          margin-bottom: 1rem;
          color: #444;
        }
        .bar-path-ai a {
          color: #0c3b8c;
          text-decoration: underline;
        }

        /* -------------- FOOTER + ICONS -------------- */
        .footer {
          margin-top: 3rem;
          background-color: #fff;
          border-top: 1px solid #ddd;
          padding: 1rem;
        }

        .projects-title {
          font-weight: bold;
          font-size: 1.2rem;
          margin-bottom: 1rem;
          color: #444;
        }

        .footer-icons {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 2rem;
        }

        .barpathai-logo {
          width: 120px;
          height: 120px;
          object-fit: cover;
        }

        .question-mark-icon {
          font-size: 5rem;
          cursor: default;
          color: #888;
        }

        .below-icons-text {
          margin-top: 1rem;
          font-weight: bold;
          color: #444;
        }

        .coming-soon-text {
          font-weight: bold;
          font-size: 1rem;
          margin-top: 1rem;
          color: #000;
        }

        .single-tweet-embed {
          margin-top: 2rem;
          margin-bottom: 2rem;
        }

        .contact-info {
          margin: 2rem 0;
          font-size: 0.9rem;
          color: #444;
        }
        .contact-info p {
          font-weight: bold;
        }
        .contact-info ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .placeholder-email,
        .placeholder-phone {
          font-style: italic;
        }

        .twitter-follow-container {
          margin: 1rem auto;
        }

        /* -------------- BOTTOM WITTGENSTEIN SECTION -------------- */
        /* This replicates the top header's style but sits at the bottom */
        .bottom-wittgenstein {
          background-color: #fff;
          border-top: 1px solid #ddd;
          padding: 2rem;
          color: #333;
          text-align: center; /* center content */
        }
        .bottom-wittgenstein-img {
          max-width: 80%;
          margin: 0 auto 1rem;
          border: 1px solid #ddd;
          border-radius: 4px;
          display: block;
        }
        .bottom-wittgenstein-quote {
          font-size: 0.9rem;
          font-style: italic;
          color: #555;
        }
      `}</style>

      {/* -------------- HEADER -------------- */}
      <header className="App-header">
        <img src={logo} className="Placeholder-logo" alt="Company Logo Placeholder" />
        <h1 className="company-title">4014 Labs</h1>
        <h2 className="company-motto">Bringing computer vision to the everyday consumer.</h2>
      </header>

      {/* -------------- MAIN CONTENT -------------- */}
      <main className="main-content">

        {/* Blurb describing the goal of the company */}
        <section className="company-blurb">
          <p>
            We want to bring computer vision to the everyday consumer. Computer vision works
            in the lab, but doesn't have many apps. A lot of focus for consumer vision
            technology has been on expensive, industrial-grade uses: self-driving cars,
            factory automation. We want to bring these expensive models to your phone.
          </p>
          <p>
            What if you could access the power of computer vision from your phone? What if
            we took the technology used for self-driving cars and used it to improve your
            golf swing? What if we took the technology used to automate factories and used
            it to turn iPhone videos into blockbuster movies with special effects?
            This is a surprisingly difficult technical challenge.
          </p>
          <p>
            We also want to offer our services with an API, so that you can add computer
            vision to your own apps. Currently, if you want to work with computer vision,
            you need to run it locally on your own computer. We want to change that.
          </p>
        </section>

      {/* -------------- BAR PATH AI SECTION (UPDATED) -------------- */}
      <section className="bar-path-ai">
        <h2>Bar Path AI</h2>
        <p>
          Our current project is to make the world's most accurate powerlifting form tracker app.
          We have a demo below.
        </p>
        <div
  style={{
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    flexWrap: 'wrap',
    justifyContent: 'center',
  }}
>
  <video
    src={benchPressVideo}
    autoPlay
    muted
    loop
    playsInline
    style={{ flex: '1 1 45%', maxWidth: '45%' }}  // Removed marginBottom
  >
    Your browser does not support the video tag.
  </video>
  <video
    src={squatVideo}
    autoPlay
    muted
    loop
    playsInline
    style={{ flex: '1 1 45%', maxWidth: '45%' }}
  >
    Your browser does not support the video tag.
  </video>
</div>
      </section>
      </main>

      {/* -------------- FOOTER ICONS (PROJECTS) -------------- */}
      <footer className="footer">
        <h3 className="projects-title">Our current projects:</h3>

        <div className="footer-icons">
          {/* BarPathAI clickable link */}
          <a href="https://barpathai.com" target="_blank" rel="noopener noreferrer">
            <img
              src={barpathaiLogo}
              alt="BarPathAI Logo"
              className="barpathai-logo"
              title="BarPathAI"
            />
          </a>

          {/* Question mark icons for upcoming apps */}
          <div className="question-mark-icon" title="Golf App (Coming Soon)">❓</div>
          <div className="question-mark-icon" title="World Generator App (Coming Soon)">❓</div>
        </div>

        <p className="below-icons-text">
          Bar Path AI -- shot path swing tracker -- Content Creation engine
        </p>

        <p className="coming-soon-text">
          We are working on an API so that you can add computer vision streaming to your own app.
        </p>

        {/* -------------- CONTACT INFO -------------- */}
        <div className="contact-info">
          <p>Contact Information:</p>
          <ul>
            <li>
              <div className="twitter-follow-container">
                <TwitterFollowButton screenName="wordgrammer" />
              </div>
            </li>
            <li>
              Email: <span className="placeholder-email">[email protected]</span>
            </li>
            <li>
              Phone: <span className="placeholder-phone">870-204-4976</span>
            </li>
          </ul>
        </div>
      </footer>

      {/* -------------- WITTGENSTEIN AT VERY BOTTOM -------------- */}
      <div className="bottom-wittgenstein">
        <img
          src={wittgensteinImg}
          alt="Wittgenstein 4.014 Quote"
          className="bottom-wittgenstein-img"
        />
        <p className="bottom-wittgenstein-quote">
          --Ludwig Wittgenstein, Tractatus Logico-Philosophicus 4.014
        </p>
      </div>
    </div>
  );
}

export default App;