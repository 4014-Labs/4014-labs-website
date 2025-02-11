import React from 'react';
import { TwitterTweetEmbed, TwitterFollowButton } from 'react-twitter-embed';
import './App.styles.css';

import logo from './assets/logowhite.svg';
import wittgensteinImg from './Wittgenstein.png';
import barpathaiLogo from './barpathai-logo.jpeg';

function App() {
  return (
    <div className="App">
      {/* -------------- HERO SECTION WITH HEADER -------------- */}
      <section className="hero-section">
        <video
          className="hero-video-background"
          autoPlay
          muted
          loop
          playsInline
          src="/bench_press.mp4"
        >
          Your browser does not support the video tag.
        </video>
        <div className="hero-overlay"></div>
        
        <header className="App-header">
          <div className="header-content">
            <img src={logo} className="Placeholder-logo" alt="Company Logo Placeholder" />
            <h1 className="company-title">4014 Labs</h1>
            <h2 className="company-motto">Build the next generation of video apps with our powerful developer framework</h2>
          </div>
        </header>

        <a href="#main-content" className="scroll-arrow">
          <div className="arrow-circle">
            <span className="arrow-down"></span>
          </div>
        </a>
      </section>

      {/* -------------- MAIN CONTENT -------------- */}
      <main className="main-content" id="main-content">
        <section className="main-section">
          <h1 className="main-heading">Build the Next TikTok in 2 Weeks</h1>
          <h2 className="main-subheading">
            From surgical robots to autonomous drones to Hollywood-grade movies, deploy video intelligence at scale. 
            We handle the infrastructure so you can focus on building.
          </h2>

          <div className="content-body">
            <p>
              The AI revolution has innovated video models in the lab, but developers still struggle to deploy them in production. 
              Why? Video isn't just bigger than text or images—it's 1,000x more data to move, store, and process. 
              Even transferring mere 10-second clips across the internet at scale demands massive storage, bandwidth, and engineering power. 
              Most startups sidestep this by running outdated AI on local devices, but that locks them out of the latest breakthroughs.
            </p>

            <h3 className="highlight-text">Enter 4014 Labs: The All-in-One Platform for Video AI.</h3>

            <p>
              Forget stitching together cloud storage, CDNs, and fragmented APIs. We handle the heavy lifting—model inference, 
              petabyte-scale storage, and buffer-free streaming—so you can simply build.
            </p>

            <ul className="features-list">
              <li>Run cutting-edge models (think SAM 2, Nvidia Cosmos) in the cloud, no compromises.</li>
              <li>Store, process, and stream video seamlessly in one place.</li>
              <li>Slash development time—no more juggling servers or wrestling with 20MB file hops.</li>
            </ul>

            <p>
              Build your dream app, project, or company in weeks, not years. The AI video era is here. 
              Stop wrestling with infrastructure and start building today.
            </p>
            <p className="social-cta">
              Follow <a href="https://twitter.com/4014labs" target="_blank" rel="noopener noreferrer">@4014labs</a> on X 
              for updates, early access, and bonuses—including free credits for early adopters.
            </p>
          </div>
        </section>
      </main>

      {/* -------------- WITTGENSTEIN SECTION -------------- */}
      <section className="wittgenstein-section">
        <div className="wittgenstein-content">
          <h2>Why 4014 Labs?</h2>
          <div className="quote-content">
            <p className="quote">
              In <i>Tractatus Logico-Philosophicus</i>, Wittgenstein's Proposition 4.014 states:
            </p>
            <blockquote>
              "The gramophone record, the musical thought, the score, the waves of sound, all stand to one another in that pictorial internal relation, 
              which holds between language and the world. To all of them the logical structure is common. (Like the two youths, their two horses and 
              their lilies in the story. They are all in a certain sense one.)"
            </blockquote>
            <p className="explanation">
              Inspired by this insight, we at 4014 Labs are unifying the fragmented world of video AI—storage, processing, streaming, and intelligence—into 
              one seamless system. Just as Wittgenstein revealed a single underlying pattern connecting seemingly disparate elements, our platform brings 
              every aspect of video AI together under one cohesive framework.
            </p>
          </div>
        </div>
      </section>

      {/* -------------- FOOTER -------------- */}
      <footer className="site-footer">
        <div className="footer-content">
          <p className="copyright"> {new Date().getFullYear()} by 4014 Labs · All rights reserved.</p>
          <p className="contact">
            Questions or feedback? Email us at{' '}
            <span className="email">blake [at] 4014labs.com</span> and{' '}
            <span className="email">paul [at] 4014labs.com</span>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;