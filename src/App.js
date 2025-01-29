import React from 'react';
import { TwitterTweetEmbed, TwitterFollowButton } from 'react-twitter-embed';

import logo from './assets/Group16.svg';
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

        /* -------------- OUR PRODUCT SECTION -------------- */
        .our-product {
          margin: 2rem 0;
          text-align: center;
        }
        .our-product h2 {
          margin-bottom: 1rem;
          font-size: 1.6rem;
          color: #0c3b8c;
        }
        .our-product p {
          margin-bottom: 1rem;
          color: #444;
        }

        /* -------------- RESEARCH POLICY SECTION -------------- */
        .research-policy {
          margin: 2rem 0;
          text-align: center;
        }
        .research-policy h2 {
          margin-bottom: 1rem;
          font-size: 1.6rem;
          color: #0c3b8c;
        }
        .research-policy p {
          margin-bottom: 1rem;
          color: #444;
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
            Over the past year, the world of machine learning has seen a video revolution. 
            There are incredible models that work in the lab, but have not made their way to production.
            We have not seen any “wrapper” startups build on top of these video models. Why is this? 
            Why haven’t we seen SAM 2 wrappers? Why haven’t we seen Nvidia Cosmos wrappers?
          </p>
          <p>
            Video is difficult to work with. A short, 10 second video file is 20 mb. An image is 200 kb. 
            Text is less than a kb. To deploy an ML video model in the datacenter, you need a thousand times the storage, 
            a thousand times the bandwidth, and a thousand times the engineering behind the scenes.
          </p>
          <p>
            Most developers avoid this problem by running ML models locally, on an edge device. This is a cop out. 
            Modern vision and video generation models are simply too large to run on an edge device. 
            By limiting themselves to "edge devices", most computer vision startups miss out on every single ML 
            breakthrough that has occurred in the past two years.
          </p>
          <p>
            4014 labs wants to tackle these engineering problems head-on. We will then provide a developer framework to let users integrate video into their apps.
          </p>
          <p>
            Our goal is to provide developers with a single platform to handle ML model inference, 
            large-scale video storage, and seamless video streaming. No more cobbling 
            together on-sight storage, CloudFront, and five ML inference APIs. No more bouncing 20 mb video files between four different servers. Just a 
            straightforward developer framework for everything video.
          </p>
          <p>
            You should be able to build Tik Tok in two weeks...
          </p>
        </section>

        {/* -------------- OUR PRODUCT SECTION -------------- */}
        <section className="our-product">
          <h2>Our Product</h2>
          <p>
            We want you to add computer vision, AI video generation, AI video editing, 
            video storage, and video streaming to your own app.
          </p>

          <p>
            API coming soon.
          </p>
        </section>

        {/* -------------- RESEARCH POLICY SECTION -------------- */}
        <section className="research-policy">
          <h2>Research policy</h2>
          <p>
            We plan to dedicate 20% of our compute to research, open sourcing all of the results.
          </p>
        </section>

      </main>

      {/* -------------- FOOTER / APP DEMO -------------- */}
      <footer className="footer">
        <h3 className="projects-title">App Demo</h3>

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
        </div>

        <p className="below-icons-text">
          This is a demo app made with our current infrastructure.
        </p>

         {/* -------------- BAR PATH AI SECTION -------------- */}
         <section className="bar-path-ai">
          <h2>Bar Path AI</h2>
          <p>
            This demo is a "wrapper" for Meta's SAM 2 model, a state of the art video segmentation model. We believe that SAM 2 can be used in dozens of creative ways, not just for powerlifting.
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
              style={{ flex: '1 1 45%', maxWidth: '45%' }}
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


        {/* -------------- CONTACT INFO -------------- */}
        <div className="contact-info">
          <p>Contact Information:</p>
          <ul>
            <li>
              {/* <div className="twitter-follow-container">
                <TwitterFollowButton screenName="wordgrammer" />
              </div> */}
            </li>
            <li>
              Email: <span className="placeholder-email">blake@4014labs.com</span>
            </li>
            <li>
              Email: <span className="placeholder-email">paul@4014labs.com</span>
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