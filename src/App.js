import React from 'react';
import { TwitterTweetEmbed, TwitterFollowButton } from 'react-twitter-embed';

import logo from './logo.svg';
import wittgensteinImg from './Wittgenstein.png';
import barpathaiLogo from './barpathai-logo.jpeg';



function App() {
  return (
    <div className="App">
      <style>{`
        /* -------------- GLOBAL STYLES -------------- */
        .App {
          text-align: center;
          margin: 0;
          padding: 0;
          font-family: 'Trebuchet MS', sans-serif;
        }

        /* -------------- HEADER STYLING (More Imaginative) -------------- */
        .App-header {
          /* A radial gradient for a more creative look */
          background: radial-gradient(circle at center, #6d83f2 0%, #282c34 100%);
          padding: 2rem;
          color: #fff;
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
          font-family: 'Comic Sans MS', cursive, sans-serif;
          font-size: 2.8rem;
          margin: 0.5rem 0;
          color: #ffea7c;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
        }

        .company-motto {
          font-size: 1.3rem;
          font-style: italic;
          margin: 0;
          color: #fff;
        }

        /* -------------- MAIN CONTENT -------------- */
        .main-content {
          margin: 2rem auto;
          max-width: 800px;
          text-align: left;
          padding: 0 1rem;
        }

        /* Wittgenstein Section */
        .quote-section {
          margin-bottom: 2rem;
          text-align: center;
        }

        /* Make Wittgenstein image bigger */
        .wittgenstein-image {
          max-width: 80%;
          height: auto;
          display: block;
          margin: 0 auto 1rem;
        }

        .quote-attribution {
          font-size: 1rem;
          font-style: italic;
          margin-top: 0.5rem;
          color: #555; /* Darker text for better visibility */
        }

        .company-blurb p {
          margin-bottom: 1rem;
          line-height: 1.5;
        }

        /* -------------- FOOTER + ICONS -------------- */
        .footer {
          margin-top: 3rem;
          background-color: #f2f2f2;
          padding: 1rem;
        }

        .projects-title {
          font-weight: bold;
          font-size: 1.2rem;
          margin-bottom: 1rem;
        }

        .footer-icons {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 2rem;
        }

        /* Make the row of three icons a lot bigger */
        .barpathai-logo {
          width: 120px;
          height: 120px;
          object-fit: cover;
        }

        .question-mark-icon {
          font-size: 5rem;
          cursor: default;
        }

        .below-icons-text {
          margin-top: 1rem;
          font-weight: bold;
        }

        .coming-soon-text {
          font-weight: bold;
          font-size: 1rem;
          margin-top: 1rem;
        }

        .single-tweet-embed {
          margin-top: 2rem;
          margin-bottom: 2rem;
        }

        .contact-info {
          margin: 2rem 0;
          font-size: 0.9rem;
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

        /* A small style for the follow button container */
        .twitter-follow-container {
          margin: 1rem auto;
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
        {/* Wittgenstein Quote Section (only the image + attribution) */}
        <section className="quote-section">
          <img
            src={wittgensteinImg}
            alt="Wittgenstein 4.014 Quote"
            className="wittgenstein-image"
          />
          <p className="quote-attribution">
            --Ludwig Wittgenstein, Tractatus Logico-Philosophicus 4.014
          </p>
        </section>

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
      </main>

      {/* -------------- FOOTER ICONS -------------- */}
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

          {/* Question mark icons for upcoming apps (golf, world generator) */}
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
    </div>
  );
}

export default App;