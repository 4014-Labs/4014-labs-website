import React from 'react';
import logo from './assets/logowhite.svg';
import './Minimal.css';

export default function Landing() {
  return <div className="idea-site">
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="nav-wrap">
      <h1 className="wordmark"><img src={logo} alt=""/><span>4014 Labs</span></h1>
    </header>
    <main id="main" className="wrap philosophy">
      <p>We are a company with the following values:</p>

      <section>
        <h3>1. The anti-AI backlash is a problem that free market capitalism will solve.</h3>
        <p>Consumers have a number of philosophical concerns surrounding AI. On top of that: you need to build a good product. “Building a good product” requires both: a good user experience, and creating actually useful outputs.</p>
        <p>This is a difficult problem. However: it is a solvable problem. It requires mastery of media, philosophy, and technology. But it is solvable. And the payoff for solving it will be immense.</p>
      </section>

      <section>
        <h3>2. Technological moats are possible. You just suck.</h3>
        <p>If you say “no company has moats” you are probably just uncreative.</p>
      </section>

      <section>
        <h3>We have the following products:</h3>
        <p><a href="https://dev.67idea.com/">The “idiotproof” code sandbox →</a></p>
      </section>
    </main>
  </div>;
}
